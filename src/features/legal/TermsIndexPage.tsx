import { Link } from 'react-router-dom';
import { coreLegalDocs, policyDocs } from './legalDocs';
import styles from './TermsIndexPage.module.css';

export function TermsIndexPage() {
  return (
    <section className={styles.section}>
      <h1>Terms and Conditions</h1>
      <p className={styles.intro}>
        RoomBud&apos;s legal framework includes our Terms of Service and the
        platform policies below.
      </p>

      <div className={styles.group}>
        <h2>Primary agreement</h2>
        <ul>
          {coreLegalDocs
            .filter((doc) => doc.slug === 'terms-of-service')
            .map((doc) => (
              <li key={doc.slug}>
                <Link to={`/${doc.slug}`}>{doc.title}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.group}>
        <h2>Related policies</h2>
        <ul>
          {policyDocs.map((doc) => (
            <li key={doc.slug}>
              <Link to={`/${doc.slug}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
