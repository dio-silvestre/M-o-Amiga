import Login from "./pages/Login";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
      <Routes />
      <Login />
    </>
  );
}

export default App;
