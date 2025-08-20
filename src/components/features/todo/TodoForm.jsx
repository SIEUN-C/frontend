/* 사용자 입력을 받아 부모 페이지(TodoPage)에 데이터를 전달합니다. */

import { useState } from 'react';

// WiniButton import 구문이 완전히 사라진 것을 확인하세요!
function TodoForm({ onAdd }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAdd(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
      />
      {/* 표준 <button> 태그를 사용합니다. */}
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;

/* 
🔍 구조 파악 포인트:

추가 버튼에 일반 <button> 태그 대신, atoms에 정의된 WiniButton을 사용했습니다. 이렇게 하면 프로젝트 전체의 버튼 디자인과 동작이 통일됩니다.
*/