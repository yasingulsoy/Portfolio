import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} title="Projects" />;
}

const products = [
    {
        title: 'Mern Memories',
        link: 'https:',
        thumbnail: '/projects/mern-memories.png'
    },
    {
        title: 'Next Event',
        link: 'https://github.c-dj-events-frontend',
        thumbnail: '/projects/next-event.png'
    },
    {
        title: 'Koç Akademisi',
        link: 'https://kocakademisi.com/',
        thumbnail: '/projects/devspace.png'
    },

    {
        title: 'Google Clone',
        link: '',
        thumbnail: '/projects/google-clone.png'
    },
    {
        title: 'Portfolio V1',
        link: 'https://.netlify.ap/',
        thumbnail: '/projects/old-portfolio.png'
    },
    {
        title: 'Dresscode',
        link: '',
        thumbnail: '/projects/dresscode.png'
    },

    {
        title: 'Portfolio V2',
        link: 'https://.com',
        thumbnail: '/projects/portfoliov2.png'
    },
    {
        title: 'Music App',
        link: 'https://-app',
        thumbnail: '/projects/music-app.png'
    },
    {
        title: 'Artemis',
        link: '',
        thumbnail: '/projects/artemis.png'
    }
];
