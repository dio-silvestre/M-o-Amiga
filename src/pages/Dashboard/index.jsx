import { useAuth } from "../../providers/Auth";
import { useActions } from "../../providers/Actions";
import { Redirect } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import Calendar from "../../components/Calendar";
import MenuMobile from "../../components/MenuMobile";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";

import {
  Container,
  MainContainer,
  HeaderContainer,
  CalendarContainer,
} from "./styles";
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
      <MenuMobile />
      <SideBar />
      {isLoading ? (
        <img src={Loading} alt="Loading" className="loading" />
      ) : (
        <MainContainer>
          <HeaderContainer>
            <div className="messageContainer">
              <h2> Seja bem vindo (a) , </h2>
              {myData.user_type === "institution" ? (
                <h1> Instituição !</h1>
              ) : (
                <h1> Voluntário!</h1>
              )}
            </div>
            <div className="inputContainer">
              <div>
                <input
                  type="text"
                  placeholder="Pesquisar por ação ..."
                  value={userInput}
                  onChange={(e) => showActions(e.target.value)}
                  icon={<FiSearch size={16} color="red" />}
                />
              </div>

              {userInput !== "" && (
                <div className="searchContainer">
                  {filteredProducts.map((ele) => (
                    <p
                      onClick={() => {
                        history.push(`/action/${ele.id}`);
                      }}
                    >
                      {ele.name}
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
    </Container>
  );
};

export default Dashboard;
