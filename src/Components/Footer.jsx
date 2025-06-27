import React from "react";
import { Mail, Facebook, Instagram, Twitter, Linkedin, Leaf } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-100 via-green-100 to-green-200 p-8 mt-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-green-900">

        {/* Logo & Contact */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-green-800 text-2xl font-bold">
            <Leaf className="text-green-600 w-7 h-7" />
            GardeningHub
          </Link>
          <p className="mt-4 text-green-800">Email us at:</p>
          <a
            href="mailto:hello@gardeninghub.com"
            className="flex items-center gap-2 mt-1 text-green-700 hover:underline"
          >
            <Mail className="w-5 h-5" /> hello@gardeninghub.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/" className="text-green-700 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-green-700 hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-green-700 hover:underline">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-green-700 hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-green-200 pt-6 text-center text-sm text-green-600">
        © 2025 Gardening Community & Resource Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
