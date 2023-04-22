import { Profile } from "./profile/Profile";
import user from './components/profile/user.json';

export const App = () => {
  return (
    <div>
         <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};