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
      {formstate&&<iframe width="540" height="305" src="https://4cd09f9c.sibforms.com/serve/MUIEAEtYTE8NKM6Jkugd162D6W3iRJ2jjktsp0NCM0fCDBTgW0oyG5JTiLlzpT_PzSHYGQAyuxMfx1Ave2zyrQECj0z7b9NqHm_O_YQmsR3plD1lHIzy5wrTt7cyIHEZH1xb-7LRkHmdDJl4wP2-OKAYk6GQ5Dca_6nkTXfWt6NMthVFEEC-3odZXo_GyNExyGscIVAJ0GZvX5nX" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
