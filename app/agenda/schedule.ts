export type Professional = { id: string; name: string; area?: string; photo?: string };
export type Schedule = {
  weekStart: string;
  status: 'reference' | 'confirmed';
  appointments: Record<string, string[]>;
};

// Transcrição da primeira arte enviada; não representa disponibilidade atual.
// O futuro /admin poderá fornecer este mesmo formato, sem alterar o componente.
export const weeklySchedule: Schedule = {
  weekStart: '2026-09-20',
  status: 'reference',
  appointments: {
    '2026-09-20': ['joceane-ramos'],
    '2026-09-21': ['ariane-matos', 'ilka-gominho', 'giselle-skarlet'],
    '2026-09-22': ['louise-torres', 'giselle-skarlet', 'itala-freire', 'ermita-galdina', 'maria-paula', 'layane-barros', 'karina-hirose'],
  },
};

export function getWeekDays(schedule: Schedule, professionals: Professional[]) {
  const start = new Date(`${schedule.weekStart}T12:00:00Z`);
  if (Number.isNaN(start.getTime()) || start.toISOString().slice(0, 10) !== schedule.weekStart) return [];
  const catalog = new Map(professionals.map(person => [person.id, person]));
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    const iso = date.toISOString().slice(0, 10);
    return {
      iso,
      weekday: date.toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'UTC' }),
      label: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: 'UTC' }),
      people: [...new Set(schedule.appointments[iso] ?? [])].flatMap(id => {
        const person = catalog.get(id);
        return person ? [person] : [];
      }),
    };
  });
}
