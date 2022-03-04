import Link from 'next/link';
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

const H1 = props => <h2 className="font-bold text-3xl my-9" {...props} />;
const H2 = props => <h2 className="font-bold text-2xl my-6" {...props} />;
const H3 = props => <h3 className="font-bold text-xl my-3" {...props} />;
const List = props => <ul className="list-disc ml-6 my-3" {...props} />;
const OrderedList = props => <ol className="list-decimal ml-6 my-3" {...props} />;
const MDLink = ({ children, href }) => (
  <Link href={href} passHref>
    <a className="underline underline-offset-2 font-semibold text-blue-500">
      {children}
    </a>
  </Link>
);

const ResponsiveImage = ({ src, ...rest }) => (
  <div className="relative h-[450px] my-8">
    <Image
      src={src.startsWith('/') ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${src}` : src}
      layout="fill"
      objectFit="contain"
      alt=""
      {...rest}
    />
  </div>
);

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  ul: List,
  ol: OrderedList,
  img: ResponsiveImage,
  a: MDLink,
};
