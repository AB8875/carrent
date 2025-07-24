import MessageTab from "../profile/notifications/MessageTab";
import {
  ActivityIcon,
  CustomersIcon,
  DashBoardIcon,
  DocumentIcon,
  MyAchievmentsIcon,
  MyCarIcon,
  PartnerBodyIcon,
  PartnerDriveIcon,
  PartnerEngineIcon,
  PartnerExteriorBodyIcon,
  PartnerFuelTypeIcon,
  PartnerHistoryIcon,
  PartnerHorsePowerIcon,
  PartnerInteriorBodyIcon,
  PartnerMakeIcon,
  PartnerMilageIcon,
  PartnerModelIcon,
  PartnerSeatsIcon,
  PartnerStockIdIcon,
  PartnerTransMissionIcon,
  PartnerYearIcon,
  PaymentIcon,
  ReviewsCarIcon,
  TransactionsIcon,
} from "../helper/ProfileIcon";
import {
  AutomaticIcon,
  BlackSettingIcon,
  ColdAirIcon,
  DoorIcon,
  FuelIcon,
  MyBookingIocn,
  NotificationIconapp,
  SecSeatIcon,
} from "../helper/user/Icon";

export const profileSettingData = [
  {
    htmlFor: "firstName",
    labelTitle: "First Name",
    id: "firstName",
    placeholder: "John",
    type: "text",
    className: "",
    defaultValue: "John",
  },
  {
    htmlFor: "lastName",
    labelTitle: "Last Name",
    id: "lastName",
    placeholder: "Walley",
    type: "text",
    className: "",
    defaultValue: "Walley",
  },
  {
    htmlFor: "email",
    labelTitle: "Email Address",
    id: "email",
    placeholder: "dummy@gmail.com",
    type: "email",
    className: "",
    defaultValue: "dummy@gmail.com",
  },
  {
    htmlFor: "phNumber",
    labelTitle: "Phone no.",
    id: "phNumber",
    placeholder: "xxxxxx7890",
    type: "text",
    className: "",
    defaultValue: "xxxxxx7890",
  },
  {
    htmlFor: "location",
    labelTitle: "Location",
    id: "location",
    placeholder: "Australia",
    type: "text",
    className: "!max-w-[2000px] !w-[100%]",
    defaultValue: "Australia",
  },
  {
    htmlFor: "address",
    labelTitle: "Address",
    id: "address",
    placeholder: "2464 Royal Ln. Mesa, New Jersey 45463",
    type: "text",
    className: "!max-w-[2000px] !w-[100%]",
    defaultValue: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
];
export const passwordSettings = [
  {
    htmlFor: "currentPass",
    title: "Current Password",
    type: "password",
    id: "oldPassword",
    placeholder: "Current password",
    characterClass: "hidden",
    morethanCharacter: "",
    defaultValue: "",
  },
  {
    htmlFor: "newPass",
    title: "New Password",
    type: "password",
    id: "newPassword",
    placeholder: "new password",
    characterClass: "",
    morethanCharacter: "Your new Password must be more than 8 characters",
    defaultValue: "",
  },
  {
    htmlFor: "confirmNewPass",
    title: "Confirm New Password",
    type: "password",
    id: "confirmPassword",
    placeholder: "confirm new password",
    characterClass: "hidden",
    morethanCharacter: "",
    defaultValue: "",
  },
];

export const accountSettingsAccount = [
  {
    img: "/assets/png/add-account-img-1.png",
    name: "Esther Howard",
    email: "bill.sanders@example.com",
  },
  {
    img: "/assets/png/add-account-img-2.png",
    name: "Bessie Cooper",
    email: "willie.jennings@example.com",
  },
  {
    img: "/assets/png/add-account-img-3.png",
    name: "Jenny Wilson",
    email: "felicia.reid@example.com",
  },
  {
    img: "/assets/png/add-account-img-4.png",
    name: "Floyd Miles",
    email: "dolores.chambers@example.com",
  },
];
export const addAccountModalForm = [
  {
    labelTitle: "First Name",
    htmlFor: "fName",
    id: "fName",
    placeholder: "John",
    type: "text",
  },
  {
    labelTitle: "Last Name",
    htmlFor: "LName",
    id: "LName",
    placeholder: "Walley",
    type: "text",
  },
  {
    labelTitle: "Email Address",
    htmlFor: "email",
    id: "email",
    placeholder: "dummy@gmail.com",
    type: "email",
  },
  {
    labelTitle: "Password",
    htmlFor: "password",
    id: "password",
    placeholder: "*********",
    type: "password",
  },
];
export const notificationsSwitch = [
  {
    title: "Promotions",
  },
  {
    title: "Discounts",
  },
  {
    title: "Booking Confirmation",
  },
  {
    title: "Special Deals",
  },
  {
    title: "Payment Reminder",
  },
  {
    title: "Account & Security Alerts",
  },
];
export const notificationsTab = [
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "1",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-1.png"
            name="Devan Lane"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "2",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-2.png"
            name="Albert Flores"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "3",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-3.png"
            name="Theresa Webb"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "4",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-4.png"
            name="Kathryn Murphy"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "5",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-5.png"
            name="Jacob Jones"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
  {
    listClass: "w-full",
    triggerValue: [
      {
        triggerValue: "6",
        triggerContent: (
          <MessageTab
            profilePic="/assets/png/notification-img-6.png"
            name="Jane Cooper"
            para="High fived your workout"
            time="6 min"
          />
        ),
      },
    ],
  },
];
export const carDetails = [
  {
    carDetail: "Car Model:",
    carData: "[Car Model] (e.g., Toyota Corolla)",
  },
  {
    carDetail: "Pickup Date:",
    carData: "[Date]",
  },
  {
    carDetail: "Return Date:",
    carData: "[Date] ",
  },
  {
    carDetail: "Pickup Location:",
    carData: "[Location Address]",
  },
  {
    carDetail: " Total Amount:",
    carData: "$[Amount]",
  },
  {
    carDetail: "Reservation Number:",
    carData: "[Booking Number]",
  },
];
export const sideBardata = [
  {
    icon: MyAchievmentsIcon,
    title: "My Achievments ",
    path: "/partner/dashboard/my-achivement",
  },
  {
    icon: DocumentIcon,
    title: "Document Verification",
    path: "/partner/dashboard/document-verfications",
  },
  {
    icon: TransactionsIcon,
    title: "Transactions",
    path: "/partner/dashboard/transactions",
  },
  {
    icon: ReviewsCarIcon,
    title: "Reviews of Cars",
    path: "/partner/dashboard/review-car",
  },
  {
    icon: PaymentIcon,
    title: "Payment",
    path: "/dashboard/payment",
  },
  {
    icon: ActivityIcon,
    title: "My Activity ",
    path: "/dashboard/my-activity",
  },
  {
    icon: DocumentIcon,
    title: "Document Verification",
    path: "/dashboard/document-verfications",
  },
];

export const sideBarData = [
  {
    icon: DashBoardIcon,
    title: "Dashboard",
    path: "/partner/dashboard/dashboard",
  },
  {
    icon: BlackSettingIcon,
    title: "Setting",
    path: "/partner/dashboard/setting",
  },
  {
    icon: NotificationIconapp,
    title: "Notification ",
    path: "/partner/dashboard/notification",
  },
  {
    icon: MyCarIcon,
    title: "My Cars",
    path: "/partner/dashboard/my-car",
  },
  {
    icon: CustomersIcon,
    title: "Customers ",
    path: "/partner/dashboard/coustomer",
  },

  {
    icon: BlackSettingIcon,
    title: "Setting",
    path: "/dashboard/setting",
  },
  {
    icon: NotificationIconapp,
    title: "Notification ",
    path: "/dashboard/notification",
  },
  {
    icon: MyBookingIocn,
    title: "My Booking",
    path: "/dashboard/my-booking",
  },
];

export const bookedCarData = [
  {
    labelTitle: "Car Model",
    htmlFor: "car-model",
    inputType: "text",
    name: "car-model",
    inputId: "car-model",
    placeholder: "Car Model",
  },
  {
    labelTitle: "Booking No.",
    htmlFor: "booking-no",
    inputType: "text",
    name: "booking-no",
    inputId: "booking-no",
    placeholder: "Ex:XYZ12345",
  },
  {
    labelTitle: "Total Amount",
    htmlFor: "amount",
    inputType: "text",
    name: "amount",
    inputId: "amount",
    placeholder: "Total Amount",
  },
  {
    labelTitle: "Pick Up Time & Date",
    htmlFor: "pick-up-date",
    inputType: "dateTime",
    name: "pick-up-date",
    inputId: "pick-up-date",
    placeholder: "Time / Date",
  },
  {
    labelTitle: "Return Car Date",
    htmlFor: "return-date",
    inputType: "date",
    name: "return-date",
    inputId: "return-date",
    placeholder: "Return Date",
  },
  {
    labelTitle: "Outstanding Amount",
    htmlFor: "outstanding-amount",
    inputType: "text",
    name: "outstanding-amount",
    inputId: "outstanding-amount",
    placeholder: "Amount",
  },
];
export const issueCategory = [
  { option: "Early Car Return " },
  { option: "Damaged Car   " },
  { option: "Fuel Issue " },
  { option: "Other" },
];
export const damageCarOption = [
  { carDamage: "Minor" },
  { carDamage: "Major" },
  { carDamage: "Extensive" },
];
export const earlyReturnModalData = [
  {
    htmlFor: "car-model",
    labelTitle: "Car Model",
    inputType: "text",
    id: "car-model",
    placeholder: "Car Model",
  },
  {
    htmlFor: "return-time",
    labelTitle: "Current Car Return Time",
    inputType: "time",
    id: "return-time",
    placeholder: "Return Time",
  },
  {
    htmlFor: "booking-no",
    labelTitle: "Booking No.",
    inputType: "text",
    id: "booking-no",
    placeholder: "Booking No",
  },
  {
    htmlFor: "return-date",
    labelTitle: "Current Car Return Date",
    inputType: "date",
    id: "return-date",
    placeholder: "Return Date",
  },
];
export const earlyReturnNewData = [
  {
    htmlFor: "new-return-time",
    labelTitle: "Select New Return Time",
    inputType: "time",
    id: "new-return-time",
    placeholder: "New Return Time",
  },
  {
    htmlFor: "new-return-date",
    labelTitle: "Select New Return Date",
    inputType: "date",
    id: "new-return-date",
    placeholder: "New Return Date",
  },
];
export const riseAnIssueIssueCategry = [
  {
    option: "Vehicle Condition",
    example: " (e.g., damages, cleanliness, mechanical issues)",
  },
  {
    option: "Billing or Payment Issue    ",
    example: "(e.g., incorrect charges, missing discounts, overcharges)",
  },
  {
    option: "Reservation or Booking Issue ",
    example: " (e.g., wrong vehicle, reservation error)",
  },
  {
    option: "Customer Service Issue ",
    example: "(e.g., unhelpful staff, long wait times)",
  },
  {
    option: "Return or Pickup Issue ",
    example: "(e.g., confusion about drop-off/pick-up, location issues)",
  },

  { option: "Other", example: "" },
];
export const reservationDetailData = [
  {
    htmlFor: "car-model",
    labelTitle: "Rental Car Model",
    inputType: "text",
    inputId: "car-model",
    placeholder: "Car Model",
  },
  {
    htmlFor: "booking-no",
    labelTitle: "Booking No.",
    inputType: "text",
    inputId: "booking-no",
    placeholder: "Booking No",
  },
  {
    htmlFor: "pick-up-date",
    labelTitle: "Pick up date",
    inputType: "date",
    inputId: "pick-up-date",
    placeholder: " Date",
  },
  {
    htmlFor: "return-date",
    labelTitle: "Return Date",
    inputType: "date",
    inputId: "return-date",
    placeholder: "Return date",
  },
];
export const reservationIssueData = [
  {
    htmlFor: "issue-location",
    labelTitle: "Issue Location",
    inputType: "text",
    inputId: "issue-location",
    placeholder: "Issue Location",
  },
  {
    htmlFor: "issue-title",
    labelTitle: "Issue Title",
    inputType: "text",
    inputId: "issue-title",
    placeholder: "Issue Title",
  },
];
export const urgencyLevelOption = [
  {
    option: "Low ",
    example: " (Non-critical issue, response within 3-5 business days)",
  },
  {
    option: "Medium ",
    example: " (Needs resolution within 1-2 business days) ",
  },
  {
    option: "High  ",
    example: "  (Urgent, needs immediate attention)",
  },
];
export const contactUsFormData = [
  {
    htmlFor: "first-name",
    labelTitle: "First Name",
    inputType: "text",
    inputId: "first-name",
    placeholder: "First Name",
    inputClass: "",
    className: "w-full sm:w-[45%] sm:max-w-[511px]",
  },
  {
    htmlFor: "last-name",
    labelTitle: "Last Name",
    inputType: "text",
    inputId: "last-name",
    placeholder: "Last Name",
    inputClass: "",
    className: "w-full sm:w-[45%] sm:max-w-[511px]",
  },
  {
    htmlFor: "email",
    labelTitle: "Email Address",
    inputType: "email",
    inputId: "email",
    placeholder: "Email",
    inputClass: "",
    className: "w-full sm:w-[45%] sm:max-w-[511px]",
  },
  {
    htmlFor: "ph-no",
    labelTitle: "Phone no.",
    inputType: "text",
    inputId: "ph-no",
    placeholder: "Phone no",
    inputClass: "",
    className: "w-full sm:w-[45%] sm:max-w-[511px]",
  },
  {
    htmlFor: "booking-no",
    labelTitle: "Booking no.",
    inputType: "text",
    inputId: "booking-no",
    placeholder: "Booking no",
    inputClass: "",
    className: "w-[100%] ",
  },
];
export const dashboardNavbarLinks = [
  { path: "/", linkTitle: "Home" },
  { path: "/", linkTitle: "About US" },
  { path: "/", linkTitle: "Upload Cars" },
  { path: "/", linkTitle: "Contact Us" },
];
export const addCarDetails = [
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 !md:bg-white ",
    carImg: "/assets/png/creta-right.png",
    views: 1222.2,
    bookMark: 1000.2,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 ",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 ",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 ",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 ",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
  {
    id: "car1",
    className: "!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0 ",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "5 Seats",
      },
      {
        icon: <DoorIcon />,
        name: "4 Door",
      },
      {
        icon: <ColdAirIcon />,
        name: "Air Conditioning",
      },
      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <FuelIcon />,
        name: "Diesel",
      },
    ],
    pekupLocation: "Sydney Airport",
    features: " GPS Navigation",
    distance: " 3.8 Km away",
    avableDate: {
      start: " Mar 02, 2025 ",
      end: " Mar 02, 2026",
    },
    price: {
      price: "250",
      offerPrice: "0",
    },
    bookNow: "#",
  },
];
export const partnerCarDetails = [
  { icon: <PartnerBodyIcon />, title: "Body", carDetail: "Sport Cars" },
  { icon: <PartnerSeatsIcon />, title: "Seats", carDetail: "5 Seats" },
  { icon: <PartnerYearIcon />, title: "Year", carDetail: "2020" },
  {
    icon: <PartnerExteriorBodyIcon />,
    title: "Exterior Body",
    carDetail: "Silver Metallic",
  },
  {
    icon: <PartnerTransMissionIcon />,
    title: "Transmission",
    carDetail: "Automatic",
  },
  { icon: <PartnerMakeIcon />, title: "Make", carDetail: "Lexus" },
  { icon: <PartnerFuelTypeIcon />, title: "Fuel Type", carDetail: "Petrol" },
  { icon: <PartnerMilageIcon />, title: "Mileage", carDetail: "10ML" },
  {
    icon: <PartnerInteriorBodyIcon />,
    title: "Interior Body",
    carDetail: "Jet Black",
  },
  { icon: <PartnerStockIdIcon />, title: "Stock Id", carDetail: "23456" },
  { icon: <PartnerModelIcon />, title: "Model ", carDetail: "IS 250 C" },
  { icon: <PartnerEngineIcon />, title: "Engine", carDetail: "2500" },
  {
    icon: <PartnerHorsePowerIcon />,
    title: "Horsepower",
    carDetail: "295 hp",
  },
  { icon: <PartnerDriveIcon />, title: "Drive", carDetail: "AWD" },
  { icon: <PartnerHistoryIcon />, title: "History", carDetail: "N/A" },
];
