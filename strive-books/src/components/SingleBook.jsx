import React from "react";
import { Card } from "react-bootstrap";

const SingleBook=()=> {
  
    return (
      <>
        <Card
          className="singlebook"
          onClick={() =>changeBook(book.asin)}
          style={{
            border:
             selectedBook === book.asin
                ? "1px solid green"
                : "none",
          }}
        >
          <Card.Img
            className="singleimage"
            variant="top"
            src={book.img}
          />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {book.title}
            </Card.Title>
            <h6>{book.category}</h6>
            <h6>{book.price}$</h6>
          </Card.Body>
        </Card>
      </>
    );
  
}

export default SingleBook;
