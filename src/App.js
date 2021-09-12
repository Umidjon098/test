import LoginPage from "./components/login-page/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./components/products/index";
import Auth from "./Auth";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route
          path="/home"
          render={(props) => (
            <Auth>
              <Products {...props} />
            </Auth>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
