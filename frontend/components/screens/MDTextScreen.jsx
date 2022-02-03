import BaseScreen from './BaseScreen';

const MDTextScreen = ({ title, content, ...rest }) => {
  return (
    <BaseScreen className="gap-12" {...rest}>
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      <p className="w-2/3 text-lg">{content}</p>
    </BaseScreen>
  );
};

export default MDTextScreen;
