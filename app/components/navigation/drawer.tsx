import { RiCloseLine, RiMenuFill } from "@remixicon/react";
import { useState } from "react";
import { NavLink } from "react-router";
import { navLinks } from "~/lib/constants";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navlinks = [...navLinks, { id: 4, path: "/contact", label: "Contact" }]
  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          render={
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-10 h-10 cursor-pointer hover:bg-softWhite rounded-full flex items-center justify-center"
              onClick={() => isOpen ? setIsOpen(false): setIsOpen(true)}
            >
              {isOpen ? <RiCloseLine size={28} /> : <RiMenuFill size={28} />}
            </button>
          }
        />
        <SheetContent
          side="bottom"
          className="w-full sm:max-w-md bg-white dark:bg-white/2 border border-white/10 dark:backdrop-blur-3xl border-l-0 p-0"
          showCloseButton={false}
          aria-describedby="drawer"
        >
          <div className="relative flex flex-col justify-end h-full px-4 py-8">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <nav
              aria-label="Primary"
              className="flex flex-col gap-4 items-center"
            >
              {navlinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className="cursor-pointer font-sans text-lg hover:text-deepOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepOrange/70 focus-visible:rounded-sm transition-all duration-300 ease-in-out"
                   onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <span
                      aria-current={isActive ? "page" : undefined}
                      className={
                        isActive
                          ? "text-deepOrange font-medium"
                          : "text-mainGray hover:text-deepBlue"
                      }
                    >
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
  );
}
