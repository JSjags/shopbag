import {inter, poppins} from "../../font";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";
import {generateLink} from "@/lib/path";

const getMensClothe = async () => {
    const [mensData] = await Promise.allSettled([fetch("https://fakestoreapi.com/products/category/men's clothing")])
    if(mensData.status !== "fulfilled")
        throw new Error("Error fetching data")
    const mensClothing = await mensData.value.json()
    return [...mensClothing]
}
export default async function MensClothing() {
    const clothing = await getMensClothe()

    return (
        <main className={`${poppins.variable} flex-1 p-5 w-full h-[calc(100vh-50px)] overflow-y-scroll`}>
            <h1 className={`${poppins.variable} font-poppins text-[#591f27] text-3xl font-bold `}>Men's Clothing</h1>
                <div className={`w-[100%] shadow-xl scroll-px-3 rounded-lg mt-5 px-3 pt-3 pb-3 snap-x grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] flex-wrap gap-4`}>
                    {clothing.map((item, index) => (
                        <Link key={index} href={generateLink(item)} style={{width: "min-content", margin: "auto"}} >
                            <ItemCard product={item} />
                        </Link>
                    ))}
                </div>
        </main>
    )
}
