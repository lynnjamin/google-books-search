import React from 'react';
import Card from 'react-bootstrap/Card'
import NavBar from '../NavBar';
import Book from '../Book';
import './styles.css';

function App() {
  return (
    <div className="savedMain">
      <NavBar />
      <div className={'savedContent'}>
        <Card body className={'savedCardClass'}>
          <div className={'savedTitleText'}>(React) Google Books Search</div>
          <div className={'savedSubTitleText'}>Search for and Save Books of Interest</div>
        </Card>
        <Card body className={'savedCardClass'}>
          <div className={'savedResultsTitle'}>Results</div>
          <Book title={'Parry Hotter'} authors={['Author1', 'Author2']} />
          <Book title={'12412412'} authors={['JFK', 'asdgasg', 'asdgas']} />
        </Card>
      </div>
    </div>
  );
}

export default App;
