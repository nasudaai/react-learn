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

const titleStyle = {
  color: 'blue',
  border: 'dotted',
}

let red = 'red'


let isTrue = true;
function Crender() {
  let content;
  if (isTrue) {
    content = <p>true</p>
  } else {
    content = <p>false</p>
  }
  return (
    <div>
      {content}
    </div>
  )
}
export default function App() {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2 style={{ color: titleStyle.color, border: titleStyle.border }}>lines</h2>
      <p style={{color: red}}>red moji</p>
      <ul>
        <li>{user.line}</li>
      </ul>
      <MyButton />
      <Crender />
    </div>
  )
}
