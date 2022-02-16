import React, { useMemo } from 'react';

import { BadgeListScreen, MDTextScreen, SliderScreen } from '@/components/screens';

type TBlockType = 'text' | 'cards' | 'images';

interface IBlock {
  type: TBlockType;
  title?: string;
  content?: string;
}

const TYPE_TO_COMPONENT: Record<TBlockType, React.FC<any>> = {
  text: MDTextScreen,
  cards: BadgeListScreen,
  images: SliderScreen,
};

const useBlocks = (blocks: IBlock[]) => {
  const content = useMemo(
    () =>
      blocks
        .map(({ type, ...rest }, idx) => {
          const Component = TYPE_TO_COMPONENT[type];
          if (!Component) return null;

          return <Component key={idx} {...rest} />;
        })
        .filter(Boolean),
    [blocks]
  );

  return content;
};

export default useBlocks;
