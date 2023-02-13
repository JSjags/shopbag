"use client"

import Image from "next/image";
import {formatMoney} from "@/lib/figures";
import {useState} from "react";
import {IoManOutline as MenCategory, IoWomanOutline as FemaleCategory} from "react-icons/io5";
import {GiProcessor as Processor, GiNecklace as Jewellery} from "react-icons/gi";
import caretUp from "@/assets/caret-up.svg";
import jewelery from "@/assets/jewelery.svg"
import electronics from "@/assets/electronics.svg"
const CategoryIcon = ({category}) => {
    if(category === "men's clothing") return <MenCategory alt="Men's clothing" title="Men's clothing" width={16} height={16} className="absolute right-1 top-1 rounded-[6px] text-[#da5726]"/>
    if(category === "women's clothing") return <FemaleCategory alt="Women's clothing" title="Women's clothing" width={16} height={16} className="absolute right-1 top-1 rounded-[6px] text-[#da5726]"/>
    if(category === "electronics") return <Processor alt="electronics" title="Electronics" width={16} height={16} className="absolute right-1 top-1 rounded-[6px] text-[#da5726]"/>
    if(category === "jewelery") return <Jewellery alt="jewelery" title="Jewellery" width={16} height={16} className="absolute right-1 top-1 rounded-[6px] text-[#da5726]"/>
}

export default function ItemCard({product}) {
    const [selected, setSelected] = useState(false)
    const [itemQuantity, setItemQuantity] = useState(1)

    return (
        <div className={"relative m-0 block min-w-[200px] w-1/4 rounded-md shadow-xl bg-neutral-100 border border-solid border-slate-200 cursor-pointer hover:scale-[1.05] hover:ease hover:duration-[300ms]"}>
            <div><CategoryIcon category={product.category} /> </div>
            <div className="h-3/6 overflow-hidden rounded-md shadow-sm bg-white p-2">
                <Image src={product.image} alt={"featured product"} width={200} height={200} className="z-10 border-rounded h-full object-contain aspect-square" />
            </div>
            <div className="h-3/6 flex flex-col justify-between p-2 h-max gap-1">
                <h2 className="text-sm line-clamp-2 min-h-[40px] text-[#da5726] font-poppins font-semibold">{product.title}</h2>
                <p className={"text-sm font-600 text-right text-[#da5726]"}><span className={"text-[#591f27]"}>$</span><span className={"text-[#da5726]"}>{formatMoney(product.price.toLocaleString("en-US"))}</span></p>
                <div className="w-full rounded-md overflow-hidden">
                    {!selected ? (
                        <button onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault()
                            setSelected(!selected)
                        }
                        } className="block w-full border-0 p-2 bg-[#591f27] text-white font-bold rounded-md ">Add to cart</button>

                    ) : (
                        <div className="flex gap-1">
                            <button onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                setSelected(!selected)
                            }
                            } className="block w-3/4 border-0 p-2 bg-[#da5726] text-white font-bold rounded-md ">Remove</button>
                            <div className="flex w-1/4 bg-white rounded-md">
                                <input readOnly value={itemQuantity} className="block w-2/4 h-full font-inter pl-1 rounded-md" />
                                <div className="flex flex-col w-2/4 justify-between">
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault()
                                        itemQuantity < 10 && setItemQuantity((prev) => prev + 1);
                                    }
                                    }><Image src={caretUp} alt="increase" width={16} height={16} /></button>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        itemQuantity > 1 && setItemQuantity((prev) => prev - 1);
                                    }
                                    }><Image src={caretUp} alt="decrease" width={16} height={16} className="rotate-180"/></button>
                                </div>
                            </div>
                            </div>
                    )}
                </div>
            </div>
        </div>

    );
};