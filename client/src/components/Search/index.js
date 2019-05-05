import React from "react";
import './styles.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

function Search() {

    const getBooks = (e) => {
         e.preventDefault();
         const form = e.target.elements.searchbox.value;
         console.log("target here: ", form);

          axios.request({
            method: 'get',
            url: 'https://www.googleapis.com/books/v1/volumes?q=harrypotter'  
          }).then((response) => {
              console.log("response: ", response);
          }).catch((error) => {
            console.log(error);
          });
        }

     return (
          <Card body className={'cardClass'}>
               <div className="searchBox">
                    <Form className="bookForm"
                    onSubmit={e => getBooks(e)}>

                         <Form.Group controlId="formBasicEmail">
                              <Form.Label>Book Search</Form.Label>
                              <Form.Control ref="searchBox" type="text" placeholder="Enter book title" />
                         </Form.Group>
                         <div className={'buttonArea'}>
                              <Button className={'searchButton'} variant="primary" type="submit">
                                   Search
                              </Button>
                         </div>
                    </Form>
               </div>
          </Card>
     );
}

export default Search;
