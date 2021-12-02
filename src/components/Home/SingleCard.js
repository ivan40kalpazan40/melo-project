import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import * as dataServices from '../../services/dataServices';
import AddArtist from './AddArtist';
import { UserContext } from '../../context/User/UserContext';
const SingleCard = ({ artist, image }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const addArtistHandler = async (e) => {
    console.log(e.target);
    console.log(artist);
    const { id, title, thumb, cover_image, type } = artist;
    try {
      const isArtist = await dataServices.getArtist(currentUser.uid, id);
    } catch (error) {
      console.log(error.message);
      const asrtistEntry = await dataServices.addArtist(
        id,
        title,
        thumb,
        cover_image,
        type,
        currentUser.uid
      );
    }
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
        {isAuth ? <AddArtist addArtistHandler={addArtistHandler} /> : ''}
      </div>
    </div>
  );
};

export default SingleCard;
