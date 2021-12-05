import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { ArtistContext } from '../../context/Artist/ArtistContext';
import AddArtist from './AddArtist';
import { UserContext } from '../../context/User/UserContext';
const SingleCard = ({ artist, image }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentArtist, setCurrentArtist] = useContext(ArtistContext);

  const clickDetails = (e) => {
    setCurrentArtist(artist);
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
          <Link to={`/artists/${artist.id}/details`} onClick={clickDetails}>
            {artist.title}
          </Link>
        </div>
        <div className='meta'>
          <a>{artist.type}</a>
        </div>
      </div>
      <div className='extra content'>
        <span className='right floated'>Joined in 2013</span>
        {isAuth ? <AddArtist /> : ''}
      </div>
    </div>
  );
};

export default SingleCard;
