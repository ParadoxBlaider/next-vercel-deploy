import Link from "next/link"
import {MainLayout} from "../../components/layout/MainLayout"
import styles from '../../styles/Home.module.css'

const ContactPage = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Ir a <Link href="/">Contact!</Link>

      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  )
}

export default ContactPage
