import Page from "../components/page";
import NewsItem from "../components/news-item";

const Index = ({ stories }) => {
  return (
    <Page>
      <div className="content">
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

        <style jsx>{`
          .content {
            padding: 2rem 5rem;
          }
        `}</style>
      </div>
    </Page>
  );
};

const getServerSideProps = async () => {
  let data;

  try {
    const res = await fetch("https://node-hnapi.herokuapp.com/news?page=1");
    data = await res.json();
  } catch (error) {
    console.error(error.message);
    data = [];
  }

  return { props: { stories: data } };
};

export default Index;
export { getServerSideProps };
