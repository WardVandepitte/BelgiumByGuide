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
      {formstate&&<iframe width="540" height="900" src="https://4cd09f9c.sibforms.com/serve/MUIEAOgN002-1_kdPzi0IQI0V-nY0sTV46iu_p76ieS1zxfszBfHLeN8tdLQKNBm5KV7ClIRDKWJkrHKsIu1Tf9IvB_labeSRiXn11hcUhzHJixDy9da1LoR_nABWhm2iv1U01IBAvw9XJXqHuEhzcBQy7YaqmLipF1rFkYbhP5cb5CNGygOA44Bs3malz7xLgXwwPLhfGOZ0LL8" frameborder="0" scrolling="auto" allowfullscreen style={{ display: 'block',marginLeft: 'auto',marginRight: 'auto', maxWidth: '100%'}}></iframe>}
    </div>
  );
};

export default EmailOptin;
