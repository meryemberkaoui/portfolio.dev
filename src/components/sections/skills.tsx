'use client';

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SkillItem from '@/components/general/skill-item';

import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';

const SkillsSection = () => {
  
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;
  
  const groupedTechnologies = TECHNOLOGIES.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
  }, {} as Record<string, typeof TECHNOLOGIES>);

  const categoryOrder = ['frontend', 'backend', 'database', 'devOps', 'testing','systems','management'];

  
  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      {/* Skills */}
      <div className="mt-12 grid gap-12 md:grid-cols-[7fr_3fr]">
        
        {/* Hard Skills */}
        <div>
          <Typography variant="h3" className="mb-6 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-gray-700" />
            Hard Skills
          </Typography>

          <div className="flex flex-col gap-8">
            {Object.entries(groupedTechnologies)
            .sort((a, b) => categoryOrder.indexOf(a[0]) - categoryOrder.indexOf(b[0]))
            .map(([category, techs]) => (
              <div key={category} className="flex flex-col gap-4">
                {/* Sous-catégorie */}
                <Typography
                className="font-semibold uppercase tracking-wide text-gray-600" >
                  {category}
                </Typography>
                {/* Skills */}
                <div className="flex flex-wrap gap-6">
                  {techs
                  .filter( (tech) => !['Prometheus', 'Grafana'].includes(tech.label))
                  .map((tech) => (
                  <SkillItem
                  key={tech.label}
                  label={tech.label}
                  logo={tech.logo}
                  darkModeLogo={tech.darkModeLogo}
                  />
                ))}
                </div>
              </div>
          ))}
        </div>

        </div>

        {/* Soft Skills */}
        <div>
          <Typography variant="h3" className="mb-6 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-gray-700" />
            Soft Skills
          </Typography>

          <div className="flex flex-col gap-4">
            {data.SOFT_SKILLS.map((skill) => (
              <SkillItem
                key={skill.label}
                label={skill.label}
                variant="soft"
              />
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
};

export default SkillsSection;
