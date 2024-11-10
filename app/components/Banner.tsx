import { Button } from "../parts/Button";
import BannerImage from '../../public/images/banner.svg'
import Image from "@/node_modules/next/image";

export function Banner() {
  return (
    <section className="bg-[#043873] text-white bg-[url('/images/bg-layers.svg')] bg-left-top bg-auto lg:bg-center bg-no-repeat lg:bg-contain xl:bg-cover">
      <div className="lg:mx-[32px] mx-[16px]">
        <div className="py-[80px] flex flex-col gap-y-[100px] lg:flex-row lg:items-center lg:mx-auto lg:container">
          <div className="lg:w-1/2 flex flex-col gap-y-[60px] items-center lg:items-start">
            <div className="flex flex-col gap-y-[24px] text-center lg:text-left lg:mr-[100px]">
              <h1 className="text-[36px] font-bold leading-[44px] xl:text-[64px] xl:leading-[77px]">
                Get More Done with White Space
              </h1>
              <p>
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <Button arrow title="Try FoodSpace free" link="/register" />
          </div>
          <div className="lg:w-1/2">
            <Image src={BannerImage} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
