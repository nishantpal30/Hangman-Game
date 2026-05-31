import multipayer from "../../assets/Images/Playwithfriend.png";

function Multiplayer (){
    return(
        <>
        <div className="flex ">
                    <img src={multipayer} className="w-23 h-auto"  alt="" />
                    <p className="font-sans grid place-content-center text-2xl font-bold capitalize text-green-400">Play with friends , No time limit!!</p>
        
        
                </div>
        
        </>
    )
}

export default Multiplayer;