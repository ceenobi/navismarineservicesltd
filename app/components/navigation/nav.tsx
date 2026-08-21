import { NavLink } from "react-router";
import { navLinks } from "~/lib/constants";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Drawer from "./drawer";

export default function Nav() {
	return (
		<header className="bg-mainWhite z-100 fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl backdrop-blur supports-backdrop-filter:bg-white/90 border border-mainGray/5 shadow-lg rounded-full py-2 px-4">
			<div className="flex justify-between items-center">
				<Logo classname="w-30 sm:w-34" />
				<nav aria-label="Primary" className="hidden md:flex gap-4 items-center">
					{navLinks.map((link) => (
						<NavLink
							key={link.id}
							to={link.path}
							className="cursor-pointer font-sans text-base hover:text-deepOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepOrange/70 focus-visible:rounded-sm transition-all duration-300 ease-in-out"
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
				<NavLink to="/contact">
					<Button
						className="hidden md:flex bg-deepOrange hover:bg-deepOrange/80 text-mainWhite rounded-full py-3 sm:py-5 w-30 sm:w-34 font-medium text-base transition-[background-color,opacity] duration-300 ease-in-out"
						size="lg"
					>
						Contact Us
					</Button>
				</NavLink>
				<Drawer />
			</div>
		</header>
	);
}
