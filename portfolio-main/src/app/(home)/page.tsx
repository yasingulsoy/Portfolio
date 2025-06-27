import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import { CertificatesSection } from '@/components/page-ui/CertificatesSection';

export default function Home() {
    return (
        <main>
            <LandingPage />
            <ExperienceSection />
            <SkillsSection />
            <CertificatesSection />
            <ProjectsSection />
            <ContactMeForm />
        </main>
    );
}
