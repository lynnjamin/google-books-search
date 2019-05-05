import React from 'react';
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import './styles.css';


function Book(props) {
  const authorsString = props.authors.join(', ');
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
          src={props.thumbnail}
          alt="Generic placeholder"
        />
        <Media.Body>
          <p>
            {props.description}
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Book;