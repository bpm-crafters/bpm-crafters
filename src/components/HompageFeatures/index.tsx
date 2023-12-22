import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";

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
    title: 'Jan Galisnki',
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
    subtitleText: React.ReactNode;
}

const ManifestSection: React.FC<ManifestSectionProps> = ({
                                                             title,
                                                             subtitleText
                                                         }) => {
    return (
        <section>
            <div className={styles.heading}>
                <h1>{title}</h1>
                <p>{subtitleText}</p>
            </div>
        </section>
    );
};

const businessITAlignment = {
    title: "Fostering Business-IT Alignment Over Non-Real World Process Implementations",
    subtitleText: (
        <>
            Emphasizing the harmony between business needs and IT capabilities, rather than focusing on processes that
            don’t reflect real-world scenarios.
        </>
    )
};

const domainOverTech = {
    title: "Domain Semantic Models Over Technical Integrations",
    subtitleText: (
        <>
            Prioritizing the understanding and modeling of business domains rather than focusing solely on the technical
            aspects of integration.
        </>
    )
};

const openStandards = {
    title: "Open Standards Over Proprietary Solutions",
    subtitleText: (<>
        Advocating for the use of open, universally accepted standards which promote interoperability and long-term
        sustainability over closed, proprietary systems.
    </>)
};

const developmentBestPractices = {
    title: "Software Development Best Practices Over Tool-Centric Features",
    subtitleText: (<>
        Valuing established software development methodologies and practices over the allure of trendy or niche features
        offered by specific tools.
    </>)
};

const continuousImprovement = {
    title: "Continuous Improvement Over Set-and-Forget Solutions",
    subtitleText: (<>
        Emphasizing the need for ongoing evaluation and refinement of BPM systems, rather than assuming a
        once-implemented
        solution will remain perpetually effective.
    </>)
};

export default function HomepageFeatures() {
    return (
        <div>
            <ManifestSection title={businessITAlignment.title}
                             subtitleText={businessITAlignment.subtitleText}>
            </ManifestSection>

            <ManifestSection title={domainOverTech.title}
                             subtitleText={domainOverTech.subtitleText}>
            </ManifestSection>

            <ManifestSection title={openStandards.title}
                             subtitleText={openStandards.subtitleText}>
            </ManifestSection>

            <ManifestSection title={developmentBestPractices.title}
                             subtitleText={developmentBestPractices.subtitleText}>
            </ManifestSection>

            <ManifestSection title={continuousImprovement.title}
                             subtitleText={continuousImprovement.subtitleText}>
            </ManifestSection>

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