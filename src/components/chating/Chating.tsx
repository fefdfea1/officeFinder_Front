import { BsChatFill, BsFillCircleFill } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { BackgroundCover } from '../common/BackgroundCover'
export const Chating = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (<>

        {isOpen ?
            <div className="relative">
                <div className="indicator fixed bottom-10 right-10 h-92">
                    <BackgroundCover width="w-52 bg-secondary h-64 min-h-full m-0 relative">
                        <button onClick={(prev) => setIsOpen(!prev)} className=""><GrClose className="text-base absolute right-2 top-2" /></button>
                    </BackgroundCover>
                </div>
            </div>


            : <div className="relative">
                <div className="indicator fixed bottom-10 right-10">
                    <BsFillCircleFill className="z-10 absolute text-error top-[-2px] right-[-2px] text-base" />
                    <button onClick={() => setIsOpen(true)} className="btn btn-primary btn-outline bg-base-100 rounded-2xl w-12 h-12"><BsChatFill className="text-xl" /></button>
                </div>
            </div>}
    </>)
}