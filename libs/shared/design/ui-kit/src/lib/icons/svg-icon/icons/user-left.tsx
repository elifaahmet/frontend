/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const UserLeft: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M13.15 44.4923H27L27.27 44.7623L16.51 55.7623H76.41C80.0996 55.8209 83.7412 56.6082 87.1254 58.0789C90.5097 59.5497 93.5698 61.6749 96.13 64.3323C98.6624 66.979 100.695 70.0619 102.13 73.4323C103.74 76.9326 104.601 80.7301 104.66 84.5823V104.642H0V90.6423H91.11V85.1323C91.0767 81.1075 89.4812 77.253 86.66 74.3823C85.3316 72.9356 83.7207 71.7765 81.9267 70.9767C80.1328 70.177 78.194 69.7534 76.23 69.7323H16.47L27.23 80.8823L26.96 81.1523H13.15L0 67.6023V58.0023L13.15 44.4923ZM35.59 7.1723C33.3488 9.4471 31.584 12.1463 30.3992 15.1118C29.2144 18.0773 28.6333 21.2494 28.69 24.4423C28.6346 27.6335 29.2164 30.8038 30.4012 33.7674C31.586 36.7311 33.35 39.4287 35.59 41.7023C37.7214 44.0053 40.313 45.8346 43.1969 47.0715C46.0807 48.3084 49.1924 48.9254 52.33 48.8823C55.4661 48.9252 58.5762 48.3082 61.4585 47.0712C64.3407 45.8343 66.9305 44.005 69.06 41.7023C71.3072 39.432 73.0786 36.7359 74.2703 33.7721C75.4621 30.8082 76.0501 27.6363 76 24.4423C76.0514 21.2466 75.464 18.0728 74.2723 15.1072C73.0805 12.1415 71.3084 9.4438 69.06 7.1723C66.93 4.87087 64.3398 3.04319 61.4576 1.80793C58.5753 0.57268 55.4655 -0.0425147 52.33 0.0022995C49.193 -0.0426708 46.0816 0.572409 43.1977 1.80763C40.3138 3.04285 37.7219 4.8706 35.59 7.1723ZM52.33 14.0023C53.6688 13.9705 54.9993 14.2212 56.2347 14.7381C57.4701 15.2551 58.5828 16.0265 59.5 17.0023C60.4547 17.9876 61.2043 19.1526 61.7056 20.4297C62.2068 21.7068 62.4496 23.0707 62.42 24.4423C62.4496 25.8139 62.2068 27.1778 61.7056 28.4549C61.2043 29.732 60.4547 30.897 59.5 31.8823C58.5681 32.8409 57.4534 33.6029 56.2218 34.1232C54.9903 34.6435 53.6669 34.9116 52.33 34.9116C50.9931 34.9116 49.6697 34.6435 48.4382 34.1232C47.2066 33.6029 46.0919 32.8409 45.16 31.8823C44.2035 30.8978 43.452 29.7332 42.9491 28.4561C42.4461 27.1789 42.2017 25.8146 42.23 24.4423C42.2017 23.07 42.4461 21.7057 42.9491 20.4285C43.452 19.1514 44.2035 17.9868 45.16 17.0023C46.0757 16.0245 47.188 15.2517 48.4238 14.7346C49.6596 14.2175 50.9908 13.968 52.33 14.0023Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default UserLeft;
