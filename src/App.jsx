import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

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

    </div>
};
 
export default App;