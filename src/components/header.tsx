"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#0070f3]">VoterData Insights</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-[#0070f3] transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-[#0070f3] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0070f3] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-[#0070f3] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Contact Sales Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden md:block"
          >
            <Link href="/contact-sales" className="group">
              <Button className="bg-[#0070f3] text-white hover:bg-[#0056d1] group">
                <Calendar className="mr-2 h-4 w-4" />
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 space-y-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-[#0070f3] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-[#0070f3] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[#0070f3] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact-sales"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-[#0070f3] text-white hover:bg-[#0056d1] group">
                  <Calendar className="mr-2 h-4 w-4" />
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 