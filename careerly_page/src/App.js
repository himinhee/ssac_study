import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { Route } from "react-router-dom";
import NavbarContainer from "./containers/common/navbar/NavbarContainer";
import Home from "./pages/Home";
import DiscoverProfile from "./pages/DiscoverProfile";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavbarContainer />
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/discover-profile"
        exact={true}
        component={DiscoverProfile}
      />
      <Route path="/jobs" exact={true} component={Jobs} />
    </>
  );
}

export default App;
