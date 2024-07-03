const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Shirts", quantity: 3, packed: false },
];

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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What u need for the trip ?</h3>
      <select>
        {/* Array.from({ length: 20 }, (_, i) => i + 1) is to create an array from 20 starting from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <option value={n} key={n}>
            {n}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on ur list, U already packed x (X%)</em>
    </footer>
  );
}
