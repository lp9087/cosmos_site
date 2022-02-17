import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import BaseScreen from './BaseScreen';

const TAG_TO_ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const MDTextScreen = ({ title, source, textAlign = 'left', ...rest }) => {
  return (
    <BaseScreen
      className={`gap-12
      ${
        textAlign === 'center'
          ? 'items-center'
          : textAlign === 'right'
          ? 'items-end'
          : ''
      }`}
      {...rest}
    >
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      <section className={`text-lg ${TAG_TO_ALIGN[textAlign] ?? TAG_TO_ALIGN.left}`}>
        <MDXRemote {...source} components={components} />
      </section>
    </BaseScreen>
  );
};

export default MDTextScreen;

const H2 = props => (
  <h2 className="font-bold text-4xl" {...props}>
    {title}
  </h2>
);

const H3 = props => (
  <h3 className="font-bold text-3xl" {...props}>
    {title}
  </h3>
);

const ResponsiveImage = ({ src, ...rest }) => (
  <div className="relative h-[450px] my-8">
    <Image
      src={src.startsWith('/') ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${src}` : src}
      layout="fill"
      objectFit="contain"
      {...rest}
    />
  </div>
);

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomLink,
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  h1: H2,
  h2: H2,
  h3: H3,
  img: ResponsiveImage,
};
