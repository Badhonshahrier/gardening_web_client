import React from "react";
import { Mail, Facebook, Instagram, Twitter, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-100 via-green-100 to-green-200 p-8 mt-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-green-900">
    
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Leaf className="text-green-600" /> Get in Touch
          </h2>
          <p className="mt-2 text-green-800">Email us at:</p>
          <a
            href="mailto:hello@gardeninghub.com"
            className="flex items-center gap-2 mt-1 text-green-700 hover:underline"
          >
            <Mail className="w-5 h-5" /> hello@gardeninghub.com
          </a>
        </div>

 
        <div>
          <h2 className="text-xl font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/terms" className="text-green-700 hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-green-700 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/community-guidelines"
                className="text-green-700 hover:underline"
              >
                Community Guidelines
              </a>
            </li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="" className="text-green-700 hover:text-green-900">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="" className="text-green-700 hover:text-green-900">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="" className="text-green-700 hover:text-green-900">
              <Twitter className="w-6 h-6" />
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
