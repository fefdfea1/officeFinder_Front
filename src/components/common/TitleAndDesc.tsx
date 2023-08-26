type propsType = {
  title: string;
  description: string;
  type?: string;
};

export const TitleAndDesc = (props: propsType) => {
  return (
    <div className="leading-loose">
      <h3 className="font-black text-lg pl-4">{props.title}</h3>
      <p className="text-base pl-4 mr font-bold">
        {props.description}
        {props.type === 'point' && <span className="font-black ml-2">P</span>}
      </p>
    </div>
  );
};
