import '@spectrum-css/page';
import { Link } from 'react-router-dom';
import TopMenu from '../TopMenu';
import SideMenu from '../SideMenu';
import './index.css';

const Home = () => {
    return (
        <div className='main-container'>
            <TopMenu />
            <div className='app-container'>
                <SideMenu />
                <div className="spectrum-Page">
                    <div className='top-section'>
                        <h2 className="spectrum-Page-title">Airports</h2>
                        <div>
                            <button className='button add'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                    <title>S Add 18 N</title>
                                    <rect id="Canvas" fill="#ffffff" opacity="0" width="18" height="18" />
                                    <path class="fill" d="M14.5,8H10V3.5A.5.5,0,0,0,9.5,3h-1a.5.5,0,0,0-.5.5V8H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8v4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V10h4.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,8Z" />
                                </svg>
                                Add Items</button>
                        </div>
                    </div>
                    <table className="spectrum-Table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>
                                    <div className='airport'>
                                        All Airport   <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                            <title>S ArrowDown 18 N</title>
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                            <path class="fill"
                                                d="M12,10V1.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V10H2.5035a.25.25,0,0,0-.177.427L9,17.1l6.673-6.673A.25.25,0,0,0,15.4965,10Z" />
                                        </svg>
                                    </div>
                                </th>
                                <th>Country</th>
                                <th>Code</th>
                                <th>Terminals</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Indra Gandhi International Airport</td>
                                <td>India</td>
                                <td>DEL</td>
                                <td>3</td>
                                <td>
                                    <Link to={`airport/${'Indra Gandhi International Airport'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" id="S_Edit_22_N" viewBox="0 0 22 22" width="22">
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="22" height="22" /><path class="fill" d="M19.261,5.982,16.017,2.738a.682.682,0,0,0-.487-.2h-.022a.773.773,0,0,0-.522.229L4.233,13.522a.57.57,0,0,0-.142.237L2.528,19c-.064.212.259.478.441.478a.2.2,0,0,0,.035,0c.155-.036,4.427-1.319,5.24-1.564a.552.552,0,0,0,.233-.14L19.231,7.013a.772.772,0,0,0,.227-.5A.69.69,0,0,0,19.261,5.982ZM4,18.005l1.13-3.788,2.656,2.65C6.569,17.232,5.049,17.691,4,18.005Z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                        <title>S Delete 18 N</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Dubai International Airport</td>
                                <td>UAE</td>
                                <td>DXB</td>
                                <td>5</td>
                                <td>
                                    <Link to={`airport/${'Dubai International Airport'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" id="S_Edit_22_N" viewBox="0 0 22 22" width="22">
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="22" height="22" /><path class="fill" d="M19.261,5.982,16.017,2.738a.682.682,0,0,0-.487-.2h-.022a.773.773,0,0,0-.522.229L4.233,13.522a.57.57,0,0,0-.142.237L2.528,19c-.064.212.259.478.441.478a.2.2,0,0,0,.035,0c.155-.036,4.427-1.319,5.24-1.564a.552.552,0,0,0,.233-.14L19.231,7.013a.772.772,0,0,0,.227-.5A.69.69,0,0,0,19.261,5.982ZM4,18.005l1.13-3.788,2.656,2.65C6.569,17.232,5.049,17.691,4,18.005Z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                        <title>S Delete 18 N</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Heathrow Airport</td>
                                <td>England</td>
                                <td>LHR</td>
                                <td>6</td>
                                <td>
                                    <Link to={`airport/${'Heathrow Airport'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" id="S_Edit_22_N" viewBox="0 0 22 22" width="22">
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="22" height="22" /><path class="fill" d="M19.261,5.982,16.017,2.738a.682.682,0,0,0-.487-.2h-.022a.773.773,0,0,0-.522.229L4.233,13.522a.57.57,0,0,0-.142.237L2.528,19c-.064.212.259.478.441.478a.2.2,0,0,0,.035,0c.155-.036,4.427-1.319,5.24-1.564a.552.552,0,0,0,.233-.14L19.231,7.013a.772.772,0,0,0,.227-.5A.69.69,0,0,0,19.261,5.982ZM4,18.005l1.13-3.788,2.656,2.65C6.569,17.232,5.049,17.691,4,18.005Z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                        <title>S Delete 18 N</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Istanbul Airport</td>
                                <td>Turkey</td>
                                <td>IST</td>
                                <td>3</td>
                                <td>
                                    <Link to={`airport/${'Istanbul Airport'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" id="S_Edit_22_N" viewBox="0 0 22 22" width="22">
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="22" height="22" /><path class="fill" d="M19.261,5.982,16.017,2.738a.682.682,0,0,0-.487-.2h-.022a.773.773,0,0,0-.522.229L4.233,13.522a.57.57,0,0,0-.142.237L2.528,19c-.064.212.259.478.441.478a.2.2,0,0,0,.035,0c.155-.036,4.427-1.319,5.24-1.564a.552.552,0,0,0,.233-.14L19.231,7.013a.772.772,0,0,0,.227-.5A.69.69,0,0,0,19.261,5.982ZM4,18.005l1.13-3.788,2.656,2.65C6.569,17.232,5.049,17.691,4,18.005Z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                        <title>S Delete 18 N</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Rajiv Gandhi International Airport</td>
                                <td>Texas</td>
                                <td>DFW</td>
                                <td>14</td>
                                <td>
                                    <Link to={`airport/${'Rajiv Gandhi International Airport'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" id="S_Edit_22_N" viewBox="0 0 22 22" width="22">
                                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="22" height="22" /><path class="fill" d="M19.261,5.982,16.017,2.738a.682.682,0,0,0-.487-.2h-.022a.773.773,0,0,0-.522.229L4.233,13.522a.57.57,0,0,0-.142.237L2.528,19c-.064.212.259.478.441.478a.2.2,0,0,0,.035,0c.155-.036,4.427-1.319,5.24-1.564a.552.552,0,0,0,.233-.14L19.231,7.013a.772.772,0,0,0,.227-.5A.69.69,0,0,0,19.261,5.982ZM4,18.005l1.13-3.788,2.656,2.65C6.569,17.232,5.049,17.691,4,18.005Z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                        <title>S Delete 18 N</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
