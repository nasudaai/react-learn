function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const user = {
  name: 'ume',
  line: 'boshiboshi',
}

export default function App() {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>lines</h2>
      <ul>
        <li>{user.line}</li>
      </ul>
      <MyButton />
    </div>
  )
}
