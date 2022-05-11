import LoginPage from "./components/register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./components/products";
import Auth from "./Auth";
import Verification from "./components/register/verification";
import Companies from "./components/companies";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/verification" component={Verification} />
        <Route
          exact
          path="/companies"
          render={(props) => (
            <Auth>
              <Companies {...props} />
            </Auth>
          )}
        />
        <Route
          exact
          path="/companies/products"
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
