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
      <div className="container mx-auto pt-10 pb-40">
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
      className={`min-h-screen flex flex-col gap-20 justify-center ${className ?? ''}`}
    >
      {title && <h3 className="text-5xl font-bold text-primary text-center">{title}</h3>}
      {children}
    </div>
  );
};

const TextImageBlock = ({
  title,
  className,
  contentTitle,
  content,
  image,
  imagePosition,
}) => {
  return (
    <BaseBlock className={className} title={title}>
      <div
        className={`flex gap-32 ${imagePosition === 'left' ? 'flex-row-reverse' : ''}`}
      >
        <div className="basis-7/12">
          <h4 className="text-[32px] !leading-tight font-bold text-primary pb-11">
            {contentTitle}
          </h4>
          <p className="text-xl whitespace-pre-line">{content}</p>
        </div>
        <div className="relative w-full">
          <Image
            className="object-scale-down"
            src={image}
            alt={contentTitle || title}
            layout="fill"
          />
        </div>
        {/* IMage */}
      </div>
    </BaseBlock>
  );
};
