import Image from 'next/image';
import { TECHNOLOGIES } from '@/lib/data';

export default function SkillsBar() {
  return (
    <div className="w-full overflow-hidden bg-gray-10 py-6">
      <div className="group flex">
        <div className="animate-skills-bar group-hover:[animation-play-state:paused] flex items-center gap-14 whitespace-nowrap">
          
          {/* boucle principale */}
          {TECHNOLOGIES.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
                <Image
                src={tech.logo}
                alt={tech.label}
                width={20}
                height={20}
              />
                <span className="text-sm font-medium text-white-100">{tech.label}</span>
            </div>
              
          ))}

          {/* 2ème boucle (OBLIGATOIRE) */}
          {TECHNOLOGIES.map((tech, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-2">
            <Image src={tech.logo} alt={tech.label} width={20} height={20} />
            <span className="text-sm font-medium text-white-100">{tech.label}</span>
            </div>
        ))}
         

        </div>
      </div>
    </div>
  );
}
