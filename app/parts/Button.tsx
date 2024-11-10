import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import RightArrow from "../../public/images/right-arrow.svg";

type btnType = {
    color?:string,
    title:string,
    link:string,
    arrow?:boolean
}

export function Button({color,title,link,arrow}:btnType) {

    return(
        <Link className={((!color)?'btn':color)+' px-10 py-4 rounded-lg flex gap-x-3'} href={link}>
            {title}{arrow ? <Image src={RightArrow} alt="Right Arrow" />:""}
        </Link>
    )
}