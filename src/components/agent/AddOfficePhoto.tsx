import { MdCancel } from "react-icons/md"

import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
export const AddOfficePhoto = () => {

    return (

        <>
            <div className="">
                <p className="text-center text-base">오피스 사진을 추가해주세요. 1:1비율 사진을 권장합니다.</p>
                <div className="flex justify-center py-4 gap-4">
                    <button className="btn w-16 h-16 flex content-center">
                        <MdOutlineAddPhotoAlternate className="text-xl" />
                        <span className="text-sm font-light">5/5</span>
                    </button>
                    <div className="w-16 h-16 bg-secondary rounded-lg relative">
                        <button className="absolute text-primary left-[67px] top-[-6px]"><MdCancel /></button>
                        <img className="object-center rounded-lg" src="https://picsum.photos/350" />
                    </div>
                </div>
            </div>
        </>
    )
}