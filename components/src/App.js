
import './App.css';
import { fullAdress,fullName,profilephoto } from './Data';
import FullName from './components/Profile/FullName';
import Adress from './components/Profile/Adress';
import ProfilePhoto from './components/Profile/ProfilePhoto';

const App = () => (
 <>
<div className="profile">
   <ProfilePhoto />
   <FullName/>
   <Adress/>
   </div>
 </>
);
export default App;
