import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import AddArtist from './AddArtist';
const SingleCard = ({ artist, image }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const outline = 'outline';
  const addArtistHandler = (e) => {
    console.log(e.target);
  };
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
          <AddArtist addArtistHandler={addArtistHandler} outline={outline} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SingleCard;
