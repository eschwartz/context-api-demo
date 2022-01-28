
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {

  return (
    <div style={{
      width: 800,
      margin: '30px auto'
    }}>
      <h1>ReactContext API Demo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
