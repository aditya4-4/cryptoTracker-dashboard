import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import './styles.css';
function Footer() {
  return (
    <div className='footer'>
      <h2 className="logo">CryptoTracker<span>.</span></h2>
      <div className="social-icon">
        <FacebookIcon />
        <EmailIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  )
}

export default Footer