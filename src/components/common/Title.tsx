type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <div className="border-b border-solid border-accent pb-2">
      <h2 className="ml-2 text-xl">{children}</h2>
    </div>
  );
};
