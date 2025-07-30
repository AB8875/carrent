import React from "react";
interface IPROPS {
  icon: React.ReactNode;
}

const JourneyIconCard: React.FC<IPROPS> = ({ icon }) => {
  return (
    <div className="bg-primary rounded p-2 sm:px-[21px] sm:py-3 lg:p-[31px]">
      {icon}
    </div>
  );
};

export default JourneyIconCard;
