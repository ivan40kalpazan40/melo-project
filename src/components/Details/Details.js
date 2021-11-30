import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as loadApiService from '../../services/loadApiServices';

const Details = () => {
  const image =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';

  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(true);
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
  }, []);
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
                <img class='ui large centered image' src={image} />
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
                        {group.name}
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
                        {member.name}
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
                    let weblink = url.includes('facebook') ? (
                      <>
                        <i class='facebook f icon'></i>Facebook
                      </>
                    ) : url.includes('instagram') ? (
                      <>
                        <i class='instagram icon'></i> Instagram
                      </>
                    ) : url.includes('soundcloud') ? (
                      <>
                        <i class='soundcloud icon '></i> Soundcloud
                      </>
                    ) : url.includes('tumblr') ? (
                      <>
                        <i class='tumblr icon '></i> Tumblr
                      </>
                    ) : url.includes('twitter') ? (
                      <>
                        <i class='twitter icon'></i> Twitter
                      </>
                    ) : url.includes('vevo') ? (
                      'Vevo'
                    ) : url.includes('wikipedia') ? (
                      <>
                        <i class='wikipedia w icon'></i> Wikipedia
                      </>
                    ) : url.includes('youtube') ? (
                      <>
                        <i className='youtube icon'></i>Youtube
                      </>
                    ) : url.includes('bandcamp') ? (
                      <>
                        <i class='bandcamp icon'></i>Bandcamp
                      </>
                    ) : url.includes('spotify') ? (
                      'Spotify'
                    ) : url.includes('deezer') ? (
                      'Deezer'
                    ) : url.includes('myspace') ? (
                      'Myspace'
                    ) : url.includes('reverbnation') ? (
                      'Reverbnation'
                    ) : url.includes('mixcloud') ? (
                      'Mixcloud'
                    ) : url.includes('audioculture') ? (
                      'audioculture'
                    ) : url.includes('last.fm') ? (
                      <>
                        <i className='lastfm icon'></i>Last.fm
                      </>
                    ) : url.includes('discogs') ? (
                      'Discogs'
                    ) : url.includes('flickr') ? (
                      <>
                        <i className='flickr icon'></i>Flickr
                      </>
                    ) : url.includes('whosampled') ? (
                      'WhoSampled'
                    ) : url.includes('lafonoteca') ? (
                      'lafonoteca'
                    ) : url.includes('wobblyweb') ? (
                      'wobbly web'
                    ) : url.includes('linkedin') ? (
                      <>
                        <i className='linkedin icon'></i>LinkedIn
                      </>
                    ) : (
                      'Official website'
                    );

                    return (
                      <p>
                        <a className='ui label black' href={url}>
                          {weblink}
                        </a>
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className='row'>
                <div className='column'>Add to Wishlist?</div>
                <div className='column'>Mighty Mighty Bosstones</div>
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
