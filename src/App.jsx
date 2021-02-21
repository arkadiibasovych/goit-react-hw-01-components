import Profile from './components/Profile/Profile.jsx';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList.jsx';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
    return <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatarUrl={user.avatar}
            followersCount={user.stats.followers}
            viewsCount={user.stats.views}
            likesCount={user.stats.likes}
        />
        <Statistics   
            title="Upload stats"
            stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
};

export default App;