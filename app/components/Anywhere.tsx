import { Button } from "../parts/Button";
import { Title } from "../parts/Title";

export function Anywhere() {
  return (
    <section className="bg-[#043873] text-white py-[100px] mt-[140px] px-4 lg:bg-[url('/images/anywhere-bg.svg')] bg-no-repeat bg-left">
      <div className="lg:text-center xl:w-[1050px] lg:mx-auto">
        <div className="mb-[60px]">
          <div className="flex flex-col gap-y-6">
            <Title first="Your Work" last="everywhere you are" color="blue" />
            <p className="text-[18px] leading-[30px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including FoodSpace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center">
          <Button link="#" title="Try Taskey" arrow />
        </div>
      </div>
    </section>
  );
}
