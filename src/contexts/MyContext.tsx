import React, { createContext, useContext, useState, ReactNode } from "react";
import { alamDataType } from "../components/common/NavRingCompo";

interface MyContextType {
    isChatListOpen: boolean;
    isChatRoom: boolean;
    isAlertState: boolean;
    isSseAlertState: boolean;
    isSseText: string;
    isAlamData: alamDataType | null;
    setIsChatListOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAlertState: React.Dispatch<React.SetStateAction<boolean>>;
    setSseAlertState: React.Dispatch<React.SetStateAction<boolean>>;
    setSseText: React.Dispatch<React.SetStateAction<string>>;
    setAlamData: React.Dispatch<React.SetStateAction<alamDataType | null>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isChatListOpen, setIsChatListOpen] = useState<boolean>(false);
    const [isChatRoom, setIsChatRoom] = useState<boolean>(false);
    const [isAlertState, setIsAlertState] = useState<boolean>(false);
    const [isSseAlertState, setSseAlertState] = useState<boolean>(false);
    const [isSseText, setSseText] = useState<string>("");
    const [isAlamData, setAlamData] = useState<alamDataType | null>(null);

    const contextValue: MyContextType = {
        isChatListOpen,
        isChatRoom,
        isAlertState,
        isSseAlertState,
        isSseText,
        isAlamData,
        setIsChatListOpen,
        setIsChatRoom,
        setIsAlertState,
        setSseAlertState,
        setSseText,
        setAlamData,
    };

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext는 MyProvider내에서 사용되야합니다.");
    }
    return context;
};
