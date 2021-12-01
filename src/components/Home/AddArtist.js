import IconComponent from './IconComponent';

const AddArtist = ({ addArtistHandler }) => {
  return (
    <>
      <span onClick={addArtistHandler}>
        <IconComponent />
      </span>
      <span>Add to favorites</span>
    </>
  );
};

export default AddArtist;
