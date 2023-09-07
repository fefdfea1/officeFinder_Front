import { SlickSlider } from "../../pages/BookingSlider";

const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    autoplay: true,
};

type ImgProps = {
    picturesUrl: string[] | string;
    length?: number;
}

export const MyOfficeFigure = (props: ImgProps) => {
    const picturesList = Array.isArray(props.picturesUrl) ? props.picturesUrl : [];
    // lg:w-8/12 lg:mx-auto xl:w-full

    if (picturesList.length === 0) {
        // 만약 picturesList가 비어있는 경우 대체 이미지를 표시합니다.
        return (
            <div className="h-96 rounded-xl overflow-hidden mb-4">
                <img src={`/officeImg/noimage.png`} alt="오피스 대체 이미지" className="block w-full h-full" />
            </div>
        );
    }

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
