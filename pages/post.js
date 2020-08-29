import Page from "../components/page";
import NewsItem from "../components/news-item";
import Comment from "../components/comment";
import { withRouter } from "next/router";

const Post = ({ postData }) => {
  return (
    <Page>
      <div className="post">
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

      <style jsx>{`
        .post {
          padding: 2rem 3rem;
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

  try {
    const res = await fetch(`http://node-hnapi.herokuapp.com/item/${query.id}`);
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

  return { props: { postData: postData } };
};

export default withRouter(Post);
export { getServerSideProps };
