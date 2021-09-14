import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast";
import HeaderMobile from "./components/HeaderMobile";
import MenuMobile from "./components/MenuMobile";

function App() {
  return (
    <>
      <HeaderMobile />
      <MenuMobile />
      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
