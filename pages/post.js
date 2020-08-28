import { useEffect, useState } from "react";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await fetch(
          `http://node-hnapi.herokuapp.com/item/${router.query.id}`
        );
        const data = await res.json();

        if (data) {
          setPostData(data);
        } else {
          setPostData(null);
        }
      } catch (error) {
        console.error(error.message);
        setPostData(null);
      }
    };

    getPostData();
  }, []);

  return (
    <div className="post">
      <div className="post-details"></div>
      <div className="comments">{JSON.stringify(postData)}</div>
    </div>
  );
};

export default withRouter(Post);
