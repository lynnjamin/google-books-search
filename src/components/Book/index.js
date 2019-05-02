import React from 'react';
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import './styles.css';


function Book(props) {
  console.log('authors: ', props.authors);
  const authorsString = props.authors.join(', ');
  console.log('authorsString: ', authorsString);

  return (
    <div className={'results'}>
      <div className={'topSection'}>
        <div className={'bookDescription'}>
          <div className={'bookDescriptionTitle'}>{props.title}</div>
          <div className={'bookDescriptionAuthors'}>Written By {authorsString}</div>
        </div>
        <div className={'lovelyButtons'}>
          <Button className={'resultsLeftButton'} variant="primary" type="submit">
              View
          </Button>
          <Button className={'resultsRightButton'} variant="primary" type="submit">
              Save
          </Button>
        </div>
      </div>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="https://i.ytimg.com/vi/EDzLx3hkli0/maxresdefault.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Book;
