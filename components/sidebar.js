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
          `https://node-hnapi.herokuapp.com/user/${user}`
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
  }, [user]);

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
          position: fixed;
          top: 0;
          right: 0;
          min-width: 50rem;
          max-width: 55rem;
          min-height: 100vh;
          max-height: 100vh;
          padding: 10rem 5rem;
          display: flex;
          justify-content: center;
          background-color: var(--color-white);
          transition: transform 0.2s ease-in;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
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
