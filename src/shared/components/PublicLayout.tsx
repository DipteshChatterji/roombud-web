import { Link, Outlet } from 'react-router-dom';
import { legalDocs } from '../../features/legal/legalDocs';
import styles from './PublicLayout.module.css';

export function PublicLayout() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand}>
            RoomBud
          </Link>
          <nav className={styles.nav} aria-label="Legal pages">
            {legalDocs.map((doc) => (
              <Link key={doc.slug} to={`/${doc.slug}`} className={styles.navLink}>
                {doc.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Roombud Technologies Private Limited</p>
        <p className={styles.footerLinks}>
          <Link to="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms-of-service">Terms</Link>
        </p>
      </footer>
    </div>
  );
}
