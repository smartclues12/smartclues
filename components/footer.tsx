import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Rocket,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 flex items-center justify-center text-white font-bold shadow-lg">
                <img src="logo.png" alt="" />
              </div>
              <span className="text-white text-xl font-semibold">
                Smartclues<span className="text-purple-500">Tech</span>
              </span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Innovative IT services and Revenue Cycle Management solutions
              powered by AI and automation, enhancing business efficiency and
              security since 2019.
            </p>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://in.linkedin.com/company/smartclues-technologies-llp"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-purple-900/30 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/smartclues_tech/?hl=en"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-purple-900/30 text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Smartcluestech/"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-purple-900/30 text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center">
               Revenue Cycle Management ( Health care ) 
              </li>
              <li className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center">
                Digital Forensic Services 
              </li>
              <li className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center">
                VAPT & WAPT
              </li>
              <li className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center">
                IT Development
              </li>
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-purple-500 mr-3 h-5 w-5 mt-0.5" />
                <span className="text-zinc-400">
                  Smartclues Technologies LLP, Hyderabad, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-purple-500 mr-3 h-5 w-5" />
                <span className="text-zinc-400">+91 8977752573</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-purple-500 mr-3 h-5 w-5" />
                <span className="text-zinc-400">info@smartcluestech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0 flex items-center justify-center gap-1">
            Developed By Krishna <Rocket aria-label="rocket icon" />
          </p>
        </div>

        {/* Bottom section */}
        <div className=" pt-8 text-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Smartclues Technologies LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
