import { useState, ChangeEvent, useEffect } from 'react';
import { MdOutlineAddPhotoAlternate, MdCancel } from 'react-icons/md';

type AddOfficePhotoProps = {
    onImgChange: (images: string[]) => void;
};

export const AddOfficePhoto = ({ onImgChange }: AddOfficePhotoProps) => {
    const [images, setImages] = useState<string[]>([]);

    const handleImageAdd = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (images.length < 5) {
                setImages(prevImages => [...prevImages, URL.createObjectURL(file)]);
            } else {
                alert('최대 5개의 이미지만 추가할 수 있습니다.');
            }
        }
    };


    const handleImageRemove = (index: number) => {
        setImages(prevImages => [
            ...prevImages.slice(0, index),
            ...prevImages.slice(index + 1, prevImages.length),
        ]);
    };

    useEffect(() => {
        onImgChange(images)
    }, [images])
    const formData = new FormData();

    images.forEach((image) => {
        const blob = new Blob([image], { type: 'image/jpeg, image/png' });

        formData.append('file', blob);
    });


    return (
        <>
            <p className="text-center text-base">오피스 사진을 추가해주세요. 1:1비율 사진을 권장합니다.</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
                <div>
                    <label htmlFor="photo" className="btn w-16 h-16 flex content-center">
                        <MdOutlineAddPhotoAlternate className="text-xl" />
                        <span className="text-sm font-light">{images.length}/5</span>
                    </label>
                    <input
                        type="file"
                        id="photo"
                        className="hidden"
                        accept="image/png, image/jpg"
                        onChange={handleImageAdd}
                    />
                </div>
                {images.map((image, index) => (
                    <div key={index} className="w-16 h-16 bg-secondary rounded-lg relative">
                        <button
                            className="absolute text-primary left-[57px] top-[-6px]"
                            onClick={() => handleImageRemove(index)}
                        >
                            <MdCancel />
                        </button>
                        <img className="h-full object-cover rounded-lg" src={image} alt={`Office ${index}`} />
                    </div>
                ))}
            </div>
        </>
    );
};
