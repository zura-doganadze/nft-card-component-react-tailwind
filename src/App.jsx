import "./App.css";
import Equilib from "./img/image-equilibrium.jpg";
import Icon from "./img/icon-view.svg";
import Ethereum from "./img/icon-ethereum.svg";
import Clock from "./img/icon-clock.svg";
import Avatar from "./img/image-avatar.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6 ">
        <div className="flex flex-col justify-center px-6 bg-card-bg max-w-lg w-full pt-6 rounded-xl ">
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
          <div className="my-6">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-sans text-2xl font-semibold text-white cursor-pointer hover:text-text-hover">
                Equilibrium #3429
              </h1>
              <p className="mt-4 pr-1 font-sans text-lg text-span-color">
                Our Equilibrium collection promotes balance and calm.
              </p>
              <div className="flex w-full justify-between mt-4 ">
                <div className="flex w-max gap-x-2">
                  <img src={Ethereum} alt="eterium img" />
                  <span className="text-lg inline-block font-semibold text-price-color">
                    0.041 ETH
                  </span>
                </div>
                <div className="flex w-max gap-x-2 ">
                  <img src={Clock} alt="clock img" />
                  <span className="text-lg inline-block font-semibold text-span-color">
                    3 days left
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[2px] bg-line-color mt-6"></div>
            <div className="flex items-center justify-start pt-8">
              <img
                src={Avatar}
                alt="img"
                className="h-[54px] w-[54px] rounded-full border border-white mr-4"
              />
              <p className="text-lg text-span-color">
                Creation of
                <span className="text-white cursor-pointer hover:text-text-hover ml-2">
                  Jules Wyvern
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg text-span-color">
            Challenge by
            <a className="text-adrees-t-color mx-1 cursor-pointer border-b-2 border-blue-900">
              Frontend Mentor.
            </a>
            Coded by
            <a className="text-adrees-t-color mx-1 cursor-pointer border-b-2 border-blue-900">
              Thomas Sankara
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
