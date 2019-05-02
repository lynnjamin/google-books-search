import React from "react";
import './styles.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function Search() {
     return (
          // <form>
          //      <div className="form-group">
          //           <input className="form-control" />
          //      </div>
          //      <button type="submit" class="btn btn-primary">Submit</button>
          // </form>
     <Card body>
     <div className="searchBox">
          <Form className="bookForm">
               <Form.Group controlId="formBasicEmail">
                    <Form.Label>Book Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter book" />
               </Form.Group>

               <Button variant="primary" type="submit">
                    Submit
               </Button>
          </Form>
     </div>
     </Card>

     );
}

export default Search;
