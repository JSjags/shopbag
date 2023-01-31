import './globals.css'
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body className="h-[100vh] w-full max-w-[1440px] mx-auto overflow-x-hidden">
      <Header />
      <div className={"h-full flex relative w-full"}>
          <SideBar />
          {children}
      </div>
      </body>
    </html>
  )
}
