import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Me from './components/Me';
import Header from './components/Projects/Header'
import {useState} from 'react';

function App() {
  const [info, setInfo] = useState(false)
  const [dark, setDark] = useState(false)
  let leftId = dark ? "dark-skills" : null;
  return (
    <div className="App">
        <Header dark={dark} info={info}/>
            <div id={leftId} className="content">
                <Projects dark={dark} setDark={setDark}/>
                <Skills dark={dark} setInfo={setInfo}/>
                <Me dark={dark}/>
            </div>

    </div>
  );
}

export default App;
