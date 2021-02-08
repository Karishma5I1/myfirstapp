import logo from './logo.svg';
import './App.css';
import ClassBasedCom from './components/classbasedComponent'
import Hooks from './components/hooksInc'
import Data from './data/data.json';

function App() {
  return (
    
    <BrowserRouter>
    <Route exact path="/" component={Home}>/></Route>
    </BrowserRouter>
  )
  var info=Data.profiles;
  console.log(info)
  return (
    <div className="App">
      <ClassBasedCom />
      <h1>hooks concept</h1>
      <Hooks />
      {info.map((i,index)=>(
        <div key={index}>
          <h1>{i.name}</h1>
          <link to={{pathname="/profile",data:{id:index}}}>view details</link>
        </div>
      ))}
        </div>
  )
      }
      
      
     /* <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  }
    </div>
  );
}*/

export default App;
