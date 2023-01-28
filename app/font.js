import {Inter, Poppins} from '@next/font/google'

const inter = Inter({subsets: ['latin'], variable: "--font-inter"})
const poppins = Poppins({
    style: "normal",
    weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
    preload: true,
    subsets: ['latin'],
    variable: "--font-poppins"
})
export {
    inter, poppins
}