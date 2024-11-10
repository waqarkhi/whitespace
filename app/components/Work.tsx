import { Button } from "../parts/Button";
import { Title } from "../parts/Title";
import WorkTogether from "../../public/images/work-together.svg";
import Image from "@/node_modules/next/image";
import { TextBox } from "../parts/TextBox";

export function Work() {
  return (
    <section className="my-[80px] mx-[16px] lg:my-[100px]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px] lg:gap-x-20 lg:flex-row-reverse text-[#212529]">
          <TextBox 
            heading={["Work","together"]}
            text="With FoodSpace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others."
            btn={["/register","Try it now"]}
          />
          <div className="lg:w-1/2">
            <Image src={WorkTogether} className="w-full" alt="Work Together" />
          </div>
        </div>
      </div>
    </section>
  );
}
