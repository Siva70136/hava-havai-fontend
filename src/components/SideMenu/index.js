import Icon from '../../assets/images/Icon.png'
import './index.css';

const SideMenu = () => {
  return (
    <div className="spectrum-SideMenu">
      <div className="spectrum-Menu-item">
        <span className="spectrum-Menu-itemLabel card-container">
          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
            <title>S Home 18 N</title>
            <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
          </svg>
          <span className='nav-item'>Home</span>
          
        </span>
      </div>
      <div className="spectrum-Menu-item card-container">
        <span className="spectrum-Menu-itemLabel ">
          <img src={Icon} alt='Dashboard' className='dashboard' /> 
          <span className='nav-item'>Dashboard</span></span>
      </div>
      <div className="spectrum-Menu-divider"></div>
      <div className="spectrum-Menu-item">
        <span className="spectrum-Menu-itemLabel">Services</span>

        <div className="spectrum-Menu-item">
          <span className="spectrum-Menu-itemLabel">Airports</span>
        </div>
        <div className="spectrum-Menu-item">
          <span className="spectrum-Menu-itemLabel">Videos</span>
        </div>

      </div>
      <div className="spectrum-Menu-divider"></div>
      <div className="spectrum-Menu-item">
        <span className="spectrum-Menu-itemLabel">Others</span>

        <div className="spectrum-Menu-item">
          <span className="spectrum-Menu-itemLabel">List 1</span>
        </div>
        <div className="spectrum-Menu-item">
          <span className="spectrum-Menu-itemLabel">List 2</span>
        </div>
        <div className="spectrum-Menu-item">
          <span className="spectrum-Menu-itemLabel">List 3</span>
        </div>

      </div>
    </div>
  );
};

export default SideMenu;
