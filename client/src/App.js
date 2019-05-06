import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import NavBar from './components/NavBar';
import Search from './components/Search';
import Book from './components/Book';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         searchValue: '',
         books: [],
    };
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  }

  getBooks = e => {
    e.preventDefault();
    axios.request({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchValue
    }).then((response) => {
        console.log("response: ", response.data.items);
        this.setState({ books: response.data.items });
    }).catch((error) => {
        console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <div className={'content'}>
          <Card body className={'cardClass'}>
            <div className={'titleText'}>(React) Google Books Search</div>
            <div className={'subTitleText'}>Search for and Save Books of Interest</div>
          </Card>
          <Search handleChange={this.handleChange} getBooks={this.getBooks} />
          <Card body className={'cardClass'}>
            <div className={'resultsTitle'}>Results</div>
            {
              this.state.books.map((book, idx) => (
                <Book
                key={idx}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                canonicalVolumeLink={book.volumeInfo.canonicalVolumeLink}
              />
              ))
            }
            
          </Card>
        </div>
      </div>
    );
  }
}

export default App;