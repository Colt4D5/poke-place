"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'Cards',
    href: '/cards',
  },
  {
    id: 2,
    name: 'Packs',
    href: '/packs',
  },
  {
    id: 3,
    name: 'Trade',
    href: '/trade',
  },
];

export function NavbarLinks() {
  const location = usePathname();

  console.log(location);

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
      {navbarLinks.map(link => (
      	<Link key={link.id} href={link.href} className={cn(
          location === link.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75',
          "group flex items-center px-2 py-2 font-medium rounded-md"
        )}>
          { link.name }
        </Link>
      ))}
    </div>
  )
}
