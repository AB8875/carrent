import TabContentOne from "@/components/profile/TabContentOne";
import {
  ACIcon,
  AirBagIcon,
  AudioIcon,
  BreakIcon,
  BucketSeatIcon,
  CallIcon,
  CameraIcon,
  ControlIcon,
  CustomerIcon,
  DashBoardIcon,
  DocumentIcon,
  DvDIcon,
  FreeIcon,
  HeatSeatIcon,
  HiddenEyeIcon,
  ListingIcon,
  LocationIcon,
  MailIcon,
  MemorySeatIcon,
  MPplayerIcon,
  NavigationIcon,
  NoCallIcon,
  PersonIcon,
  PhotoIcon,
  PlusIcon,
  PowerSeatIcon,
  ReviewIcon,
  RupeeIcon,
  SecureIcon,
  SettingTwoIcon,
  StereoIcon,
  SystemIcon,
  TransactionIcon,
  TrofiIcon,
  YellowCarIcon,
} from "./Icon";
import {
  BookingIcon,
  LogOutIcon,
  NotificationIcon,
  SettingIcon,
} from "../ProfileIcon";
import MyCar from "../../profile/my-car/MyCarForm";

export const footerData = [
  {
    heading: "Company",
    linkData: [
      {
        link: "About Us",
        url: "/partner/about-us",
      },
      { link: "Services", url: "/services" },
      { link: "Why Choose Us", url: "/why-choose-us" },
      { link: "Contact Us", url: "/partner/contact-us" },
      { link: "Newsletter", url: "/newsletter" },
    ],
  },
  {
    heading: "Useful Links",
    linkData: [
      { link: "Privacy Policy", url: "/privacy-term/privacy" },
      { link: "Help Center", url: "/help-center" },
      { link: "Terms of Use", url: "/terms-of-use" },
      {
        link: "Terms & Condition",
        url: "/privacy-term/term-condition",
      },
    ],
  },
  {
    heading: "About",
    linkData: [
      { link: "My Listing", url: "/partner/about-us" },
      { link: "Why Choose Us", url: "/partner/about-us" },
    ],
  },
];
export const discountData = [
  {
    heading: "1. Exclusive Discount on Listing Cars",
    aboutDiscData: [
      {
        para: '"Get 50% Off Your First Year of Listing Fees – Available for the First 100 Partners!"',
      },
      {
        para: '"Sign up as one of the first 100 partners and enjoy a special discount on your first three months of listings!"',
      },
    ],
  },
  {
    heading: "2. Free Premium Listing for the First 100 Partners",
    aboutDiscData: [
      {
        para: '"Be one of the first 100 partners to join and get a FREE Premium Listing for your first month!"',
      },
      {
        para: '"Sign up early and get a month of premium exposure for your cars at no additional cost!"',
      },
    ],
  },
  {
    heading: "3. Enhanced Visibility & Marketing Support",
    aboutDiscData: [
      {
        para: `"Get Featured in Our 'New Partners' Section for Maximum Exposure!"`,
      },
      {
        para: '"First 100 partners get priority placement on the homepage for the first month!"',
      },
      {
        para: '"Enjoy exclusive social media promotion for your dealership – free for the first 100 partners!"',
      },
    ],
  },
  {
    heading: "4. Early Access to New Features",
    aboutDiscData: [
      {
        para: `"Get early access to new website features, tools, and updates designed to boost your business!"`,
      },
      {
        para: '"Be the first to experience and provide feedback on new partner tools, free for the first 100 dealers!"',
      },
    ],
  },
  {
    heading: "5. Free Professional Photoshoot for Your Cars",
    aboutDiscData: [
      {
        para: `"Sign up as a partner and receive a FREE professional photoshoot for your first 10 vehicles listed!"`,
      },
      {
        para: '"The first 100 partners will receive free high-quality car photos to help increase the appeal of their listings!"',
      },
    ],
  },
  {
    heading: "6.  Special Partner Support",
    aboutDiscData: [
      {
        para: `"Get dedicated account management and priority customer support for the first 100 partners!"`,
      },
      {
        para: '"Benefit from exclusive training sessions and guidance on how to maximize your listings’ visibility and sales!"',
      },
    ],
  },
  {
    heading: "7.   Discount on Additional Listings",
    aboutDiscData: [
      {
        para: `"Get 30% off additional listings after your first 5 cars are uploaded!"`,
      },
      {
        para: '"As one of the first 100 partners, you’ll get discounted rates on future vehicle listings and promotions!"',
      },
    ],
  },
  {
    heading: "8. Free Advertising Credits",
    aboutDiscData: [
      {
        para: `"Receive $200 worth of advertising credits to promote your listings through our platform for the first 100 partners!"`,
      },
      {
        para: '"Use your free ad credits to boost your car listings across our site and attract more buyers!"',
      },
    ],
  },
];
export const navData = [
  {
    link: "Home",
    url: "/partner/home",
  },
  {
    link: "About Us",
    url: "/partner/about-us",
  },
  {
    link: "Upload Cars",
    url: "/partner/upload-cars",
  },
  {
    link: "Contact Us",
    url: "/partner/contact-us",
  },
];
export const contactInputData2 = [
  {
    icon: <MailIcon className="h-auto !w-[35px] md:!w-[40px] lg:!w-[56px]" />,
    title: "Email Address",
    contactMedium: "dummy234@gmail.com",
    path: "mailto:manishk82182@gmail.com",
  },
  {
    icon: (
      <LocationIcon className="h-auto !w-[35px] md:!w-[40px] lg:!w-[56px]" />
    ),
    title: "Address",
    contactMedium: "8502 Preston Rd. Inglewood, Maine 98380",
    path: "#",
  },
  {
    icon: <CallIcon className="h-auto !w-[35px] md:!w-[40px] lg:!w-[56px]" />,
    title: "Phone No.",
    contactMedium: "(217) 555-0113",
    path: "tel:(217) 555-0113",
  },
];
export const carsData = [
  {
    id: "1",
    name: "Toyota Prius",
    lat: 29,
    lng: 75,
    imageUrl: "/assets/png/secure.png",
    logoUrl: "/assets/png/secure.png",
    available: true,
  },
  {
    id: "2",
    name: "Tesla Model 3",
    lat: 29,
    lng: 76,
    imageUrl: "/assets/png/secure.png",
    logoUrl: "/assets/png/secure.png",
    available: true,
  },
];
export const headerData = [
  {
    icon: <PersonIcon />,
    heading: "Verified Car Buyers",
  },
  {
    icon: <RupeeIcon />,
    heading: "Zero Comission",
  },
  {
    icon: <NoCallIcon />,
    heading: "No Unwanted Calls",
  },
];
export const experienceData = [
  {
    number: "01",
    svg: <SettingTwoIcon className="fill-[#F9B701]" />,
    heading: "Fast & Convenient Process",
    para: "Selling your car with us is easy and efficient. No need for long negotiations or endless paperwork. Simply list your car, set a price, and get offers in no time.",
  },
  {
    number: "02",
    svg: <HiddenEyeIcon />,
    heading: "No Hidden Fees",
    para: "Unlike traditional dealerships, we believe in full transparency. There are no hidden fees, commissions, or surprise charges when you sell to us. What you see is what you get.",
    className: "!max-w-[176px]",
  },
  {
    number: "03",
    svg: <SecureIcon />,
    heading: "Secure & Fast Payment",
    para: "Selling your car with us is easy and efficient. No need for long negotiations or endless paperwork. Simply list your car, set a price, and get offers in no time.",
  },
  {
    number: "04",
    svg: <FreeIcon />,
    heading: "Free Pickup Service",
    para: "Forget about the hassle of driving your car to a dealership. We offer free pickup from your location, making the selling process even more convenient.",
  },
];
export const uploadHeaderData = [
  {
    heading: "Free Listing",
  },
  {
    heading: "Eay To Use",
  },
  {
    heading: "Hassle Free Documentation",
  },
];
export const uploadBrandData = [
  {
    brand: "/assets/png/maruti-suzuki-icon.png",
  },
  {
    brand: "/assets/png/mahindra-icon.png",
  },
  {
    brand: "/assets/png/honda-icon.png",
  },
  {
    brand: "/assets/png/ford-icon.png",
  },
  {
    brand: "/assets/png/hyundai-icon.png",
  },
  {
    brand: "/assets/png/tata-icon.png",
  },
  {
    brand: "/assets/png/toyoto.png",
  },
  {
    brand: "/assets/png/renault.png",
  },
];
export const uploadBrandData2 = [
  {
    brand: "/assets/png/volkswagen.png",
  },
  {
    brand: "/assets/png/chevrolet.png",
  },
  {
    brand: "/assets/png/skoda.png",
  },
  {
    brand: "/assets/png/kia-icon.png",
  },
  {
    brand: "/assets/png/fiat-icon.png",
  },
  {
    brand: "/assets/png/nissan-icon.png",
  },
  {
    brand: "/assets/png/g-wagen-icon.png",
  },
  {
    brand: "/assets/png/bmw-icon.png",
  },
];
export const selectData = [
  {
    name: "brand",
    labelName: "Car Brand",
    placeholder: "Select Car Brand",
    options: [
      { label: "Ashok Leyland", value: "ashok" },
      { label: "Aston Martin", value: "aston" },
      { label: "Bajaj", value: "Bajaj" },
      { label: "Bugatti", value: "Bugatti" },
      { label: "BYD", value: "BYD" },
      { label: "CADILLAC", value: "CADILLAC" },
      { label: "CITROEN", value: "citro" },
      { label: "CRYSLER", value: "crysler" },
      { label: "Daewoo", value: "Daewoo" },
      { label: "Datsun", value: "Datsun" },
      { label: "DC", value: "DC" },
      { label: "EICHER", value: "EICHER" },
      { label: "Ferrari", value: "Ferrari" },
      { label: "Force Motors", value: "Force Motors" },
      { label: "Hindustan Motors", value: "Hindustan Motors" },
      { label: "ROVAR", value: "ROVAR" },
    ],
  },
  {
    name: "year",
    labelName: "Manufacturer Year",
    placeholder: "Select car manufacturer year",
    options: [
      { label: "2025", value: "2025" },
      { label: "2024", value: "2024" },
      { label: "2023", value: "2023" },
      { label: "2022", value: "2022" },
      { label: "2021", value: "2021" },
      { label: "2020", value: "2020" },
      { label: "2019", value: "2019" },
      { label: "2018", value: "2018" },
      { label: "2017", value: "2017" },
      { label: "2016", value: "2016" },
      { label: "2015", value: "2015" },
      { label: "2014", value: "2014" },
      { label: "2013", value: "2013" },
      { label: "2012", value: "2012" },
      { label: "2011", value: "2011" },
      { label: "2010", value: "2010" },
    ],
  },
  {
    name: "carModel",
    labelName: "Car Model",
    placeholder: "Select Car Model",
    options: [
      { label: "Toyota Corolla", value: "Toyota Corolla" },
      { label: "Honda Accord", value: "Honda Accord" },
      { label: "BMW 3 Series", value: "BMW 3 Series" },
      { label: "Audi A4", value: "Audi A4" },
      { label: "Ford Fusion", value: "Ford Fusion" },
      { label: "Nissan Rogue", value: "Nissan Rogue" },
      { label: "Jeep Cherokee", value: "Jeep Cherokee" },
      { label: "Nissan Frontier", value: "Nissan Frontier" },
      { label: "Ford Mustang", value: "Ford Mustang" },
      { label: "Lexus RX", value: "Lexus RX" },
      { label: "2Audi A60", value: "2Audi A60" },
      { label: "Tesla Model 3", value: "Tesla Model 3" },
      { label: "QUTE", value: "QUTE" },
      { label: "Audi e-Tron", value: "Audi e-Tron" },
      { label: "Toyota Previa", value: "Toyota Previa" },
      { label: "Chevrolet Camaro", value: "Chevrolet Camaro" },
    ],
  },
  {
    name: "carVariant",
    labelName: "Car Variant",
    placeholder: "Select Car Variant",
    isMulti: true,
    options: [
      { label: "Petrol", value: "Petrol" },
      { label: "Diesel", value: "Diesel" },
      { label: "Electric", value: "Electric" },
      { label: "CNG", value: "CNG" },
      { label: "Automatic", value: "Automatic" },
      { label: "Manual", value: "Manual" },
    ],
  },
  {
    name: "registrationState",
    labelName: "Car Reg. State",
    placeholder: "Select Car Reg. State",
    options: [
      { label: "New South Wales", value: "New South Wales" },
      { label: "Queensland", value: "Queensland" },
      { label: "South Australia", value: "South Australia" },
      { label: "Tasmania", value: "Tasmania" },
      { label: "Victoria", value: "Victoria" },
      { label: "Western Australia", value: "Western Australia" },
    ],
  },
  {
    name: "odometerReading",
    labelName: "Odometer Reading",
    placeholder: "Select no. of km car has been driven",
    options: [
      { label: "Up to 10,000 km", value: "Up to 10,000 km" },
      { label: "10,000 to 20,000 km", value: "10,000 to 20,000 km" },
      { label: "20,000 to 30,000 km", value: "20,000 to 30,000 km" },
      { label: "30,000 to 40,000 km", value: "30,000 to 40,000 km" },
      { label: "40,000 to 60,000 km", value: "40,000 to 60,000 km" },
      { label: "60,000 to 80,000 km", value: "60,000 to 80,000 km" },
      { label: "80,000 to 1,00,000 km", value: "80,000 to 1,00,000 km" },
      { label: "1,00,000 to 1,50,000 km", value: "1,00,000 to 1,50,000 km" },
      { label: "1,50,000 to 2,00,000 km", value: "1,50,000 to 2,00,000 km" },
      { label: "2,00,000 to 2,50,000 km", value: "2,00,000 to 2,50,000 km" },
      { label: "Above 2,50,000 km", value: "Above 2,50,000 km" },
    ],
  },
  {
    name: "rentPrice",
    labelName: "Car Rent Price",
    placeholder: " Enter car rent price / Week",
    options: [
      { label: "Up to 10,000 km", value: "Up to 10,000 km" },
      { label: "10,000 to 20,000 km", value: "10,000 to 20,000 km" },
      { label: "20,000 to 30,000 km", value: "20,000 to 30,000 km" },
      { label: "30,000 to 40,000 km", value: "30,000 to 40,000 km" },
      { label: "40,000 to 60,000 km", value: "40,000 to 60,000 km" },
      { label: "60,000 to 80,000 km", value: "60,000 to 80,000 km" },
      { label: "80,000 to 1,00,000 km", value: "80,000 to 1,00,000 km" },
      { label: "1,00,000 to 1,50,000 km", value: "1,00,000 to 1,50,000 km" },
      { label: "1,50,000 to 2,00,000 km", value: "1,50,000 to 2,00,000 km" },
      { label: "2,00,000 to 2,50,000 km", value: "2,00,000 to 2,50,000 km" },
      { label: "Above 2,50,000 km", value: "Above 2,50,000 km" },
    ],
  },
];
export const stepData = [
  {
    number: "Step 01",
    icon: <YellowCarIcon />,
    heading: "Share Your Car Details",
    para: "Provide accurate details of your car and upload clear. This helps potential buyers and increases your chances of receiving the best offer.",
  },
  {
    number: "Step 02",
    icon: <PhotoIcon />,
    heading: "Upload Photos & Videos",
    para: "Showcase your car with clear, high-resolution images. Upload photos from multiple angles, including the front, side, back, interior, and close-ups.",
  },
  {
    number: "Step 03",
    icon: <ListingIcon />,
    heading: "Publish Your Listings",
    para: "Our team verifies your vehicle details to ensure accuracy. Once approved, your car is listed on our platform for free and shared with interested buyers .",
  },
];
export const labelData = [
  {
    label: "Exterior Color of Car",
    type: "text",
    placeholder: "Interior Body of Car",
    htmlFor: "exteriorColorCar",
  },
  {
    label: "Stock ID",
    type: "text",
    placeholder: "Write stock ID here",
    htmlFor: "stockId",
  },
  {
    label: "Engine",
    type: "text",
    placeholder: "Write engine size here",
    htmlFor: "engine",
  },
  {
    label: "Horsepower",
    type: "text",
    placeholder: "Write minimum horsepower",
    htmlFor: "horsepower",
  },
];
export const typeData = {
  name: "driveType",
  labelName: "Drive Type",
  placeholder: "Select Drive Type",
  options: [
    { label: "FWD", value: "fwd" },
    { label: "RWD", value: "rwd" },
    { label: "AWD", value: "awd" },
    { label: "4WD", value: "4wd" },
  ],
};
export const tabData = [
  { value: "comfort", svg: <ACIcon />, heading: "Air Conditioning" },
  { value: "comfort", svg: <CameraIcon />, heading: "Back up Camera" },
  { value: "comfort", svg: <ControlIcon />, heading: "Cruise Control" },
  { value: "comfort", svg: <NavigationIcon />, heading: "Navigation" },
  { value: "Entertainment", svg: <MPplayerIcon />, heading: "MP3 Player" },
  { value: "Entertainment", svg: <AudioIcon />, heading: "Premium Audio" },
  { value: "Entertainment", svg: <StereoIcon />, heading: "AWFM Stereo" },
  { value: "Entertainment", svg: <DvDIcon />, heading: "DVD System" },
  { value: "safety", svg: <AirBagIcon />, heading: "Airbag : Driver" },
  { value: "safety", svg: <AirBagIcon />, heading: "Airbag : Passanger" },
  { value: "safety", svg: <SystemIcon />, heading: "Security System" },
  { value: "safety", svg: <BreakIcon />, heading: "Antilock Brakes" },
  { value: "seats", svg: <HeatSeatIcon />, heading: "Heated Seats" },
  { value: "seats", svg: <PowerSeatIcon />, heading: "Power Seats" },
  { value: "seats", svg: <BucketSeatIcon />, heading: "Bucket Seats" },
  { value: "seats", svg: <MemorySeatIcon />, heading: "Memory Seats" },
];
export const tabName = [
  {
    value: "comfort",
    name: "Comfort",
  },
  {
    value: "Entertainment",
    name: "Entertainment",
  },
  {
    value: "safety",
    name: "Safety",
  },
  {
    value: "seats",
    name: "Seats",
    className: "hidden",
  },
];
export const uploadImgData = [
  {
    icon: <PlusIcon />,
  },
  {
    icon: <PlusIcon />,
  },
  {
    icon: <PlusIcon />,
  },
  {
    icon: <PlusIcon />,
  },
  {
    icon: <PlusIcon />,
  },
];
export const partnerSidebarData = [
  {
    value: "dashboard",
    icon: (
      <DashBoardIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Dashboard",
  },
  {
    value: "setting",
    icon: (
      <SettingIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Setting",
  },
  {
    value: "notification",
    icon: (
      <NotificationIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Notification",
  },
  {
    value: "cars",
    icon: (
      <BookingIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "My Cars",
  },
  {
    value: "customer",
    icon: (
      <CustomerIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Customers",
  },
];
export const partnerSidebarData2 = [
  {
    value: "achievments",
    icon: (
      <TrofiIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "My Achievments",
  },
  {
    value: "document",
    icon: (
      <DocumentIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Document Verification",
  },
  {
    value: "transaction",
    icon: (
      <TransactionIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Transactions",
  },
  {
    value: "review",
    icon: (
      <ReviewIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Reviews of Cars",
  },
  {
    value: "log-out",
    icon: (
      <LogOutIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Log Out",
  },
];

export const partnerTabContent = [
  { content: <MyCar />, value: "dashboard" },
  { content: <TabContentOne />, value: "setting" },
  { content: <MyCar />, value: "dashboard" },
  { content: <MyCar />, value: "cars" },
];
