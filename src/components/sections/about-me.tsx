import Image from 'next/image';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src="/images/meryem-full-pose.jpg"
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
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate Full Stack Developer specializing in Angular and Spring Boot, with a strong interest in bringing both the technical and visual aspects of digital products to life. User experience, clean architecture, and writing clear, readable, and high-performance code are things I deeply care about.
          </Typography>
          <Typography>
            I began my professional journey as a software developer apprentice in 2023, where I had the opportunity to contribute to several stimulating projects alongside passionate and supportive teams. This experience allowed me to enter and better understand the professional world, learning how to collaborate, share knowledge, and especially how to continuously grow, both technically and personally.
          </Typography>
          <Typography>
            Outside of development, I enjoy staying active through regular sports, long walks, and discovering beautiful natural landscapes. I&apos;ve also recently developed a passion for cooking. I love recreating recipes, baking cakes, and sharing them with others.
          </Typography>
          <Typography>
            Some quick bits about me :
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Master&apos;s degree in Software Engineering
              </Typography>
              <Typography component="li">Rigorous and detail-oriented</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Enjoy connecting and collaborating with people</Typography>
            </ul>
          </div>
          <Typography>
            After earning my Master&apos;s degree in Software Engineering, I am now seeking new challenges and opportunities to build innovative applications using modern technologies. <br />If you are looking for a motivated developer with strong fundamentals, a genuine commitment to continuous learning, and someone ready to take on new responsibilities, I would be happy to discuss how I can contribute to your team. 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
