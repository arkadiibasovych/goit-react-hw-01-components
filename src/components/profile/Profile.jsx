import PropTypes from 'prop-types';


const Profile = ({ name , tag , location , avatarUrl, followersCount , viewsCount , likesCount}) => {
 
  return(<div className="profile">
  <div className="description">
    <img
      src={avatarUrl}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats"> 
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followersCount}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{viewsCount}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likesCount}</span>
    </li>
  </ul>
</div>)
};

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followersCount: PropTypes.number,
  viewsCount: PropTypes.number,
  likesCount: PropTypes.number,
  
};

export default Profile;