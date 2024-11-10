import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Logo from "../../public/images/white-space.svg";
import { Button } from "../parts/Button";
import Globe from "../../public/images/globe.svg";
import ArrowDown from "../../public/images/arrow-down.svg";
import FB from "../../public/images/social/fb.svg";
import In from "../../public/images/social/in.svg";
import X from "../../public/images/social/x.svg";
import { ListWidget } from "../parts/ListWidget";
import data from "../data/footer.json";

export function Footer() {
  return (
    <section className="bg-[#043873] pt-[140px] pb-8 px-4 text-white text-center lg:text-left">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-y-[80px] lg:flex-row lg:gap-x-[100px]">
          <div className="lg:w-3/12">
            <div className="mb-6">
              <Image
                className="mx-auto w-[190px] lg:ml-0"
                src={Logo}
                alt="White Space Logo"
              />
            </div>
            <div className="text-[18px] leading-[30px]">
              <p>
                FoodSpace was created for the new ways we live and work. We make
                beautyfully designed around the world
              </p>
            </div>
          </div>

          {data.map((list, i) => (
            <div key={i} className="text-[18px] leading-[22px] lg:w-2/12">
              <ListWidget items={list} />
            </div>
          ))}

          <div className="flex flex-col gap-y-6 items-center lg:2/12 lg:items-start">
            <h4 className="text-[28px] leading-[36px] font-bold">
              Try It Today
            </h4>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <Button link="#" title="Start today" arrow />
          </div>
        </div>
        <hr className="mt-[80px] border-[#2E4E73] hidden lg:block" />

        <div className="mt-[80px] lg:mt-[20px] lg:flex lg:items-center lg:justify-between">
          <ul className="flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-[60px]">
            <li>
              <Link href="#" className="flex gap-x-2">
                <Image src={Globe} alt="Globe" />
                English
                <Image src={ArrowDown} alt="Arrow Down" />
              </Link>
            </li>
            <li>
              <Link href="#">Terms & privacy</Link>
            </li>
            <li>
              <Link href="#">Security</Link>
            </li>
            <li>
              <Link href="#">Status</Link>
            </li>
            <li>
              <p>©2021 White Space LLC.</p>
            </li>
          </ul>
          <hr className="my-5 border-[#2E4E73] lg:hidden" />
          <ul className="flex gap-x-8 justify-center">
            <li>
              <Link href="#">
                <Image src={FB} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={In} alt="LinkedIn" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={X} alt="Twitter" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
