import { useEffect, useState } from 'react';

type TSpacing = 'lg' | 'md' | 'sm' | null;

const TAG_TO_SPACING = {
  lg: ['py-32', 'my-32'],
  md: ['py-16', 'my-16'],
  sm: ['py-8', 'my-8'],
};

const useSpacing = (spacing: TSpacing, useMargin = false) => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (spacing && spacing in TAG_TO_SPACING)
      setClassName(TAG_TO_SPACING[spacing][useMargin ? 1 : 0]);
  }, [spacing, useMargin]);

  return className;
};

export default useSpacing;
