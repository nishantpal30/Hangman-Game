import sg from "../../assets/Images/sg.png";
import multip from "../../assets/Images/Playwithfriend.png";
import Singleplayer from "../single-player/single";
import Multiplayer from "../single-player/multiplayer";
import { useNavigate } from "react-router-dom";

function Homebody() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="flex justify-center font-bold text-4xl py-3 uppercase text-blue-700">
        Welcome to Hangman!
      </h1>
      <p className="capitalize grid place-content-center text-2xl text-green-400 ">
        Predict Right To save Inocient Person!!
      </p>

      <div className="grid mx-auto place-items-center mt-8 py-4 border rounded-2xl w-[50%]">
        <div
          onClick={() => {
            navigate("/singleplayer");
          }}
          className="cursor-pointer"
        >
          <Singleplayer></Singleplayer>
        </div>
        <div
          onClick={() => {
            navigate("/multiplayer");
          }}
          className="cursor-pointer"
        >
          <Multiplayer></Multiplayer>
        </div>
      </div>
    </>
  );
}

export default Homebody;
