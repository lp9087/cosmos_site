import { useEffect, useState } from 'react';

type TSpacing = 'lg' | 'md' | 'sm' | null;

const TAG_TO_SPACING = {
  default: ['py-16', 'my-16'],
  lg: ['py-32', 'my-32'],
  md: ['py-24', 'my-24'],
  sm: ['py-8', 'my-8'],
};

const useSpacing = (spacing: TSpacing, useMargin = false) => {
  const [className, setClassName] = useState(TAG_TO_SPACING.default[useMargin ? 1 : 0]);

  useEffect(() => {
    setClassName(
      spacing && spacing in TAG_TO_SPACING
        ? TAG_TO_SPACING[spacing][useMargin ? 1 : 0]
        : TAG_TO_SPACING.default[useMargin ? 1 : 0]
    );
  }, [spacing, useMargin]);

  return className;
};

export default useSpacing;
