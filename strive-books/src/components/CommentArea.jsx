import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGYxYWFhY2FhMjAwMTU1MmExN2UiLCJpYXQiOjE2NDE4MTgyNjUsImV4cCI6MTY0MzAyNzg2NX0.vjL4QBX-qneCjdPzpal2YXHjqtrPEPF9ba7EzWvtep0",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [asin]);

  return (
    <div>
      <AddComment asin={this.props.asin} />
      <CommentList commentsToShow={this.state.comments} />
    </div>
  );
};

export default CommentArea;
