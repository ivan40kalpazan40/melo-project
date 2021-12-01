import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/User/UserContext';

const Profile = () => {
  const image =
    'https://t4.ftcdn.net/jpg/04/44/81/53/360_F_444815348_7eveLiMXu1EgHLp3OyJcBkeTFHsAGMuB.jpg';
  const [currentUser, setCurrentUser] = useContext(UserContext);
  useEffect(async () => {
    await setCurrentUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <div className='ui container'>
      <h1>Welcome {currentUser.email} </h1>
      <div className='ui segment'>
        {Boolean(currentUser?.photoURL) ? (
          <>
            <img
              className='ui medium circular centered image'
              src={currentUser.photoURL}
            />
            <span>dadada</span>
          </>
        ) : (
          <>
            <img className='ui medium circular centered image' src={image} />
            <i class='edit icon'></i> edit photo
          </>
        )}
      </div>
      <div className='ui segment'>
        <h1>General info:</h1>
        <div className='ui two column grid'>
          <div className='row'>
            <div className='ui column right aligned'>Name</div>
            <div className='ui column'>Ivan Skordev</div>
          </div>
          <div className='row'>
            <div className='ui column right aligned'>Email</div>
            <div className='ui column'>demore@abv.bg</div>
          </div>
          <div className='row'>
            <div className='ui column right aligned'>Gender</div>
            <div className='ui column'>Male</div>
          </div>
          <div className='row'>
            <div className='ui column right aligned'>City</div>
            <div className='ui column'>Boston</div>
          </div>
          <div className='row'>
            <div className='ui column right aligned'>Country</div>
            <div className='ui column'>United States</div>
          </div>
        </div>
      </div>
      <div className='ui segment'>
        <h1>Favorite Artists</h1>
        <div className='ui three column grid'>
          <div className='row'>
            <div className='ui column center aligned'>Country</div>
            <div className='ui column center aligned'>United States</div>
            <div className='ui column center aligned'>United States</div>
          </div>
        </div>
      </div>
      <div className='ui segment'>
        <h1>Favorite Tracks</h1>
        <div className='ui three column grid'>
          <div className='row'>
            <div className='ui column center aligned'>Country</div>
            <div className='ui column center aligned'>United States</div>
            <div className='ui column center aligned'>United States</div>
          </div>
        </div>
      </div>
      <div className='ui segment'>
        <h1>Favorite Albums</h1>
        <div className='ui three column grid'>
          <div className='row'>
            <div className='ui column center aligned'>Country</div>
            <div className='ui column center aligned'>United States</div>
            <div className='ui column center aligned'>United States</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
