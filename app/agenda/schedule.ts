export type Professional = { id: string; name: string; area?: string; photo?: string };
export type Schedule = {
  weekStart: string;
  status: 'reference' | 'confirmed';
  appointments: Record<string, (string | { professionalId: string; note?: string })[]>;
};

// Semana enviada pelo usuário para visualização em 24/09/2026.
// O futuro /admin poderá fornecer este mesmo formato, sem alterar o componente.
export const weeklySchedule: Schedule = {
  weekStart: '2026-09-20',
  status: 'confirmed',
  appointments: {
    '2026-09-20': ['joceane-ramos'],
    '2026-09-21': ['ariane-matos', 'ilka-gominho', 'giselle-skarlet'],
    '2026-09-23': ['alexandre-torres', 'giselle-skarlet', 'silvania-melo', 'ludmila-magalhaes'],
    '2026-09-24': ['alexandre-torres', 'ariane-matos', 'giselle-skarlet', 'maria-paula', 'itala-freire', 'ademy-landim', 'reynaldo-martinez'],
    '2026-09-25': ['flora-carolina', 'edilma-carvalho', 'silvania-melo', 'giselle-skarlet', 'maria-paula', 'ludmila-magalhaes', 'luiz-claudio'],
    '2026-09-26': ['carolline-carvalho', 'ludmila-magalhaes', 'silvania-melo', 'giselle-skarlet', { professionalId: 'louise-torres', note: 'E.D.A' }, 'samuel-caetano', 'eloisa-mello'],
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
      people: [...new Set(schedule.appointments[iso] ?? [])].flatMap(entry => {
        const id = typeof entry === 'string' ? entry : entry.professionalId;
        const note = typeof entry === 'string' ? undefined : entry.note;
        const person = catalog.get(id);
        return person ? [{ ...person, note }] : [];
      }),
    };
  });
}
