import {inter, poppins} from "./font";
import Image from "next/image";

const getAllProducts = async () => {
  const data = await fetch('https://fakestoreapi.com/products')
  return await data.json()
}

export default async function Home() {
  const products = await getAllProducts()
    const heroProduct = products[0]

  console.log(products[0])
  return (
    <main className={`${poppins.variable} flex-1 p-5 w-5/6`}>
  <h1 className={`${poppins.variable} font-poppins text-[#591f27] text-3xl font-bold `}>Home</h1>
    {/*  banner */}
      <div className={`flex-1 shadow-xl border border-slate-2 border-solid relative rounded-lg mt-5 w-full`}>
    <Image src={heroProduct.image} alt={"hero-banner"} width={200} height={200} className={"z-10 block absolute left-[50%] top-0 -translate-x-1/2 -translate-y-5 mix-blend-multiply mt-2"} />
        <p className={"absolute top-5 right-5 font-poppins text-white px-3 text-sm after:w-full after:h-full after:block after:absolute after:bottom-0 after:left-0 after:-skew-x-[45deg] after:bg-[#da5726] after:border-xl after:-z-[1]"}>{heroProduct.category}</p>
        <h1 className={`font-poppins text-2xl font-bold text-[#da5726] relative z-20 w-1/2 p-5 after:w-[30px] after:h-[6px] after:block after:absolute after:bottom-[10px] after:left-5 after:-skew-x-[45deg] after:bg-[#591f27] after:border-xl`}>{heroProduct.title}</h1>
      <div className={"flex justify-between items-end p-5"}>
        <p className={"max-w-[240px] text-[#591f27]"}>{heroProduct.description}</p>
        <div className={"flex flex-col items-end "}>
          <p className={"text-5xl font-black self-end text-[#da5726]"}><span className={"text-[#591f27]"}>$</span><span className={"text-[#da5726]"}>{heroProduct.price}</span></p>
          <button className={"block bg-[#591f27] rounded-lg font-inter font-semibold px-3 py-2 mt-3 text-white"}>Buy Now</button>
        </div>
      </div>
      </div>
    {/* featured products */}
      <section >
        <h1 className={`${poppins.variable} font-poppins text-[#591f27] text-3xl font-bold mt-7`}>Featured Products</h1>
        <div className={`w-[100%] h-[22vmax] shadow-xl border border-slate-2 border-solid rounded-lg mt-5 px-3 pt-3 pb-3 snap-x flex gap-3 overflow-x-scroll`}>
          {products.slice(1, 10).map((product, index) => (
              <div key={index} className={"block min-w-[200px] w-1/4 rounded-xl shadow-xl bg-neutral-100 border border-solid border-neutral-200"}>
                <div className="h-3/6 overflow-hidden rounded-md shadow-sm bg-white p-2">
                  <Image src={product.image} alt={"featured product"} width={200} height={200} className="z-10 border-rounded h-full object-contain aspect-square" />
                </div>
                <div className="h-3/6 flex flex-col justify-between p-2 h-max gap-1">
                  <h2 className="line-clamp-2 text-[#da5726] font-poppins font-bold">{product.title}</h2>
                  <p className={"text-lg font-bold text-right text-[#da5726]"}><span className={"text-[#591f27]"}>$</span><span className={"text-[#da5726]"}>{heroProduct.price}</span></p>
                  <div className="w-full bg-yellow-50 rounded-md overflow-hidden">
                    <button className="block w-full border-0 p-2 bg-[#591f27] text-white font-bold rounded-md ">Add to cart</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </main>
  )
}
