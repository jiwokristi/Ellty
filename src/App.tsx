import { useState } from 'react';

import { Checkbox } from './components/ui/checkbox/Checkbox';
import { Card } from './components/ui/card/Card';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="flex items-center justify-center h-screen">
      <Card>
        <Checkbox
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
        />
      </Card>
    </main>
  );
}

export default App;
