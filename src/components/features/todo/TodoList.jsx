/* 데이터를 받아 목록을 화면에 그리고, 사용자 액션(완료, 삭제)을 부모에게 전달합니다. */


// WiniButton, WiniCheckbox import 구문이 없는 것을 확인하세요.

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isDone ? 'done' : ''}>
          {/* 표준 input 태그를 사용합니다. */}
          <input 
            type="checkbox" 
            checked={todo.isDone} 
            onChange={() => onToggle(todo.id)} 
          />
          <span>{todo.text}</span>
          {/* 표준 button 태그를 사용합니다. */}
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

/* 

🔍 구조 파악 포인트:

완료 여부를 표시하기 위해 WiniCheckbox atom 컴포넌트를 사용했습니다. 이처럼 가장 작은 기능 단위들은 atoms 폴더의 컴포넌트를 재활용하는 것이 좋습니다.
*/