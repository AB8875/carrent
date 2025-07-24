import { PhoneIcon } from "lucide-react";
import {
  AutomaticIcon,
  BikeIcon,
  BookingSecIcon,
  BookMarkIcon,
  BulbIcon,
  CalendarIcon,
  CalenderIcon,
  CarIcon,
  CarIconFaceRightSide,
  CarKeyIcon,
  CarRepairingIcon,
  CarRightSaidIcon,
  CitroenLogoIcon,
  ColdAirIcon,
  ConfirmeIcon,
  CupenIcon,
  CustomerCareIcon,
  CustomerCareServicesIcon,
  CustomerIcon,
  DeciaIcon,
  DiscountIcon,
  DoorIcon,
  DriveIcon,
  DriverICon,
  EngineIcon,
  FlexingBookingIcon,
  FourRingIcon,
  FrontCarIcon,
  FuelIcon,
  FuelSecIcon,
  GpsICon,
  HuyndaiLogoIcon,
  IntegrityIcon,
  InteriorCarBodyIcon,
  JeepIcon,
  KeyOnCarIcon,
  LandRoverLogoIcon,
  LicenseIcon,
  LoctionIcon,
  MailIcon,
  MbLogoIcon,
  ModelIcon,
  OpelIcon,
  PastTimeIcon,
  PersonIcon,
  PowerIcon,
  PrsoneIcon,
  QualityReliabilityIcon,
  RenaultLogoIcon,
  SeatIcon,
  // SaveIcon,
  SecCarIcon,
  SecSeatIcon,
  SecurityIcon,
  StarPrsoneIcon,
  StarPrsoneIconSec,
  StockIcon,
  ToolBoxIcon,
  TransmissionIcon,
  ViewIcon,
} from "./Icon";
import { SettingTwoIcon } from "../partner/Icon";
import {
  ActivityIcon,
  BookingIcon,
  DocumentIcon,
  LogOutIcon,
  NotificationIcon,
  PaymentIcon,
} from "../ProfileIcon";
import MyBooking from "@/components/profile/Booking/MyBooking";
import TabContentOne from "@/components/profile/TabContentOne";
import NotificationTab from "@/components/profile/NotificationTab";
import Payment from "@/components/profile/payment/Payment";
import MyActivity from "@/components/profile/my-activity/MyActivity";
import DocumentVerification from "@/components/profile/documents-vefification/DocumentVerification";
// import MyCar from "../profile/MyCar";

export const navData = [
  { title: "Home", link: "/" },
  { title: "About US", link: "/applicant/about-us" },
  { title: "Cars", link: "/applicant/cars-listning" },
  { title: "Location", link: "/applicant/popular-destination" },
  { title: "Contact Us", link: "/applicant/contact-us" },
];

export const carBrandClientCounting = [
  {
    className: "pr-[52px] border-r border-[rgba(255,255,255,0.70)]",
    coutner: "50+",
    counterName: "Car Brands",
  },
  { className: "ps-12", coutner: "10k", counterName: "Clients" },
];

export const heroCommunBtn = [
  {
    data: [
      { btnTitle: "Self Drive Car", link: "#" },
      { btnTitle: "With Driver", link: "#" },
    ],
  },
];

export const heroCommunBtn2 = [
  {
    data: [
      { btnTitle: "Car", link: "#" },
      { btnTitle: "Bike", link: "#" },
    ],
  },
];
export const ageSelecteData = [
  { age: "21", value: "21" },
  { age: "22", value: "22" },
  { age: "23", value: "23" },
  { age: "24", value: "24" },
  { age: "25", value: "25" },
  { age: "26-29", value: "26-29" },
  { age: "30-69", value: "30-69" },
  { age: "70-75", value: "70-75" },
  { age: "76-79", value: "76-79" },
  { age: "80+", value: "80+" },
];

export const companyLogoData = [
  { icon: <FourRingIcon /> },
  { icon: <JeepIcon /> },
  { icon: <OpelIcon /> },
  { icon: <DeciaIcon /> },
  { icon: <RenaultLogoIcon /> },
  { icon: <CitroenLogoIcon /> },
  { icon: <MbLogoIcon /> },
  { icon: <HuyndaiLogoIcon /> },
  { icon: <LandRoverLogoIcon /> },
  { icon: <MbLogoIcon /> },
  { icon: <HuyndaiLogoIcon /> },
  { icon: <LandRoverLogoIcon /> },
];

export const aboutUsPara = [
  {
    title:
      "At Carent, we believe that every journey deserves a smooth and memorable ride. Whether you’re planning a weekend getaway, a business trip, or a cross-country adventure, we provide a wide range of high-quality rental cars to suit all your needs. From compact sedans to spacious SUVs and luxury vehicles, our fleet is designed to offer you the perfect combination of comfort, style, and reliability.",
  },
  {
    title:
      "We’re committed to providing hassle-free rentals, transparent pricing, and exceptional customer service. Our simple booking process allows you to reserve your vehicle in just a few clicks, and our friendly team is always ready to assist you with any questions or special requests.",
  },
  {
    title:
      "At Carent your satisfaction is our top priority, and we strive to make your experience on the road as enjoyable as possible. Drive with confidence, knowing that you're in great hands.",
  },
];

export const aksQuestionAccordianData = [
  {
    Value: "1",
    accordionTrigger: "How do I book a car Rental?",
    accordionContent:
      "sdfsTo rent a car, you’ll need a valid driver’s license, a credit card for payment, and an ID (such as a passport for international customers). International drivers may need an International Driving Permit (IDP), depending on the country of issue of your driver’s license.f",
  },
  {
    Value: "2",
    accordionTrigger: "What documents do I need to rent a car ?",
    accordionContent:
      "sdfsTo rent a car, you’ll need a valid driver’s license, a credit card for payment, and an ID (such as a passport for international customers). International drivers may need an International Driving Permit (IDP), depending on the country of issue of your driver’s license.f",
  },
  {
    Value: "3",
    accordionTrigger: "What is the minimum age to rent a car ?",
    accordionContent:
      "sdfsTo rent a car, you’ll need a valid driver’s license, a credit card for payment, and an ID (such as a passport for international customers). International drivers may need an International Driving Permit (IDP), depending on the country of issue of your driver’s license.f",
  },
  {
    Value: "4",
    accordionTrigger: "What if I need to modify or cancel my booking ?",
    accordionContent:
      "sdfsTo rent a car, you’ll need a valid driver’s license, a credit card for payment, and an ID (such as a passport for international customers). International drivers may need an International Driving Permit (IDP), depending on the country of issue of your driver’s license.f",
  },
];

export const contactData = [
  {
    icon: <MailIcon />,
    title: "Email Address",
    contactMedium: "dummy234@gmail.com",
    path: "mailto:manishk82182@gmail.com",
  },
  {
    icon: <LoctionIcon />,
    title: "Address",
    contactMedium: "8502 Preston Rd. Inglewood, Maine 98380",
    path: "#",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone No.",
    contactMedium: "(217) 555-0113",
    path: "tel:(217) 555-0113",
  },
];

export const contactInputData = [
  {
    lableFor: "firstName",
    lable: "First Name",
    inputType: "text",
    inputId: "firstName",
    Placeholder: "John",
  },
  {
    lableFor: "lastName",
    lable: "Last Name",
    inputType: "text",
    inputId: "lastName",
    Placeholder: "Walley",
  },
  {
    lableFor: "email",
    lable: "Email Address",
    inputType: "email",
    inputId: "email",
    Placeholder: "dummy @gmail.com",
  },
  {
    lableFor: "phone",
    lable: "Phone No.",
    inputType: "tel",
    inputId: "phone",
    Placeholder: "94758-46378",
  },
];

