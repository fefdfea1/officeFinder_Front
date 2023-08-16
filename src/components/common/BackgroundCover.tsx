import { ReactNode } from 'react';

type BackgroundCoverProps = {
    children: ReactNode;
    // 다른 속성들도 추가할 수 있음
};

export const BackgroundCover = (props: BackgroundCoverProps) => {
    return (

        <div className="w-full shadow-md rounded-xl p-8 mt-10">
            {props.children}
        </div>
    );
}

