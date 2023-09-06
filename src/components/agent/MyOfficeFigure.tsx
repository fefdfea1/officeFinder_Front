import { SlickSlider } from "../../pages/BookingSlider"

const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    autoplay: true,
};
type ImgProps = {
    source: string[], // 'sorce'를 'source'로 수정
    length?: number;
}

export const MyOfficeFigure = (props: ImgProps) => {
    const picturesList = props.source
    // lg: w - 8 / 12 lg: mx - auto xl: w - full
    return (
        <>
            <SlickSlider setting={setting}>
                {picturesList.map((key, index: number) =>
                    <figure key={key}>
                        <div className="h-96 rounded-xl overflow-hidden mb-4">
                            <img
                                id={key}
                                src={picturesList[index]}
                                alt="오피스 이미지"
                                className="block w-full h-full object-cover"
                            />
                        </div>
                    </figure>
                )}
            </SlickSlider>
        </>
    );
}
