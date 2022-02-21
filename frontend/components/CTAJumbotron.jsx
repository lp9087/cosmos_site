import { useSpacing } from '@/hooks/index';

const CTAJumbotron = ({ className, title, ctaText, onCTAClick, spacing }) => {
  const containerSpacing = useSpacing(spacing, true);

  return (
    <div
      className={`container mx-auto flex justify-center py-24 bg-teal-100/40
        ${containerSpacing}
        ${className ?? ''}`}
    >
      <div className="flex flex-col gap-8 items-center">
        <p className="font-medium text-4xl">
          {title || 'Нужна консультация по проекту?'}
        </p>
        <button
          className="btn btn-primary h-12 w-96 font-medium rounded-md"
          onClick={onCTAClick}
        >
          {ctaText || 'Расскажите нам о проекте'}
        </button>
      </div>
    </div>
  );
};

export default CTAJumbotron;
