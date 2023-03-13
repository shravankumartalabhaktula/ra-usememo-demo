import { useMemo } from 'react';
import { filterTodos } from './utils';

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // const visibleTodos = filterTodos(todos, tab); // comment the above code and uncomment this line to test the performance difference.
  return (
    <div className={theme}>
      <p>
        <b>
          Node: <code>filterTodos</code> is artificially slowed.
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
