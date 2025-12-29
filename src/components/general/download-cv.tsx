'use client';

import Button from '@/components/general/button';
import { useLanguage } from '@/app/language-context';
import * as EN from '@/lib/data.en';
import * as FR from '@/lib/data.fr';

const DownloadCV = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EN : FR;

  const buttonName = 
    data.RESUME.language === 'en'
    ? 'Download CV'
    : 'Télécharger le CV';
  
  return (
    <Button onClick={() => window?.open(data.RESUME.file, '_blank')}>
      {buttonName}
    </Button>
  );
};

export default DownloadCV;
