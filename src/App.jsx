import Profile from './components/Profile';
import user from './components/user.json';

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
    </div>
};
 
export default App;