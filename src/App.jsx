import "./App.css";
import Buttons from "./Components/UI/button";

function App() {
  return (
    <div>
      <Buttons color="light" className="me-2 bg-bright-white">
        Login
      </Buttons>
      <Buttons color="dark">Sign Up</Buttons>
    </div>
  );
}

export default App;
