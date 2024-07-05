//import '@spectrum-css/topmenu';
//import './TopMenu.css';
import profile from '../../assets/images/profile.png'

const TopMenu = () => {
  return (
    <div className="spectrum-TopMenu">
      <div className="spectrum-TopMenu-logo">hava havai</div>
      <div className="spectrum-TopMenu-profile">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default TopMenu;
