import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  localDate
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full 
    flex-col justify-between gap-6 p-8 md:flex-row md:gap-9">
      <div className="relative md:w-[120px] md:flex-shrink-0">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
        />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-baseline gap-4">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {position}
          </Typography>
          <Typography className="text-gray-700 whitespace-nowrap">
            {new Intl.DateTimeFormat(localDate, dateFormatOptions).format(
              startDate
            )}{' '}
            -{' '}
            {currentlyWorkHere
              ? 'Present'
              : endDate
              ? new Intl.DateTimeFormat(localDate, dateFormatOptions).format(
                  endDate
                )
              : 'NA'}
          </Typography>
        </div>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
