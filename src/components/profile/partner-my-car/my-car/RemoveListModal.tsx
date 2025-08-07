import { CrosIcon } from "@/components/helper/user/Icon";
import { useEffect } from "react";

import { FC } from "react";

interface RemoveListModalProps {
  closeModal: () => void;
}

const RemoveListModal: FC<RemoveListModalProps> = ({ closeModal }) => {
  useEffect(() => {
    // Disable scroll on modal open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll on modal close
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70">
      <div className="relative m-8 max-h-[90vh] w-full max-w-[686px] overflow-y-auto rounded-[20px] bg-white p-8">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <CrosIcon />
        </button>

        <div className="flex flex-col items-center justify-center gap-5 text-center sm:gap-y-7 lg:gap-y-10">
          <div className="flex flex-col gap-y-1 md:gap-y-3.5">
            <h1 className="text-gray text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Remove from List
            </h1>
            <p className="text-gray text-sm sm:text-base">
              Are you sure you want to remove your car from the list?
            </p>
          </div>

          <div className="flex items-center gap-7.5">
            <button
              onClick={closeModal}
              className="bg-gray text-primary cursor-pointer rounded-sm px-3 py-3 text-sm font-semibold sm:px-4 sm:text-base md:px-5 md:text-lg lg:px-6 xl:text-xl"
            >
              Yes, Remove Out
            </button>
            <button
              onClick={closeModal}
              className="border-gray text-gray cursor-pointer rounded-sm border px-3 py-3 text-sm font-semibold sm:px-4 sm:text-base md:px-5 md:text-lg lg:px-6 xl:text-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveListModal;
