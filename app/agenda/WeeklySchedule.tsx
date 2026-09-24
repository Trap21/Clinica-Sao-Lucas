import { getWeekDays, weeklySchedule, type Professional, type Schedule } from './schedule';
import './weekly.css';

export function WeeklySchedule({ professionals, schedule = weeklySchedule }: { professionals: Professional[]; schedule?: Schedule }) {
  const days = getWeekDays(schedule, professionals);
  return <section className="services section weekly-section" id="atendimentos" aria-labelledby="weekly-title">
    <div className="section-label"><span>02 / ATENDIMENTOS</span><span>CUIDADO EM DIFERENTES DIMENSÕES</span></div>
    <div className="section-heading"><h2 id="weekly-title">Sua saúde.<br/><em>Nosso ponto de encontro.</em></h2><p>Encontre os profissionais de cada dia. Converse com a equipe para confirmar a disponibilidade e agendar seu atendimento.</p></div>
    <div className="weekly-caption"><div><span className="eyebrow">AGENDA SEMANAL</span>{days.length > 0 && <h3>{days[0].label} <span>—</span> {days[6].label}<small>{schedule.weekStart.slice(0, 4)}</small></h3>}</div><p>{schedule.status === 'reference' ? 'Semana de referência · a confirmar' : 'Programação da semana'}</p></div>
    <div className="weekly-days">{days.map(day => <article className={'weekly-day' + (!day.people.length ? ' weekly-empty' : '')} key={day.iso} aria-labelledby={'day-' + day.iso}>
      <div className="weekly-date"><h3 id={'day-' + day.iso}>{day.weekday}</h3><time dateTime={day.iso}>{day.label}</time><span className="weekly-dash" aria-hidden="true"/></div>
      {day.people.length > 0 ? <ul className="weekly-people">{day.people.map(person => <li key={person.id}><figure className="weekly-person"><div className="weekly-photo"><img src={person.photo ?? `/profissionais/${person.id}.webp`} alt={person.name} width="150" height="130" loading="lazy"/></div><figcaption><h4>{person.name}</h4>{person.area && <p>{person.area}</p>}</figcaption></figure></li>)}</ul> : <p className="weekly-pending">Programação a confirmar.<span>Consulte a equipe para informações sobre este dia.</span></p>}
    </article>)}</div>
    {!days.length && <p>Agenda em atualização. Consulte a equipe para confirmar os atendimentos.</p>}
    <div className="weekly-footer"><p>{schedule.status === 'reference' ? 'Profissionais conforme o material enviado pela clínica. Datas e disponibilidade sujeitas à confirmação.' : 'Confirme a disponibilidade com a equipe antes de sua visita.'}</p><a className="text-link" href="#contato">Consultar a equipe <span>↗</span></a></div>
  </section>;
}
