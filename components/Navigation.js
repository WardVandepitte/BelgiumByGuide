import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveMovies = {
    en: 'Cities',
    nl: 'Steden',
  }
  const resolvePeople = {
    en: 'Places',
    nl: 'Plaatsen',
  }
  const resolveNews = {
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
            <Image src="/BBBLogo.png" alt="BBB Logo" width="128" height="25" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/movies`} className={styles.movie}>{resolveMovies[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/people`} className={styles.personality}>{resolvePeople[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
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
