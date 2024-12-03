import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-white text-2xl font-bold">TheChAgency</h2>
          <p className="mt-4 text-sm">
            Crafting cutting-edge solutions for digital success. We turn ideas
            into reality with creativity and precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services">
                <p className="hover:text-white">Services</p>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <p className="hover:text-white">Portfolio</p>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <p className="hover:text-white">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <p className="hover:text-white">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@thechagency.com" className="hover:text-white">
              info@thechagency.com
            </a>
          </p>
          <p className="text-sm mt-2">Phone: +123-456-7890</p>
          <p className="text-sm mt-2">
            Address: 123 Creative Street, Tech City
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">&copy; 2024 TheChAgency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
