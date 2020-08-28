import { useContext } from "react";
import { userContext, userDispatchContext } from "../context/store";

const Overlay = () => {
  const user = useContext(userContext);
  const setUser = useContext(userDispatchContext);

  const closeOverlay = (event) => {
    setUser(null);
  };

  return (
    <div
      className={`overlay ${!user && "overlay-hidden"}`}
      onClick={closeOverlay}
    >
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          min-width: 100vw;
          min-height: 100vh;
          background-color: transparent;
          transition: transform 0.2s ease-in-out;
        }

        .overlay-hidden {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
};

export default Overlay;
