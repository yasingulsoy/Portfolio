'use client';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { FaMedium, FaStackOverflow } from 'react-icons/fa';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#certificates">Certificates</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/yasingulsoy" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/yasin-g%C3%BClsoy-b7874b22b/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="https://yasingulsoy.medium.com" rel="noopener noreferrer" target="_blank">
                            <FaMedium className="mr-1" /> Medium
                        </HoveredLink>
                        <HoveredLink href="https://stackoverflow.com/users/20440247/yasin-gulsoy" rel="noopener noreferrer" target="_blank">
                            <FaStackOverflow className="mr-1" /> Stack Overflow
                        </HoveredLink>
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
