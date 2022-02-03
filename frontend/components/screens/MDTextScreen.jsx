import BaseScreen from './BaseScreen';

const TAG_TO_ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const MDTextScreen = ({ title, content, textAlign = 'left', ...rest }) => {
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
      <p className={`w-2/3 text-lg ${TAG_TO_ALIGN[textAlign] ?? TAG_TO_ALIGN.left}`}>
        {content}
      </p>
    </BaseScreen>
  );
};

export default MDTextScreen;
