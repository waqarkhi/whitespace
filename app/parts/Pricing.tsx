import Image from "@/node_modules/next/image";
import Check from "../../public/images/check.svg";
import CheckDark from "../../public/images/check-dark.svg";
import { Button } from "./Button";

export function Pricing({
  header,
  includes,
}: {
  header: any;
  includes: string[];
}) {
  return (
    <div
      className={`rounded-[10px] p-5 ${
        header.title == "Personal"
          ? "bg-[#043873] text-[#fff] lg:py-[80px]"
          : "border-[#FFE492] border text-[#043873] hidden lg:block"
      }`}
    >
      <div className="flex flex-col gap-y-6 mb-6">
        <h4 className="text-[24px] leading-[36px] font-semibold">
          {header.title}
        </h4>
        <h3 className="text-[36px] leading-[44px] font-bold">{header.price}</h3>
        <p>{header.description}</p>
      </div>
      <ul className="flex flex-col gap-y-7">
        {includes.map((item, x) => (
          <li key={x} className="flex items-center gap-x-5">
            {header.title == "Personal" ? (
              <Image src={Check} alt="Check Icon" />
            ) : (
              <Image src={CheckDark} alt="Check Icon" />
            )}
            <span className="mr-5">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex mt-6">
          <Button link="/pricing" title="Get Started" color={`${(header.title == "Personal") ? 'btn' : 'btn-sec-border'}`} />
      </div>
    </div>
  );
}
