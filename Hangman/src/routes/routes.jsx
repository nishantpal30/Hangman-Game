import { Routes, Route } from "react-router-dom";
// import Home from "../pages/homepage/homepage";
// import Singleplayer from "../pages/playpage/singleplayer";
// import Multiplayer from "../pages/playpage/multiplayer";
import Backbutton from "../components/button/backbutton/backbutton";
import Loading from "../components/loading/loading";
import { Suspense, lazy } from "react";
const Home = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/homepage/homepage")), 2000),
    ),
);

const Singleplayer = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/playpage/singleplayer")), 2000),
    ),
);
const Multiplayer = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/playpage/multiplayer")), 2000),
    ),
);
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        {/* <Route path="/" element={<Backbutton />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
