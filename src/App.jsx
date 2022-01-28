
import AddGame from './AddGame';
import AddTodo from './AddTodo';
import GameList from './GameList';
import TodoList from './TodoList';

function App() {

  return (
    <div style={{
      width: 800,
      margin: '30px auto'
    }}>
      <h1>ReactContext API Demo</h1>
      <TodoList />
      <AddTodo />

      <hr />

      <GameList />
      <AddGame />
    </div>
  );
}

export default App;
