import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ActionPage from "../pages/ActionPage";
import LandingPage from "../pages/LandingPage";
import UserPage from "../pages/UserPage";
import { Switch, Route } from "react-router-dom";
import ActionRegister from "../pages/ActionRegister";
import PageNotFound from "../pages/PageNotFound";
import Chat from "../components/Chat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/action/:actionId" component={ActionPage} />
      <Route path="/users/:userId" component={UserPage} />
      <Route path="/actionregister" component={ActionRegister} />
      <Route path="/chat" component={Chat} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
