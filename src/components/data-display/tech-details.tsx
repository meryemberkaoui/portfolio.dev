'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetailss = ({logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <ImageWrapper
        src={logo}
        srcForDarkMode={darkModeLogo}
        alt={label}
        className="transition-transform duration-300 md:hover:scale-110"
      />
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetailss;
