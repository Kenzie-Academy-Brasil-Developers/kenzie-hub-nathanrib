import { RoutesComponents } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./Styles/GlobalStyle";


function App() {



  return (
    <div className="App">
      <GlobalStyle />

      <RoutesComponents />
    </div>
  );
}

export default App;
