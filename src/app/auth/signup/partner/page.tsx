import OnBoardingLayout from "@/components/common/onboarding/OnBoardingLayout";
import SignIn from "@/components/common/onboarding/SignIn";

import React from "react";

function page() {
  return (
    <>
      <div>
        <OnBoardingLayout
          title="Sign Up"
          para="Create Your Account to Manage or Rent Car"
        >
          <SignIn />
        </OnBoardingLayout>
      </div>
    </>
  );
}

export default page;
