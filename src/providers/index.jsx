import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ActionsProvider } from "./Actions";

const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>
                <ActionsProvider>
                    {children}
                </ActionsProvider>
            </UserProvider>
        </AuthProvider>
    );
};

export default Providers;