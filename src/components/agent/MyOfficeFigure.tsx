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
    const picturesList = Array.isArray(props.picturesUrl)
        ? props.picturesUrl.filter((url) => url !== "None")
        : [];

    if (picturesList.length === 0) {
        return (
            <div className="h-96 rounded-xl overflow-hidden mb-4">
                <img src={`public/officeImg/noImage.png`} alt="오피스 대체 이미지" className="block w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <>
            <SlickSlider setting={setting}>
                {picturesList.map((url, index: number) => (
                    <figure key={index}>
                        <div className="h-96 rounded-xl overflow-hidden">
                            <img
                                id={String(index)}
                                src={url}
                                alt="오피스 이미지"
                                className="block w-full h-full object-cover"
                            />
                        </div>
                    </figure>
                ))}
            </SlickSlider>
        </>
    );
};
