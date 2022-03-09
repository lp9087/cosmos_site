import { useSpacing } from '@/hooks';

const CTAJumbotron = ({ className, title, ctaText, onCTAClick, spacing }) => {
  const containerSpacing = useSpacing(spacing, true);

  return (
    <div
      className={`container mx-auto flex justify-center py-24 bg-teal-100/40
        ${containerSpacing}
        ${className ?? ''}`}
    >
      <div className="flex flex-col items-center gap-8">
        <p className="text-4xl font-medium">
          {title || 'Нужна консультация по проекту?'}
        </p>
        <button
          className="h-12 font-medium rounded-md btn btn-primary w-96"
          onClick={onCTAClick}
        >
          {ctaText || 'Расскажите нам о проекте'}
        </button>
      </div>
    </div>
  );
};

export default CTAJumbotron;
