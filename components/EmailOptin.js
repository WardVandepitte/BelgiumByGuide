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
      {formstate&&<iframe width="540" height="305" src="https://4cd09f9c.sibforms.com/serve/MUIEADxcIVYOIpMd36YPUaS6k2EBaRTji49JBPO0fpEht7fMx2U8Z4Cmt9602Rrmu_ZVhj4UKPad4E-1UWWrFOEh3TKgiB3oBAjQbIu5Uzwlo7wBFL0HG7kHbTqiWlPt7gWT1LNrD1cW8a46B2r4AkpPKZRy85ypgIP3NSRcCFBBZOfLAnximooGVpoMns7_2ZBg2QWste6KecRp" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
