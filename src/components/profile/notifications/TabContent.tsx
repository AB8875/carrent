"use client";
import { useState } from "react";

import {
  CameraIcon,
  DoubleTickIcon,
  EmojiIcon,
  NotificationPageIcon,
  PhIconYellow,
  PlusIcon,
  SentMessageIcon,
} from "@/components/helper/ProfileIcon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { carDetails } from "@/components/helper/ProfileHelper";

interface TabContentProps {
  profileImg: string;
  profileName: string;
  msgDate: string;
  messageSentTime: string;
}

const TabContent: FC<TabContentProps> = ({
  profileImg,
  profileName,
  msgDate,
  messageSentTime,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [messageInput, setMessageInput] = useState(""); // track input
  const [messages, setMessages] = useState<string[]>([]); // store sent messages

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    setMessages((prev) => [...prev, messageInput]);
    setMessageInput("");
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-5">
      {/* Header */}
      <div className="max-[1470px]:px-4 min-[1470px]:pr-4">
        <div className="sticky top-4 flex w-full items-center justify-between rounded-[14px] border-b border-black/70 bg-white px-3.5 py-3 shadow-md shadow-black/15 sm:px-4 sm:py-4 lg:px-4 lg:py-4 2xl:px-5">
          <div className="flex items-center gap-[18px]">
            <Image
              src={profileImg}
              alt="Profile image"
              width={41}
              height={41}
              priority
            />
            <h3 className="text-xs font-medium sm:text-sm md:text-base">
              {profileName}
            </h3>
          </div>
          <Link href="tel:+919999888999" aria-label="Call user">
            <PhIconYellow />
          </Link>
        </div>
      </div>

      {/* Message area */}
      <div className="max-h-[calc(100vh-400px)] min-h-[calc(100vh-310px)] overflow-y-auto pb-20 text-center max-[1470px]:px-4 min-[1470px]:pr-4 md:pb-60">
        <p className="mx-auto inline-block rounded-[6px] bg-white px-4 py-1.5 text-base leading-[144%] font-semibold">
          {msgDate}
        </p>

        {/* Confirmation message */}
        <div className="relative mt-16 w-full rounded-[20px] bg-[#f9f9f9] px-3.5 pt-3.5 pb-[70px] shadow min-[1024px]:px-6 min-[1024px]:pt-6 min-[1700px]:px-[30px] min-[1700px]:pt-[30px] sm:pb-[65px] md:rounded-[27px] md:bg-white md:pb-[60px]">
          <div className="absolute right-6 bottom-3 text-right">
            <div className="ml-6">
              <DoubleTickIcon />
            </div>
            <p className="text-sm leading-[160%] text-[#5a6474]">
              {messageSentTime}
            </p>
          </div>
          <div className="mb-9 flex gap-3">
            <Image
              className="h-8 max-md:hidden"
              src="/assets/png/pass-setting-car-img.png"
              alt="Car image"
              width={67}
              height={31}
            />
            <h3 className="text-start text-xs leading-[144%] font-semibold sm:text-sm md:text-base lg:text-lg">
              Your booking has been successfully confirmed!
            </h3>
          </div>
          {carDetails.map((item, index) => (
            <div key={index} className="text-start">
              <p className="text-xs leading-[144%] whitespace-nowrap sm:text-sm md:text-base">
                <span className="font-medium">{item.carDetail}</span>
                <span className="ml-1">{item.carData}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Render Sent Messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className="mt-3 ml-auto w-fit max-w-[60%] rounded-[16px] bg-[#f9f9f9] px-5 py-3 text-left text-sm break-words text-black sm:text-base lg:bg-white"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="sticky bottom-2 max-[1470px]:px-4 min-[1470px]:pr-4">
        <div className="sticky z-[99999] mt-auto flex w-full items-center justify-between gap-5 rounded-[14px] bg-white px-4.5 py-2 shadow-[0px_-3.647px_4.863px_0px] shadow-black/15 md:bottom-4">
          <div className="relative flex items-center gap-3 md:gap-[30px]">
            {/* Toggle Buttons */}
            {showActions && (
              <>
                <button
                  aria-label="Open notifications"
                  className="absolute bottom-26"
                >
                  <NotificationPageIcon />
                </button>
                <button aria-label="Open camera" className="absolute bottom-12">
                  <CameraIcon />
                </button>
              </>
            )}

            {/* Plus icon */}
            <button
              aria-label="Add attachment"
              onClick={() => setShowActions((prev) => !prev)}
              className={`cursor-pointer transition-transform duration-300 ${
                showActions ? "rotate-[135deg]" : "rotate-0"
              }`}
            >
              <PlusIcon />
            </button>
          </div>
          {/* Input */}
          <input
            name="messageInput"
            aria-label="Type a message"
            type="text"
            placeholder="Type a message here"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="h-full w-full border-0 py-3 text-base text-black/70 outline-none xl:py-4"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />

          <div className="flex items-center gap-3.5 sm:gap-6 md:gap-[30px]">
            <button aria-label="Add emoji">
              <EmojiIcon />
            </button>
            <button
              className="cursor-pointer"
              aria-label="Send message"
              onClick={handleSendMessage}
            >
              <SentMessageIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
