import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends React.Component {
  state = {
    search: "",
    selectedBook: null,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.search)
                )
                .map((b) => (
                  <Col xs={3} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeBook={(asin) =>
                        this.setState({
                          selectedBook: asin,
                        })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
