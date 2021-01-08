import PropTypes from 'prop-types'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { i18n, withTranslation } from '../i18n'
import styles from '../styles/header.module.sass'

const Header = ({t}) => {
  const changeLang = (event) => {
    i18n.changeLanguage(event.currentTarget.value)
  }

  return (
    <div className={styles.navImg}>
    <h1 className={styles.logo}>
      <Link href="/">
        <img src="./IMG_2825.JPG" alt="Logo" className={styles.logoImg} />
      </Link>
    </h1>
    <Navbar />
    <div className={styles.langContainer}>
    <select name="language" id="language" onChange={changeLang}>
      <option value="de">🇩🇪</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
    </select>
      {/* <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button> */}
</div>
  </div>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Header.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Header)