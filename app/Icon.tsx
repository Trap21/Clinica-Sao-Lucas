type IconName = 'arrow-up-right' | 'arrow-down' | 'arrow-up' | 'spark';

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths = {
    'arrow-up-right': <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    'arrow-down': <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
    'arrow-up': <><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></>,
    spark: <><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/></>,
  };

  return <svg className={`ui-icon ${className}`.trim()} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
