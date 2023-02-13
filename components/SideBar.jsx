'use client'

import React from 'react';
import {inter, poppins} from "@/app/font";
import Link from "next/link";
import {generateLink} from "@/lib/path";
import {IoManOutline as MenCategory, IoWomanOutline as WomenCategory} from "react-icons/io5";
import {GiProcessor as Electronics, GiNecklace as Jewellery} from "react-icons/gi";
import {BiCategoryAlt as Categories, BiHomeAlt as HomeIcon} from "react-icons/bi";
import {TbStack3 as AllProducts} from "react-icons/tb"

// const fetchCategories = async () => {
//     const data = await fetch('https://fakestoreapi.com/products/categories')
//     return await data.json()
// }

const wrapListItem = (category) => {
    if (category === "home") {
        return <div className="flex items-center px-2">
            <HomeIcon width={16} height={16}/>
            <p className={`${inter.variable} font-inter capitalize px-2`}>Home</p>
        </div>
    }
    if (category === "all products") {
        return <div className="flex items-center px-2">
            <AllProducts width={16} height={16}/>
            <p className={`${inter.variable} font-inter capitalize px-2`}>All Products</p>
        </div>
    }
    if (category === "men's clothing") {
        return <div className="flex items-center px-2">
            <MenCategory width={16} height={16}/>
            <li className={`${inter.variable} font-inter capitalize px-2`}>{category === "jewelery" ? "jewellery" : category}</li>
        </div>
    }
    if (category === "women's clothing") {
        return <div className="flex items-center px-2">
            <WomenCategory width={16} height={16}/>
            <li className={`${inter.variable} font-inter capitalize px-2`}>{category === "jewelery" ? "jewellery" : category}</li>
        </div>
    }
    if (category ===  "electronics") {
        return <div className="flex items-center px-2">
            <Electronics width={16} height={16}/>
            <li className={`${inter.variable} font-inter capitalize px-2`}>{category === "jewelery" ? "jewellery" : category}</li>
        </div>
    }
    if (category === "jewelery") {
        return <div className="flex items-center px-2">
            <Jewellery width={16} height={16}/>
            <li className={`${inter.variable} font-inter capitalize px-2`}>{category === "jewelery" ? "jewellery" : category}</li>
        </div>
    }
}

const SideBar = (props) => {
    const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"]

    return (
        <aside className={"flex w-1/6 min-w-[200px] max-w-[320px] h-[calc(100vh-50px)] bg-[#591f27] sticky top-0 flex-col shadow-xl"}>
            <Link href={`/`} className="text-[#da5726] hover:bg-white hover:text-[#591f27] ">
                <div className={`${inter.variable} font-inter capitalize mb-2 mt-5`}>{wrapListItem("home")}</div>
            </Link>
            <Link href={`/all-products`} className="text-white hover:bg-white hover:text-[#591f27]">
                <div className={`${inter.variable} font-inter capitalize mb-2`}>{wrapListItem("all products")}</div>
            </Link>
            <div
                className={`${poppins.variable} font-poppins h-[1px] mx-2 font-semibold mt-3 mb-4 bg-[rgba(255,_255,_255,_0.7)] text-[#591f27]`}></div>
            <ul className={"flex flex-col gap-2 sticky top-0 "}>
                {categories.map((category, index) => (
                    <Link key={index} href={generateLink(category)} className="text-white hover:bg-white hover:text-[#591f27]">
                        {wrapListItem(category)}
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;