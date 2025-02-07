import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup'
import SideMenu from '../SideMenu';
import TerminalCard from '../TerminalCard';
import TopMenu from '../TopMenu';
import ServiceForm from '../SerivceForm';
import './index.css'

const Airport = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div className='main-container'>
            <TopMenu />
            <div className="app-container">
                <SideMenu />
                <div className="main-content">
                    <header className="header">
                        Airports &gt;{name}
                    </header>
                    <h1>{name}</h1>
                    <br />
                    <div className='nav-inner-container'>
                        <p className=''>Terminal</p>
                        <p className=''>Transport</p>
                        <p className=''>Contact Details</p>
                    </div>
                    <hr />
                    <br />
                    <div className="terminal-section">
                        <TerminalCard title="Terminal 1" />
                        <TerminalCard title="Terminal 2" />
                        <Popup
                            modal
                            trigger={
                                <button className="add-terminal">+ Add Terminal</button>
                            }
                        >
                            {close => (
                                <>
                                    <div className="confirmation">
                                        <button
                                            type="button"
                                            className="button cross"
                                            onClick={() => close()}
                                            data-testid="close"
                                        >

                                        </button>
                                        <h1 className="popup-head">Terminal Title</h1>
                                        <hr className='line' />
                                        <p className='popup-cap'>Description</p>
                                        <div className="buttons-container">
                                            <div>
                                                <button className="upload-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                                        <title>S UploadToCloud 18 N</title>
                                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M8,16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12H8Z" />
                                                        <path class="fill" d="M14.786,5.5715a3.22315,3.22315,0,0,0-.363.0205A4.072,4.072,0,1,0,6.462,3.974,3.431,3.431,0,0,0,2.2585,8.171,1.9285,1.9285,0,1,0,1.9285,12H8V9H5.85a.35.35,0,0,1-.35-.35.34252.34252,0,0,1,.1035-.245l3.234-2.8425a.25.25,0,0,1,.325,0l3.234,2.8425A.34252.34252,0,0,1,12.5,8.65a.35.35,0,0,1-.35.35H10v3h4.786a3.2145,3.2145,0,0,0,0-6.4285Z" />
                                                    </svg>
                                                    <span className='text'>Upload Image</span></button>
                                            </div>
                                            <div className='buttons-inner-container'>
                                                <button
                                                    type="button"
                                                    className="cancel-button button"
                                                    onClick={() => close()}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="continue-button button"

                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Popup>

                    </div>
                    <ServiceForm />
                </div>
            </div>
        </div>
    );
}

export default Airport;
