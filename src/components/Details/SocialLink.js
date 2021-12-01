import { urlConfig } from '../../config/utils.config';
const SocialLink = ({url}) => {
  return (
    <p>
      <a className='ui label black' href={url}>
        {urlConfig(url)}
      </a>
    </p>
  );
};

export default SocialLink;
