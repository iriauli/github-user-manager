import { AuthContextProvider } from "./context/AuthContext";
import { UseCotnextProvider } from "./context/UserContext";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <UseCotnextProvider>
          <Routes />
        </UseCotnextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
