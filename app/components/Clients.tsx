import Image from "@/node_modules/next/image";
import { Title } from "../parts/Title";
import Quote from "../../public/images/Quote.svg";
import QuoteWhite from "../../public/images/Quote-white.svg";
import Avater from "../../public/images/Avater.svg";
import Avater2 from "../../public/images/Avater-2.svg";
import Avater3 from "../../public/images/Avater-3.svg";

export function Client() {
  return (
    <section className="my-[100px] lg:my-[140px] mx-[16px] text-[#212529]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px]">
          <div className="text-center px-[40px]">
            <Title first="What Our" last="Clients Says" />
          </div>
          <div className="flex gap-x-8">
            <div className="bg-white shadow-xl rounded-lg p-5 border lg:w-1/3">
              <Image className="w-[56px] h-[40px]" src={Quote} alt="Quote" />
              <div className="mt-8 text-[16px] leading-[20px] lg:text-[18px] lg:leading-[30px]">
                <p>
                  Taskkey is designed as a collaboration tool for businesses
                  that is a full project management solution.
                </p>
              </div>
              <hr className="border-[#212529]  my-10" />
              <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:items-center">
                <Image
                  className="w-[65px] h-[65px] mb-6 lg:mb-0 lg:w-[95px] lg:h-[95px]"
                  src={Avater}
                  alt="User Avater"
                />
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold text-[18px] leading-[22px] lg:text-[24px] lg:leading-[36px]">
                    Oberon Shaw, MCH
                  </h3>
                  <p className="text-[18px] leading-[30px] lg:text-[16px] lg:leading-[20px]">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#4F9CF9] shadow-xl text-white rounded-lg p-5 border hidden lg:block lg:w-1/3">
              <Image className="w-[56px] h-[40px]" src={QuoteWhite} alt="Quote" />
              <div className="mt-8 text-[16px] leading-[20px] lg:text-[18px] lg:leading-[30px]">
                <p>
                FoodSpace is designed as a collaboration tool for businesses that is a full project management solution.
                </p>
              </div>
              <hr className="border-white my-10" />
              <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:items-center">
                <Image
                  className="w-[65px] h-[65px] mb-6 lg:mb-0 lg:w-[95px] lg:h-[95px]"
                  src={Avater2}
                  alt="User Avater"
                />
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold text-[18px] leading-[22px] lg:text-[24px] lg:leading-[36px] text-[#043873]">
                    Oberon Shaw, MCH
                  </h3>
                  <p className="text-[18px] leading-[30px] lg:text-[16px] lg:leading-[20px]">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#4F9CF9] shadow-xl text-white rounded-lg p-5 border hidden lg:block lg:w-1/3">
              <Image className="w-[56px] h-[40px]" src={QuoteWhite} alt="Quote" />
              <div className="mt-8 text-[16px] leading-[20px] lg:text-[18px] lg:leading-[30px]">
                <p>
                FoodSpace is designed as a collaboration tool for businesses that is a full project management solution.
                </p>
              </div>
              <hr className="border-white my-10" />
              <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:items-center">
                <Image
                  className="w-[65px] h-[65px] mb-6 lg:mb-0 lg:w-[95px] lg:h-[95px]"
                  src={Avater3}
                  alt="User Avater"
                />
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold text-[18px] leading-[22px] lg:text-[24px] lg:leading-[36px] text-[#043873]">
                    Oberon Shaw, MCH
                  </h3>
                  <p className="text-[18px] leading-[30px] lg:text-[16px] lg:leading-[20px]">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
