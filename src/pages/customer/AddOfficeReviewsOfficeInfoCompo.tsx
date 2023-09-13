type propsType = {
  imgSrc: string;
};

export const AddOfficeReviewsOfficeInfoCompo = (props: propsType) => {
  return (
    <figure className=" h-80 rounded-lg overflow-hidden mr-6 relative sm:w-full">
      <img src={props.imgSrc} alt="오피스 이미지" className="w-full h-full block" />
    </figure>
  );
};
