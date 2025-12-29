import { ProjectDetails } from '@/lib/types';

type ProjectStatus = NonNullable<ProjectDetails['status']>;

type StatusBadgeProps = {
  status: ProjectStatus;
};

const STATUS_CONFIG: Record<
  ProjectStatus,
  {
    label: string;
    className: string;
  }
> = {
  'in-progress': {
    label: 'In progress',
    className:
      'bg-yellow-400/10 text-yellow-400 inset-ring inset-ring-yellow-400/20',
  },
  'coming-soon': {
    label: 'Coming soon',
    className:
      'bg-red-400/10 text-red-400 inset-ring inset-ring-red-400/20',
  },
  'en-cours': {
    label: 'En cours',
    className:
      'bg-yellow-400/10 text-yellow-400 inset-ring inset-ring-yellow-400/20',
  },
  'a-venir': {
    label: 'À venir',
    className:
      'bg-red-400/10 text-red-400 inset-ring inset-ring-red-400/20',
  }
};


export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = STATUS_CONFIG[status];

  return (
    <span
        className={`inline-flex self-start items-center 
            rounded-md px-2 py-1 text-xs font-medium ${styles.className}`}
    >
      {styles.label}
    </span>
  );
}
