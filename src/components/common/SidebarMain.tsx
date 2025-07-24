import React, { FunctionComponent } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { X } from "lucide-react";

interface SidebarmainProps {
  button: React.ReactNode;
}

const Sidebarmain: FunctionComponent<SidebarmainProps> = ({ button }) => {
  return (
    <div className="flex">
      <Sheet>
        {/* Trigger passed as a prop */}
        {button}

        <SheetContent
          side="left"
          className="w-64 bg-[linear-gradient(to_bottom,_#0A1C2A_50%,_#4C5C69_70%,_#F1F6FB_100%)] text-white [&>button.absolute]:hidden"
        >
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle className="cursor-pointer">
              <Link href={"/"} className="flex items-center gap-1">
                <div className="bg-primary h-[30px] w-[30px] rounded-full"></div>
                <h3 className="hover:text-primary text-base font-semibold text-white duration-300 sm:text-lg md:text-xl lg:text-2xl">
                  Carent
                </h3>
              </Link>
            </SheetTitle>

            {/* Custom Close Button */}
            <SheetClose asChild>
              <button
                className="cursor-pointer text-gray-400 transition hover:text-white"
                aria-label="Close"
              >
                <X className="h-7 w-7" />
              </button>
            </SheetClose>
          </SheetHeader>

          {/* Sidebar Body */}
          <div className="mx-auto mt-10 flex flex-col justify-center gap-5 space-y-4 text-center">
            <Link href={"/why"} className="hover:text-primary duration-300">
              Why Choose Us
            </Link>
            <Link href={""} className="hover:text-primary duration-300">
              How To Book
            </Link>
            <Link href={""} className="hover:text-primary duration-300">
              Rental Information
            </Link>
          </div>

          {/* Optional Footer */}
          {/* 
          <SheetFooter className="absolute bottom-4 left-0 w-full px-4">
            <p className="text-muted-foreground text-sm">© 2025 MyApp</p>
          </SheetFooter> 
          */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebarmain;
