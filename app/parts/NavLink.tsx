import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link"
import ArrowDown from '../../public/images/arrow-down.svg';

export function NavLink({title,link}:{title:string,link:string}) {
    return (
        <li><Link className="flex gap-x-3 items-center" href={link}>{title} <span><Image src={ArrowDown} alt="Arrow Down" /></span></Link></li>
    )
}