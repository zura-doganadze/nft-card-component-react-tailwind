import "./App.css";
import Equilib from "./img/image-equilibrium.jpg";
import Icon from "./img/icon-view.svg";
import Ethereum from "./img/icon-ethereum.svg";
import Clock from "./img/icon-clock.svg";
import Avatar from "./img/image-avatar.png";

function App() {
  return (
    <>
      <div className="flex justify-center mt-6 ">
        <div className="flex flex-col justify-center px-6 bg-card-bg max-w-lg w-full py-6 rounded-xl ">
          <div className="relative   cursor-pointer rounded-md overflow-hidden">
            <img src={Equilib} alt="" />
            <div
              className="text-white z-10 absolute top-0 w-full h-full flex items-center
                          justify-center bg-hover-bg overflow-hidden rounded-md bg-fixed
                          opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            >
              <img src={Icon} alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
