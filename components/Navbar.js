"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/app/lib/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Wish and Offers", href: "/wish-and-offers" },
    { name: "BDS Services", href: "/bds-services" },
    { name: "Business Registration", href: "/business-registration" },
    { name: "JobBriz", href: "/jobbriz" },
  ];

  return (
    <nav className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-black hover:text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {user && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    {user && user.username}{" "}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="shadow-2xl bg-white border-gray-100 rouned-lg">
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="ghost" onClick={logout} className="p-0">
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <div className="flex items-center sm:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <Link
              href="/logout"
              className="block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
