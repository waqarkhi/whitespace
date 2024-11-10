import Image from "@/node_modules/next/image";
import { TextBox } from "../parts/TextBox";
import Custom from '../../public/images/pm.svg'

export function Customise() {
  return (
    <section className="my-[80px] mx-[16px] lg:my-[100px]">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[60px] lg:gap-x-20 lg:flex-row-reverse text-[#212529]">
          <TextBox
            heading={["Your need can be", "Customise"]}
            text="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
            btn={["/register", "Let’s Go"]}
          />
          <div className="lg:w-1/2">
            <Image src={Custom} className="w-full" alt="Customise" />
          </div>
        </div>
      </div>
    </section>
  );
}
