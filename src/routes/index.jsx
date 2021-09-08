import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Routes;