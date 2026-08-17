<script setup lang="ts">
const hero = {
  badge: 'version 0.0.1',
  title: 'BPM Manifesto'
}

const principles = [
  {
    value: 'Fostering Business-IT Alignment',
    over: 'Developer-driven Process Automation',
    text: 'Prioritizing the understanding and modeling of business domains rather than focusing solely on the technical aspects of integration. This emphasizes the harmony between business needs and IT capabilities, rather than focusing on solutions that don’t reflect real-world processes.',
    href: '/docs/principles/business-it-alignment'
  },
  {
    value: 'Open Standards',
    over: 'Proprietary Solutions',
    text: 'Advocating for the use of open, universally accepted standards which promote interoperability and long-term sustainability over closed, proprietary systems.',
    href: '/docs/principles/open-standards'
  },
  {
    value: 'Process Automation Best Practices',
    over: 'Tool-Centric Features',
    text: 'Valuing established methodologies and practices for modeling and development over trendy or niche features offered by specific tools.',
    href: '/docs/principles/best-practices'
  },
  {
    value: 'Continuous Process-Improvement',
    over: 'Scoped And Time-Boxed Targets',
    text: 'Process orientation is an ongoing journey and not a destination. For automation journeys, a product mindset is more suited than a project one.',
    href: '/docs/principles/continuous-improvement'
  }
]

const authorsIntro =
  'We are a group of professionals and enthusiasts united by a common passion for excellence in business process management and automation. Our manifesto embodies the principles, insights, and best practices that define the highest standards in process automation projects.'

const authors = [
  { name: 'Jan Galinski', img: '/img/jan.png' },
  { name: 'Simon Zambrovski', img: '/img/simon.png' },
  { name: 'Stephan Pelikan', img: '/img/stephan.png' },
  { name: 'Peter Queteschiner', img: '/img/peter.png' },
  { name: 'Dominik Horn', img: '/img/dominik.png' },
  { name: 'Thomas Heinrichs', img: '/img/thomas.png' }
]

