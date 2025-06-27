import React from 'react';
import { HeroParallax } from '@/components/ui/hero-paralax';

export function CertificatesSection() {
    return <HeroParallax products={certificates} title="Certificates" />;
}

const certificates = [
    {
        title: 'Full Stack Development Certificate',
        link: 'https://example.com/certificate/fullstack',
        thumbnail: '/projects/mern-memories.png'
    },
    {
        title: 'Event Management Certificate',
        link: 'https://example.com/certificate/event',
        thumbnail: '/projects/next-event.png'
    },
    {
        title: 'Cloud Technologies Certificate',
        link: 'https://example.com/certificate/cloud',
        thumbnail: '/projects/devspace.png'
    },
    {
        title: 'UI/UX Design Certificate',
        link: 'https://example.com/certificate/uiux',
        thumbnail: '/projects/dresscode.png'
    },
    {
        title: 'Music App Development Certificate',
        link: 'https://example.com/certificate/music',
        thumbnail: '/projects/music-app.png'
    },
    // Buraya kendi sertifikalarınızı ekleyebilirsiniz
]; 