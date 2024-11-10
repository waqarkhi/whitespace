import Image from "@/node_modules/next/image";
import { TextBox } from "../parts/TextBox";
import YD from '../../public/images/your-data.svg'

export function YourData() {
  return (
    <section className="my-[80px] mx-[16px] lg:mt-[140px]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px] lg:flex-row lg:gap-x-20 text-[#212529]">
          <TextBox
            heading={["100%", "your data"]}
            text="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
            btn={["/register", "Read more"]}
          />
          <div className="lg:w-1/2">
            <Image src={YD} className="w-full" alt="Your Data" />
          </div>
        </div>
      </div>
    </section>
  );
}
