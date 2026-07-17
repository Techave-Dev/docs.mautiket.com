import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Panduan Pengguna',
    description: (
      <>
        Pelajari cara menggunakan platform MauTiket dari awal hingga mahir.
        Temukan tutorial langkah demi langkah untuk membeli tiket, mengelola event, dan lainnya.
      </>
    ),
    link: '/docs/intro',
    linkText: 'Mulai Belajar',
  },
  {
    title: 'API Reference',
    description: (
      <>
        Dokumentasi lengkap untuk integrasi API MauTiket.
        Bangun aplikasi sendiri yang terhubung dengan platform ticketing kami.
      </>
    ),
    link: '/docs/intro',
    linkText: 'Lihat API',
  },
  {
    title: 'FAQ & Dukungan',
    description: (
      <>
        Temukan jawaban atas pertanyaan umum atau hubungi tim dukungan kami
        jika membutuhkan bantuan lebih lanjut.
      </>
    ),
    link: '/docs/intro',
    linkText: 'Lihat FAQ',
  },
];

function Feature({title, description, link, linkText}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className={styles.featureLink} to={link}>
          {linkText} →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
