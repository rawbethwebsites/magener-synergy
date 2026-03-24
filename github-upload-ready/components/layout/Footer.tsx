'use client';
import Link from 'next/link';
import { Instagram, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
             <Link href="/" className="flex flex-col gap-4">
               <img src="/MAGENER.png" alt="Magener Synergy Logo" className="h-16 w-auto object-contain self-start" />
             </Link>
             <p className="text-brand-silver text-sm leading-relaxed max-w-xs">
               Crafting extraordinary global experiences through premium travel and education consulting.
             </p>
             <div className="flex gap-4 text-brand-silver">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Instagram className="w-4 h-4" /></a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Linkedin className="w-4 h-4" /></a>
               <Link href="/contact" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Phone className="w-4 h-4" /></Link>
             </div>
          </div>
          
          <div>
            <h4 className="text-brand-white text-sm tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4 text-brand-silver text-sm">
              <li><Link href="/services/tour-packages" className="hover:text-brand-gold transition-colors">Tour Packages</Link></li>
              <li><Link href="/services/visa-assistance" className="hover:text-brand-gold transition-colors">Visa Assistance</Link></li>
              <li><Link href="/services/study-abroad" className="hover:text-brand-gold transition-colors">Study Abroad</Link></li>
              <li><Link href="/services/corporate-travel" className="hover:text-brand-gold transition-colors">Corporate Travel</Link></li>
              <li><Link href="/services/hotel-flight-bookings" className="hover:text-brand-gold transition-colors">Hotel & Flight Bookings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white text-sm tracking-widest uppercase mb-6">Destinations</h4>
            <ul className="space-y-4 text-brand-silver text-sm">
              <li><Link href="/destinations/london" className="hover:text-brand-gold transition-colors">United Kingdom</Link></li>
              <li><Link href="/destinations/toronto" className="hover:text-brand-gold transition-colors">Canada</Link></li>
              <li><Link href="/destinations/kuala-lumpur" className="hover:text-brand-gold transition-colors">Malaysia</Link></li>
              <li><Link href="/destinations/dubai" className="hover:text-brand-gold transition-colors">United Arab Emirates</Link></li>
              <li><Link href="/destinations/paris" className="hover:text-brand-gold transition-colors">Europe</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-white text-sm tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-brand-silver text-sm">
              <li>Plot 242 Mohammadu Buhari Way,<br/>Central Business District,<br/>Abuja, Nigeria</li>
              <li><a href="tel:+2348100000000" className="hover:text-brand-gold transition-colors">+234 81 000 0000</a></li>
              <li><a href="mailto:info@magenersynergy.org" className="hover:text-brand-gold transition-colors">info@magenersynergy.org</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-silver">
          <p>&copy; {new Date().getFullYear()} Magener Synergy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
