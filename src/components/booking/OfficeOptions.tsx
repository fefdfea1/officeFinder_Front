import { Link } from 'react-router-dom';

type propsType = {
  width?: string;
  needReviewCount?: boolean;
};

export const OfficeOptions = (props: propsType) => {
  return (
    <>
      <div className={`shadow-lg ${props.width && props.width} px-12 py-4 rounded-lg`}>
        <h3 className="text-lg text-primary mb-4">Price</h3>
        <div className="border-b border-solid border-accent pb-4 mb-4 rounded-sm">
          <div className="w-3/6 text-base">
            <p className="flex justify-between mb-3">
              <span>{`1인실 월 00 포인트`}</span>
              <span>{`1인실 월 00 포인트`}</span>
            </p>
            <p className="flex justify-between">
              <span>{`1인실 월 00 포인트`}</span>
              <span>{`1인실 월 00 포인트`}</span>
            </p>
          </div>
        </div>
        <h3 className="text-lg text-primary mb-4">Options</h3>
        <div className={`${props.needReviewCount && 'border-b border-solid border-accent pb-4 mb-4'}`}>
          <div className="w-3/6 text-base">
            {/* p태그로 서버에서 받아오는 옵션을 반복문으로 넣어야함 */}
            <p>옵션1</p>
            <p>옵션2</p>
            <p>옵션3</p>
            <p>옵션4</p>
          </div>
        </div>
        {props.needReviewCount && (
          <h3 className="text-lg text-primary mb-4">
            <Link to={'#'}>
              <span className="mr-2">Reviews</span>
              {/* 데이터를 받으면 동적으로 추가 */}
              <span>({231})</span>
            </Link>
          </h3>
        )}
      </div>
    </>
  );
};

