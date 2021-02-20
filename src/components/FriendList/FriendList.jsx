import PropTypes from 'prop-types';


const FriendList = ({friends}) => {

    return <ul className="friend-list">
    
        {friends.map(({avatar, name, isOnline, id}) => <li className="item" key ={id}>
  <span className={isOnline ? "status online" : "status offline"}></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
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