import PropTypes from 'prop-types';


const FriendList = ({friends}) => {

    return <ul className="friend-list">
    
        {friends.map(({avatar, name, isOnline}) => <li classNAme="item">
  <span classNAme="status"></span>
  <img classNAme="avatar" src={avatar} alt={name} width="48" />
            <p classNAme="name">{name}</p>
</li>)}
    
</ul>
};
 
FriendList.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
};

export default FriendList;