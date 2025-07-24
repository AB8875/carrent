import LogIn from "@/components/common/onboarding/LogIn";
import OnBoardingLayout from "@/components/common/onboarding/OnBoardingLayout";
import React from "react";

function page() {
  return (
    <>
      <div>
        <OnBoardingLayout
          title="Log In"
          para="Welcome back to Carent. Please Log in to manage their Cars. "
        >
          <LogIn />
        </OnBoardingLayout>
      </div>
    </>
  );
}

export default page;
