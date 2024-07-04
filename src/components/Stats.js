export default function Stats({ items }) {
  // Calculating Statistics as Derived State
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start add some items to your packing list💼🧳</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, Ready to GOOO 🚀"
          : `You have ${numItems} items on ur list, U already packed ${numPacked} (
          ${percentage}%)`}
      </em>
    </footer>
  );
}
