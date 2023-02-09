export default function RootLayout({ children }) {
    return (
        <>
            <main className="h-[100vh] w-full max-w-[1440px] mx-auto">
                {children}
            </main>
        </>
    )
}
