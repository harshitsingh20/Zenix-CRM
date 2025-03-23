import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '#' },
        { name: 'Our Team', path: '#' },
        { name: 'Our Program', path: '#' },
        { name: 'Work With Us', path: '#' },
      ],
    },
    {
      title: 'Help & Support',
      links: [
        { name: 'Help Center', path: '#' },
        { name: 'Expert Team', path: '#' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Report Abuse', path: '#' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Testimonials', path: '#' },
        { name: 'Pricing Plans', path: '/pricing' },
        { name: 'Referral Program', path: '#' },
        { name: 'Payment Gateway', path: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Support', path: '#' },
        { name: 'Technology', path: '#' },
        { name: 'Newsroom', path: '#' },
        { name: 'Data Centers', path: '#' },
      ],
    },
    {
      title: 'Useful Links',
      links: [
        { name: 'Blog & News', path: '#' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Our Features', path: '/features' },
        { name: 'Compare Other', path: '#' },
      ],
    }
  ];
  
  return (
    <footer className="teal-bg text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <img 
                src="https://cdn.ucraft.com/fs/user_files/15696/media/images/fully-online.webp" 
                alt="Zenix Logo"
                className="h-8 mr-2"
              />
              <span className="text-xl font-bold tracking-tight text-white">Zenix</span>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs mb-6">
              CRM Platform Built For Success
            </p>
            
            <div className="flex space-x-6 mb-8">
              <div>
                <span className="block text-sm text-gray-400">Phone</span>
                <span className="text-white">+91 3497 - 347</span>
              </div>
              
              <div>
                <span className="block text-sm text-gray-400">Email</span>
                <span className="text-white">mail@example.com</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col space-y-3">
              <h5 className="font-medium text-sm text-gray-300">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} - WP Theme By <a href="#" className="text-green-400">Keystone Themes</a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Legal
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* <a href="#top" className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full absolute right-8 -translate-y-1/2">
        <ArrowUp className="h-5 w-5" />
      </a> */}
    </footer>
  );
};

export default Footer;
