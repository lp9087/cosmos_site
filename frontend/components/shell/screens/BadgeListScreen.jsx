import styled from 'styled-components';
import Image from 'next/image';
import { Award } from 'react-feather';

import { Screen } from '../..';

const BadgeListScreen = ({ className, container, title, content = [] }) => {
  return (
    <Screen className={`gap-16 text-gray-700 ${className}`} container={container}>
      {title && <h2 className="self-center font-bold text-3xl">{title}</h2>}
      <div className="flex justify-evenly flex-wrap gap-x-8 gap-y-16 py-16">
        {content.map(x => (
          <Badge key={x.id} {...x} />
        ))}
      </div>
    </Screen>
  );
};

export default BadgeListScreen;

const BadgeContainer = styled.div`
  &:hover {
    div {
      --tw-bg-opacity: 0.6;
    }
  }
`;
const Badge = ({ title, icon }) => {
  const iconBadgeStyles =
    'w-16 h-16 rounded-full bg-black bg-opacity-40 transition-colors';

  return (
    <BadgeContainer className="flex flex-col justify-center items-center gap-6">
      <div
        className={`flex justify-center items-center
          ${!icon ? iconBadgeStyles : 'w-48 h-auto'}`}
      >
        {icon ? (
          <Image src={icon} alt="partner logo" />
        ) : (
          <Award size={32} color="#fff" />
        )}
      </div>
      {title && (
        <span className="w-11/12 font-semibold text-lg text-center">{title}</span>
      )}
    </BadgeContainer>
  );
};
