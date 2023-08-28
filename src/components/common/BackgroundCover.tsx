import { ReactNode } from 'react';

type BackgroundCoverProps = {
  children: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
};

export const BackgroundCover = (props: BackgroundCoverProps) => {
  const { children, margin = 'mt-10', padding = 'p-8', width = 'w-full' } = props;

  return <div className={`${width} shadow-md rounded-xl ${margin} ${padding} relative`}>{children}</div>;
};
