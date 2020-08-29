const Comment = ({ user, timeAgo, content, replies }) => {
  return (
    <div className="comment-root">
      <p className="comment-misc">{`${user} | ${timeAgo}`}</p>
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
