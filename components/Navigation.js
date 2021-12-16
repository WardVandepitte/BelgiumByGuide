import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveCities = {
    en: 'Cities',
    nl: 'Steden',
  }
  const resolvePlaces = {
    en: 'Places',
    nl: 'Plaatsen',
  }
  const resolveEvents = {
    en: 'Events',
    nl: 'Evenementen',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/BBBLogo.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image 
                src="/BBBLogo.png" 
                alt="BBB Logo" 
                width={250}
                height={35.7142857}
                className=""
                />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/cities`} className={styles.movie}>{resolveCities[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/places`} className={styles.personality}>{resolvePlaces[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/events`} className={styles.newsitem}>{resolveEvents[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
