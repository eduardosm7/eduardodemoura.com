import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode, setColorMode} = useColorMode();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img src={"/img/banner-white.png" ? colorMode === "dark" : "/img/banner.png"} height="100px"/> */}
        <img src={colorMode === "dark" ? "/img/banner.png" : "/img/banner-white.png"} height="100px"/>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
