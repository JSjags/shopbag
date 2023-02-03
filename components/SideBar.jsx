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
        <aside className={"flex w-1/6 min-w-[200px] max-w-[320px] h-[calc(100vh-50px)] bg-[#591f27] sticky top-0 flex-col shadow-xl"}>
            <Link href={`/`}>
                <p className={`${inter.variable} font-inter capitalize mb-2 px-5 mt-5 text-[#da5726]`}>Home</p>
            </Link>
            <Link href={`/all-products`}>
                <p className={`${inter.variable} text-white font-inter capitalize mb-2 px-5`}>All Products</p>
            </Link>
            <p className={`${poppins.variable} font-poppins font-semibold mt-3 mb-3 bg-white px-5 py-2 text-[#591f27]`}>Categories</p>
            <ul className={"flex flex-col gap-2 sticky top-0 "}>
                {categories.map((category, index) => (
                    <Link key={index} href={`/${category}`}>
                        <li key={index} className={`${inter.variable} text-white font-inter capitalize px-5`}>{category}</li>
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;