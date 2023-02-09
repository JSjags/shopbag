import Image from "next/image";
import ShopBagGif from "../assets/ShopBag.gif"
import {poppins} from "@/app/font";
export default function Loading() {
    return (
        <div className="flex flex-col w-full h-[calc(100vh_-_50px)] items-center justify-center gap-2">
            <Image width={500} height={500} src={ShopBagGif} className="w-[100px]" alt="loader" />
            <p className={`${poppins.variable} font-poppins text-[#591f27] font-semibold`}>Loading Home Page</p>
        </div>
    );
}