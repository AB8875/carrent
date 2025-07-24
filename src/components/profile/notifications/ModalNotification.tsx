import { notificationsTab } from "@/components/helper/ProfileHelper";
import { ModalCrossIcon } from "@/components/helper/ProfileIcon";
import { FC, useRef } from "react";

interface ModalNotificationProps {
  closeModal: () => void;
}

const ModalNotification: FC<ModalNotificationProps> = ({ closeModal }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[99] mt-10 bg-black/70 px-4 pb-10 sm:mt-15 sm:px-10 md:mt-20 lg:mt-21 xl:mt-25"
      onClick={handleOverlayClick}
    >
      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative z-[1] mt-2 mr-14 ml-auto max-h-[80vh] w-full max-w-[379px] min-w-[300px] overflow-hidden rounded-[20px] bg-white lg:mr-26"
      >
        <div className="flex w-full items-center justify-between gap-5 border-b-[1px] border-[#e4e7eb] bg-white px-4 py-3 min-[1400px]:px-5 min-[1400px]:py-4 min-[1700px]:px-8 min-[1700px]:py-6">
          <h3 className="text-xl font-medium text-[#222527]">Notifications</h3>
          <button onClick={closeModal}>
            <ModalCrossIcon />
          </button>
        </div>

        <div className="max-h-[70vh] min-h-[200px] overflow-y-auto">
          {notificationsTab.map((item, index) => (
            <div key={index}>
              <div className={`${item.listClass}`}>
                {item.triggerValue.map((items, i) => (
                  <button className="w-full text-start" key={i}>
                    {items.triggerContent}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;
