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
      {formstate&&<iframe width="540" height="305" src="https://4cd09f9c.sibforms.com/serve/MUIEAMJBPMay59AaWhxbd-WBrHozc9PoHP8aqGrPHfMB_t3vTcTAg4XV4Z3svVJPE83KUq3oQDQHe-PIqa7QY5_WvZxvV2vi8uyaH58uVtsTtqUiwxfCOgJ5JdQ0Cg_uj82fB95M8eWhMnNFiXt7Y-gWtcjQ8lgrpyDGsAOtHvrFFKI8WKcnGMu3XIqkoPTCvq1vUfvLm8loCrf2" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
