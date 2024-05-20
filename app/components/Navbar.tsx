import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="relative container flex md:grid md:grid-cols-12 items-center mx-auto py-7">
      <div className="md:col-span-3">
      	<Link href="/">
          <h1 className="text-2xl font-semibold"><span className="text-primary">Poke</span>Place</h1>
        </Link>
      </div>
      <NavbarLinks />

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
      	<Button>Login</Button>
      	<Button variant="secondary">Register</Button>
      </div>
    </nav>
  )
}
