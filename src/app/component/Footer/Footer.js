// components/Footer.tsx
import {
  FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter,
  FaInstagram, FaSpotify, FaGithub, FaDiscord
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h4 className="font-semibold mb-4 text-lg">Product</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>What’s new</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Compare Kontent.ai</li>
            <li>Pricing</li>
            <li>Security</li>
            <li>Explore the Kontent.ai Trust Center</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Resources & Help</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>Learn Kontent.ai</li>
            <li>Headless CMS guide</li>
            <li>Resource library</li>
            <li>Newsletter</li>
            <li>Glossary</li>
            <li>Services</li>
            <li>System status</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>About us</li>
            <li>Contact</li>
            <li>Brand book</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Code of Business Ethics</li>
            <li>Press</li>
            <li>Refer & Earn</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Partners</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>Find a partner</li>
            <li>Become a partner</li>
            <li>Partner login</li>
            <li>Partner lead registration form</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6 text-2xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaXTwitter />
            <FaInstagram />
            <FaSpotify />
            <FaGithub />
            <FaDiscord />
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <span
          className="bg-clip-text text-[12rem] font-bold text-transparent 
                     bg-[url('/Footer/Logo.webp')] bg-cover bg-center"
        >
          KONTENT.AI
        </span>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-base flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        <span className="text-center md:text-left">Copyright © 2025 Kontent.ai</span>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="#">Privacy policy</a>
          <a href="#">Cookies policy</a>
          <a href="#">Consent settings</a>
          <a href="#">Security</a>
          <a href="#">Digital services act</a>
          <a href="#">GDPR</a>
          <a href="#">APP</a>
        </div>
      </div>
    </footer>
  );
}
