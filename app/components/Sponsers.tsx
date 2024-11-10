import { Title } from "../parts/Title";
import Image from "@/node_modules/next/image";
import Google from '../../public/images/sponsers/Google.svg'
import Apple from '../../public/images/sponsers/Apple.svg'
import Ms from '../../public/images/sponsers/Microsoft.svg'
import Slack from '../../public/images/sponsers/Slack.svg'

export function Sponsers() {
    return (
        <section className="my-[80px] lg:mx-[32px] lg:my-[140px]">
            <div className="lg:container mx-auto">
                <div>
                    <div className="my-[100px] text-center">
                        <Title first="Our" last="Sponsors" />
                    </div>
                    <div className="flex flex-col gap-y-[80px] items-center lg:flex-row lg:justify-between">
                        <div><Image src={Apple} alt="Apple" /></div>
                        <div><Image src={Ms} alt="Microsoft" /></div>
                        <div><Image src={Slack} alt="Slack" /></div>
                        <div><Image src={Google} alt="Google" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}