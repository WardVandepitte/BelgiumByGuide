import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/135370/1400x200/63277145f1/bbblogo.png"
            alt="BBGLogo"
            className=""
          />
        </div>
        <p>BelgiumByGuide! The number one site to get to know Belgium.</p>
      </div>
    </footer>



  )
}

export default Footer
