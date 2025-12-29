'use client';

import Image from 'next/image';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';

const AboutMeSection = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;

  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label={data.SECTIONS.aboutme.name} />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src="/images/meryem-anime.png"
              alt="Fullpose of Meryem"
              fill
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            {data.SECTIONS.aboutme.description}
          </Typography>
          <Typography>
            {data.SECTIONS.aboutme.text[0]}
          </Typography>
          <Typography>
            {data.SECTIONS.aboutme.text[1]}
          </Typography>
          <Typography>
            {data.SECTIONS.aboutme.text[2]}
          </Typography>
          <Typography>
            {data.SECTIONS.aboutme.text[3]}
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                {data.SECTIONS.aboutme.text[4]}
              </Typography>
              <Typography component="li">{data.SECTIONS.aboutme.text[5]}</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">{data.SECTIONS.aboutme.text[6]}</Typography>
              <Typography component="li">{data.SECTIONS.aboutme.text[7]}</Typography>
            </ul>
          </div>
          <Typography>
            {data.SECTIONS.aboutme.text[8]}
            <br/>
            {data.SECTIONS.aboutme.text[9]}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
