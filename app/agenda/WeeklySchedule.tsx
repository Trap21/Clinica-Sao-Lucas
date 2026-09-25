import { useState } from 'react';
import { getWeekDays, weeklySchedule, type Professional, type Schedule } from './schedule';
import { assetUrl } from '../asset-url';
import { Icon } from '../Icon';
import './weekly.css';

export function WeeklySchedule({ professionals, schedule = weeklySchedule }: { professionals: Professional[]; schedule?: Schedule }) {
  const days = getWeekDays(schedule, professionals);
  const [expandedDays, setExpandedDays] = useState<Set<string>>(() => new Set());
  const toggleDay = (iso: string) => setExpandedDays(current => {
    const next = new Set(current);
    if (next.has(iso)) next.delete(iso);
    else next.add(iso);
    return next;
  });
  return <section className="services section weekly-section" id="atendimentos" aria-labelledby="weekly-title">
    <div className="weekly-intro"><div className="section-label"><span>02 / ATENDIMENTOS</span><span>CUIDADO EM DIFERENTES DIMENSÕES</span></div>
    <div className="section-heading"><h2 id="weekly-title">Sua saúde.<br/><em>Nosso ponto de encontro.</em></h2></div></div>
    <div className="weekly-schedule-body">
    <div className="weekly-caption"><div><span className="eyebrow">AGENDA SEMANAL</span>{days.length > 0 && <h3>{days[0].label} <span>—</span> {days[6].label}<small>{schedule.weekStart.slice(0, 4)}</small></h3>}</div><p>{schedule.status === 'reference' ? 'Semana de referência · a confirmar' : 'Programação da semana'}</p></div>
    <div className="weekly-days">{days.map(day => {
      const isExpanded = expandedDays.has(day.iso);
      const visiblePeople = isExpanded ? day.people : day.people.slice(0, 2);
      const canExpand = day.people.length > 2;
      const remainingCount = day.people.length - 2;
      const nextPerson = day.people[2];
      const peopleId = `people-${day.iso}`;
      return <article className={'weekly-day' + (!day.people.length ? ' weekly-empty' : '') + (isExpanded ? ' weekly-open' : '')} key={day.iso} aria-labelledby={'day-' + day.iso}>
        <div className="weekly-date"><h3 id={'day-' + day.iso}>{day.weekday}</h3><time dateTime={day.iso}>{day.label}</time></div>
        {day.people.length > 0 ? <div className={'weekly-content' + (isExpanded ? ' weekly-content-open' : '')}><ul className="weekly-people" id={peopleId}>{visiblePeople.map((person, index) => <li className={index >= 2 ? 'weekly-extra' : undefined} key={person.id}><figure className="weekly-person"><div className="weekly-photo"><img src={assetUrl(person.photo ?? `/profissionais/${person.id}.webp`)} alt={person.name} width="150" height="130" loading="lazy" decoding="async"/></div><figcaption><h4>{person.name}{person.note && <> ({person.note})</>}</h4>{person.area && <p>{person.area}</p>}</figcaption></figure></li>)}</ul>{canExpand && <div className={'weekly-more' + (isExpanded ? ' weekly-more-open' : '')}>{!isExpanded && nextPerson && <div className="weekly-preview" aria-hidden="true"><img src={assetUrl(nextPerson.photo ?? `/profissionais/${nextPerson.id}.webp`)} alt="" width="118" height="110" loading="lazy" decoding="async"/><span>+{remainingCount}</span></div>}<div className="weekly-more-copy">{!isExpanded && <p>{remainingCount} {remainingCount === 1 ? 'profissional disponível' : 'profissionais disponíveis'}</p>}<button className="weekly-toggle" type="button" aria-expanded={isExpanded} aria-controls={peopleId} onClick={() => toggleDay(day.iso)}>{isExpanded ? 'Ver menos' : 'Ver todos'} <Icon name={isExpanded ? 'arrow-up' : 'arrow-up-right'}/></button></div></div>}</div> : <p className="weekly-pending">Programação a confirmar.<span>Consulte a equipe para informações sobre este dia.</span></p>}
      </article>;
    })}</div>
    {!days.length && <p>Agenda em atualização. Consulte a equipe para confirmar os atendimentos.</p>}
    <div className="weekly-footer"><p>{schedule.status === 'reference' ? 'Profissionais conforme o material enviado pela clínica. Datas e disponibilidade sujeitas à confirmação.' : 'Confirme a disponibilidade com a equipe antes de sua visita.'}</p><a className="text-link" href="#contato">Consultar a equipe <span><Icon name="arrow-up-right"/></span></a></div></div>
  </section>;
}