export const PerfectRideSectionData = [
  {
    title: "Find Your Perfect Ride",
    PerfectRideCardsData: [
      {
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        doorNo: "4",
        path: "#",
        imgPath: "/assets/png/mahindra_car_img.png",
      },
      {
        imgPerentClass: "!max-w-[345px]",
        carCompany: "Hyundai",
        carModel: "Creta",
        seatNo: "5",
        doorNo: "4",
        path: "#",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
      {
        carCompany: "Maruti",
        carModel: "Ciaz",
        seatNo: "5",
        doorNo: "4",
        path: "#",
        imgPath: "/assets/png/maruti.png",
      },
      {
        carCompany: "Toyota",
        carModel: "Innova Crysta",
        seatNo: "5",
        doorNo: "4",
        path: "#",
        imgPath: "/assets/png/toyota.png",
      },
      {
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        doorNo: "4",
        path: "#",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
    ],
  },
];

export const journeyCardData = [
  {
    icon: <FrontCarIcon className="h-max max-w-[35px] md:max-w-[63px]" />,
    heading: "Browse Your Car",
    para: "Explore our wide selection of cars and choose the one that fits your needs, whether it’s a compact car, family SUV, or luxury vehicle.",
  },
  {
    carClass: "!hidden",
    icon: <PrsoneIcon className="h-max max-w-[35px] md:max-w-[63px]" />,
    heading: "Varify Your Details",
    para: "Confirm your rental dates, location, and any extra requirements. Complete your booking quickly with secure online payment.",
  },
  {
    icon: <CalenderIcon className="h-max max-w-[35px] md:max-w-[63px]" />,
    heading: "Pick Up & Drive away",
    para: "Collect your car from the pick-up location. Our team will ensure a quick and easy check-in, so you’re ready to hit the road!",
  },
];

export const CustomerReviewCardData = [
  {
    customerImg: "/assets/svg/john-walley.svg",
    customerName: "John Walley",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Devon Lane.svg",
    customerName: "Devon Lane",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Guy Hawkins.svg",
    customerName: "Guy Hawkins",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
];

export const whyChooseCardData = [
  {
    // img: "/assets/png/about-us-car.png",
    img: "/assets/png/about-us-car.png",
    subData: [
      {
        icon: <CustomerCareServicesIcon />,
        heading: "24 x 7 Support",
        para: "We’re here to help you whenever you need it. Our customer support team is available 24/7 to assist with booking inquiries or any questions you might have during your rental",
      },
      {
        icon: <StarPrsoneIcon />,
        heading: "Customer Satisfaction Guarantee",
        para: "We’re committed to making your car rental experience as smooth as possible. If you’re not satisfied, let us know, and we’ll do everything we can to make it right.",
      },
      {
        icon: <CarKeyIcon />,
        heading: "Flexible Rental Terms",
        para: "Whether you need a car for a few hours, a few days, or even weeks, we offer flexible rental periods to suit your schedule. Need to extend your rental.",
      },
    ],
  },
];

export const RecentlyViewedSectionData = [
  {
    title: "Recently Viewed",
    RecentlyViewedCardData: [
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/mahindra_car_img.png",
      },
      {
        vehicleIcon: <CarIcon />,
        imgPerentClass: "!max-w-[345px]",
        carCompany: "Hyundai",
        carModel: "Creta",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Maruti",
        carModel: "Ciaz",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/maruti.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Toyota",
        carModel: "Innova Crysta",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/toyota.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
    ],
  },
];

export const ourExplorCardData = [
  {
    title: "Explore Our Most Popular Destinations",
    subData: [
      {
        cardHeading: "Sydney Opera House",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/SydneyOperaHouse.png",
      },

      {
        cardHeading: "Taronga Zoo",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/TarongaZoo.png",
      },
      {
        cardHeading: "The Rocks",
        cardPara:
          "Sydney’s historic area, featuring cobbled streets, markets, pubs, and shops.",
        link: "#",
        className: "/assets/png/theRocks.png",
      },
      {
        cardHeading: "Manly Beach",
        cardPara:
          "A popular spot for surfing and relaxing by the sea, easily accessible by ferry from Circular .",
        link: "#",
        className: "/assets/png/manlyBeach.png",
      },
      {
        cardHeading: "The Royal Botanic Garden",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/theRoyalBotanicGarden.png",
        pClass: "max-w-[800px]",
      },
      {
        cardHeading: "Sydney Harbour Bridge",
        cardPara:
          "Walk or climb the bridge for breathtaking views of the harbor and city.",
        link: "#",
        className: "/assets/png/HarbourBridge.png",
      },
    ],
  },
];

export const commonDropDownData = [
  {
    placeholder: "car",
    subData: [
      { value: "Economy", item: "Economy" },
      { value: "SUV", item: "SUV" },
      { value: "Luxury", item: "Luxury" },
      { value: "Convertible", item: "Convertible" },
      { value: "Minivan", item: "Minivan" },
      { value: "Hatchback", item: "Hatchback" },
    ],
  },
  {
    placeholder: "Seats",
    subData: [
      { value: "2Seats", item: "2 Seats" },
      { value: "5Seats", item: "5 Seats" },
      { value: "7Seats", item: "7 Seats" },
      { value: "8Seats", item: "8 Seats" },
    ],
  },
  {
    placeholder: "Fuel",
    subData: [
      { value: "Petrol", item: "Petrol" },
      { value: "Diesel", item: "Diesel" },
      { value: "Electric", item: "Electric" },
      { value: "Hybrid", item: "Hybrid" },
    ],
  },
  {
    placeholder: "Door",
    subData: [
      { value: "2Door", item: "2 Door" },
      { value: "4Door", item: "4 Door" },
      { value: "5Door", item: "5 Door" },
    ],
  },
  {
    placeholder: "Rental Type",
    subData: [
      { value: "Hourly", item: "Hourly" },
      { value: "Weeekly", item: "Weeekly" },
      { value: "Monthly", item: "Monthly" },
    ],
  },
  {
    placeholder: "Transmission",
    subData: [
      { value: "Automatic", item: "Automatic" },
      { value: "Manual", item: "Manual" },
    ],
  },
  {
    placeholder: "Features",
    subData: [
      { value: "GPSNavigation", item: "GPS Navigation" },
      { value: "Entertainment", item: "Entertainment" },
      { value: "Safety", item: "Safety" },
      { value: "Bluetooth&Audio", item: "Bluetooth & Audio" },
    ],
  },
];

export const carDeteilsCardData = [
  {
    id: "car1",
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
    id: "car2",
    carImg: "/assets/png/bmw-2gran.png",
    views: 1,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "/applicant/cars-listing-details",
  },
  {
    id: "car3",
    carImg: "/assets/png/maruti-ciaz.png",
    views: 1,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car4",
    carImg: "/assets/png/toyota-innova.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car5",
    carImg: "/assets/png/mahindra-tuv.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car6",
    carImg: "/assets/png/mahindra-scorpio.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car7",
    carImg: "/assets/png/creta-right.png",
    views: 10000,
    bookMark: 1000,
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car8",
    carImg: "/assets/png/bmw-2gran.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car9",
    carImg: "/assets/png/maruti-ciaz.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car10",
    carImg: "/assets/png/toyota-innova.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car11",
    carImg: "/assets/png/mahindra-tuv.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car12",
    carImg: "/assets/png/mahindra-scorpio.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car13",
    carImg: "/assets/png/creta-right.png",
    views: 10000,
    bookMark: 1000,
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car14",
    carImg: "/assets/png/bmw-2gran.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car15",
    carImg: "/assets/png/maruti-ciaz.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car17",
    carImg: "/assets/png/toyota-innova.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car18",
    carImg: "/assets/png/mahindra-tuv.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
  {
    id: "car19",
    carImg: "/assets/png/mahindra-scorpio.png",
    views: 10000,
    bookMark: 1000,
    carName: "BMW 2 Gran",
    rattings: {
      star: "3.0",
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
      offerPrice: "200",
    },
    bookNow: "#",
  },
];

export const carsListingCarImg = [
  {
    src: "/assets/png/horwin-sk1-bike-img.png",
    width: 913,
    height: 681,
    title: "New Lexus",
    title2: "Creta Hyundai",
  },
  {
    src: "/assets/png/twoSeatsImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carDashbordImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carInnerImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carOutsideLook.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carOutsideLookSec.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carDashbordImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carInnerImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carOutsideLook.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carOutsideLookSec.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
];

export const datamain = [
  {
    dataa: {
      id: "car1",
      carName: "Creta Hyundai",
      reviewPath: "#review",
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

      avableDate: {
        start: " Mar 02, 2025 ",
        end: " Mar 02, 2026",
      },
      price: {
        price: "250",
        offerPrice: "100",
      },
    },
  },
];

export const driveType = [
  {
    driveTypeInput: [
      {
        inputType: "radio",
        name: "driveType",
        id: "selfDrive",
        title: "Self Drive",
      },
      {
        inputType: "radio",
        name: "driveType",
        id: "withDriver",
        title: "With Driver (Extra Charges = $10/day )",
      },
    ],
    list: [
      {
        title:
          "Includes licensed chauffeur, fuel policy unchanged. Extra charges may apply for meals or night stay on outstation trips",
      },
      {
        title:
          "Base rental and driver fees will be combined in your final bill.",
      },
    ],
    age: [
      {
        inputType: "radio",
        name: "age",
        id: "NoPreference",
        title: "No Preference",
      },
      {
        inputType: "radio",
        name: "age",
        id: "21-30-Years",
        title: "21 - 30 Years",
      },
      {
        inputType: "radio",
        name: "age",
        id: "31-40-Years",
        title: "31 - 40 Years",
      },
      {
        inputType: "radio",
        name: "age",
        id: "41-50-Years",
        title: "41 - 50 Years",
      },
    ],
    list2: [
      {
        title:
          "We will assign the most experienced available driver in your selected age group",
      },
    ],
  },
];

export const carFullDetail = [
  {
    colFirst: [
      { icon: <CarRightSaidIcon />, iconName: "Body", title: " Sport Cars" },
      { icon: <SecSeatIcon />, iconName: "Seats", title: "5 Seats" },
      { icon: <CalendarIcon />, iconName: "Year", title: "2020" },
      {
        icon: <CarIcon />,
        iconName: "Exterior Body",
        title: "Silver Metallic",
      },
      {
        icon: <TransmissionIcon />,
        iconName: "Transmission",
        title: "Automatic",
      },
    ],
  },
  {
    colFirst: [
      { icon: <CarIcon />, iconName: "Make", title: " Lexus" },
      {
        icon: <FuelIcon />,
        iconName: "Fuel Type",
        title: "Petrol, CNG , Electric",
      },
      { icon: <FuelSecIcon />, iconName: "Mileage", title: "10ML" },
      {
        icon: <InteriorCarBodyIcon />,
        iconName: "Interior Body",
        title: "Jet Black",
      },
      { icon: <StockIcon />, iconName: "Stock Id", title: "23456" },
    ],
  },
  {
    colFirst: [
      { icon: <ModelIcon />, iconName: "Model", title: "IS 250 C" },
      { icon: <EngineIcon />, iconName: "Engine", title: "2500" },
      { icon: <PowerIcon />, iconName: "Horsepower", title: "295 hp" },
      { icon: <DriveIcon />, iconName: "Drive", title: "AWD" },
      { icon: <PastTimeIcon />, iconName: "History", title: "N/A" },
    ],
  },
];

export const features = [
  {
    data: [
      {
        heading: "Comfort",
        innerData: [
          { title: " A/C Front" },
          { title: " Backup Camera" },
          { title: "Cruise Control" },
          { title: "Navigation" },
        ],
      },
    ],
  },
  {
    data: [
      {
        heading: "Entertainment",
        innerData: [
          { title: " MP3 Player" },
          { title: " Premium Audio" },
          { title: "AWFM Stereo" },
          { title: "DVD System" },
        ],
      },
    ],
  },
  {
    data: [
      {
        heading: "Safety",
        innerData: [
          { title: "Airbag : Driver" },
          { title: "Airbag : Passanger" },
          { title: "Security System" },
          { title: "Antilock Brakes" },
        ],
      },
    ],
  },
  {
    data: [
      {
        heading: "Seats",
        innerData: [
          { title: "Heated Seats" },
          { title: "Power Seats" },
          { title: "Bucket Seats" },
          { title: "Memory Seats" },
        ],
      },
    ],
  },
];

export const OwnerDetailsData = [
  {
    tag: "Platinum",
    imgPath: "/assets/svg/rajeev.svg",
    ownerShip: "Owner",
    rating: "4.0",
    localities: " Sector 27 , Noida",
    experinece: " 10 Years",
    heading: "Get In Touch With The Owner",
    input: [
      {
        id: "name",
        title: "Name",
        inputType: "text",
        placeholder: "Customer Name",
      },
      {
        id: "email",
        title: "Email",
        inputType: "email",
        placeholder: "dummy@gmail.com",
      },
      {
        id: "phoneNumber",
        title: "Phone Number",
        inputType: "tel",
        placeholder: "23456 - 67894",
      },
    ],
  },
];

export const childSeatsEquipmentData = [
  {
    listHeading: "Infant Seat (Rear-Facing)",
    list: [
      {
        listItem:
          "Suitable for infants up to 2 years old or 22 lbs (10 kg). Provides the safest travel position for newborns and young children.",
      },
      {
        listItem: "Price: $10/day",
      },
    ],
  },
  {
    listHeading: "Toddler Seat (Forward-Facing)",
    list: [
      {
        listItem:
          "For children aged 2-5 years old, or up to 40 lbs (18 kg). Provides enhanced protection for toddlers while offering a comfortable and secure seat.",
      },
      {
        listItem: "Price: $12/day",
      },
    ],
  },
  {
    listHeading: "Booster Seat (4+ years): For children over 18 kg (40 lbs)",
    list: [
      {
        listItem:
          " A booster seat for children who have outgrown their toddler seat but need extra height for seat belt safety.",
      },
      {
        listItem: "Price: : $10/day",
      },
    ],
  },
  {
    listHeading: "GPS Navigation:",
    list: [
      {
        listItem: "Rent a GPS to help you navigate during your travels.",
      },
      {
        listItem: "Price: : $10/day",
      },
    ],
  },
];

export const exclusiveOffersCardData = [
  {
    heading: "1. Early Bird Discount",
    subHeading: [{ title: "Offer Title: ", para: "Book Early and Save More!" }],
    listItems: [
      {
        title: "",
        para: "“Reserve your car in advance and enjoy up to 20% off your rental price!”",
      },
      {
        title: "Eligibility: ",
        para: " Valid for bookings made at least 14 days in advance.",
      },
      {
        title: "Discount: ",
        para: " 15-20% off depending on the car model and rental duration.",
      },
    ],
    imgPath: "/assets/png/EarlyBird.png",
    btnPath: "#",
    btnTitle: "Book Now",
  },
  {
    heading: "2. Weekend Getaway Deal",
    subHeading: [
      {
        title: "Weekend Special: ",
        para: "  Rent More, Save More!”",
      },
    ],
    listItems: [
      {
        title: "",
        para: "“Rent a car for the weekend (Friday to Sunday) and get 10% off your total rental price.”",
      },
      {
        title: "Eligibility: ",
        para: " Applies to weekend rentals only..",
      },
      {
        title: "Discount: ",
        para: " 10% off on weekend rentals.",
      },
    ],
    imgPath: "/assets/png/weekendGetawayDeal.png",
    btnPath: "#",
    btnTitle: "Book Your Weekend Ride",
  },
  {
    heading: "3. First-Time Customer Discount",
    subHeading: [
      {
        title: "Offer Tittle: ",
        para: "  “Welcome to Carent! Enjoy 15% Off Your First Rental”",
      },
    ],
    listItems: [
      {
        title: "",
        para: "“New to Carent ? Get 15% off your first booking when you register with us!”",
      },
      {
        title: "Eligibility: ",
        para: " New customers only. Discount applies to the first booking.",
      },
      {
        title: "Discount: ",
        para: " 15% off the first rental.",
      },
    ],
    imgPath: "/assets/png/First-TimeCustomer.png",
    btnPath: "#",
    btnTitle: "Claim Now",
  },
  {
    heading: "4. Family-Friendly Package",
    subHeading: [
      {
        title: "“Family Adventure: ",
        para: "  Book a Family Car & Get 20% Off”",
      },
    ],
    listItems: [
      {
        title: "",
        para: "Planning a family trip? Rent an SUV or minivan and get 20% off your booking.”",
      },
      {
        title: "Eligibility: ",
        para: " Available on SUV, minivan, or family vehicle rentals",
      },
      {
        title: "Discount: ",
        para: " 20% off on select family car models.",
      },
    ],
    imgPath: "/assets/png/family-friendly.png",
    btnPath: "#",
    btnTitle: "Book Your Family Car",
  },
];

export const similarListings = [
  {
    data: [
      {
        vehicleIcon: <BikeIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listing-details",
        imgPath: "/assets/png/mahindra-tuv.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listing-details",
        imgPath: "/assets/png/mahindra-tuv.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listing-details",
        imgPath: "/assets/png/mahindra-tuv.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listing-details",
        imgPath: "/assets/png/mahindra-tuv.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listing-details",
        imgPath: "/assets/png/mahindra-tuv.png",
      },
    ],
  },
];

export const tetsimonialsReviewsData = [
  {
    totalReviews: "2 ",
    overalRating: "2.8",
    forRating: [
      { title: "Comfort", ratingPerformance: "Perfect", rating: "5.0" },
      {
        title: "Interior Designing",
        ratingPerformance: "Perfect",
        rating: "5.0",
      },
      {
        title: "Exterior Styling",
        ratingPerformance: "Perfect",
        rating: "5.0",
      },
      {
        title: "Reliability",
        ratingPerformance: "Perfect",
        rating: "5.0",
      },
      {
        title: "Performance",
        ratingPerformance: "Good",
        rating: "5.0",
      },
      {
        title: "Safety",
        ratingPerformance: "Perfect",
        rating: "5.0",
      },
    ],
    customer: [
      {
        img: "/assets/svg/johnWalley.svg",
        customerName: "John Walley",
        ratting: "5.0",
        customerFeedback:
          "I had a great experience with Carent The booking process was seamless, and the staff was incredibly friendly and helpful. The car was clean, comfortable, and just as described. I’ll definitely rent from them again on my next trip!",
      },
      {
        img: "/assets/svg/johnWalley.svg",
        customerName: "Jenny Wilson",
        ratting: "5.0",
        customerFeedback:
          "I had a great experience with Carent The booking process was seamless, and the staff was incredibly friendly and helpful. The car was clean, comfortable, and just as described. I’ll definitely rent from them again on my next trip!",
      },
      {
        img: "/assets/svg/johnWalley.svg",
        customerName: "Jenny Wilson",
        ratting: "5.0",
        customerFeedback:
          "I had a great experience with Carent The booking process was seamless, and the staff was incredibly friendly and helpful. The car was clean, comfortable, and just as described. I’ll definitely rent from them again on my next trip!",
      },
      {
        img: "/assets/svg/johnWalley.svg",
        customerName: "Jenny Wilson",
        ratting: "5.0",
        customerFeedback:
          "I had a great experience with Carent The booking process was seamless, and the staff was incredibly friendly and helpful. The car was clean, comfortable, and just as described. I’ll definitely rent from them again on my next trip!",
      },
    ],
  },
];

export const ourServices = [
  {
    title: "Book Your Perfect Car Now!",

    inputData: [
      {
        lable: "Name",
        id: "name",
        inputType: "text",
        placeholder: "John Walley",
      },
      {
        lable: "Email",
        id: "email",
        inputType: "email",
        placeholder: "dummy @ gmail.com",
      },
      {
        lable: "Pick Up Location",
        id: "location",
        inputType: "text",
        placeholder: "Careant",
      },
    ],
    img: [
      {
        bgImg: "/assets/png/Bmw-bike-img.png",
        imgData: [
          {
            heading: "Our Services",
            para: "Keep Your Ride in Top Shape with Our Expert Maintenance Services",
            itemData: [
              {
                icon: (
                  <SecCarIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Car Maintainance Service",
              },
              {
                icon: (
                  <CarRepairingIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Car Repair",
              },
              {
                icon: (
                  <CustomerCareIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "24/7 Emergency Roadside",
              },
              {
                icon: (
                  <DiscountIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Special Offers & Discounts",
              },
            ],
          },
        ],
      },
      {
        bgImg: "/assets/png/why-choose-us-bg-img.png",
        imgData: [
          {
            heading: "Our Services",
            para: "Keep Your Ride in Top Shape with Our Expert Maintenance Services",
            itemData: [
              {
                icon: (
                  <CustomerIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Car Maintainance Service",
              },
              {
                icon: (
                  <KeyOnCarIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Flexible Rental Terms",
              },
              {
                icon: (
                  <CustomerCareIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "24/7 Customer Support",
              },
              {
                icon: (
                  <DiscountIcon className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]" />
                ),
                title: "Safety Built In",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const tableData = [
  {
    thData: [
      { item: "Car Model" },
      { item: "Rent Amount" },
      { item: "Payment Method" },
      { item: "Booking Date" },
      { item: "Payment Status" },
    ],
    tBodyRow: [
      {
        td: [
          { item: "Toyota Yaris" },
          { item: "$15" },
          { item: "Credit Card" },
          { item: "01/02/2024" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Honda Fit" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Pending" },
        ],
      },
      {
        td: [
          { item: "Honda Fit" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Cancelled" },
        ],
      },
      {
        td: [
          { item: "Hyundai Accent" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Pending" },
        ],
      },
      {
        td: [
          { item: "Hyundai Accent" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Cancelled" },
        ],
      },
      {
        td: [
          { item: "Hyundai Accent" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Hyundai Accent" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Pending" },
        ],
      },
      {
        td: [
          { item: "Hyundai Accent" },
          { item: "$23" },
          { item: "Debit Card" },
          { item: "01/03/2024" },
          { item: "Confirmed" },
        ],
      },
    ],
  },
];

export const ApplicantSidebar1 = [
  {
    value: "setting",
    icon: (
      <SettingTwoIcon className="h max-h-[24px] max-w-[24px] fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
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
    value: "myBooking",
    icon: (
      <BookingIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "My Booking",
  },
];
export const applicantTabContent = [
  { content: <TabContentOne />, value: "setting" },
  { content: <NotificationTab />, value: "notification" },
  { content: <MyBooking />, value: "myBooking" },
  { content: <Payment />, value: "payment" },
  { content: <MyActivity />, value: "myActivity" },
  { content: <DocumentVerification />, value: "document-verification" },
];
export const applicantSidebarData2 = [
  {
    value: "payment",
    icon: (
      <PaymentIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Payment",
  },
  {
    value: "myActivity",
    icon: (
      <ActivityIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "My Activity",
  },
  {
    value: "document-verification",
    icon: (
      <DocumentIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Document Verification",
  },
  {
    value: "log-out",
    icon: (
      <LogOutIcon className="fill-[#F9B701] group-data-[state=active]:fill-[#0A1C2A]" />
    ),
    title: "Log Out",
  },
];
export const myBookingCarDetailInputData = [
  {
    lable: "Booking No.",
    id: "bookingNo",
    placeholder: "23473247389",
    subInputData: [
      {
        lable: "Car Model",
        id: "carModel",
        placeholder: "Honda Fit",
      },
      {
        lable: "Pick up date",
        id: "pickUpDate",
        placeholder: "01/02/2024",
      },
      {
        lable: "Return date",
        id: "returnDate",
        placeholder: "03/02/2024",
      },
      {
        lable: "Pick up location",
        id: "pickUpLocation",
        placeholder: "Carent",
      },
      {
        lable: "Return Location",
        id: "returnLocation",
        placeholder: "Carent",
      },
      {
        lable: "Total Amount",
        id: "totalAmount",
        placeholder: "$12",
      },
      {
        lable: "Car Type",
        id: "carModel",
        placeholder: "Gasoline",
      },
      {
        lable: "Booking Status",
        id: "bookingStatus",
        placeholder: "Completed",
      },
    ],
  },
];

export const paymentInputData = [
  {
    imgPath: "/assets/png/mahindra-scorpio-small-img.png",
    subInputData: [
      {
        lable: "Car Model",
        id: "carModel",
        placeholder: "Honda Fit",
      },
      {
        lable: "Time & Date",
        id: "dateTime",
        placeholder: "04:40:36  /  01/02/2024",
      },
      {
        lable: "Total Amount",
        id: "totalAmount",
        placeholder: "$12",
      },
      {
        lable: "Outstanding Amount",
        id: "outStandingAmount  ",
        placeholder: "$0",
      },
      {
        lable: "Payment Status",
        id: "paymentStatus",
        placeholder: "Completed",
      },
      {
        lable: "Transaction No.",
        id: "transitionNo",
        placeholder: "2430582950",
      },
      {
        lable: "Payment Method",
        id: "paymentMethod",
        placeholder: "Credit Card",
      },
    ],
  },
];

export const paymentTableData = [
  {
    tabTitleData: [
      { tabValue: "all", tabTitle: "All" },
      { tabValue: "pending", tabTitle: "Pending" },
      { tabValue: "confirmed", tabTitle: "Confirmed" },
      { tabValue: "failed", tabTitle: "Failed" },
    ],
    tableData: [
      {
        thData: [
          { item: "Car Model" },
          { item: "Rent Amount" },
          { item: "Payment Method" },
          { item: "Booking Date" },
          { item: "Payment Status" },
        ],
        tBodyRow: [
          {
            td: [
              { item: "Toyota Yaris" },
              { item: "$15" },
              { item: "Credit Card" },
              { item: "01/02/2024" },
              { item: "Confirmed" },
            ],
          },
          {
            td: [
              { item: "Honda Fit" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Pending" },
            ],
          },
          {
            td: [
              { item: "Honda Fit" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Failed" },
            ],
          },
          {
            td: [
              { item: "Hyundai Accent" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Pending" },
            ],
          },
          {
            td: [
              { item: "Hyundai Accent" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Failed" },
            ],
          },
          {
            td: [
              { item: "Hyundai Accent" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Confirmed" },
            ],
          },
          {
            td: [
              { item: "Hyundai Accent" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Pending" },
            ],
          },
          {
            td: [
              { item: "Hyundai Accent" },
              { item: "$23" },
              { item: "Debit Card" },
              { item: "01/03/2024" },
              { item: "Confirmed" },
            ],
          },
        ],
      },
    ],
  },
];

export const myActivityData = [
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/hyundai_car-img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/hyundai_car-img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <BookMarkIcon />,
  },
];

export const myActivityDataSec = [
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/hyundai_car-img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/maruti.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/toyota.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
  {
    carCompany: "Mahindra",
    carModel: "TUV300",
    seatNo: "7",
    doorNo: "5",
    path: "/applicant/cars-listning",
    imgPath: "/assets/png/mahindra_car_img.png",
    icon: <ViewIcon />,
  },
];

export const documentVerificationData = [
  {
    thData: [{ item: "Document" }, { item: "Required" }, { item: "Details" }],
    tBodyRow: [
      {
        td: [
          { item: "Driver’s License" },
          { item: "Yes" },
          {
            item: "Valid license in your name. International renters may need an IDP.",
          },
        ],
      },
      {
        td: [
          { item: "Credit card" },
          { item: "Yes" },
          { item: "Must be in the renter's name for the security deposit" },
        ],
      },
      {
        td: [
          { item: "Passport or National Id" },
          { item: "Yes ( For international renters )" },
          { item: "Proof of identity, especially for foreign renters." },
        ],
      },
      {
        td: [
          { item: "Additional Driver’s License" },
          { item: "Yes" },
          {
            item: "Driver's license for any additional drivers added to the rental agreement.",
          },
        ],
      },
      {
        td: [
          { item: "Age Verification" },
          { item: "Yes ( Sometimes )" },
          {
            item: "If under 25 or over 70, you may need to provide additional verification or pay a young/senior driver fee.",
          },
        ],
      },
    ],
  },
];

export const idData = [
  { label: "User ID Card" },
  { label: "Driver’s License" },
  { label: "Passport Or National id" },
];

export const partnerDatailsInputData = [
  { id: "mobileNo", title: "+91 **********" },
  { id: "email", title: "**** @ gmail.com" },
  { id: "experince", title: "10 Years Experience" },
];

export const myCertificatesAndachievements = [
  { imgPath: "/assets/png/certificateFirst.png" },
  { imgPath: "/assets/png/certificateImgTwo.png" },
  { imgPath: "/assets/png/certificateImgThree.png" },
  { imgPath: "/assets/png/certificateImgFour.png" },
  { imgPath: "/assets/png/certificateImgFive.png" },
  { imgPath: "/assets/png/certificateImgSix.png" },
];

export const myCarsData = [
  {
    id: "car1",
    carImg: "/assets/png/creta-right.png",
    views: 500000,
    bookMark: 10000,
    carName: "Creta Hyundai",
    rattings: {
      star: "5.0",
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
    id: "car2",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
  {
    id: "car3",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
  {
    id: "car4",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
  {
    id: "car5",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
  {
    id: "car6",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
  {
    id: "car7",
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
      offerPrice: "150",
    },
    bookNow: "#",
  },
];

export const whatYouGetCardData = [
  {
    icon: <SecCarIcon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />,
    heading: "Up To 20 % Off",
    para: "Your car rental booking, depending on vehicle type and rental duration.",
  },
  {
    icon: <GpsICon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />,
    heading: "GPS Navigation System ",
    para: "Free GPS Navigation System for the first 100 customers—never get lost on your journey.",
  },
  {
    icon: <DriverICon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />,
    heading: "Additional Driver",
    para: "Free Additional Driver for rentals lasting 7 days or more.",
  },
  {
    icon: (
      <FlexingBookingIcon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />
    ),
    heading: "Flexible Booking",
    para: "Flexible booking options with free cancellation up to 48 hours before your rental date.",
  },
];

export const HowItWorkCardData = [
  {
    icon: (
      <CarIconFaceRightSide className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />
    ),
    heading: "Choose Your Vehicle",
    para: "Select from a wide range of vehicles including compact cars, SUVs, luxury cars, and more.",
  },
  {
    icon: <CupenIcon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />,
    heading: "Apply your Disount",
    para: "Enter promo code FIRST100 at checkout to unlock up to 20% OFF on your booking..",
  },
  {
    icon: (
      <ConfirmeIcon className="h-[45px] w-[45px] md:h-[59px] md:w-[59px]" />
    ),
    heading: "Confirm & Enjoy",
    para: "Once your booking is complete, enjoy a smooth, hassle-free journey with amazing savings!.",
  },
];

export const turmsConditonsData = [
  {
    listItem:
      "Offer valid only for the first 100 customers who complete their booking.",
  },
  {
    listItem:
      "Up to 20% OFF discount applies based on vehicle type and rental duration.",
  },
  {
    listItem:
      "Promo code FIRST100 must be entered at checkout to receive the discount.",
  },
  {
    listItem:
      "Free GPS upgrade and additional driver benefit available for eligible customers.",
  },
  {
    listItem: "This offer is valid for rentals of 3 days or more.",
  },
  {
    listItem:
      "Free cancellation available up to 48 hours before the rental period begins",
  },
  {
    listItem: "Cannot be combined with other promotions or offers.",
  },
  {
    listItem: "Limited availability of upgrades and benefits.",
  },
];

export const bikeDetails = [
  {
    id: "bike1",
    carImg: "/assets/png/hondaPCX-bike.png",
    views: 500000,
    bookMark: 100,
    carName: "Honda CB 125F",
    rattings: {
      star: "4.0",
      users: "12000",
    },
    assest: [
      {
        icon: <SecSeatIcon />,
        name: "2 Seats",
      },

      {
        icon: <AutomaticIcon />,
        name: "Automatic",
      },
      {
        icon: <ToolBoxIcon className="max-w-[15px] md:max-w-[24px]" />,
        name: "1 - 2 Boxes",
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
      price: "30",
      offerPrice: "20",
    },
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
  {
    id: "car1",
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
    bookNow: "/applicant/book-now",
  },
];

export const bikeCarData = [
  {
    title: "Find Your Perfect Ride",
    PerfectRideCardsData: [
      {
        vehicleIcon: <BikeIcon />,
        carCompany: "Hyundai",
        carModel: "Creta",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 2",
          },
          {
            accesoriesoryIcon: (
              <ToolBoxIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "1 - 2 Boxes",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hondaPCX-bike.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Maruti",
        carModel: "Ciaz",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/maruti.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Toyota",
        carModel: "Innova Crysta",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/toyota.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",
        seatNo: "7",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
    ],
  },
];

export const perfecteFor = [
  {
    heading: "Why Visit :",
    subData: [
      {
        listItem:
          "The Sydney Opera House is one of the most recognizable buildings in the world and a UNESCO World Heritage site. Famous for its stunning white sail-like design, it’s a must-see for visitors to Sydney. Whether you’re attending a performance or simply marveling at its architectural beauty, it’s an unforgettable experience.",
      },
    ],
  },
  {
    heading: "Must-See : ",
    subData: [
      {
        listItem: "Attend a world-class performance (opera, ballet, concert)",
      },
      {
        listItem: "Take a guided tour of the building and its iconic sails.",
      },
      {
        listItem:
          "Enjoy breathtaking views of the Sydney Harbour Bridge from the Opera House forecourt",
      },
    ],
  },
  {
    heading: "Travel Tip :",
    subData: [
      {
        listItem:
          "Parking is available near the Opera House, and it’s a great spot to start your Sydney exploration.",
      },
    ],
  },
];

export const exploreYourBestCarBike = [
  {
    title: "Explore Our Best Cars & Bikes",
    PerfectRideCardsData: [
      {
        vehicleIcon: <BikeIcon />,
        carCompany: "Hyundai",
        carModel: "Creta",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 2",
          },
          {
            accesoriesoryIcon: (
              <ToolBoxIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "1 - 2 Boxes",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hondaPCX-bike.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Maruti",
        carModel: "Ciaz",
        seatNo: "5",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/maruti.png",
      },
      {
        vehicleIcon: <BikeIcon />,
        carCompany: "Honda CB 125F",
        carModel: "125 CC",
        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 2",
          },
          {
            accesoriesoryIcon: (
              <ToolBoxIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Boxes : 1-2",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/honda-CB-125F.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
      {
        vehicleIcon: <CarIcon />,
        carCompany: "Mahindra",
        carModel: "TUV300",

        accesoris: [
          {
            accesoriesoryIcon: (
              <SeatIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Seats : 7",
          },
          {
            accesoriesoryIcon: (
              <DoorIcon className="max-h-[12px] max-w-[12px]" />
            ),
            accesoriesoryTitle: "Doors : 4",
          },
        ],
        path: "/applicant/cars-listning",
        imgPath: "/assets/png/hyundai_car-img.png",
      },
    ],
  },
];

export const someMoreDestinationData = [
  {
    title: "Explore Our Most Popular Destinations",
    subData: [
      {
        cardHeading: "Sydney Opera House",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/SydneyOperaHouse.png",
      },
      {
        cardHeading: "Sydney Opera House",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/SydneyOperaHouse.png",
      },
      {
        cardHeading: "Taronga Zoo",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/TarongaZoo.png",
      },
      {
        cardHeading: "The Rocks",
        cardPara:
          "Sydney’s historic area, featuring cobbled streets, markets, pubs, and shops.",
        link: "#",
        className: "/assets/png/theRocks.png",
      },
      {
        cardHeading: "Manly Beach",
        cardPara:
          "A popular spot for surfing and relaxing by the sea, easily accessible by ferry from Circular .",
        link: "#",
        className: "/assets/png/manlyBeach.png",
      },
      {
        cardHeading: "The Royal Botanic Garden",
        cardPara:
          "One of the most iconic landmarks in the world, offering tours and performances",
        link: "#",
        className: "/assets/png/theRoyalBotanicGarden.png",
        pClass: "max-w-[800px]",
      },
    ],
  },
];

export const learnMoreCardData = [
  {
    icon: <PersonIcon className="h-[60px] w-[60px] md:h-[66px] md:w-[66px]" />,
    title: "Age Restrictions",
    path: "/applicant/age-restrictions",
  },
  {
    icon: (
      <BookingSecIcon className="h-[60px] w-[60px] md:h-[66px] md:w-[66px]" />
    ),
    title: "Before Booking",
    path: "/applicant/before-booking",
  },
  {
    icon: <DriverICon className="h-[60px] w-[60px] md:h-[66px] md:w-[66px]" />,
    title: "Driving Test",
    path: "/applicant/driving-restrictions",
  },
  {
    icon: <LicenseIcon className="h-[60px] w-[60px] md:h-[66px] md:w-[66px]" />,
    title: "License Requirements",
    path: "/applicant/license-required",
  },
];

export const ageRestrictionHeadrData = [
  {
    bgImg: "/assets/png/hero-bg-car-img.png",
    heading: "Age Restrictions For Car Rentals ",
    spanHeading: " In Australia",
    para: "We strive to provide a seamless rental experience for all of our customers.",
  },
];

export const ageRestrictionData = [
  {
    upper: [
      {
        heading:
          "What are the age restriction when renting a car in Australia ?",
        para: "Are you ready to hit the road with your first rental car? Renting a car can sometimes be tricky since most car rental companies set a minimum age requirement of 25. However, policies may vary depending on the rental location, making it extremely important to call the car rental provider in advance before you book your rental. Carent has compiled important information below to help you get on the road and have a worry-free vacation.",
      },
      {
        heading: "What is the minimum age to rent a car in the Australia ?",
        para: "Most states in the Australia. require rental car companies the discretion to set their minimum age requirement, which is generally but not always 25. Renters age 21 to 24 can drive but will be subject to a surcharge payable on collection of the vehicle. Keep in mind that this is charged on top of the daily rental rate.",
      },
      {
        heading: "What is the maximum age to rent a car in the Australia ?",
        para: "Most rental companies in the Australia do not have maximum limits on car rentals. And while age limits may vary between car rental companies, senior drivers age 70 and older are encouraged to call or contact the rental location directly to find out what the age limits are.",
      },
      {
        heading: "Can I rent a car at 18?",
        para: "Yes. It's a common misconception that drivers have to be at least 25 before they can rent a car. New York and Michigan have state laws requiring rental companies to rent to drivers age 18 and over with a valid driver's license. However, young drivers can only rent some types of vehicles with an additional Age Differential Charge that may vary depending on location and car class.  ",
      },
    ],

    bottom: [
      // { heading: "idk" },
      {
        qus: [
          {
            heading: "Age Restrictions",
            para: "Keep in mind that before you can drive in the Australia , you must be at least 21 years old (unless you are in New York or Michigan, where the age limit is 18 years old). Drivers under the age of 25 will have to pay an additional underage fee. There is no maximum driving age in the Australia however, it is recommended to contact your rental location or check the rental information to confirm eligibility.",
          },
        ],
      },
    ],
  },
];

export const beforeBookingHeadrData = [
  {
    bgImg: "/assets/png/before-booking-bg-img.png",
    heading: "Before Booking For Car & Bike Rentals ",
    spanHeading: " in Australia",
    para: "We strive to provide a seamless rental experience for all of our customers.",
  },
];

export const beforeBookingData = [
  {
    upper: [
      {
        heading:
          "What Do I Need to Know Before I Book a Rental Car in the Australia ?",
        para: "Before you book your rental car, there are a few things you need to consider. Even if you've rented a vehicle before, policies can be different between car rental companies, and even between locations. Carent has put together a general guide to some important things you need to know before you book your rental car.",
      },
      {
        heading: "Is there a charge to add an additional driver?",
        para: "If you are planning on sharing the driving during your US road trip, it is a good idea to do your research so you know which companies charge a fee. In some cases, a renter's spouse, employee or employer may be considered an authorized driver and may be exempt from paying the additional driver fee.",
      },
      {
        heading: "What is included in the price?",
        para: "There are certain surcharges that may not be included in the listed rate. Generally, any extras such as insurance products, child seats, GPS devices, age surcharges, and additional drivers are not included in the rate.",
      },
      {
        heading: "Do I need to purchase extra insurance for my rental car?",
        para: "In some cases, Australia residents may already be covered by their existing car insurance policies, and some foreign travelers may have travel insurance that includes coverage for a rental car. It is important to do your research so you understand the exclusions to your policy.",
      },
    ],

    bottom: [
      {
        qus: [
          {
            heading: "Before you book your rental car in the Australia ......",
            para: "There are a few important things to remember before you book your rental car. You will need to have arranged your International Driving Permit before you arrive in the Australia if it is required. You should also look at the price breakdown so you understand what is included in the listed rate, and what you will be charged at the depot.",
          },
        ],
      },
    ],
  },
];

export const drivingRestrictionHeadrData = [
  {
    bgImg: "/assets/png/driving-restriction-bg-img.png",
    heading: "Driving Test For Car & Bike Rentals  ",
    spanHeading: " in Australia",
    para: "We strive to provide a seamless rental experience for all of our customers.",
  },
];

export const drivingRestrictionData = [
  {
    upper: [
      {
        heading:
          "Everything You Need to Know About Driving a Rental Car in the Australia ?",
        para: "When driving a rental car in the Australia, it is important to read you rental agreement closely before signing them as restrictions may apply to your specific booking. Carent has put together a quick guide including essential information you should be familiar with before renting a car in the Australia .",
      },
      {
        heading: "Driving Restrictions ?",
        para: "For rentals originating in the Australia, some car rental companies may only permit you to drive the vehicle in specific countries based on the original pick up country. Other suppliers may allow their vehicles be driven into Canada and Mexico but additional and/or different restrictions may apply. Make an inquiry about any details and restrictions when you pick up your car rental.",
      },
      {
        heading: "Mileage Limitations ?",
        para: "When you rent a car with limited mileage, you may be charged for each extra miles you drive above the limit. However, if you choose unlimited or free mileage, there will be no restrictions when it comes to driving long distances during your rental period.",
      },
      {
        heading: "Paying for Toll Roads ?",
        para: "E-ZPass is the most widely used toll system in the United States. It is recommended to check the details of the state you will be traveling to in order to familiarize yourself with the requirements. Note that you'll be billed through your car rental company for failure to register your license plate or paying your toll online.",
      },
    ],

    bottom: [
      {
        qus: [
          {
            heading: "Driving For rental car in the Australia ......",
            para: "Keep in mind that driving restrictions will depend on the location. Some car rental companies may permit their vehicles to be driven throughout the continental US without restrictions based on availability. Read carefully and pay attention to your Rental Agreement for additional information, at the time of rental. Ask about things that aren't clear before signing.",
          },
        ],
      },
    ],
  },
];

export const licenseRequiredHeadrData = [
  {
    bgImg: "/assets/png/license-required-bg-img.png",
    heading: "Driver’s license For Car & Bike Rentals ",
    spanHeading: " in Australia",
    para: "We strive to provide a seamless rental experience for all of our customers.",
  },
];

export const licenseRequiredData = [
  {
    upper: [
      {
        heading:
          "Driver's License Requirements for Renting a Car in the Australia ?",
        para: "To rent a car, you must have a valid driver’s license. It should be issued in your name and be recognized in the country or state where you're renting the vehicle. If you’re renting in a foreign country, some rental agencies may require an International Driving Permit (IDP) in addition to your regular driver’s license, especially if it’s not in English..",
      },
      {
        heading: "What types of driver's license do I need to rent a car?",
        para: "To rent a car, you need a valid driver’s license that is either from your country of residence or internationally recognized, with a minimum of 1-2 years of driving experience, and possibly an International Driving Permit (IDP) if renting abroad or your license is not in English. Make sure to check specific rental agency requirements for additional details.",
      },
      {
        heading: "Can I rent a car with a restricted license?",
        para: "No, you cannot rent a car with a restricted or provisional license. Rental companies generally require a full, unrestricted driver’s license to ensure that the renter has the necessary driving experience and qualifications.",
      },
      {
        heading:
          "Will I need an International Driving Permit in the Australia ?",
        para: "If your license is not in English, you will need an International Driving Permit (IDP) to rent a car. The IDP serves as a translation of your foreign license, making it easier for the rental company to verify your credentials.If your driver’s license is in English, you typically do not need an IDP to rent a car in Australia. Your valid, full driver’s license from your home country should suffice.",
      },
    ],

    bottom: [
      // { heading: "idk" },
      {
        qus: [
          {
            heading: "Please note the important documents",
            para: "Customers are not allowed to rent a vehicle with only an International Driver's Permit. Learner's Permits and photocopies of driver's licenses are not accepted. A temporary driver's license may be refused if the renting location is unable to otherwise check the customer's identity or verify the authenticity of the temporary license. Additional government-issued identification may also be required.",
          },
        ],
      },
    ],
  },
];

export const myActivityHeaderData = [
  {
    bgImg: "/assets/png/hero-bg-car-img.png",
    heading: "My ",
    spanTitle: " Activity",
  },
];

export const carBikeHireCardData = [
  {
    imgPath: "/assets/png/EarlyBird.png",
    heading: "1 . Choose Your Car",
    listItem: [
      {
        item: "Choose the car type (economy, SUV, luxury) based on your travel needs.",
      },
      {
        item: "Pick-up and drop-off locations: Select where you'll pick up and return the car.",
      },
      {
        item: "Dates and times: Choose the rental start and end dates.",
      },
    ],
  },
  {
    imgPath: "/assets/png/enter-your-details.png",
    heading: "2 . Enter Your Details",
    listItem: [
      {
        item: "Provide your driver's license info and age .",
      },
      {
        item: "Enter payment details (usually a credit card is required).",
      },
    ],
  },
  {
    imgPath: "/assets/png/option-img.png",
    heading: " 3 . Choose Extra Options",
    listItem: [
      {
        item: "Add options like insurance coverage, GPS, or additional drivers",
      },
      {
        item: "Check for fuel policies, mileage limits, and any other terms.",
      },
    ],
  },
  {
    imgPath: "/assets/png/book-confirm-img.png",
    heading: "4 . Book and Confirm",
    listItem: [
      {
        item: "Review all details, including total cost and terms.",
      },
      {
        item: "Confirm your reservation and make payment.",
      },
      {
        item: "Dates and times: Choose the rental start and end dates.",
      },
    ],
  },
  {
    imgPath: "/assets/png/pickup-car-img.png",
    heading: "5 . Pick Up the Car & Bike",
    listItem: [
      {
        item: "Go to the pick-up location at the scheduled time.",
      },
      {
        item: "Show your driver’s license, credit card, and reservation.",
      },
      {
        item: "Confirm fuel levels and any additional conditions.",
      },
    ],
  },
];

export const myBookingInputData = [
  {
    label: "Name",
    htmlFor: "name",
    placeholder: "John Walley",
    inputype: "text",
  },
  {
    label: "Booking No.",
    htmlFor: "bookingNo",
    placeholder: "XYZ1234567",
    inputype: "text",
  },
];

export const myBookingFormData = [
  {
    img: "/assets/png/white-car-img.png",
    formData: [
      {
        htmlFor: "name",
        label: "Name",
        inputType: "text",
        placeholder: "John Walley",
      },
      {
        htmlFor: "bookingNo",
        label: "Booking No.",
        inputType: "text",
        placeholder: "XYZ2233439",
      },
      {
        htmlFor: "carModel",
        label: "Car Model",
        inputType: "text",
        placeholder: "Creta Hyundai",
      },
      {
        htmlFor: "pickUpDate",
        label: "Pick Up Date",
        inputType: "date",
        placeholder: "05/03/2024",
      },

      {
        htmlFor: "returnDate",
        label: "Return Date",
        inputType: "date",
        placeholder: "12/03/2024",
      },
      {
        htmlFor: "pickUpLocation",
        label: "Pick Up Location",
        inputType: "text",
        placeholder: "Carent",
      },
      {
        htmlFor: "returnLocation",
        label: "Return  Location",
        inputType: "text",
        placeholder: "Carent",
      },
      {
        htmlFor: "rentAmount",
        label: "Rent Amount",
        inputType: "text",
        placeholder: "$200",
      },
      {
        htmlFor: "carType",
        label: "Car Type",
        inputType: "text",
        placeholder: "Gasoline",
      },
      {
        htmlFor: "securityDeposit",
        label: "Security Deposit",
        inputType: "text",
        placeholder: "$0",
      },
    ],
    checkBoxData: [
      {
        htmlFor: "gps",
        label: "GPS",
        inputType: "checkbox",
      },
      {
        htmlFor: "additinalDriver",
        label: "Additional Driver",
        inputType: "checkbox",
      },
      {
        htmlFor: "weekly",
        label: "Weekly",
        inputType: "checkbox",
      },
    ],
  },
];

export const forgotBookingNoData = [
  {
    label: "Email Address",
    htmlFor: "email",
    placeholder: "Example @ gmail.com",
    inputype: "email",
  },
];

export const howToRentData = [
  {
    heading: "1 . Manage Your Booking",
    subData: [
      {
        spanHeading: " Browse Your Car : ",
        para: "After entering your details, browse through the available cars that suit your needs, compare prices, and see whats in stock.",
      },
      {
        spanHeading: "Enter Your Details : ",
        para: " Log in using your Booking Reference Number and Last Name (or your email and password if you have an account).",
      },

      {
        spanHeading: "Confirmation : ",
        para: " Once changes are made, you’ll receive an updated confirmation email with the revised booking details.",
      },
    ],
  },
  {
    heading: "2 . Terms & Condition",
    subData: [
      {
        spanHeading: "Age Requirement : ",
        para: " After entering your details, browse through the available cars that suit your needs, compare prices, and see what's in stock.",
      },
      {
        spanHeading: "Driver’s License : ",
        para: " [Valid for a minimum of X months, International Driving Permit (IDP) required for non-English licenses]",
      },

      {
        spanHeading: "Cancellation Policy : ",
        para: " [Free cancellation up to X days before pick-up, X% fee after.",
      },
      {
        spanHeading: "Late Return Policy : ",
        para: " [Late fee charges, grace period]",
      },
      {
        spanHeading: "Mileage Limit : ",
        para: " [Daily/weekly mileage limits and any overage charges]",
      },
    ],
  },
  {
    heading: "3 . Pick-Up Instructions",
    subData: [
      {
        spanHeading: "Location Address : ",
        para: "  [Full address of pick-up location]",
      },
      {
        spanHeading: "Required Documents : ",
        para: "  Driver’s License",
      },

      {
        spanHeading: "",
        para: "Credit Card in Renter’s Name",
      },
      {
        spanHeading: "",
        para: "Passport or National ID (for international renters)",
      },
      {
        spanHeading: "",
        para: "Booking Confirmation",
      },
    ],
  },
  {
    heading: "4 . Return Instructions",
    subData: [
      {
        spanHeading: "Return Location : ",
        para: " Full address of drop-off location",
      },
      {
        spanHeading: "Return Time : ",
        para: "   [Time of day to return the car]",
      },

      {
        spanHeading: "Late Return Policy : ",
        para: "  [Details on late return charges]",
      },
      {
        spanHeading: "Car Inspection : ",
        para: "  [Inspect for damage, fuel level, cleanliness]",
      },
      {
        spanHeading: "Deposit Refund : ",
        para: "  [Refund process details]",
      },
    ],
  },
  {
    heading: "5 . Contact Information",
    subData: [
      {
        spanHeading: "Customer Service : ",
        para: "  [Phone Number]",
      },
      {
        spanHeading: "Email Support : ",
        para: " [Email Address]",
      },

      {
        spanHeading: "Emergency Number : ",
        para: " [Emergency contact number for breakdowns, accidents, etc.]",
      },
    ],
  },
];

export const ourCoreData = [
  {
    heading: "Our Core ",
    spanHeading: " Values",
    para: "At Carent , our core values represent the principles that guide our actions, decisions, and interactions with customers, employees, and the community. These values form the foundation of our commitment to excellence, sustainability, and customer satisfaction. Every day, we strive to live up to these values, ensuring that our service is not just a transaction, but an experience built on trust, respect, and care.",
    cardData: [
      {
        cardClass: "left-20",
        icon: (
          <StarPrsoneIconSec className="h-[30px] w-[30px] min-[1450px]:h-[63px] min-[1450px]:w-[63px] md:h-[40px] md:w-[40px]" />
        ),
        heading: "Customer Satisfaction",
        para: "Our customers are the foundation of our business. We are committed to  providing a seamless, personalized, and high-quality experience to every individual who chooses us.",
      },
      {
        cardClass: "left-0",
        icon: (
          <IntegrityIcon className="h-[30px] w-[30px] min-[1450px]:h-[63px] min-[1450px]:w-[63px] md:h-[40px] md:w-[40px]" />
        ),
        heading: "Integrity",
        para: "We believe in doing business the right way, always. Honesty, and fairness are at the core of our operations. Our customers trust us because we consistently deliver on our promises.",
      },
      {
        cardClass: "left-20",
        icon: (
          <QualityReliabilityIcon className="h-[30px] w-[30px] min-[1450px]:h-[63px] min-[1450px]:w-[63px] md:h-[40px] md:w-[40px]" />
        ),
        heading: "Quality & Reliability",
        para: "Our vehicles are meticulously maintained to ensure safety, comfort, and dependability. Whether you're renting for business or leisure, you can count on our fleet to get you where you need to go.",
      },
      {
        cardClass: "left-20",
        icon: (
          <BulbIcon className="h-[30px] w-[30px] min-[1450px]:h-[63px] min-[1450px]:w-[63px] md:h-[40px] md:w-[40px]" />
        ),
        heading: "Innovation & Technology",
        para: "We stay ahead of the curve by embracing the latest technology in car rental services. From a user-friendly mobile app to state-of-the-art GPS in every vehicle.",
      },
      {
        cardClass: "left-20",
        icon: (
          <SecurityIcon className="h-[30px] w-[30px] min-[1450px]:h-[63px] min-[1450px]:w-[63px] md:h-[40px] md:w-[40px]" />
        ),
        heading: "Safety & Security",
        para: "Your safety is our top priority. Every vehicle in our fleet is regularly inspected to meet the highest safety standards, and we ensure that all rentals are equipped with the latest security features .",
      },
    ],
  },
];

// partner data
export const certificates = [
  { label: "User ID Card" },
  { label: "User ID " },
  { label: "User  Card" },
];

export const reviewMyCarData = [
  {
    customerImg: "/assets/svg/john-walley.svg",
    customerName: "John Walley",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Devon Lane.svg",
    customerName: "Devon Lane",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Guy Hawkins.svg",
    customerName: "Guy Hawkins",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/Jacob Jones.svg",
    customerName: "Jacob Jones",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
  {
    customerImg: "/assets/svg/john-walley.svg",
    customerName: "John Walley",
    customerReviewPara:
      "“Renting a car with Carent was incredibly easy. The booking process was smooth, and the car was clean and in great condition. I will definitely use them again on my next trip to Australia!”",
    ratingData: [
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
      { icon: "/assets/svg/star-icon.svg" },
    ],
  },
];

export const accountDrowpDownData = [
  { value: "ChaseBank", title: "Chase Bank" },
  { value: "WellsFargo", title: "Wells Fargo" },
  { value: "BankOfAmerica", title: "Bank of America" },
  { value: "Citibank", title: "Citibank" },
  { value: "CapitalOne", title: "Capital One" },
  { value: "PNCBank", title: "PNC Bank  " },
  { value: "HSBC", title: "HSBC" },
  { value: "USBank", title: "U.S. Bank" },
  { value: "TDBank", title: "TD Bank" },
  { value: "Barclays", title: "Barclays" },
  { value: "NatWest", title: "NatWest" },
];

export const transitionDetailsInputData = [
  {
    title: "User Name",
    details: "John deo",
  },
  {
    title: "Car rented",
    details: "Toyota Corolla",
  },
  {
    title: "Transaction ID",
    details: "T13456",
  },
  { title: "Rental Period", details: "Rental Period" },
  { title: "Rental Period", details: "$20" },
  { title: "Payment status", details: "Completed" },
  { title: "Commission Fees", details: "-$10" },
  { title: "Security Deposit", details: "$0" },
];

export const partnerPaymentTableData = [
  {
    thData: [
      { item: "User Name" },
      { item: "Car Type" },
      { item: "Rent Amount" },
      { item: "Payment date" },
      { item: "Payment Method" },
      { item: "Status" },
    ],
    tBodyRow: [
      {
        td: [
          { item: "Esther Howard" },
          { item: "Convertible" },
          { item: "$30" },
          { item: "03/04/2025" },
          { item: "Bank transfer" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Jane Cooper" },
          { item: "Hatchback" },
          { item: "$24" },
          { item: "02/03/2025" },
          { item: "Credit card" },
          { item: "Pending" },
        ],
      },
      {
        td: [
          { item: "Guy Hawkins" },
          { item: "Sedan" },
          { item: "$29" },
          { item: "10/03/2025" },
          { item: "Debit card" },
          { item: "Failed" },
        ],
      },
      {
        td: [
          { item: "Bessie Cooper" },
          { item: "Sports Car" },
          { item: "$23" },
          { item: "12/03/2025" },
          { item: "Bank transfer" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Cody Fisher" },
          { item: "Convertible" },
          { item: "$28" },
          { item: "05/03/2025" },
          { item: "Credit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Jacob Jones" },
          { item: "Minivan" },
          { item: "$21" },
          { item: "15/03/2025" },
          { item: "Debit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Devon Lane" },
          { item: "Sports Car" },
          { item: "$32" },
          { item: "28/03/2025" },
          { item: "Credit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Albert Flores" },
          { item: "SUV" },
          { item: "$24" },
          { item: "30/03/2025" },
          { item: "Credit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Jacob Jones" },
          { item: "Minivan" },
          { item: "$21" },
          { item: "15/03/2025" },
          { item: "Debit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Devon Lane" },
          { item: "Sports Car" },
          { item: "$32" },
          { item: "28/03/2025" },
          { item: "Credit card" },
          { item: "Confirmed" },
        ],
      },
      {
        td: [
          { item: "Albert Flores" },
          { item: "SUV" },
          { item: "$24" },
          { item: "30/03/2025" },
          { item: "Credit card" },
          { item: "Confirmed" },
        ],
      },
    ],
  },
];

export const myCarsImg = [
  {
    src: "/assets/png/horwin-sk1-bike-img.png",
    width: 913,
    height: 681,
    title: "New Lexus",
    title2: "Creta Hyundai",
  },
  {
    src: "/assets/png/twoSeatsImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carDashbordImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carInnerImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carOutsideLook.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
  {
    src: "/assets/png/carDashbordImg.png",
    width: 913,
    height: 681,
    title: "",
    title2: "",
  },
];

export const footerDataApplicant = [
  {
    heading: "Company",
    linkData: [
      {
        link: "About Us",
        url: "/applicant/about-us",
      },
      { link: "Services", url: "/services" },
      { link: "Why Choose Us", url: "/applicant/why-choose" },
      { link: "Contact Us", url: "/applicant/contact-us" },
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
      { link: "My Booking", url: "/applicant/my-booking" },
      { link: "Why Choose Us", url: "/applicant/why-choose" },
      { link: "How to book", url: "/applicant/how-to-book" },
      { link: "Rental Information", url: "/applicant/rental-information" },
    ],
  },
  {
    heading: "Popular Destinations",
    linkData: [
      { link: "Taronga Zoo", url: "/" },
      { link: "The Rocks", url: "/" },
      { link: "Sydney Opera House", url: "/" },
      { link: "Manly Beach", url: "/" },
      { link: "Sydney Harbour Bridge", url: "/" },
      { link: "The Royal Botanic Garden", url: "/" },
    ],
  },
];
// helpers/dropdownHelper.ts

export interface DropdownOption {
  label: string;
  value: string;
}

export const dropdownOptions = {
  carBrands: [
    { label: "Maruti", value: "maruti" },
    { label: "Hyundai", value: "hyundai" },
  ],
  fuelTypes: [
    { label: "Petrol", value: "petrol" },
    { label: "Diesel", value: "diesel" },
  ],
  transmissions: [
    { label: "Manual", value: "manual" },
    { label: "Automatic", value: "automatic" },
  ],
  colors: [
    { label: "Red", value: "red" },
    { label: "Black", value: "black" },
  ],
  years: [
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ],
  seatTypes: [
    { label: "5 Seater", value: "5" },
    { label: "7 Seater", value: "7" },
  ],
  bodyTypes: [
    { label: "SUV", value: "suv" },
    { label: "Sedan", value: "sedan" },
  ],
};
