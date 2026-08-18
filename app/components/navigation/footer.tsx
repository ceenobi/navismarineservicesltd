import { Link } from "react-router";
import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "~/lib/seo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="bg-deepBlue py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center py-6">
          <h2 className="font-heading text-center md:text-start text-mainWhite text-3xl sm:text-[34px] leading-tight">
            Ready to discuss your next port call?
          </h2>
          <Link to="/contact">
            <Button
              className="bg-deepOrange hover:bg-deepOrange/80 text-mainWhite rounded-full py-3 sm:py-5 lg:py-6 w-38 sm:w-40 font-medium text-base transition-[background-color,opacity] duration-300 ease-in-out"
              size="lg"
            >
              Contact NAVIS
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="bg-paleWhite/30" />
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 space-y-4">
          <h2 className="font-heading font-semibold text-[26px] md:text-[32px] text-mainWhite">
            NAVIS Marine Services Ltd
          </h2>
          <p className="text-sm sm:text-lg font-light text-softWhite">
            Navigating excellence across maritime service, ship agency,
            consultancy, HSSEQ, procurement and logistics.
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 lg:col-span-3 space-y-4 flex flex-col items-start md:items-center">
          <h2 className="font-heading font-semibold text-[24px] md:text-[28px] text-deepOrange">
            Navigate
          </h2>
          <ul className="text-sm sm:text-lg text-softWhite space-y-3">
            <li>
              <Link to="/" className="hover:text-mainWhite">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-mainWhite">About NAVIS</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-mainWhite">Services</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-4 flex flex-col items-start">
          <h2 className="font-heading font-semibold text-[24px] md:text-[28px] text-deepOrange">
            Contact
          </h2>
          <ul className="text-sm sm:text-lg text-softWhite space-y-3 transition-all duration-300 ease-in">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex gap-2 items-center"
              >
                <img src="/mail.svg" alt="mail" />
                <span className="hover:text-mainWhite">{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li>
              <a href={CONTACT_PHONE_TEL} className="flex gap-2 items-center">
                <img src="/phone.svg" alt="phone" />
                <span className="hover:text-mainWhite">{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                <img src="/streamline_linkedin.svg" alt="linkedin" />
                <span className="hover:text-mainWhite">Navis Marine Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 items-center">
                <img src="/map-pin.svg" alt="map-pin" />
                <span className="hover:text-mainWhite">Lagos, Nigeria</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-paleWhite/30" />
      <p  className="mt-6 max-w-6xl mx-auto py-4 px-4 md:px-8 text-sm text-softWhite font-light">&copy; {new Date().getFullYear()} Navis Marine Services Ltd. All rights reserved.</p>
    </div>
  );
}
