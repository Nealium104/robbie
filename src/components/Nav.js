import Link from "next/link"

export default function Nav () {
    return (
        <>
        <Link href="/">Home</Link>
        <Link href="/bio/">Bio</Link>
        <Link href="/recordings/">Recordings</Link>
        <Link href="/teaching/">Teaching</Link>
        <Link href="/contact/">Contact</Link>
        </>
    )
    
}