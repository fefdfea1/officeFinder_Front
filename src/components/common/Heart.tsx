import styled from '@emotion/styled';
import { heartActive } from './HeartActive';

export const Heart = () => {
  return (
    <div onClick={heartActive}>
      <HeartFillStyle className="relative deActive">
        <HeartStyle className="heart-2 absolute"></HeartStyle>
        <FillUpHeart className="w-full h-full bg-primary absolute fillUp"></FillUpHeart>
      </HeartFillStyle>
    </div>
  );
};

const HeartFillStyle = styled.div`
  width: 24px;
  height: 24px;
  background: transparent;
  clip-path: path(
    'M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z'
  );

  &.active .fillUp {
    bottom: 0;
  }

`;

const HeartStyle = styled.div`
  width: 24px;
  height: 24px;
  background: var(--secondary);
  clip-path: path(
    'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181'
  );
  z-index: 999;
  pointer-events: none;
`;

const FillUpHeart = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: all 2s;
  pointer-events: none;
`;
