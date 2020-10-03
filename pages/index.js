import Page from "../components/page";
import NewsItem from "../components/news-item";
import Error from "./_error";
import Link from "next/link";
import { withRouter } from "next/router";

const Index = ({ stories, router, responseCode }) => {
  return (
    <Page title="N.J.H.N.C - Next JS Hacker News Clone">
      {stories.length < 1 ? (
        <Error statusCode={responseCode} />
      ) : (
        <div className="content">
          <div className="news-items">
            {stories.map((story) => (
              <NewsItem
                key={story.id}
                title={story.title}
                domain={story.domain}
                points={story.points}
                commentCount={story.comments_count}
                timeAgo={story.time_ago}
                url={story.url}
                user={story.user}
                id={story.id}
              />
            ))}
          </div>
          <div className="nav-buttons">
            {parseInt(router.query.page) !== 1 && (
              <Link href={`?page=${parseInt(router.query.page) - 1}`}>
                <a className="btn">Previous</a>
              </Link>
            )}

            <Link href={`?page=${(parseInt(router.query.page) || 1) + 1}`}>
              <a className="btn">Next</a>
            </Link>
          </div>
          <style jsx>{`
            .content {
              padding: 5rem 2rem;
            }

            .news-items {
              margin-bottom: 5rem;
            }

            .nav-buttons {
              display: flex;
              align-items: center;
            }

            .nav-buttons > *:not(:last-child) {
              margin-right: 1rem;
            }

            .btn {
              font-size: 1.5rem;
              padding: 0.5rem 1rem;
              border: 2px solid var(--color-primary);
              text-decoration: none;
              color: var(--color-white);
              background-color: var(--color-primary);
              border-radius: 2px;
              transition: all 0.2s ease-in;
            }

            .btn:hover {
              color: var(--color-primary);
              background-color: transparent;
            }
          `}</style>
        </div>
      )}
    </Page>
  );
};

const getServerSideProps = async ({ query }) => {
  let data;
  let responseCode;
  let curPage = 1;

  if (query.page) {
    curPage = query.page;
  }
  try {
    const res = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${curPage}`
    );
    responseCode = res.status;
    data = await res.json();
  } catch (error) {
    console.error(error.message);
    data = [];
  }

  return { props: { stories: data, responseCode: responseCode } };
};

export default withRouter(Index);
export { getServerSideProps };
