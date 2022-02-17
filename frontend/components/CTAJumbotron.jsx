const CTAJumbotron = ({ className, title, ctaText, onCTAClick }) => {
  return (
    <div
      className={`container mx-auto py-24 flex justify-center bg-teal-100/40
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
