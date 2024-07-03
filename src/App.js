export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🧳 Far Away 🛫</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What u need for the trip ?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on ur list, U already packed x (X%)</em>
    </footer>
  );
}
