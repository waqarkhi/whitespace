export function Title({first,last,color}:{first:string,last:string,color?:string}) {
  return (
    <h2 className="text-[36px] leading-[42px] font-bold xl:text-[72px] xl:leading-[87px]">
      {first} <span className={`heading bg-${((color != undefined)?''+color:"yellow")} pb-4`}>{last}</span>
    </h2>
  );
}
