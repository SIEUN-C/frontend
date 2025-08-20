
/* 
1. src/pages/todo/TodoPage.jsx (메인 페이지)
이 파일이 투두리스트 기능의 중심 허브 역할을 합니다. 모든 데이터를 관리하고 자식 컴포넌트들에게 전달합니다. 기존 App.jsx의 역할을 이 페이지가 맡게 됩니다.

*/
import { useState } from 'react';
// import WiniBox from 'components/atoms/box/winibox.tsx'; // 이 줄은 삭제합니다.
import TodoForm from 'components/features/todo/TodoForm.jsx'; // 사용자가 만드신 경로에 맞게 수정
import TodoList from 'components/features/todo/TodoList.jsx'; // 사용자가 만드신 경로에 맞게 수정
import './TodoPage.css'; // 스타일을 위해 CSS 파일을 새로 추가합니다.

function TodoPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', isDone: false },
    { id: 2, text: '프로젝트 구조 파악하기', isDone: true },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    // WiniBox 대신 className을 가진 div로 변경
    <div className="todo-container">
      <h1>To-Do List (Toy Project)</h1>
      <p>기존 프로젝트 구조에 새로운 페이지를 추가하는 예제입니다.</p>
      
      <TodoForm onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default TodoPage;

/* 
🔍 구조 파악 포인트:

TodoPage가 투두리스트 기능의 모든 상태와 로직을 소유합니다.

UI 레이아웃을 잡을 때, 직접 div를 사용하기보다 기존에 만들어진 WiniBox 같은 atom 컴포넌트를 활용하여 일관성을 유지합니다.

*/