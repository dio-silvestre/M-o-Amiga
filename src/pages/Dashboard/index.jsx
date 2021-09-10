import { useAuth } from "../../providers/Auth";

const Dashboard = () => {

    const { myData, signOut } = useAuth();

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