import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => (
  <footer className="bg-white text-gray-800 pb-40 mt-40">
    <Separator className="my-8 bg-gray-200 mb-40" />
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Nepal Business Hub" className="h-10" />
          </Link>
          <p className="text-gray-600 text-sm leading-7">
            Connecting businesses, fostering growth, and promoting innovation
            across Nepal.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-blue-900">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-blue-900 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="leading-7">
          <h4 className="text-lg font-medium mb-4 text-blue-900">Contact Us</h4>
          <address className="text-gray-600 text-sm not-italic">
            123 Business Street
            <br />
            <br />
            Kathmandu, Nepal
            <br />
            <br />
            Phone: +977 1 234 5678
            <br />
            <br />
            Email:{" "}
            <a
              href="mailto:info@nepalbusinesshub.com"
              className="text-blue-900 hover:underline"
            >
              info@nepalbusinesshub.com
            </a>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-blue-900">Newsletter</h4>
          <p className="text-gray-600 text-sm mb-2">
            Stay updated with our latest news and events.
          </p>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white border-gray-300 text-gray-800 placeholder-gray-400"
            />
            <Button className="bg-blue-900 hover:bg-blue-900 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-600 text-sm mb-5">
          &copy; 2024 Nepal Business Hub. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-900 hover:bg-blue-100"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-900 hover:bg-blue-100"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-900 hover:bg-blue-100"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-900 hover:bg-blue-100"
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
