import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as loadApiService from '../../services/loadApiServices';
import { ArtistContext } from '../../context/Artist/ArtistContext';
import SocialLink from './SocialLink';

const Details = () => {
  const image =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';

  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentArtist, setCurrentArtist] = useContext(ArtistContext);
  const { id } = useParams();
  useEffect(() => {
    loadApiService
      .getArtist(id)
      .then((res) => {
        console.log(res);
        setArtist(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      {loading ? (
        <div className='ui container'>
          <div class='ui loading segment'></div>
        </div>
      ) : Boolean(artist) ? (
        <div className='ui container  details-container'>
          <h1>{artist.name}</h1>
          <div className='ui segment'>
            <div className='ui two column grid'>
              <div className='row'>
                <img
                  class='ui large centered image'
                  src={currentArtist.cover_image}
                />
              </div>
              <div className='row'>
                <div className='column'>Bio</div>
                <div className='column'>
                  {artist.profile || 'No bio available'}
                </div>
              </div>
              {artist.groups ? (
                <div className='row'>
                  <div className='column'>Groups</div>
                  <div className='column'>
                    {artist.groups.map((group) => (
                      <p className='ui center aligned' key={group.id}>
                        <Link to={`/artists/${group.id}/details`}>
                          {group.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              ) : artist.members ? (
                <div className='row'>
                  <div className='column'>Members</div>
                  <div className='column'>
                    {artist.members.map((member) => (
                      <p className='ui center aligned' key={member.id}>
                        <Link to={`/artists/${member.id}/details`}>
                          {member.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className='row'>
                <div className='column'>Social Media</div>
                <div className='column'>
                  {artist.urls?.map((url) => {
                    return <SocialLink url={url} key={url} />;
                  })}
                </div>
              </div>
              <div className='row'>
                <div className='column'>Add to Favorite Artists?</div>
                <div className='column'>
                  <>
                    <i class='heart icon red'> </i>
                  </>
                </div>
              </div>
              <div className='row'>
                <div className='column'>Add to Have List?</div>
                <div className='column'>Mighty Mighty Bosstones</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No artist found</h1>
      )}
    </>
  );
};

export default Details;
