import { useContext } from "react";
import { userDispatchContext, userContext } from "../context/store";

const Comment = ({ user, timeAgo, content, replies }) => {
  const setUser = useContext(userDispatchContext);
  const selectedUser = useContext(userContext);

  // NOTE: no need to check existing user here as in end-user wont be able to click a link
  // when a currentUser is not null in context (Because of the side-bar overlay)
  const handleUserSideBar = (event) => {
    if (selectedUser) {
      setUser(null);
    } else {
      const el = event.target.closest(".user-name");

      if (el) {
        setUser(el.dataset.username);
      }
    }
  };

  return (
    <div className="comment-root">
      <p className="comment-misc">
        <span
          className="user-name"
          data-username={user}
          onClick={handleUserSideBar}
        >
          {user}
        </span>
        {` | ${timeAgo}`}
      </p>
      <p
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <div className="replies">
        {replies.map((reply) => (
          <Comment
            key={reply.id}
            user={reply.user}
            timeAgo={reply.time_ago}
            content={reply.content}
            replies={reply.comments}
          />
        ))}
      </div>
      <style jsx>{`
        .comment-root {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0rem 1rem;
          margin-bottom: 2rem;
          border-left: 1px solid var(--color-primary-dark);
        }

        .comment-misc {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-gray);
        }

        .user-name {
          cursor: pointer;
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.2s ease;
        }

        .user-name:hover {
          border-bottom: 1px solid var(--color-gray);
        }

        .comment-content {
          font-size: 1.5rem;
          font-size: 500;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .replies {
          padding-left: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Comment;
