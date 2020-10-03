import Page from "../components/page";
import NewsItem from "../components/news-item";
import Comment from "../components/comment";
import Error from "./_error";
import Router, { withRouter } from "next/router";

const Post = ({ postData, statusCode }) => {
  return (
    <Page
      title={
        postData ? postData.title : "N.J.H.N.C - Next Js Hacker News Clone"
      }
    >
      {postData ? (
        <div className="post">
          <div className="back-btn" onClick={() => Router.back()}>
            Go back
          </div>

          <div className="post-details">
            <NewsItem
              key={postData.id}
              title={postData.title}
              domain={postData.domain}
              points={postData.points}
              commentCount={postData.comments_count}
              timeAgo={postData.time_ago}
              id={postData.id}
              url={postData.url}
              user={postData.user}
            />
          </div>
          <div className="comments">
            {postData.comments.map((comment) => (
              <Comment
                id={comment.id}
                user={comment.user}
                timeAgo={comment.time_ago}
                replies={comment.comments}
                content={comment.content}
              />
            ))}
          </div>
        </div>
      ) : (
        <Error statusCode={statusCode} />
      )}
      <style jsx>{`
        .post {
          padding: 5rem 0;
        }

        .back-btn {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          border: 2px solid var(--color-primary-dark);
          border-radius: 2px;
          color: var(--color-white);
          background-color: var(--color-primary-dark);
          transition: all 0.2s ease-in;
          margin-bottom: 2rem;
          cursor: pointer;
        }

        .back-btn:hover {
          color: var(--color-primary-dark);
          background-color: transparent;
        }

        .post-details {
          padding: 0rem 2rem;
          margin-bottom: 3rem;
        }

        .comments {
          padding: 2rem;
          background-color: rgba(255, 158, 187, 0.15);
          position: relative;
        }
      `}</style>
    </Page>
  );
};

const getServerSideProps = async ({ query }) => {
  let postData;
  let statusCode;

  try {
    const res = await fetch(
      `https://node-hnapi.herokuapp.com/item/${query.id}`
    );
    statusCode = res.status;
    const data = await res.json();

    if (data) {
      postData = data;
    } else {
      postData = null;
    }
  } catch (error) {
    console.error(error.message);
    postData = null;
  }

  return { props: { postData: postData, statusCode: statusCode } };
};

export default withRouter(Post);
export { getServerSideProps };
