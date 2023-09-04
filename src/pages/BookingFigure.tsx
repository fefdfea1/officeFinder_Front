type propsType = {
  img: string;
};

export const BookingFigure = (props: propsType) => {
  return (
    <figure>
      <div className="h-96 rounded-xl overflow-hidden mb-4 lg:w-8/12 lg:mx-auto xl:w-full">
        <img src={`${props.img}`} alt="오피스 이미지" className="block w-full h-full" />
      </div>
    </figure>
  );
};
