// ../ : 상위폴더
// ./ : 현재 폴더
// 함수 component 방식 구현

import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Hello2 from "./Hello2";
import Props from "./Props";
import Props2 from "./Props2";
import Props3 from "./Props3";
import Section from "./Section";
import Condition from "./Condition";
import Condition2 from "./Condition2";
import Condition3 from "./Condition3";

//App() 에서 Hello(), Props() 등 다른 함수들을 계속 호출중 : Component 합성
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <Hello />
        <Hello2 />
        <Props number="10"/>
        <Props2 number="100" value="word"/>
        <Props3 number="100" value="구조분해할당" />
        <Section>
          <div>Section Children</div>
          <Hello2 />
        </Section>
        <Condition />
        <Condition2 />
        <Condition3 />
      </header>
    </div>
  );
}

export default App;