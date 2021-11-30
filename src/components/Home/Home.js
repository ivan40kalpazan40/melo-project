import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import { DataContext } from '../../context/Data/DataContext';
import * as loadApiServices from '../../services/loadApiServices';
const Home = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [data, setData] = useContext(DataContext);
  useEffect(async () => {
    if (isAuth) {
      setData('You dont know that yet!');
    } else {
      const response = await loadApiServices.getProducts();
      console.log(response.results);
      setData(response.results);
    }
  }, [isAuth]);
  const image =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';

  return (
    <>
      {isAuth ? (
        <h2>More Here soon....</h2>
      ) : (
        <div className='ui container '>
          <h1 className='ui center aligned header'>
            melo
            <div className='sub header'>
              The social network to keep track of your favorite artists and
              music
            </div>
            <p>{isAuth ? 'Authenticated' : 'Not Autenticated'}</p>
          </h1>
          <div className='ui segment'>
            <div className='ui three column  stackable padded grid'>
              <div className='ui link cards'>
                {data.map((artist) => {
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
                          <Link to={`/artists/${artist.id}/details`}>
                            {artist.title}
                          </Link>
                        </div>
                        <div className='meta'>
                          <a>{artist.type}</a>
                        </div>
                      </div>
                      <div className='extra content'>
                        <span className='right floated'>Joined in 2013</span>
                        <span>
                          <i className='user icon'></i>
                          75 Friends
                        </span>
                      </div>
                    </div>
                  );
                })}
                {/* Column */}

                {/* Column */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
