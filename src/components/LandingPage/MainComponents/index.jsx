import { motion } from "framer-motion";
import Button from "../../Common/Button";
import "./styles.css";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { Link } from "react-router-dom";
function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="flex-btn"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to={'/dashboard'}>
          <Button text={"Dashboard"} />
          </Link>
          
          <Button text={"share"} outlined={true} />
        </motion.div>
      </div>
      <div className="right-component">
        <motion.img src={iphone} alt="iphone" className="iphone" 
        initial={{ y : -8}}
        animate ={{y : 8}}
        transition={{
          type : "smooth",
          repeatType : "mirror",
          duration : 2,
          repeat : Infinity
        }}
        />
        <img src={gradient} alt="gradient" className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
