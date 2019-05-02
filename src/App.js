import React from 'react';
import Card from 'react-bootstrap/Card'
import NavBar from './components/NavBar';
import Search from './components/Search';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className={'content'}>
        <Card body className={'cardClass'}>
          <div className={'titleText'}>(React) Google Books Search</div>
          <div className={'subTitleText'}>Search for and Save Books of Interest</div>
        </Card>
        <Search />
        <Card body className={'cardClass'}>
          <div className={'resultsTitle'}>Results</div>
          <Book title={'Harry Potter'} authors={['JFK']} />
          <Book title={'Parry Hotter'} authors={['Author1', 'Author2']} />
          <Book title={'ASDGASGAS'} authors={['JFK']} />
          <Book title={'12412412'} authors={['JFK', 'asdgasg', 'asdgas']} />
        </Card>
      </div>
    </div>
  );
}

export default App;
