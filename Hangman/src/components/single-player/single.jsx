import sg from "../../assets/Images/sg.png";



function Singleplayer(){
    return(
        <>

        <div className="flex ">
            <img src={sg} className="w-23 h-auto"  alt="" />
            <p className="font-sans grid place-content-center text-2xl font-bold capitalize text-yellow-400">Play by yourself , No time limit!!</p>

    
        </div>
        
        </>
    )
}

export default Singleplayer;