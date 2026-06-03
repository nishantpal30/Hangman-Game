import loadgif from "../../assets/Images/loading.gif";

function Loading() {
  return (
   <div className="h-screen flex justify-center items-center">
      <div>
        <img
          src={loadgif}
          alt="Loading..."
          className="w-32 h-32"
        />
      </div>
    </div>
  );
}

export default Loading;