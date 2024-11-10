import { TextBox } from "../parts/TextBox";
import Image from "@/node_modules/next/image";
import Ext from "../../public/images/extension.svg";

export function Extension() {
  return (
    <section className="bg-[#043873] py-[80px] px-[16px] lg:mt-[140px]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px] lg:flex-row lg:gap-x-20 text-[#fff]">
          <TextBox
            heading={["Use as", "Extension"]}
            text="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            btn={["/register", "Let’s Go"]}
          />
          <div className="lg:w-1/2">
            <Image src={Ext} className="w-[70%] mx-auto" alt="Extension" />
          </div>
        </div>
      </div>
    </section>
  );
}
