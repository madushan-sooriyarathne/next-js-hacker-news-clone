import { useContext, useState, useEffect } from "react";
import { userContext, userDispatchContext } from "../context/store";

const SideBar = () => {
  const user = useContext(userContext);
  const setUser = useContext(userDispatchContext);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userRes = await fetch(
          `http://node-hnapi.herokuapp.com/user/${user}`
        );
        const userData = await userRes.json();

        if (userData.error) {
          setUserData(null);
        } else {
          setUserData(userData);
        }
      } catch (error) {
        setUserData(null);
      }
    };

    getUserData();
  });

  const closeSideBar = (event) => {
    setUser(null);
  };

  return (
    <div className={`sidebar ${!user && "sidebar-hidden"}`}>
      <svg className="close-btn" onClick={closeSideBar}>
        <use xlinkHref="/static/img/sprites.svg#icon-close"></use>
      </svg>

      {userData ? (
        <div className="user-content">
          <div className="content-primary">
            <h2 className="user-name">{user}</h2>
            <p className="karma">{userData.karma} Karma</p>
          </div>
          <div className="content-secondary">
            <p className="joined">
              Joined on: <span className="joined-date">{userData.created}</span>
            </p>
            {userData.about && (
              <p
                className="about"
                dangerouslySetInnerHTML={{ __html: userData.about }}
              ></p>
            )}
          </div>
        </div>
      ) : (
        <div className="error"></div>
      )}

      <style jsx>{`
        .sidebar {
          position: absolute;
          top: 0;
          left: calc(100vw - 25vw);
          max-width: 25vw;
          min-height: 100vh;
          height: 100%;
          padding: 10rem 5rem;
          display: flex;
          justify-content: center;
          background-color: var(--color-white);
          transition: transform 0.2s ease-in;
        }

        .sidebar-hidden {
          transform: translateX(100%);
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          left: 2rem;

          width: 2rem;
          height: 2rem;
          fill: var(--color-gray);

          cursor: pointer;

          transition: fill 0.2s ease;
        }

        .close-btn:hover {
          fill: var(--color-primary-dark);
        }

        .user-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .content-primary {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
        }

        .user-name {
          font-size: 3rem;
          font-weight: 300;
          font-family: var(--font-family-secondary);
        }

        .karma {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .content-secondary {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .joined {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-gray);
          margin-bottom: 1rem;
        }

        .joined-date {
          color: var(--color-primary-dark);
        }

        .about {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-primary);
          text-align: center;
          word-wrap: break-word;
          max-width: 60%;
        }
      `}</style>
    </div>
  );
};

export default SideBar;
