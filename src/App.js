import { useState } from 'react';
import { createTodos } from './utils';
import TodoList from './todolist';

const todos = createTodos();

function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('active')}>Active</button>
      <button onClick={() => setTab('completed')}>Completed</button>
      <br />
      <label>
        <input
          type={'checkbox'}
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
      <hr />
      <TodoList todos={todos} theme={isDark ? 'dark' : 'light'} tab={tab} />
    </>
  );
}

export default App;
