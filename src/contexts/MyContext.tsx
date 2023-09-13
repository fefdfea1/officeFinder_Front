import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  isChatListOpen: boolean;
  setIsChatListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isChatRoom: boolean;
  setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
  isAlertState: boolean;
  setIsAlertState: React.Dispatch<React.SetStateAction<boolean>>;
  isSseAlertState: boolean;
  setSseAlertState: React.Dispatch<React.SetStateAction<boolean>>;
  isSseText: string;
  setSseText: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isChatListOpen, setIsChatListOpen] = useState<boolean>(false);
  const [isChatRoom, setIsChatRoom] = useState<boolean>(false);
  const [isAlertState, setIsAlertState] = useState<boolean>(false);
  const [isSseAlertState, setSseAlertState] = useState<boolean>(false);
  const [isSseText, setSseText] = useState<string>("");

  const contextValue: MyContextType = {
    isChatListOpen,
    isChatRoom,
    isAlertState,
    isSseAlertState,
    isSseText,
    setIsChatListOpen,
    setIsChatRoom,
    setIsAlertState,
    setSseAlertState,
    setSseText,
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
