import Image from "next/image";
import logo from "../public/ShopBag/1.png"
import {inter, poppins} from "@/app/font";

function Header(props) {
    return (
    <div className={"flex gap-[10px] h-[50px] items-center shadow-lg sticky top-0 z-50 bg-white" }>
        <Image src={logo} alt="ShopBag" width={50} height={50} style={"w-[50px] h-[50px]"}/>
        <p className={`${poppins.variable} font-poppins font-semibold text-[#591f27]`}>ShopBag</p>
    </div>
    );
}

export default Header;