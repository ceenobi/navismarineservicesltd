import { Link } from "react-router";
import { cn } from "~/lib/utils";

interface LogoProps {
  classname?: string;
  iconClassName?: string;
}

export default function Logo({ classname}: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2 w-fit", classname)}>
      <img src="/navislogo.svg" alt="Navis Maritime Services Logo"/>
    </Link>
  );
}
