import { Title } from "../parts/Title";
import Check from '../../public/images/check.svg'
import Image from "@/node_modules/next/image"
import PlanData from '../data/pricing.json'
import { Button } from "../parts/Button";
import { Pricing } from "../parts/Pricing";

export function Plan() {
  return (
    <section className="px-4">
      <div className="lg:container lg:mx-auto">
        <div className="text-center text-[#212529] mb-[60px]">
          <div className="flex flex-col gap-y-6">
            <Title first="Choose" last="Your Plan" />
            <p className="text-[18px]">
              Whether you want to get organized, keep your personal life on track,
              or boost workplace productivity, Evernote has the right plan for
              you.
            </p>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          {PlanData.map((item,i) => (
              <Pricing key={i} header={item.header} includes={item.includes} />
          ))}
        </div>
      </div>
    </section>
  );
}
