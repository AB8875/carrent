import Image from "next/image";
import { FC } from "react";

interface MessageTabProps {
  profilePic: string;
  name: string;
  para: string;
  time: string;
}

const MessageTab: FC<MessageTabProps> = ({ profilePic, name, para, time }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-5 py-3 pr-3 pl-6">
        <div className="flex w-full items-center gap-4">
          <Image width={43} height={43} src={profilePic} alt="img" />
          <div className="flex flex-col">
            <h3 className="mb-0.5 text-sm leading-[21.577px] font-medium text-[#222529]">
              {name}
            </h3>
            <p className="text-xs leading-[19.42px] font-medium text-[#5a6474]">
              {para}
            </p>
            <p className="text-[10px] leading-[17.262px] text-[#5a6474]">
              {time}
            </p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7307 4.7255C10.7809 4.67526 10.8404 4.6354 10.9059 4.60821C10.9715 4.58101 11.0417 4.56702 11.1127 4.56702C11.1836 4.56702 11.2539 4.58101 11.3194 4.60821C11.3849 4.6354 11.4445 4.67526 11.4946 4.7255L19.3951 12.6271C19.5467 12.7789 19.6318 12.9845 19.6318 13.1989C19.6318 13.4134 19.5467 13.619 19.3951 13.7707L11.4946 21.6724C11.3933 21.7737 11.2559 21.8306 11.1127 21.8306C10.9694 21.8306 10.832 21.7737 10.7307 21.6724C10.6295 21.5711 10.5725 21.4337 10.5725 21.2905C10.5725 21.1472 10.6295 21.0098 10.7307 20.9085L18.4414 13.1989L10.7307 5.48934C10.6805 5.43923 10.6407 5.3797 10.6135 5.31416C10.5863 5.24863 10.5723 5.17837 10.5723 5.10742C10.5723 5.03646 10.5863 4.9662 10.6135 4.90067C10.6407 4.83513 10.6805 4.7756 10.7307 4.7255Z"
              fill="#5A6474"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default MessageTab;
