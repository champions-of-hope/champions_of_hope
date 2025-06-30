import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaAmazon } from "react-icons/fa";

const ContactAndFooter = () => {
  // Contact data
  const contactInfo = [
    {
      title: "Booking",
      name: "Benaissa Ghrib",
      phone: "T+(513)352-3209",
      email: "booking@mousiqua.net",
    },
    {
      title: "Press",
      name: "Zakaria Kalal",
      phone: "T+(513)352-3209",
      email: "press@mousiqua.net",
    },
    {
      title: "Info",
      name: "Youssef Ait",
      phone: "T+(513)352-3209",
      email: "info@mousiqua.net",
    },
  ];

  // Social media links
  const socialLinks = [
    { href: "#", icon: <FaFacebook size={24} /> },
    { href: "#", icon: <FaInstagram size={24} /> },
    { href: "#", icon: <FaTwitter size={24} /> },
    { href: "#", icon: <FaYoutube size={24} /> },
    { href: "#", icon: <FaAmazon size={24} /> },
  ];

  // Footer links
  const footerLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Use" },
    { href: "#", text: "AdChoices" },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-12">
        {/* Title Section */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12 lg:w-9/12 text-center mb-12">
              <div className="block-title">
                <div className="block-bars mb-4">
                  <Image
                    src="/img/sound-bars.png"
                    alt="Sound Bars"
                    width={80}
                    height={40}
                    layout="responsive"
                    className="mx-auto"
                  />
                </div>
                <h6 className="text-sm uppercase mb-1">Contact with us</h6>
                <h1 className="text-4xl md:text-5xl font-bold uppercase mb-0">
                  Stay in touch
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              {/* Contact Cards */}
              <ul className="flex flex-wrap justify-center gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <li key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <h2 className="text-2xl uppercase mb-4">{info.title}</h2>
                      <p className="mb-0">
                        <em className="text-lg uppercase text-blue-400">
                          {info.name}
                        </em>
                        <br />
                        {info.phone}
                        <br />
                        {info.email}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mb-12">
            <ul className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-blue-400 transition"
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-5 text-center border-t border-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <p className="mb-0">
                Oumaila Musician Bootstrap Template -{" "}
                {footerLinks.map((link, index) => (
                  <span key={index}>
                    <Link
                      href={link.href}
                      className="text-blue-400 underline hover:text-blue-300 mx-2"
                    >
                      {link.text}
                    </Link>
                  </span>
                ))}
                <br />
                © 2018 all rights reserved - a product of{" "}
                <em>mutationthemes</em>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;