import PropTypes from 'prop-types';
import s from './Profile.module.css';

console.log(s);


const Profile = ({ name , tag , location , avatarUrl, followersCount , viewsCount , likesCount}) => {
 
  return(<div className={s.profile}>
    <div className={s.description}>
    <img
      src={avatarUrl}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}> 
    <li className={s.statsItem}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{followersCount}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{viewsCount}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likesCount}</span>
    </li>
  </ul>
</div>)
};

Profile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  viewsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  
};

export default Profile;