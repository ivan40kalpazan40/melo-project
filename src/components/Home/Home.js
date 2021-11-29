import { useContext, useEffect } from 'react';
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
          <h1 class='ui center aligned header'>
            melo
            <div class='sub header'>
              The social network to keep track of your favorite artists and
              music
            </div>
            <p>{isAuth ? 'Authenticated' : 'Not Autenticated'}</p>
          </h1>
          <div class='ui segment'>
            <div class='ui three column  stackable padded grid'>
              <div class='ui link cards'>
                {data.map((artist) => {
                  return (
                    <div class='card column'>
                      <div class='image'>
                        <img src={artist.thumb} />
                      </div>
                      <div class='content'>
                        <div class='header'>{artist.title}</div>
                        <div class='meta'>
                          <a>{artist.type}</a>
                        </div>
                      </div>
                      <div class='extra content'>
                        <span class='right floated'>Joined in 2013</span>
                        <span>
                          <i class='user icon'></i>
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
