'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Button from '@/components/general/button';
import { useLanguage } from '@/app/language-context';

interface VideoDemoProps {
  videoSrc: string;
  buttonLabel?: string; // optionnel pour customiser le texte du bouton
}

const VideoDemo = ({ videoSrc, buttonLabel }: VideoDemoProps) => {
  const { language } = useLanguage();

  const label =
    buttonLabel || (language === 'en' ? 'Watch Demo' : 'Voir la démo');

  return (
    <Dialog.Root>
      {/* Bouton pour ouvrir la modale */}
      <Dialog.Trigger asChild>
        <Button  className="px-3 py-2 bg-gray-700" >{label}</Button>
      </Dialog.Trigger>

      {/* Modale */}
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <div className="fixed inset-0 bg-black/50" />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          bg-white rounded-lg p-4 max-w-3xl w-full shadow-lg">
            <Dialog.Close className="absolute top-0 right-1 text-red-700 font-bold text-3xl">
              ×
            </Dialog.Close>

            <video controls className="w-full rounded">
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoDemo;
