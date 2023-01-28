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
      <body className={"h-[100vh]"}>
      <Header />
      <div className={"h-full flex relative"}>
          <SideBar />
          {children}
      </div>
      </body>
    </html>
  )
}
