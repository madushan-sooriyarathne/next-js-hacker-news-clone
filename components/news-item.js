import Link from "next/link";

const NewsItem = ({
  title,
  domain,
  points,
  commentCount,
  timeAgo,
  id,
  url,
  user,
}) => {
  return (
    <div className="news-item">
      <div className="item-details">
        <a href={url} className="title">
          {title}
        </a>
        <p className="url">{domain}</p>
      </div>
      <p className="item-misc">
        {points} by <span className="user-name">{user}</span> | {timeAgo} |{" "}
        <Link href={`/?post=${id}`}>
          <a className="link">{commentCount} Comments</a>
        </Link>
      </p>

      <style jsx>{`
        .news-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .item-details {
          display: flex;
          align-items: center;
        }

        .title {
          font-size: 1.6rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--color-primary-dark);
          margin-right: 0.5rem;
        }

        .url {
          font-size: 1.2rem;
          color: var(--color-gray);
        }

        .item-misc {
          font-size: 1.4rem;
          color: var(--color-gray);
        }

        .link {
          text-decoration: none;
          color: var(--color-gray);
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.2s ease;
        }

        .link:hover {
          border-bottom: 1px solid var(--color-gray);
        }

        .user-name {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .user-name:hover {
          color: var(--color-primary-dark);
        }
      `}</style>
    </div>
  );
};

export default NewsItem;
