import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
const SingleCard = ({ artist, image }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  return (
    <div className='card column'>
      <div className='image'>
        <img
          src={!artist.thumb ? image : artist.thumb}
          alt='image not available'
        />
      </div>
      <div className='content'>
        <div className='header'>
          <Link to={`/artists/${artist.id}/details`}>{artist.title}</Link>
        </div>
        <div className='meta'>
          <a>{artist.type}</a>
        </div>
      </div>
      <div className='extra content'>
        <span className='right floated'>Joined in 2013</span>
        {isAuth ? (
          <span>
            <i className='heart icon red outline'></i>
            Add to favorites
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SingleCard;
