import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

const FriendList = ({friends}) => {

    return <ul className={s.FriendList}>
    
        {friends.map(({avatar, name, isOnline, id}) => <li className={s.FriendsListItem} key ={id}>
  <span className={isOnline ? s.Online : s.Offline }></span>
  <img className={s.Avatar} src={avatar} alt={name} width="48" />
            <p className={s.Name}>{name}</p>
</li>)}
    
</ul>
};
 
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired
        }),
    ),
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
    ),
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }),
    ),
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool.isRequired
        }),
    ),
};

export default FriendList;