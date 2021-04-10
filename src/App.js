import './App.css';
import LoginPage from './components/login-page/login';
import {BrowserRouter as Router,Route} from "react-router-dom";
import HomePage from './components/home-page/index';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={LoginPage}/>
        <Route path="/home" exact component={HomePage}  />
      </Router>
    </div>
  );
}

export default App;
