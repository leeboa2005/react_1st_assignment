import { useState } from "react";
import "./App.css";

const initialState = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Doe", age: 21 },
];
const App = () => {
  const [users, setUsers] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [inputName, setName] = useState("");
  const [inputAge, setAge] = useState("");
  const [nextId, setNextId] = useState(3);

  const addUser = (e) => setName(e.target.value);
  const addAge = (e) => setAge(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!inputName || !inputAge) {
      alert("이름, 나이 모두 작성해주세요");
      return false;
    } else {
      const newList = users.concat({
        id: nextId,
        name: inputName,
        age: inputAge,
      });
      setNextId(nextId + 1);
      setUsers(newList);
      setName("");
      setAge("");
    }
  };
  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    const newList = users.filter((season) => season.id !== id);
    setUsers(newList);
  };

  const seasonList = users.map((season) => (
    <li key={season.id}>
      <span>이름: {season.name}</span>
      <span>나이: {season.age}</span>
      <button onClick={() => removeUser(season.id)}>삭제</button>
    </li>
  ));

  return (
    <>
      <h1>사용자 리스트</h1>
      <form>
        <input
          type="text"
          placeholder="이름"
          value={inputName}
          onChange={addUser}
        />
        <input
          type="number"
          placeholder="나이"
          value={inputAge}
          onChange={addAge}
        />
        <button onClick={handleClick}>사용자 추가</button>
      </form>
      <ul className="season_list">{seasonList}</ul>
    </>
  );
};

export default App;
