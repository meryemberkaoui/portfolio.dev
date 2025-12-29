'use client';

import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';
import { idText } from 'typescript';

const WorkSection = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label={data.SECTIONS.projects.name} />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          {data.SECTIONS.projects.description}
        </Typography>
      </div>

      {data.PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
