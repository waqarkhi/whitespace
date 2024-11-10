import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Logo from "../../public/images/white-space.svg";
import Menu from "../../public/images/menu.svg";
import { Navbar } from "../parts/Navbar";
import { Button } from "../parts/Button";

export function Header() {
  return (
    <section className="bg-[#043873] text-white">
      <div className="py-4 lg:mx-[32px] mx-4">
        <div className="flex justify-between lg:container mx-auto items-center">
          <Link href="/">
            <Image src={Logo} alt="White Space Logo" className="h-[40px] w-auto" />
          </Link>
          <div className="hidden xl:block">
            <div className="flex gap-x-12 items-center">
              <Navbar />
              <div className="flex gap-x-4">
                <Button title="Login" color="btn-sec" link="/login" />
                <Button title="Try FoodSpace free" arrow link="/register" />
              </div>
            </div>
          </div>
          <button className="xl:hidden">
            <Image src={Menu} alt="White Space Menu" />
          </button>
        </div>
      </div>
    </section>
  );
}
