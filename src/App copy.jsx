// import { useState } from "react";
// import "./App.css";

// function App() {
//   const initialState = [
//     { id: 1, name: "John", age: 20 },
//     { id: 2, name: "Doe", age: 21 },
//   ];
  
//   const [users, setUsers] = useState(initialState);

//   // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.

// const  {enteredName, setName}  =  useState("");
// const [nextId, setNextId] = useState(3);

//   const addUser = e => setName(e.target.value);
//   const handleClick = () => {
//       const newList = users.concat({
//           id: nextId,
//           name: enteredName
//       });
//       setNextId(nextId+1);
//       setUsers(newList);
//       setName("");
//   }

//   const removeUser = id => {
//     const newList = users.filter(season => season.id !== id);
//     setUsers(newList);
// };

// const seasonList = users.map((season) => 
//   <div key={season.id}>
//       <li><button onClick={() => removeUser(season.id)}>delete</button> {season.name}</li>
//   </div>
// );

  

//   return (
//     <>
//       <h1>사용자 리스트</h1>

//       <form onSubmit={addUser}>
//         {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
//         <input type="text" placeholder="이름" onChange={addUser} value={enteredName}/>
//         {/* <input type="number" placeholder="나이" onChange={addUser} value={enteredAge}/> */}
//         <button type="submit" onClick={handleClick}>사용자 추가</button>
    

//       </form>
//       <ul>{seasonList}</ul>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
const Iteration = () => {
    const [users, setUsers] = useState(initialState);

    const [inputName, setName] = useState('');
    const [nextId, setNextId] = useState(3);

    
    const addUser = e => setName(e.target.value);
    const handleClick = () => {
        const newList = users.concat({
            id: nextId,
            name:inputName,
            age:inputName 
        });
        setNextId(nextId+1);
        setUsers(newList);
        setName('');
    }
    const handleDelete = id => {
        const newList = users.filter(season => season.id !== id);
        setUsers(newList);
    };

    const seasonList = users.map((season) => 
        <div key={season.id}>
            <li><button onClick={() => handleDelete(season.id)}>delete</button> {season.name}</li>
        </div>
    );

    return (
        <>
            <h1>List Add and Delete</h1>
            <input 
                value={inputName}
                onChange={addUser}
            />
                {/* <input 
                value={inputAge}
                onChange={addUser}
            /> */}
            <button onClick={handleClick}>add</button>
            <ul>{seasonList}</ul>

        </>
    );
}

export default Iteration;