interface SideNavProps {
  activeStage: string;
  onNavigate: (stage: string, label: string) => void;
}

export function SideNav({ activeStage, onNavigate }: SideNavProps) {
  const navItems = [
    { id: 'home', label: 'INÍCIO' },
    { id: 'about', label: 'SOBRE' },
    { id: 'work', label: 'PROJETOS' },
    { id: 'skills', label: 'HABILIDADES' },
    { id: 'credentials', label: 'FORMAÇÃO' },
    { id: 'contact', label: 'CONTATO' },
  ];

  return (
    <aside className="side-nav" aria-label="Navegação Principal">
      {navItems.map((item) => {
        const isActive = activeStage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id, item.label)}
            aria-current={isActive ? 'page' : undefined}
            className={`side-nav-item ${isActive ? 'is-active' : ''}`}
            type="button"
          >
            <span className="side-nav-dash">—</span>
            <span className="side-nav-label">{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
