import communityGuidelines from '../../../content/COMMUNITY_GUIDELINES.md?raw';
import contentModeration from '../../../content/CONTENT_MODERATION_POLICY.md?raw';
import dataDeletion from '../../../content/DATA_DELETION_POLICY.md?raw';
import privacyPolicy from '../../../content/PRIVACY_POLICY.md?raw';
import safetyPolicy from '../../../content/SAFETY_POLICY.md?raw';
import termsOfService from '../../../content/TERMS_OF_SERVICE.md?raw';

export type LegalDocSlug =
  | 'privacy'
  | 'terms-of-service'
  | 'community-guidelines'
  | 'content-moderation'
  | 'data-deletion'
  | 'safety';

export type LegalDoc = {
  slug: LegalDocSlug;
  title: string;
  description: string;
  content: string;
  category: 'core' | 'policy';
};

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'How RoomBud collects, uses, and protects your data.',
    content: privacyPolicy,
    category: 'core',
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description: 'The agreement governing use of the RoomBud platform.',
    content: termsOfService,
    category: 'core',
  },
  {
    slug: 'community-guidelines',
    title: 'Community Guidelines',
    description: 'Standards for respectful and safe interactions.',
    content: communityGuidelines,
    category: 'policy',
  },
  {
    slug: 'content-moderation',
    title: 'Content Moderation Policy',
    description: 'How we review and handle reported content.',
    content: contentModeration,
    category: 'policy',
  },
  {
    slug: 'data-deletion',
    title: 'Data Deletion Policy',
    description: 'How to delete your account and associated data.',
    content: dataDeletion,
    category: 'policy',
  },
  {
    slug: 'safety',
    title: 'Safety Policy',
    description: 'Safety practices and reporting on RoomBud.',
    content: safetyPolicy,
    category: 'policy',
  },
];

export const legalDocBySlug = Object.fromEntries(
  legalDocs.map((doc) => [doc.slug, doc]),
) as Record<LegalDocSlug, LegalDoc>;

export const coreLegalDocs = legalDocs.filter((doc) => doc.category === 'core');
export const policyDocs = legalDocs.filter((doc) => doc.category === 'policy');
