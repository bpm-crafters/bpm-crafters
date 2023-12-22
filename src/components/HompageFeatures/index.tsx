import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";

type AuthorItem = {
    pathToImage: string
    title: string;
    description: JSX.Element;
};

function Author({pathToImage, title, description}: AuthorItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={useBaseUrl(pathToImage)} className={styles.author} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

const AuthorList: AuthorItem[] = [{
    pathToImage: '/img/jan.png',
    title: 'Jan Galisnki',
    description: (
        <>
            I am a senior IT consultant engaged in complex business applications and process automation for medium and
            large customers. I love open source software and contribute regularly. My tools of trade are Camunda, Axon
            Framework, and Kotlin. I am a Camunda champion of the first cohort and most recognized for my work with the
            Spring Boot starter extension and testing tools.
        </>
    ),
}, {
    title: 'Simon Zambrovski',
    pathToImage: '/img/simon.png',
    description: (
        <>
            I’m a BPM Craftsman, Event Sourcerer, DDD CQRS/ES Lover, Software Engineer, Coach, Writer and Senior
            Consultant
            at Holisticon AG, in Hamburg, Germany. My focus is on business process management and software architecture,
            especially for large, distributed, event-driven and complex systems. I spend a lot of time with free and
            open
            source projects and regularly contribute to many of them. I am a fan of photography, running, martial arts
            and
            cycling.
        </>
    ),
}, {
    title: 'Stephan Pelikan',
    pathToImage: '/img/stephan.png',
    description: (
        <>

        </>
    ),
}, {
    title: 'Peter Queteschiner',
    pathToImage: '/img/peter.png',
    description: (
        <>

        </>
    ),
}, {
    title: 'Dominik Horn',
    pathToImage: '/img/dominik.png',
    description: (
        <>

        </>
    ),
}, {
    title: 'Thomas Heinrichs',
    pathToImage: '/img/thomas.png',
    description: (
        <>
            Thomas is a Consultant at Miragon, a company which helps organisations to become truly digital. Prior to
            this Thomas worked as a Consultant and Developer Advocate in various areas around process automation and
            cloud-native applications. Being passionate for open-source projects, process automation and cloud
            native architectures, he spoke at various conferences like "All Things Open" or "Kafka Summit". When not
            working on such topics he is occupied with doing outdoor sports like climbing and skiing.
        </>
    ),
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

            <div className={styles.authors} >
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