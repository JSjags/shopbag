import React from 'react';
import {inter, poppins} from "@/app/font";
import Link from "next/link";

const fetchCategories = async () => {
    const data = await fetch('https://fakestoreapi.com/products/categories')
    return await data.json()
}
async function SideBar(props) {
    const categories = await fetchCategories()
    return (
        <aside className={"flex basis-52 shrink-0 grow-0 h-[100%] bg-[#591f27] sticky top-0 flex-col p-5 shadow-xl"}>
            <p className={`${poppins.variable} font-poppins text-slate-400 mb-3`}>Categories</p>
            <ul className={"flex flex-col gap-2 sticky top-0 "}>
                {categories.map((category, index) => (
                    <Link href={`/${category}`}>
                        <li key={index} className={`${inter.variable} text-white font-inter capitalize`}>{category}</li>
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;