import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "./usercontext";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Menu from "./Components/Menu/Menu";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Slider />
        <Menu />
        <Modal />
      </div>
    </UserProvider>
  );
}

export default App;
