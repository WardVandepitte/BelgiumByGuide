import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<<iframe width="540" height="305" src="https://4cd09f9c.sibforms.com/serve/MUIEAPseK0L1TdyJ3mBj4JURkT_XfypAnAPxrk7ApbxbnjRgknuxb70etEGve5Fcj4zBUlZhXGOE4mOaf4gmJT8Ngby5EnBFzmDVipeRW_3ttTUiyKFUdrC-fofHdRWNlDEb-oj0t1XYw4BNIwNde--uV4WU670bXW-S4uvrVaI-7YjHHzS-ZGiInBcX28OSWg6XF4u6y8wLQN9F" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
      
    </div>
  );
};

export default EmailOptin;
