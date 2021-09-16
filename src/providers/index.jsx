import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ActionsProvider } from "./Actions";
import { CommentsProvider } from "./Comments";

const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>
                <ActionsProvider>
                    <CommentsProvider>
                        {children}
                    </CommentsProvider>
                </ActionsProvider>
            </UserProvider>
        </AuthProvider>
    );
};

export default Providers;