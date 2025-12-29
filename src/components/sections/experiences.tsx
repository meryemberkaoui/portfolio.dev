'use client';

import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';

const ExperienceSection = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;

  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label={data.SECTIONS.experience.name} />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          {data.SECTIONS.experience.description}
        </Typography>
      </div>

      {data.EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
