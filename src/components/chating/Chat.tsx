import { useState } from 'react'
import { ChatList } from './ChatList'
import { ChatIcon } from './ChatIcon'
export const Chat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpenChange = (prev: boolean) => { setIsOpen(prev) }
    return (<div>


        {isOpen ?
            <ChatList onIsOpenChange={handleIsOpenChange} />
            : <ChatIcon onIsOpenChange={handleIsOpenChange} />}
    </div>)
}