import React, { useMemo } from 'react';

import { CTAJumbotron } from '@/components/index';
import { BadgeListScreen, MDTextScreen, SliderScreen } from '@/components/screens';

type TBlockType = 'BlockText' | 'BlockImages' | 'BlockCTA';
type TSpacing = 'lg' | 'md' | 'sm' | '';

interface IBlock {
  resourcetype: TBlockType;
  title?: string;
  spacing?: TSpacing;
  text?: string;
  images?: { id: number; img: string }[];
  ctaText?: string;
}

const TYPE_TO_COMPONENT: Record<TBlockType, React.FC<any>> = {
  BlockText: MDTextScreen,
  // cards: BadgeListScreen,
  BlockImages: SliderScreen,
  BlockCTA: CTAJumbotron,
};

const useBlocks = (
  blocks: IBlock[],
  propsForType: Partial<Record<TBlockType, Object>>
) => {
  const content = useMemo(
    () =>
      blocks
        .map(({ resourcetype, ...rest }, idx) => {
          const Component = TYPE_TO_COMPONENT[resourcetype];
          if (!Component) return null;

          return (
            <Component key={idx} {...rest} {...(propsForType[resourcetype] ?? {})} />
          );
        })
        .filter(Boolean),
    [blocks, propsForType]
  );

  return content;
};

export default useBlocks;
