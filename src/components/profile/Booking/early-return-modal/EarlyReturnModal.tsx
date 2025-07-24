import { earlyReturnNewData } from "@/components/helper/ProfileHelper";
import CarDetail from "./CarDetail";

import { ModalCrossIcon } from "@/components/helper/ProfileIcon";
import { FC } from "react";

interface EarlyReturnModalProps {
  closeEarlyModal: () => void;
  openApprovalModal: () => void;
}

const EarlyReturnModal: FC<EarlyReturnModalProps> = ({
  closeEarlyModal,
  openApprovalModal,
}) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-5 py-10">
      <div className="z-[9999999999999] my-10 max-h-[95vh] w-full max-w-[935px] overflow-auto rounded-[20px] border border-[#d9d9d9] bg-[#F9F9F9]">
        <div className="relative border-black px-[15px] pt-[15px] max-md:border-b-[1px] max-md:pb-3 sm:px-5 sm:pt-5 md:px-6 md:pt-6 lg:px-[30px] lg:pt-[30px]">
          <div className="absolute top-5 right-5">
            <button onClick={closeEarlyModal} className="cursor-pointer">
              <ModalCrossIcon />
            </button>
          </div>
          <h1 className="text-gray mb-1 text-sm leading-normal font-semibold sm:mb-2 sm:text-lg md:mb-3.5 md:text-xl lg:text-2xl">
            Return Your Rental Car Early
          </h1>
          <p className="text-gray/70 text-xs leading-normal sm:text-sm md:text-base">
            Are you sure you want to return the car early?
          </p>
        </div>
        <div className="mt-11 px-[15px] pb-[50px] sm:px-5 sm:pb-14 md:px-6 md:pb-16 lg:px-[30px] lg:pb-[78px]">
          <CarDetail />
          <div className="mt-5 flex flex-col gap-y-5 sm:mt-[30px] md:gap-y-7">
            {earlyReturnNewData.map((item, index) => (
              <div key={index} className="flex w-full flex-col gap-y-3.5">
                <label
                  className="text-gray/70 text-xs min-[700px]:text-sm"
                  htmlFor={item.htmlFor}
                >
                  {item.labelTitle}
                </label>
                <input
                  className="border-gray/50 text-gray rounded-md border-[0.2px] bg-white px-3.5 py-2 text-sm leading-normal font-medium outline-0 md:text-base"
                  placeholder={item.placeholder}
                  type={item.inputType}
                  id={item.id}
                />
              </div>
            ))}
            <div className="flex w-full flex-col gap-y-3.5">
              <label
                className="text-gray/70 text-xs min-[700px]:text-sm"
                htmlFor="reason"
              >
                Reason For Early Return
              </label>
              <textarea
                rows={3}
                className="border-gray/50 text-gray rounded-md border-[0.2px] bg-white px-3.5 py-2 text-sm leading-normal font-medium outline-0 md:text-base"
                name="reason"
                id="reason"
                placeholder="Reason"
              ></textarea>
            </div>
          </div>
          <div className="mt-10 flex gap-x-10 gap-y-5 max-[500px]:flex-col md:mt-[50px]">
            <button
              onClick={openApprovalModal}
              className="bg-gray text-primary hover:text-gray border-gray rounded-md border px-6 py-3 text-xl font-semibold duration-200 hover:bg-transparent"
            >
              Confirm
            </button>
            <button
              onClick={closeEarlyModal}
              className="text-gray hover:text-primary border-gray hover:bg-gray rounded-md border bg-transparent px-6 py-3 text-xl font-semibold duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyReturnModal;
