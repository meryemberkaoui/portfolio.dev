'use client';

import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';

const Footer = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;
  
  return (
    <footer className="w-full py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          {data.COPYRIGHT.message}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
