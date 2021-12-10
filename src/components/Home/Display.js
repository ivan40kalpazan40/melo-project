import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/Data/DataContext';
import { AuthContext } from '../../context/Auth/authContext';

import * as loadApiServices from '../../services/loadApiServices';
import SingleCard from './SingleCard';

const Display = () => {
  const { user, token } = useContext(AuthContext);
  const [data, setData] = useContext(DataContext);
  useEffect(async () => {
    const response = await loadApiServices.getProducts();
    console.log(response.results);
    setData(response.results);
  }, []);
  const image =
    'https://png.pngtree.com/element_our/png_detail/20180905/rock-group-music-band-png_82645.jpg';

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
