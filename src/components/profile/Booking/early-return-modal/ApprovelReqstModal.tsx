import { ModalCrossIcon } from "@/components/helper/ProfileIcon";
import Image from "next/image";
import { FC } from "react";

interface ApprovelReqstModalProps {
  closeApprovalModal: () => void;
}

const ApprovelReqstModal: FC<ApprovelReqstModalProps> = ({
  closeApprovalModal,
}) => {
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-5 py-10">
        <div className="my-10 max-h-[95vh] w-full max-w-[935px] overflow-auto rounded-[20px] border border-[#d9d9d9] bg-[#F9F9F9] px-5 py-[60px] sm:px-8 md:px-[50px] md:pt-[50px] md:pb-8">
          <div className="relative">
            <div className="absolute -top-11 -right-1 md:-top-5 md:-right-5">
              <button onClick={closeApprovalModal} className="cursor-pointer">
                <ModalCrossIcon />
              </button>
            </div>
            <Image
              className="mx-auto mb-[30px] max-sm:max-w-[95px]"
              src={"/assets/png/my-booking-approval-modal-ig.png"}
              alt="img"
              height={132}
              width={132}
            />
            <p className="text-gray text-center text-base leading-[155%] font-medium sm:text-xl md:text-2xl lg:text-[32px]">
              {`
              "Your early return request is pending approval. Please wait for
              confirmation from the owner."`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovelReqstModal;
