import { Button } from "@/components/ui/button"
import Link from "next/link"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {buttonVariants} from "@/components/ui/button"

interface navArray {
    label: string,
    href: string
}

const navArray: navArray[] = [
    {
        label: "Apparel",
        href: "/apparel"
    },

    {
        label: "Accessories",
        href: "/accessories"
    },

    {
        label: "Toys",
        href: "/toys"
    }
]

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <span className="ml-3 text-xl">BABIES CART</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        {navArray.map((item,index)=>(
      <Link href={item.href} className="cursor-pointer mr-5 hover:text-gray-900">{item.label}</Link>          
        ))}
      
    </nav>
    <div className="space-x-3">
    <LoginLink className={buttonVariants({
        variant: "outline",
        size: "sm",
    })}>Sign in</LoginLink>
    <RegisterLink 
    className={buttonVariants({
        variant: "outline",
        size: "sm",
    })}>Sign up</RegisterLink>
    <p>Icon</p>
    </div>
  </div>
</header>
    )
}

export default Navbar