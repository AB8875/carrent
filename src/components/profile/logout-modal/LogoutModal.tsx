import { ModalCrossIcon } from "@/components/helper/ProfileIcon";
import React, { FC } from "react";

interface LogOutModalProps {
  closeModal: () => void;
  handleLogout: () => void;
}

const LogOutModal: FC<LogOutModalProps> = ({ closeModal, handleLogout }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="logout-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-5 py-10"
    >
      <div className="relative max-h-[90vh] w-full max-w-[686px] rounded-[20px] border border-[#d9d9d9] bg-[#f9f9f9] px-7 pt-7 pb-12">
        <button
          onClick={closeModal}
          className="absolute top-8 right-[30px] cursor-pointer"
          aria-label="Close"
        >
          <ModalCrossIcon />
        </button>
        <h1
          id="logout-title"
          className="text-gray mb-3.5 text-center text-2xl font-semibold"
        >
          Log Out
        </h1>
        <p className="text-gray mb-10 text-center text-base">
          Are you sure you want to Log out
        </p>
        <div className="flex items-center justify-center gap-9">
          <button
            onClick={handleLogout}
            className="text-primary hover:text-gray bg-gray border-gray cursor-pointer rounded-md border px-6 py-3 text-xl font-semibold duration-200 hover:bg-transparent"
          >
            Yes, Log Out
          </button>
          <button
            onClick={closeModal}
            className="text-gray hover:text-primary border-gray hover:bg-gray cursor-pointer rounded-md border bg-transparent px-6 py-3 text-xl font-semibold duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
