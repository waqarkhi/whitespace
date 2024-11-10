import { Button } from "../parts/Button";
import Android from "../../public/images/os/android.svg";
import Apple from "../../public/images/os/apple.svg";
import Windows from "../../public/images/os/windows.svg";
import Image from "@/node_modules/next/image";

export function Cta() {
  return (
    <section className="bg-[#043873] pt-[100px] lg:[140px] pb-[32px] text-white px-4">
      <div className="lg:w-[600px] lg:mx-auto lg:text-center">
        <div className="flex flex-col gap-y-10 lg:items-center">
          <div>
            <h2 className="text-[40px] leading-[52px] font-bold mb-6 xl:text-[72px] xl:leading-[87px]">
              Try FoodSpace today
            </h2>
            <p className="text-[18px] leading-[30px] lg:text-[24px] lg:leading-[32px]">
              Get started for free.<br/>
              Add your whole team as your needs grow.
            </p>
          </div>
          <div className="flex items-center">
            <Button link="#" title="Try Taskey free" arrow />
          </div>
          <p className="text-[18px] leading-[30px]">
            On a big team? Contact sales
          </p>
          <div className="flex gap-x-10">
            <Image src={Apple} alt="Apple" />
            <Image src={Windows} alt="Windows" />
            <Image src={Android} alt="Android" />
          </div>
        </div>
      </div>
    </section>
  );
}
