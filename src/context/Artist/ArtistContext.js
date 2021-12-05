import { useState, createContext } from 'react';

export const ArtistContext = createContext();

export const ArtistContextProvider = (props) => {
  const [currentArtist, setCurrentArtist] = useState({});
  return (
    <ArtistContext.Provider value={[currentArtist, setCurrentArtist]}>
      {props.children}
    </ArtistContext.Provider>
  );
};
