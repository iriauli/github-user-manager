import { AuthContextProvider } from "./context/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
