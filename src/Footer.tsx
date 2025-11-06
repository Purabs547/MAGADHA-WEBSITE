import React from "react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-8 font-helvetica">
      <div className="max-w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Logo */}
          <div className="flex flex-col items-start">
            <img
              src="/magadha-logo.png"
              alt="Magadha Studios Logo"
              className="w-32 mb-3"
            />
            <div className="flex flex-col gap-1 text-sm text-gray-400">
            <p>© Magadha Studios. All rights reserved.</p>
            <p>
              Designed with passion by{" "}
             <a href="https://designdharma.in/"  target="_blank"> <span className="text-white font-medium hover:font-bold hover:text-blue-500">DesignDharma.</span> </a>
            </p>
          </div>
          </div>

          {/* Center: Text */}
          

          {/* Right: Social Icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <a href="https://www.instagram.com/magadhastudios?igsh=MTBxaXh6NGFuM2Y5MQ==" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/magadha-studios/" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@magadha.studios?si=1znvR3_Gpx9mTT-y" className="hover:text-white transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500">
          <p className="max-w-3xl leading-relaxed">
            MAGADHA STUDIOS, the Magadha Studios logo, and ANTARYA are trademarks or
            registered trademarks of Magadha Studios. All other trademarks are the
            property of their respective owners.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
