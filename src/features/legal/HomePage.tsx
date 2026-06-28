import { Link } from 'react-router-dom';
import { coreLegalDocs, policyDocs } from './legalDocs';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>RoomBud</p>
      <h1>Legal &amp; Policy Center</h1>
      <p className={styles.lead}>
        Public documentation for privacy, terms, and platform policies. These pages
        are built from the same markdown sources used by the RoomBud backend.
      </p>

      <div className={styles.grid}>
        <section>
          <h2>Core documents</h2>
          <ul>
            {coreLegalDocs.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/${doc.slug}`}>{doc.title}</Link>
                <p>{doc.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Platform policies</h2>
          <ul>
            {policyDocs.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/${doc.slug}`}>{doc.title}</Link>
                <p>{doc.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
