import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({});
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
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
          this.setState({ comments: comments });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
