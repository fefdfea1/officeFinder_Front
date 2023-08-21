import { ReactNode } from 'react';

type BackgroundCoverProps = {
    children: ReactNode;
    margin?: string;
    padding?: string;
};

export const BackgroundCover = (props: BackgroundCoverProps) => {
    const margin = props.margin || "mt-10"; // margin 속성에 기본값 할당
    const padding = props.padding || "p-8"; // padding 속성에 기본값 할당

    return (
        <div className={`w-full shadow-md rounded-xl ${padding} ${margin}`}>
            {props.children}
        </div>
    );
}
