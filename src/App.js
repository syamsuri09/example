import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import { useState } from 'react';
import FunctionCall from './components/functionCall';
import { ParentComponent } from './components/ParentComponent';
import { NameList } from './components/NameList';
import { Form } from './components/Form';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Form />
      {/* <NameList /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionCall /> */}
      {/* <Greet name="Bruce" heroName="BatMan">
        <p>This is Child prop</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan">
        <button onClick={() => setCount(count + 1)}>
          The Button {count} times clicked
        </button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      {/* <Hello /> */}
      {/* <Welcome name="Bruce" heroName="BatMan" />
      <Welcome name="Clark" heroName="SuperMan" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
