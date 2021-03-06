import React, { useMemo } from 'react';

// import { CTAJumbotron } from '@/components';
// import { BadgeListScreen, MDTextScreen, SliderScreen } from '@/components/screens';

// type TBlockType = 'BlockText' | 'BlockCards' | 'BlockImages' | 'BlockCTA';
// type TSpacing = 'lg' | 'md' | 'sm' | '';

// interface IBlock {
//   resourcetype: TBlockType;
//   title?: string;
//   spacing?: TSpacing;
//   text?: string;
//   images?: { id: number; img: string }[];
//   ctaText?: string;
//   items?: any[];
// }

const TYPE_TO_COMPONENT = {
  // BlockText: MDTextScreen,
  // BlockCards: BadgeListScreen,
  // BlockImages: SliderScreen,
  // BlockCTA: CTAJumbotron,
};

export const useBlocks = (blocks, propsForType) => {
  const content = useMemo(
    () =>
      blocks
        .map(({ resourcetype, ...rest }, idx) => {
          const Component = TYPE_TO_COMPONENT[resourcetype];
          if (!Component) return null;

          const props = rest;
          if (resourcetype === 'BlockCards') {
            props.items = props.block_card.map(({ name_card, ...rest }) => ({
              title: name_card,
              ...rest,
            }));
            delete props.block_card;
          }

          return (
            <Component key={idx} {...props} {...(propsForType[resourcetype] ?? {})} />
          );
        })
        .filter(Boolean),
    [blocks, propsForType]
  );

  return content;
};
