import React, { useState } from 'react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="hero" className="home-layout">
      {/* Left Column: Minimal Typography & Bio */}
      <div className="home-copy">
        <h1>{HERO_DATA.name}</h1>

        <div id="about">
          <p>
            I am a <strong>Software Engineer</strong> specializing in backend architecture,
            event-driven microservices, and full-stack product interfaces with C#/.NET,
            TypeScript, React, Kafka, Redis, and SQL.
          </p>

          <p>
            I turn complex product requirements into reliable systems: architecting high-throughput
            APIs in C# and ASP.NET Core, designing Kafka-decoupled microservices processing{' '}
            <strong>10,000+ daily transactions</strong>, and shipping modern web interfaces.
          </p>

          <p>
            Recent work includes Wallet-as-a-Service systems, GrowthGIA commerce APIs, and
            AI integrations. See <a href="#work">featured work</a>, <a href="#awards">award-winning builds</a>,
            explore recent <a href="#roles">roles</a>, or open my{' '}
            <a href={HERO_DATA.resumeUrl} target="_blank" rel="noreferrer">
              resume
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Column: Clean Circular Portrait */}
      {imageFailed ? (
        <div className="portrait flex items-center justify-center font-mono text-lg font-bold">
          YO
        </div>
      ) : (
        <img
          className="portrait"
          src="/portfolio_pics.jpg"
          alt={HERO_DATA.fullName}
          width={140}
          height={140}
          loading="eager"
          onError={() => setImageFailed(true)}
        />
      )}
    </section>
  );
};

export default Hero;
