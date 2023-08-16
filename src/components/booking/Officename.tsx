import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard:', text);
  }).catch((error) => {
    console.error('Error copying text to clipboard:', error);
  });
};

type OfficenameProps = {
  name: string;
  address: string;
};

export const OfficeName = ({ name, address }: OfficenameProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (text: string) => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset the copied state after 1.5 seconds
  };

  return (
    <>
      <div className="flex flex-col gap-1 p-2">
        <p className="text-base font-bold">{name}</p>
        <div
          className="copy flex gap-2 group hover:cursor-pointer"
          onClick={() => handleCopyClick(address)}
        >
          <p className="text-sm">{address}</p>
          <MdContentCopy className="hidden group-hover:block" />
          {copied ? <p className="text-sm text-primary">복사되었습니다!</p> : null}
        </div>
      </div>
    </>
  );
};
