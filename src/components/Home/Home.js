const Home = ({ isAuth }) => {
  const image =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';
  return (
    <div className='ui container '>
      <h1 class='ui center aligned header'>
        melo
        <div class='sub header'>
          The social network to keep track of your favorite artists and music
        </div>
      </h1>
      <div class='ui segment'>
        {/* <div class='ui left dividing rail'>
            <div class='ui right aligned segment'>
              <i class='music icon'> </i> Find your artist
            </div>
          </div> */}

        <div class='ui three column  stackable padded grid'>
          <div class='ui link cards'>
            <div class='card column'>
              <div class='image'>
                <img src={image} />
              </div>
              <div class='content'>
                <div class='header'>Matt Giampietro</div>
                <div class='meta'>
                  <a>Friends</a>
                </div>
                <div class='description'>
                  Matthew is an interior designer living in New York.
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
            <div class='card column'>
              <div class='image'>
                <img src={image} />
              </div>
              <div class='content'>
                <div class='header'>Molly</div>
                <div class='meta'>
                  <span class='date'>Coworker</span>
                </div>
                <div class='description'>
                  Molly is a personal assistant living in Paris.
                </div>
              </div>
              <div class='extra content'>
                <span class='right floated'>Joined in 2011</span>
                <span>
                  <i class='user icon'></i>
                  35 Friends
                </span>
              </div>
            </div>
            <div class='card column'>
              <div class='image'>
                <img src={image} />
              </div>
              <div class='content'>
                <div class='header'>Molly</div>
                <div class='meta'>
                  <span class='date'>Coworker</span>
                </div>
                <div class='description'>
                  Molly is a personal assistant living in Paris.
                </div>
              </div>
              <div class='extra content'>
                <span class='right floated'>Joined in 2011</span>
                <span>
                  <i class='user icon'></i>
                  35 Friends
                </span>
              </div>
            </div>
            <div class='card column'>
              <div class='image'>
                <img src={image} />
              </div>
              <div class='content'>
                <div class='header'>Elyse</div>
                <div class='meta'>
                  <a>Coworker</a>
                </div>
                <div class='description'>
                  Elyse is a copywriter working in New York.
                </div>
              </div>
              <div class='extra content'>
                <span class='right floated'>Joined in 2014</span>
                <span>
                  <i class='user icon'></i>
                  151 Friends
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
