import { useState } from 'react';

import { PRODUCT_MOCK } from '../../constants/product';
import { Layout } from '../layout';
import { PageHeader } from '..';
import Image from 'next/image';

export const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState(0);

  const blocks = PRODUCT_MOCK.tabs[0].blocks;

  return (
    <Layout>
      <PageHeader
        title={PRODUCT_MOCK.title}
        breadcrumbs={[
          { title: 'Главная', link: '/' },
          { title: 'Решения', link: '/products' },
          { title: PRODUCT_MOCK.title },
        ]}
        actionTitle="Заказать презентацию"
        onAction={() => console.log('contact us modal')}
      />
      <Tabs tabs={PRODUCT_MOCK.tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="container mx-auto pt-10 pb-48">
        <TextImageBlock
          title={blocks[0].title}
          contentTitle={blocks[0].contentTitle}
          content={blocks[0].content}
          image={blocks[0].image}
          imagePosition={blocks[0].imagePosition}
        />
        <TextImageBlock
          className="pt-20"
          title={blocks[1].title}
          contentTitle={blocks[1].contentTitle}
          content={blocks[1].content}
          image={blocks[1].image}
          imagePosition={blocks[1].imagePosition}
          showFiller
        />
        <CardListBlock
          className="pt-40"
          title={blocks[2].title}
          items={blocks[2].items}
        />
        <BaseBlock className="pt-56 px-56" title={blocks[3].title}>
          <div>
            <BlockText>{blocks[3].block1Content}</BlockText>
            <BlockTitle>{blocks[3].block2Title}</BlockTitle>
            <BlockText>{blocks[3].block2Content}</BlockText>
            <BlockTitle>{blocks[3].block3Title}</BlockTitle>
            <BlockText>{blocks[3].block3Content}</BlockText>
            <BlockTitle>{blocks[3].block4Title}</BlockTitle>
            <BlockText>{blocks[3].block4Content}</BlockText>
          </div>
        </BaseBlock>
        <BadgeListBlock
          className="pt-40"
          title={blocks[4].title}
          items={blocks[4].items}
        />
      </div>
    </Layout>
  );
};

const Tabs = ({ tabs = [], activeTab = 0, onTabChange }) => {
  return (
    <div className="absolute w-full -mt-20">
      <div className="container mx-auto flex">
        {tabs.map(({ title }, idx) => (
          <div
            key={idx}
            className={`w-64 h-20 -ml-px px-10 border border-primary justify-center flex items-center
              text-sm !leading-tight font-semibold uppercase text-center cursor-pointer
              ${activeTab === idx ? 'bg-primary text-white' : 'bg-white text-primary'}`}
            onClick={() => onTabChange(idx)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

const BaseBlock = ({ children, className, title, spacing }) => {
  // TODO: useSpacing
  return (
    <div
      className={`relative min-h-screen flex flex-col gap-20 justify-center
        ${className ?? ''}`}
    >
      {title && <h3 className="text-5xl font-bold text-primary text-center">{title}</h3>}
      {children}
    </div>
  );
};

const BlockTitle = ({ children }) => {
  return (
    <h4 className="pt-11 pb-6 text-2xl !leading-tight font-bold text-primary">
      {children}
    </h4>
  );
};

const BlockText = ({ children }) => {
  return <p className="text-xl !leading-tight whitespace-pre-line">{children}</p>;
};

const TextImageBlock = ({
  title,
  className,
  contentTitle,
  content,
  image,
  imagePosition,
  showFiller = false,
}) => {
  return (
    <BaseBlock className={className} title={title}>
      {showFiller && (
        <div className="absolute left-0 w-2/5 h-full -ml-[150px] bg-primary" />
      )}
      <div
        className={`flex gap-20 ${imagePosition === 'left' ? 'flex-row-reverse' : ''}`}
      >
        <div className="basis-7/12">
          <h4 className="text-[32px] !leading-tight font-bold text-primary pb-11">
            {contentTitle}
          </h4>
          <BlockText>{content}</BlockText>
        </div>
        <div className="relative w-full">
          <Image
            className="object-scale-down"
            src={image}
            alt={contentTitle || title}
            layout="fill"
          />
        </div>
      </div>
    </BaseBlock>
  );
};

const CardListBlock = ({ className, title, items = [] }) => {
  return (
    <BaseBlock className={className} title={title}>
      <div className="px-24 grid grid-cols-4 grid-flow-row-dense">
        {items.map((x, idx) => (
          <CardListBlockItem key={idx} {...x} />
        ))}
      </div>
    </BaseBlock>
  );
};

const CardListBlockItem = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col -ml-px -mt-px pt-8 pb-11 pl-10 pr-12 
          border border-[#c4c4c4] hover:bg-primary transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-16 h-16 transition-all
            ${hovered ? 'brightness-0 invert' : ''}`}
      >
        <Image src={image} alt={title} layout="fill" />
      </div>
      <h4
        className={`mt-4 mb-1 h-11 text-[15px] font-medium !leading-tight transition-all pointer-events-none
          ${hovered ? 'text-white' : 'text-secondary'}`}
      >
        {title}
      </h4>
      <p
        className={`text-[13px] !leading-tight transition-all pointer-events-none
          ${hovered ? 'text-white' : ''}`}
      >
        {description}
      </p>
    </div>
  );
};

const BadgeListBlock = ({ className, title, items = [] }) => {
  return (
    <BaseBlock className={`min-h-fit ${className ?? ''}`} title={title}>
      <div className="flex justify-center gap-20">
        {items.map(({ title, link, image }, idx) => (
          <div
            key={idx}
            className="relative w-40 h-32 grayscale hover:grayscale-0 transition-all cursor-pointer"
          >
            <Image
              className="object-contain pointer-events-none"
              src={image}
              alt={title}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </BaseBlock>
  );
};
