import mainbg from "../../assets/Images/mainbg.png";

function BackgroundImg({ children, bg = mainbg }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImg;