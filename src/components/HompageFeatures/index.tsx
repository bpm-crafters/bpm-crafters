import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import useBaseUrl from '@docusaurus/useBaseUrl';

type AuthorItem = {
    pathToImage: string
    title: string;
};

function Author({pathToImage, title}: AuthorItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={useBaseUrl(pathToImage)} className={styles.author} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
            </div>
        </div>
    );
}

const AuthorList: AuthorItem[] = [{
    pathToImage: '/img/jan.png',
    title: 'Jan Galinski',
}, {
    title: 'Simon Zambrovski',
    pathToImage: '/img/simon.png',
}, {
    title: 'Stephan Pelikan',
    pathToImage: '/img/stephan.png',
}, {
    title: 'Peter Queteschiner',
    pathToImage: '/img/peter.png',
}, {
    title: 'Dominik Horn',
    pathToImage: '/img/dominik.png',
}, {
    title: 'Thomas Heinrichs',
    pathToImage: '/img/thomas.png',
},
];

interface ManifestSectionProps {
    title: string;
    subtitle: string;
    subtitleText: React.ReactNode;
}

const ManifestSection: React.FC<ManifestSectionProps> = ({
                                                             title,
                                                             subtitle,
                                                             subtitleText
                                                         }) => {
    return (
        <section>
            <div className={styles.heading}>
                <h2>{title} <span style={{fontWeight:"normal", fontSize:"smaller"}}>{subtitle}</span></h2>
                <p>{subtitleText}</p>
            </div>
        </section>
    );
};

const businessITAlignment = {
    title: "Fostering Business-IT Alignment ",
    subtitle: "Over Developer-driven Process Automation",
    subtitleText: (
        <>
            Prioritizing the understanding and modeling of business domains rather than focusing solely on the technical
            aspects of integration. This emphasizes the harmony between business needs and IT capabilities, rather than
            focusing on solutions that don’t reflect real-world processes.
        </>
    )
};

const openStandards = {
    title: "Open Standards",
    subtitle: "Over Proprietary Solutions",
    subtitleText: (<>
        Advocating for the use of open, universally accepted standards which promote interoperability and long-term
        sustainability over closed, proprietary systems.
    </>)
};

const developmentBestPractices = {
    title: "Process Automation Best Practices ",
    subtitle: "Over Tool-Centric Features",
    subtitleText: (<>
        Valuing established methodologies and practices for modeling and development over trendy or niche features
        offered by specific tools.
    </>)
};

const continuousImprovement = {
    title: "Continuous Process-Improvement",
    subtitle: "Over Scoped And Time-Boxed Targets",
    subtitleText: (<>
        Process orientation is an ongoing journey and not a destination.
        For automation journeys, a product mindset is more suited than a project one.
    </>)
};

export default function HomepageFeatures() {
    return (
        <div>
            <ManifestSection title={businessITAlignment.title}
                             subtitle={businessITAlignment.subtitle}
                             subtitleText={businessITAlignment.subtitleText}>
            </ManifestSection>

            <ManifestSection title={openStandards.title}
                             subtitle={openStandards.subtitle}
                             subtitleText={openStandards.subtitleText}>
            </ManifestSection>

            <ManifestSection title={developmentBestPractices.title}
                             subtitle={developmentBestPractices.subtitle}
                             subtitleText={developmentBestPractices.subtitleText}>
            </ManifestSection>

            <ManifestSection title={continuousImprovement.title}
                             subtitle={continuousImprovement.subtitle}
                             subtitleText={continuousImprovement.subtitleText}>
            </ManifestSection>

            <p className={styles.footnote}>
                *The enumeration of the principles is not a ranking. All principles are equally important.
            </p>

            <div className={styles.authors}>
                <h1>About the authors</h1>
                <div className="container">
                    <div className="row">
                        {AuthorList.map((props, idx) => (
                            <Author key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.sponsors}>
                <h1>Our Sponsors</h1>
                <div className={styles.imageButtonRow}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.holisticon.de" className="button">
                        <button className={styles.imageButton}>
                            <img src={useBaseUrl("/img/holisticon.png")} alt="Holisticon" role="img"/>
                        </button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.miragon.io" className="button">
                        <button className={styles.imageButton}>
                            <img src={useBaseUrl("/img/miragon.png")} alt="Miragon" role="img"/>
                        </button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://phactum.at" className="button">
                        <button className={styles.imageButton}>
                            <img src={useBaseUrl("/img/phactum.png")} alt="Phactum" role="img"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
