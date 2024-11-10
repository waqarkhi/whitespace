import { Button } from "./Button";
import { Title } from "./Title";

export function TextBox({heading,text,btn}:{heading:any,text:string,btn:any}) {
  return (
    <div className="flex flex-col gap-y-[60px] justify-center lg:w-1/2">
      <div className="text-center lg:text-left">
        <Title first={heading[0]} last={heading[1]} />
        <p className="text-[18px] leading-7 mt-6">
          {text}
        </p>
      </div>
      <div className="mx-auto lg:ml-0">
        <Button link={btn[0]} title={btn[1]} arrow />
      </div>
    </div>
  );
}
