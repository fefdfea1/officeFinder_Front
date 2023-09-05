export const BookingImageEmpty = () => {
  return (
    <figure>
      <div className="h-96 rounded-xl overflow-hidden mb-4 lg:w-8/12 lg:mx-auto xl:w-full">
        <img src={`/officeImg/noimage.png`} alt="오피스 대체 이미지" className="block w-full h-full" />
      </div>
    </figure>
  );
};
