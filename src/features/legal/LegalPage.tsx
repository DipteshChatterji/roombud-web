import { Navigate, useParams } from 'react-router-dom';
import { MarkdownContent } from '../../shared/components/MarkdownContent';
import { legalDocBySlug, type LegalDocSlug } from './legalDocs';
import styles from './LegalPage.module.css';

function isLegalDocSlug(value: string | undefined): value is LegalDocSlug {
  return value !== undefined && value in legalDocBySlug;
}

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!isLegalDocSlug(slug)) {
    return <Navigate to="/" replace />;
  }

  const doc = legalDocBySlug[slug];

  return (
    <section className={styles.page}>
      <p className={styles.meta}>{doc.title}</p>
      <MarkdownContent content={doc.content} />
    </section>
  );
}
