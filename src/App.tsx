import { useState } from 'react';

import { Checkbox } from './components/ui/checkbox/Checkbox';
import { Card } from './components/ui/card/Card';
import { Button } from './components/ui/button/Button';

const pages = [
  { id: 'page-1', label: 'Page 1' },
  { id: 'page-2', label: 'Page 2' },
  { id: 'page-3', label: 'Page 3' },
  { id: 'page-4', label: 'Page 4' },
  { id: 'page-5', label: 'Page 5' },
  { id: 'page-6', label: 'Page 6' },
];

function App() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allPageIds = pages.map(p => p.id);
  const allChecked = allPageIds.every(id => selected.has(id));

  const togglePage = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const toggleAllPages = () => {
    setSelected(prev => {
      const next = new Set(prev);

      const hasUnchecked = allPageIds.some(id => !next.has(id));

      if (hasUnchecked) {
        allPageIds.forEach(id => next.add(id));
      } else {
        next.clear();
      }

      return next;
    });
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <Card>
        <MenuItem
          label="All pages"
          checked={allChecked}
          onToggle={toggleAllPages}
        />
        <Divider />
        <div className="flex flex-col flex-1 h-41 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {pages.map(page => (
            <MenuItem
              key={page.id}
              label={page.label}
              checked={selected.has(page.id)}
              onToggle={() => togglePage(page.id)}
            />
          ))}
        </div>
        <Divider />
        <div className="items-center flex-1 py-2.5 px-3.75 h-15">
          <Button className="w-full">Done</Button>
        </div>
      </Card>
    </main>
  );
}

interface MenuItemProps {
  label: string;
  checked: boolean;
  onToggle(): void;
}

const MenuItem = ({ label, checked, onToggle }: MenuItemProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      className="group flex items-center justify-between cursor-pointer w-92.5 h-10.5 py-2 pl-5.5 pr-3.75"
    >
      <span className="text-body">{label}</span>

      <div className="flex items-center justify-center w-8.75">
        <Checkbox checked={checked} tabIndex={-1} onClick={onToggle} />
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative flex-1 h-5">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[calc(100%-30px)] h-[0.7px] bg-grey-200" />
    </div>
  );
};

export default App;
