import Pm from "../../public/images/pm.svg";
import Image from "@/node_modules/next/image";
import { TextBox } from "../parts/TextBox";


export function Project() {
  return (
    <section className="my-[80px] mx-[16px] lg:mt-[140px]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px] lg:flex-row lg:gap-x-20 text-[#212529]">
          <TextBox 
            heading={["Project","Management"]}
            text="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
            btn={["/register","Get Started"]}
          />
          <div className="lg:w-1/2">
            <Image src={Pm} className="w-full" alt="Project Management" />
          </div>
        </div>
      </div>
    </section>
  );
}
