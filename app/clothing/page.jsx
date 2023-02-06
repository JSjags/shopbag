import {inter, poppins} from "../font";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";

const getAllClothes = async () => {
    const [mensData, womensData] = await Promise.allSettled([fetch("https://fakestoreapi.com/products/category/men's clothing"), fetch("https://fakestoreapi.com/products/category/women's clothing")])
    if(mensData.status !== "fulfilled" && womensData.status !== "fulfilled")
        throw new Error("Error fetching data")
    const mensClothing = await mensData.value.json()
    const womensClothing = await womensData.value.json()
    return [...mensClothing, ...womensClothing]
}

const generateLink = (item) => {
    let link;
    switch (item.category) {
        case "men's clothing":
            link = `/clothing/men/${item.id}`
            break;
        case "women's clothing":
            link = `/clothing/women/${item.id}`
            break;
        case "electronics/":
            link = `/clothing/men/${item.id}`
            break;
        case "jewelery":
            link = `/jewellery/${item.id}`
            break;
        default:
            link = "/all-products"
            break;
    }
    return link;
}

export default async function allClothes() {
    const clothing = await getAllClothes()

    return (
        <main className={`${poppins.variable} flex-1 p-5 w-5/6 h-[calc(100vh-50px)] overflow-y-scroll`}>
            <p>Hello</p>
             all clothing
            <h1 className={`${poppins.variable} font-poppins text-[#591f27] text-3xl font-bold `}>All Clothing</h1>
                <div className={`w-[100%] h-fit shadow-xl scroll-px-3 border border-slate-2 border-solid rounded-lg mt-5 px-3 pt-3 pb-3 snap-x flex gap-3 overflow-x-scroll`}>
                    {clothing.map((item, index) => (
                        <Link key={index} href={generateLink(item)}>
                            <ItemCard product={item} />
                        </Link>
                    ))}
                </div>
        </main>
    )
}
