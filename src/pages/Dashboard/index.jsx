import { useAuth } from "../../providers/Auth";
import { Redirect } from "react-router-dom";

const Dashboard = () => {

    const { myData, signOut, isLogged } = useAuth();

    if (!isLogged) {
        return <Redirect to="/login" />;
      };

    return (
        <>
        Dashboard
        <button onClick={signOut}>logout</button>

        {!myData.user_type ? (
            <>loading</>
        ) : (
            <>
            {myData.user_type === "institution" && <button>Criar ação</button> }
            </>
        )}
        </>
    );
};

export default Dashboard;