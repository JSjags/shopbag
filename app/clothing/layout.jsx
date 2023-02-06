import '../globals.css'
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RootLayout({ children }) {
    return (
        <>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        {/*<head/>*/}
        <main className="h-[100vh] w-full max-w-[1440px] mx-auto">
        <Header />
        <div className={"h-[calc(100vh-50px)] flex relative w-full"}>
            <SideBar />
        </div>
        </main>
        </>
    )
}
