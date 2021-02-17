import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';

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

        <TransactionHistory
            
            items={transactions} />     

        
    </div>

    
};


 
export default App;