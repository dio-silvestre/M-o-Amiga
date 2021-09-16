import { useAuth } from "../../providers/Auth";
import { useActions } from "../../providers/Actions";
import { Redirect } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import Calendar from "../../components/Calendar";
import MenuMobile from "../../components/MenuMobile";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";
import ModalListActions from "../../components/ModalListActions";
import {
  Container,
  FullContainer,
  MainContainer,
  HeaderContainer,
  CalendarContainer,
} from "./styles";
import HeaderMobile from "../../components/HeaderMobile";
import Loading from "./../../assets/img/loading.gif";

const Dashboard = () => {
  const { myData, isLogged } = useAuth();
  const { actions } = useActions();
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory();

  const showActions = (textInput) => {
    setUserInput(textInput);

    const filtered = actions.filter((item) =>
      item.name.toLowerCase().includes(textInput.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (myData.id) {
      setIsLoading(false);
    }
  }, [myData]);

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <ModalListActions />
      <HeaderMobile />
      <FullContainer>
        <MenuMobile />
        <SideBar />
        {isLoading ? (
          <img src={Loading} alt="Loading" className="loading" />
        ) : (
          <MainContainer>
            <HeaderContainer>
              <div className="messageContainer">
                <h2> Seja bem vindo (a), </h2>
                <h1>{myData.name.split(" ")[0]}!</h1>
              </div>
              <div className="inputContainer">
                <div className="iconContainer">
                  <div>
                    <FiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Pesquisar ação..."
                    value={userInput}
                    onChange={(e) => showActions(e.target.value)}
                  />
                </div>

                {userInput !== "" && filteredProducts.length > 0 && (
                  <div className="searchContainer">
                    {filteredProducts.map((ele, index) => (
                      <p
                        key={index}
                        onClick={() => {
                          history.push(`/action/${ele.id}`);
                        }}
                      >
                        {ele.name.slice(0, 30)}
                        {ele.name.length > 30 && <>...</>}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </HeaderContainer>
            <CalendarContainer>
              <Calendar />
            </CalendarContainer>
          </MainContainer>
        )}
      </FullContainer>
    </Container>
  );
};

export default Dashboard;
