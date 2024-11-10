import { Button } from "../parts/Button";
import Image from "@/node_modules/next/image";
import AppsImg from '../../public/images/Apps.svg'

export function Apps() {
  return (
    <section className="bg-[#043873] text-white bg-[url('/images/apps-bg.svg')] bg-[80%] lg:bg-center bg-no-repeat lg:bg-contain xl:bg-cover">
      <div className="lg:mx-[32px] mx-[16px]">
        <div className="py-[80px] flex flex-col gap-y-[100px] lg:flex-row lg:gap-x-[40px] lg:items-center lg:mx-auto lg:container">
          <div className="lg:w-1/2">
            <Image className="mx-auto lg:ml-0 lg:w-[582px]" src={AppsImg} alt="Apps" />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-y-[60px] items-center lg:items-start">
            <div className="flex flex-col gap-y-[24px] text-center lg:text-left lg:mr-[100px]">
              <h2 className="text-[36px] font-bold leading-[44px] xl:text-[64px] xl:leading-[77px]">
                Work with Your Favorite Apps Using FoodSpace
              </h2>
              <p>
                FoodSpace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
              </p>
            </div>
            <Button arrow title="Read more" link="/register" />
          </div>
        </div>
      </div>
    </section>
  );
}
