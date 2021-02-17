import PropTypes from 'prop-types';


const FriendList = ({friends}) => {

    return <ul className="friend-list">
    
        {friends.map(({avatar, name, isOnline, id}) => <li className="item" key ={id}>
  <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
</li>)}
    
</ul>
};
 
FriendList.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
};

export default FriendList;