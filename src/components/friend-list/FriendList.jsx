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
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default FriendList;