import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/article/:currentPage?' component={Home} exact></Route>
        <Route path='/article/details/:slag' component={Home} exact></Route>
        <Route path='/article/category/:categorySlug/:currentPage?' component={Home} exact></Route>
        <Route path='/article/tag/:tagSlug/:currentPage?' component={Home} exact></Route>
        <Route path='/article/search/:searchValue' component={Home} exact></Route>
      </Switch>
    </Router>
  )
}

export default App;
