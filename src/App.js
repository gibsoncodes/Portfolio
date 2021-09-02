import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Me from './components/Me';
import Header from './components/Projects/Header'
import {useState} from 'react';

function App() {
  const [dark, setDark] = useState(true)
  let leftId = dark ? "dark-skills" : null;
  return (
    <div className="App">
        <Header dark={dark}/>
        <Skills dark={dark}/>
            <div id={leftId} className="content">
                <Projects dark={dark} setDark={setDark}/>
                <Me dark={dark}/>
            </div>

    </div>
  );
}

export default App;
