import Image from '../../assets/images/Image.png';
import './index.css'

const TerminalCard = ({ title }) => (
    <div className="terminal-card">
        <img src={Image} alt="Terminal" className="terminal-image" />
        <div>
            <h4>{title}</h4>
            <p>Optional metadata should be two lines.</p>
        </div>
    </div>
);

export default TerminalCard;
