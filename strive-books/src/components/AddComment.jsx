import { useState,useEffect} from "react";
import {  Form,Button } from 'react-bootstrap';


const AddComment = ({ asin }) => {

const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null
})

    // state = {
    //     comment: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }
    useEffect(() => {
        setComment(comment => ({
            ...comment,
            elementId: asin
        }))
    }, [asin])

    const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGYxYWFhY2FhMjAwMTU1MmExN2UiLCJpYXQiOjE2NDE4MTgyNjUsImV4cCI6MTY0MzAyNzg2NX0.vjL4QBX-qneCjdPzpal2YXHjqtrPEPF9ba7EzWvtep0'
                }
            })
            if (response.ok) {
                
                alert('YOUR COMMENT WAS SENT SUCCESSFULLY!!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

    
        return (
            <div>
                <Form onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add your comment here"
                            value={comment.comment}
                            onChange={e => setComment({
                                ...comment,
                                comment: e.target.value
                                
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={comment.rate}
                            onChange={e => setComment({
                                ...comment,
                                rate: e.target.value
                                
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
                        }
    


export default AddComment



// import { Button, Form } from "react-bootstrap";
// import { Component } from "react";

// class AddComment extends Component {
//   state = {
//     comment: {
//       comment: "",
//       rate: 1,
//       elementId: this.props.asin,
//     },
//   };

//   sendComment = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/comments",
//         {
//           method: "POST",
//           body: JSON.stringify(this.state.comment),
//           headers: {
//             "Content-type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGYxYWFhY2FhMjAwMTU1MmExN2UiLCJpYXQiOjE2NDE4MTgyNjUsImV4cCI6MTY0MzAyNzg2NX0.vjL4QBX-qneCjdPzpal2YXHjqtrPEPF9ba7EzWvtep0",
//           },
//         }
//       );
//       if (response.ok) {
//         alert(" YOUR COMMENT WAS SENT SUCCESSFULLY!");
//       } else {
//         console.log("error");
//         alert(" Oops...Something went wrong");
//       }
//     } catch (error) {
//       console.log("error");
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.sendComment}>
//           <Form.Group>
//             <Form.Label>COMMENTS</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Add comment here"
//               value={this.state.comment.comment}
//               onChange={(e) =>
//                 this.setState({
//                   comment: {
//                     ...this.state.comment,
//                     comment: e.target.value,
//                   },
//                 })
//               }
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Rating</Form.Label>
//             <Form.Control
//               as="select"
//               value={this.state.comment.rate}
//               onChange={(e) =>
//                 this.setState({
//                   comment: {
//                     ...this.state.comment,
//                     rate: e.target.value,
//                   },
//                 })
//               }
//             >
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Button variant="success" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default AddComment;
