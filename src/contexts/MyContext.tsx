import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
    isChatListOpen: boolean;
    setIsChatListOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isChatRoom: boolean;
    setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isChatListOpen, setIsChatListOpen] = useState<boolean>(false);
    const [isChatRoom, setIsChatRoom] = useState<boolean>(false);

    const contextValue: MyContextType = {
        isChatListOpen,
        setIsChatListOpen,
        isChatRoom,
        setIsChatRoom,
    };

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext는 MyProvider내에서 사용되야합니다.');
    }
    return context;
};
