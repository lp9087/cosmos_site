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
      <section
        className={`w-2/3 text-lg ${TAG_TO_ALIGN[textAlign] ?? TAG_TO_ALIGN.left}`}
      >
        <MDXRemote {...source} components={components} />
      </section>
    </BaseScreen>
  );
};

export default MDTextScreen;

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomLink,
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  h1: props => (
    <h2 className="font-bold text-4xl" {...props}>
      {title}
    </h2>
  ), // yeah that's right
  h2: props => (
    <h2 className="font-bold text-4xl" {...props}>
      {title}
    </h2>
  ),
  h3: props => (
    <h3 className="font-bold text-3xl" {...props}>
      {title}
    </h3>
  ),
};
