import backimg from "../../../assets/Images/bkimg.png";
import { useNavigate } from "react-router-dom";

function Backbutton (){
    const navigate = useNavigate();
    return(
        <div className="flex justify-end p-5" >
            <img src={backimg} className="h-8 w-auto" onClick={()=>navigate("/")} alt="" />
        </div>
    )
}

export default Backbutton;