import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/Data/DataContext';
import { AuthContext } from '../../context/Auth/AuthContext';

import * as loadApiServices from '../../services/loadApiServices';
import SingleCard from './SingleCard';

const Display = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  useEffect(async () => {
    const response = await loadApiServices.getProducts();
    console.log(response.results);
    setData(response.results);
  }, [isAuth]);
  const image =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';
  const [data, setData] = useContext(DataContext);
  return (
    <div className='ui segment'>
      <div className='ui three column  stackable padded grid'>
        <div className='ui link cards'>
          {data.map((artist) => {
            return <SingleCard artist={artist} image={image} key={artist.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Display;
