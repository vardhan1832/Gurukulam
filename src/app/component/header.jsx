import Link from "next/link";

export default function Header(){
    return(
        <>
        <header className="max-w-[1440px] m-auto p-4 flex justify-between">
            <h1 className="text-xl font-bold text-blue-600">Gurukulam</h1>
            <nav className="flex justify-between gap-6" >
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            </nav>
        </header>
            
        </>
    )
}