const sponsors = [
  { name: 'Holisticon', img: '/img/holisticon.png', href: 'https://www.holisticon.de' },
  { name: 'Miragon', img: '/img/miragon.png', href: 'https://www.miragon.io' },
  { name: 'Phactum', img: '/img/phactum.png', href: 'https://phactum.at' }
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <header class="hero">
      <div class="hero__inner">
        <p class="hero__label">[ The BPM Crafters Community ]</p>
        <h1 class="hero__title">BPM<br />MANIFESTO</h1>
        <div class="hero__meta">
          <span class="hero__tag">{{ hero.badge }}</span>
          <p class="hero__tagline">
            A collaborative effort by the BPM Crafters community.
          </p>
        </div>
      </div>
    </header>

    <!-- Manifesto principles -->
    <section class="theses">
      <article v-for="(p, i) in principles" :key="p.value" class="thesis">
        <div class="thesis__num">{{ String(i + 1).padStart(2, '0') }}</div>
        <div class="thesis__body">
          <h2 class="thesis__statement">{{ p.value }}</h2>
          <p class="thesis__over"><span class="mono">over</span> {{ p.over }}</p>
          <p class="thesis__text">{{ p.text }}</p>
          <a class="thesis__more" :href="p.href">
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>
    </section>

    <!-- Authors -->
    <section class="authors">
      <div class="authors__inner">
        <h2 class="authors__title">ABOUT THE AUTHORS</h2>
        <p class="authors__intro">{{ authorsIntro }}</p>
        <div class="authors__grid">
          <figure v-for="a in authors" :key="a.name" class="author">
            <img :src="a.img" :alt="a.name" class="author__img" role="img" />
            <figcaption class="author__name">{{ a.name }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Sponsors -->
    <section class="sponsors">
      <h2 class="sponsors__title">SPONSORS</h2>
      <div class="sponsors__row">
        <a
          v-for="s in sponsors"
          :key="s.name"
          class="sponsor"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="s.img" :alt="s.name" role="img" />
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  --ink: #0a0a0a;
  --blue: #0d47a1;
  --line: #0a0a0a;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --mono: var(--vp-font-family-mono);
  background: #fff;
  color: var(--ink);
  font-family: var(--grotesk);
}
.mono {
  font-family: var(--mono);
}

/* Hero */
.hero {
  border-bottom: 4px solid var(--line);
  padding: 4rem 1.5rem 3.5rem;
}
.hero__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.hero__label {
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--blue);
  margin: 0 0 1.5rem;
}
.hero__title {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(3.5rem, 15vw, 10rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;
  border: 0;
  color: var(--ink);
}
.hero__meta {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.hero__tag {
  font-family: var(--mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  background: var(--blue);
  padding: 0.4rem 0.75rem;
  white-space: nowrap;
}
.hero__tagline {
  font-family: var(--mono);
  font-size: 0.95rem;
  line-height: 1.5;
  max-width: 460px;
  margin: 0;
  color: #333;
}

/* Theses */
.theses {
  max-width: 1100px;
  margin: 0 auto;
}
.thesis {
  display: grid;
  grid-template-columns: minmax(7rem, 16%) 1fr;
  gap: 1.5rem;
  padding: 3rem 1.5rem;
  border-bottom: 2px solid var(--line);
  align-items: start;
}
/* The full-width authors section already draws the divider below the last
   principle — drop this one so the two lines don't stack into a thick bar. */
.thesis:last-of-type {
  border-bottom: none;
}
.thesis__num {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 2px var(--blue);
  text-stroke: 2px var(--blue);
}
.thesis__statement {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0;
  border: 0;
  padding: 0;
  color: var(--ink);
}
.thesis__over {
  font-size: clamp(1.05rem, 2.2vw, 1.5rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--blue);
  margin: 0.5rem 0 1.25rem;
}
.thesis__over .mono {
  text-transform: lowercase;
  font-size: 0.8em;
  font-weight: 400;
  color: #666;
  padding-right: 0.35rem;
}
.thesis__text {
  font-family: var(--mono);
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
  max-width: 62ch;
}
.thesis__more {
  display: inline-block;
  margin-top: 1.25rem;
  font-family: var(--mono);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--blue);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}
.thesis__more:hover {
  border-bottom-color: var(--blue);
}
.thesis__more span {
  transition: transform 0.2s ease;
  display: inline-block;
}
.thesis__more:hover span {
  transform: translateX(3px);
}

/* Authors */
.authors {
  background: var(--blue);
  color: #fff;
  border-top: 4px solid var(--line);
  border-bottom: 4px solid var(--line);
  padding: 4rem 1.5rem;
}
.authors__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.authors__title {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
  border: 0;
  color: #fff;
}
.authors__intro {
  font-family: var(--mono);
  max-width: 640px;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 3rem;
}
.authors__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.author {
  margin: 0;
  background: #fff;
  border: 3px solid var(--line);
  padding: 0;
}
.author__img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-bottom: 3px solid var(--line);
}
.author__name {
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--ink);
  padding: 0.75rem;
  text-align: center;
}

/* Sponsors */
.sponsors {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}
.sponsors__title {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
  border: 0;
  color: var(--ink);
}
.sponsors__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 2px solid var(--line);
}
.sponsor {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  border-right: 2px solid var(--line);
  transition: background 0.2s ease;
}
.sponsor:last-child {
  border-right: 0;
}
.sponsor:hover {
  background: #f0f3fa;
}
.sponsor img {
  width: 160px;
  height: 90px;
  object-fit: contain;
}

@media (max-width: 720px) {
  .thesis {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .authors__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sponsors__row {
    grid-template-columns: 1fr;
  }
  .sponsor {
    border-right: 0;
    border-bottom: 2px solid var(--line);
  }
  .sponsor:last-child {
    border-bottom: 0;
  }
}
@media (max-width: 460px) {
  .authors__grid {
    grid-template-columns: 1fr;
  }
}
</style>
