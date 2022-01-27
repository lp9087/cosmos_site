import { Screen } from '../..';

const TextScreen = ({ className, container, title, content }) => {
  return (
    <Screen className={`gap-16 ${className}`} container={container}>
      {title && (
        <h2 className="self-center font-bold text-3xl text-gray-700">{title}</h2>
      )}
      <p className="font-light whitespace-pre-wrap">{content}</p>
    </Screen>
  );
};

export default TextScreen;
