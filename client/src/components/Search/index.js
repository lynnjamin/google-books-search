import React from "react";
import './styles.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import axios from 'axios';

function Search(props) {
     return (
          <Card body className={'cardClass'}>
               <div className="searchBox">
                    <Form className="bookForm"
                    onSubmit={e => props.getBooks(e)}>
                         <Form.Group controlId="formBasicEmail">
                              <Form.Label>Book Search</Form.Label>
                              <Form.Control onChange={props.handleChange} type="text" placeholder="Enter book title" />
                         </Form.Group>
                         <div className={'buttonArea'}>
                              <Button className={'searchButton'} variant="primary" type="submit">
                                   Search
                              </Button>
                         </div>
                    </Form>
               </div>
          </Card>
     )
}

export default Search;