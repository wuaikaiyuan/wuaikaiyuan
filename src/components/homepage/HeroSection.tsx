import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hello-world-light.png" />
        <link rel="prefetch" href="/static/landing-page/hello-world-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            吾爱开源
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            免费的 Prompt Engineering 教程
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/docs/👋 Welcome"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Start Learning
            </Link>
          </div>
        </div>
        {/* <div className="flex-1 xl:flex-none">
          <img
            src={`/static/landing-page/hello-world-${colorMode}.png`}
            alt="Preview of prompt"
            width={640}
          />
        </div> */}
      </div>
    </section>
  );
}
