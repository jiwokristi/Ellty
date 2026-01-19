import { useState } from 'react';

import { Checkbox } from './components/ui/checkbox/Checkbox';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="flex items-center justify-center h-screen">
      <Checkbox
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
    </main>
  );
}

export default App;
