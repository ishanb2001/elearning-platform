import React, { useState } from 'react';

const App = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, category: 'A', content: 'Item 1A' },
    { id: 2, category: 'A', content: 'Item 2A' },
    { id: 3, category: 'B', content: 'Item 3B' },
    { id: 4, category: 'B', content: 'Item 3B' }
  ];

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('A')}>A</button>
      <button onClick={() => setFilter('B')}>B</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'flex-start' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              width: '300px',
              height: '100px',
              border: '1px solid black',
              display: filter !== 'all' && filter !== item.category ? 'none' : 'block',
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
