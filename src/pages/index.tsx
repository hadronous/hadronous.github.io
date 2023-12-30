import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <main className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text--center margin-vert--lg">
              Projects by Hadronous Labs
            </h2>

            <p className="text--center">
              <a href="https://hadronous.github.io/pic-js" target="_blank">
                Pic JS
              </a>{' '}
              is a TypeScript/JavaScript canister testing library for the
              Internet Computer.
            </p>

            <p className="text--center">
              <a href="https://hadronous.github.io/ic-angular" target="_blank">
                IC Angular
              </a>{' '}
              provides native support for Internet Computer applications for
              Angular.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageContent />
    </Layout>
  );
}
