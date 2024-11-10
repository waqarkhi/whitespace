import Link from "@/node_modules/next/link";

export function ListWidget({ items }: { items: any[] }) {
  return (
    <ul className="flex flex-col gap-y-4">
      {items.map((item, i) => (
        <li key={i}>
          <Link href={item[0]}>
            {item[2] == 'bold' && <strong>{item[1]}</strong>}
            {item[2] != 'bold' && <span className={`text-[${item[2]}]`}>{item[1]}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}


// {(() => {
//     (item[2] != undefined) ? ({
//         switch(item[2]) {
//             case 'bold' : (<strong>{item[1]}</strong>);
//             default: (<span className={`text-[${item[2]}]`}>{item[1]}</span>)
//         })
//      : 
//         item[1]
//     }
// })}