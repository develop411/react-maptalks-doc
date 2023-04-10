import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import codeLight from '@site/static/img/img-code.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  console.log(siteConfig)
  return (
    <header className="">
      <div className={clsx("md:flex md:justify-between px-12", styles.heroBanner)}>
        <div className="flex flex-col flex-1  flex-row justify-center">
          <h1 className="text-3xl md:text-6xl font-bold">{siteConfig.title}</h1>
          <p className="text-2xl py-4 text-slate-500">{siteConfig.tagline}</p>

          <div className="py-10">
            <Link
              className="bg-[#475a76] hover:bg-[#3c4d64]  rounded-md text-gray-500 px-4 py-3"
              to="/docs/category/getting-started"
            >
              <span className="px-3 text-white font-bold hover:decoration-0">  Get started</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 center">
          <img className={clsx("drop-shadow-2xl", styles.banerImage1)} src={codeLight}/>
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`React Maptalks | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
