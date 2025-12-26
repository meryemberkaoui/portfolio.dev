'use client';

import Image from 'next/image';
import { TechDetails } from '@/lib/types';
import { useTheme } from 'next-themes';
import type { StaticImageData } from 'next/image';


type SkillItemProps = {
  label: string;
  logo?: TechDetails['logo'];
  darkModeLogo?: string | StaticImageData;
  variant?: 'hard' | 'soft';
};

export default function SkillItem({
  label,
  logo,
  darkModeLogo,
  variant = 'hard',
}: SkillItemProps) {
  const isSoft = variant === 'soft';

  const { theme } = useTheme();
  const logoToUse = theme === 'dark' ? darkModeLogo || logo : logo || darkModeLogo;


  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium
           border-gray-20 text-gray-900 
           ${isSoft ? 'w-fit self-start' : ''}`}
    >
      {logoToUse && (
        <Image
          src={logoToUse}
          alt={label}
          width={20}
          height={20}
        />
      )}
      <span>{label}</span>
    </div>
  );
}
