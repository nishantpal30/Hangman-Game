import BackgroundImg from "../../components/background/mainbg"
import Header from "../../components/header/header";
import Homebody from "../../components/homebody/homebody";


function Home(){
    return(
      <BackgroundImg>
       <Header></Header>
       <Homebody></Homebody>
      </BackgroundImg>
    )
}

export default Home;