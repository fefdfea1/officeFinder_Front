import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
};

type OfficeNameProps = {
  name: string;
  address: string;
};

export const OfficeName = ({ name, address }: OfficeNameProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (text: string) => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className="flex flex-col gap-1 p-2">
        <p className="text-base font-bold">{name}</p>
        <div className="copy flex gap-2 group hover:cursor-pointer" onClick={() => handleCopyClick(address)}>
          <p className="text-sm address">{address}</p>
          <MdContentCopy className="hidden group-hover:block" />
          {copied ? <p className="text-sm text-primary">복사되었습니다!</p> : null}
        </div>
      </div>
    </>
  );
};
