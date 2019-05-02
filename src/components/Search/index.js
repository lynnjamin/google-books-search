import React from "react";
import './styles.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function Search() {
     const test = (e) => {
          e.preventDefault();
          console.log('here');
     }
     return (
          <Card body className={'cardClass'}>
               <div className="searchBox">
                    <Form className="bookForm">
                         <Form.Group controlId="formBasicEmail">
                              <Form.Label>Book Search</Form.Label>
                              <Form.Control type="text" placeholder="Enter book title" />
                         </Form.Group>
                         <div className={'buttonArea'}>
                              <Button className={'searchButton'} onClick={test} variant="primary" type="submit">
                                   Search
                              </Button>
                         </div>
                    </Form>
               </div>
          </Card>
     );
}

export default Search;
