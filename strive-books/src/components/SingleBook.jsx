import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  render() {
    return (
      <>
        <Card
          className="singlebook"
          onClick={() => this.props.changeBook(this.props.book.asin)}
          style={{
            border:
              this.props.selectedBook === this.props.book.asin
                ? "1px solid green"
                : "none",
          }}
        >
          <Card.Img
            className="singleimage"
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
            <h6>{this.props.book.category}</h6>
            <h6>{this.props.book.price}$</h6>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
