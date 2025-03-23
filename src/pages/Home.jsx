import React from 'react';
import { ArrowRight, ArrowUp, Check, ChevronRight, Phone, Mail, Users, Check as CheckIcon, Slack, CreditCard, CreditCard as Stripe, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const brandLogos = [
    { name: 'Gourmet', color: 'white' },
    { name: 'Harvest', color: 'white' },
    { name: 'Lunaxy', color: 'white' },
    { name: 'Quantum', color: 'white' },
    { name: 'Runwaay', color: 'white' },
    { name: 'Urban', color: 'white' },
  ];
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative teal-bg text-white">
        <div className="page-container flex flex-col md:flex-row pt-8 pb-12 md:pt-12 md:pb-16 items-center">
          <div className="flex-1 md:pr-12">
            {/* <Button to="/signup" variant="glass" className="glass-morphism hover:bg-green-500 hover:text-white mb-6 text-white bg-transparent">
              Get Started
            </Button> */}
            
            <h1 className="heading-xl mb-6 text-white">
              Ready To Boost Your Business?
            </h1>
            
            <p className="text-lg mb-8 text-gray-200 max-w-xl">
              Boost sales and stay ahead of the competition with our innovative solutions. Be one of the first to benefit!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-medium">
                Contact Us
              </Button>
              <Button to="/pricing" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </div>
          
          <div className="flex-1 mt-12 md:mt-0">
            <div className="relative">
            <div className="w-full h-full rounded-full bg-zenix-green absolute top-0 right-0 "></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Business dashboard" 
              className="relative z-10 mx-auto rounded-lg shadow-xl"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img 
                src="/cdac39ff-c7e6-4f20-a12c-8b1b9259dd12.png" 
                alt="Zenix Logo" 
                className="h-10 mr-2"
              />
              <h2 className="text-2xl font-bold">Zenix</h2>
              <span className="mx-3 text-gray-400">CRM Platform Built For</span>
              <span className="text-green-500 font-semibold">Success</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="flex items-center text-gray-500">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <span className="block text-sm text-gray-400">Phone</span>
                  <span>+91 3497 - 347</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <span>mail@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
      
      {/* CRM Platform Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block feature-tag mb-6">
            <span>CRM Platform</span>
          </div>
          
          <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
            Leading CRM Platform That Will Empowers Your Businesses
          </h2>
          
          <p className=" max-w-2xl mx-auto mb-12">
            Eliminate repetitive customer service tasks with easy-to-configure automation, boosting efficiency.
          </p>
          
          {/* <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              <img 
                src="1f71aa5e-0f38-41c4-8b5b-b1c6a687f572.png" 
                alt="Zenix Dashboard" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div> */}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-0 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-3 bg-green-100 rounded-full inline-block mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Share Tools Quickly And Confidently In Minutes</h2>
              
              <p className=" mb-8">
                This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.
              </p>
              
              <Button to="/pricing" className="bg-green-500 hover:bg-green-600 text-white">
                View Pricing
              </Button>
            </div>
            
            <div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-gray-400 w-20">Daily Traffic</div>
                  <div className="text-green-500 ml-2">+2.45%</div>
                </div>
                
                <div className="text-4xl font-bold ">2.579</div>
                <div className=" text-sm mb-6">Visitors</div>
                
                <div className="flex h-36 items-end space-x-2">
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-24 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-16 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-32 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-20 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-28 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-36 rounded-t-md"></div>
                  <div className="w-8 bg-gradient-to-t from-green-50 to-green-800 h-12 rounded-t-md"></div>
                </div>
                
                <div className="flex justify-between text-xs  mt-2">
                  <span>00</span>
                  <span>04</span>
                  <span>08</span>
                  <span>12</span>
                  <span>14</span>
                  <span>16</span>
                  <span>18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integrations Section */}
      <section className="py-20 teal-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-6">
              Integrations
            </div>
            
            <h2 className="heading-lg mb-6">
              Boost Your Efficiency With Integrations
            </h2>
            
            <p className="max-w-2xl mx-auto text-gray-300">
              Connect every part of your business with integrations that will simplify your workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Slack</h3>
                  <p className="text-gray-400 text-sm">Productivity</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <Slack className="h-8 w-8 text-[#4A154B]" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Zapier</h3>
                  <p className="text-gray-400 text-sm">Productivity</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src="https://cdn.ucraft.com/fs/user_files/15696/media/images/fully-online.webp" 
                    alt="Zapier logo"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">HubSpot</h3>
                  <p className="text-gray-400 text-sm">CRM</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="#FF7A59" d="M93.667 152.377h63.03v207.246h-63.03V152.377zm31.516-86h.13c22.165 0 40.15 17.985 40.15 40.15 0 22.166-17.985 40.138-40.15 40.138-.044 0-.087-.012-.131-.012-22.143-.03-40.107-17.998-40.107-40.142 0-22.147 17.986-40.132 40.108-40.133zm275.982 135.427c-7.617-16.853-22.881-36.173-56.96-36.173-35.05 0-63.242 26.977-63.242 68.698 0 38.963 24.755 68.809 63.242 68.809 32.88 0 49.299-20.253 56.96-36.472v33.727h63.073V152.377h-63.073v49.427zm-38.158 64.198c-18.368 0-33.163-14.778-33.163-33.15 0-18.37 14.795-33.15 33.163-33.15s33.163 14.78 33.163 33.15c0 18.372-14.795 33.15-33.163 33.15zm-102.188-64.198c-7.617-16.853-22.881-36.173-56.96-36.173-35.05 0-63.242 26.977-63.242 68.698 0 38.963 24.755 68.809 63.242 68.809 32.88 0 49.299-20.253 56.96-36.472v33.727h63.073V152.377h-63.073v49.427zm-38.158 64.198c-18.368 0-33.163-14.778-33.163-33.15 0-18.37 14.795-33.15 33.163-33.15s33.163 14.78 33.163 33.15c0 18.372-14.795 33.15-33.163 33.15z"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Credit Card</h3>
                  <p className="text-gray-400 text-sm">Payment</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-[#00457C]" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Stripe</h3>
                  <p className="text-gray-400 text-sm">Payment</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <Stripe className="h-8 w-8 text-[#635BFF]" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-[#00343d] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Salesforce</h3>
                  <p className="text-gray-400 text-sm">CRM</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#00A1E0" d="M8.385 7.203c.705-1.035 1.884-1.688 3.213-1.688 1.329 0 2.508.653 3.213 1.688.584.86.927 1.913.927 3.06 0 2.993-2.435 5.428-5.428 5.428-2.993 0-5.428-2.435-5.428-5.428 0-1.147.343-2.2.927-3.058.602-.232 1.254-.358 1.933-.358 2.89 0 5.22 2.33 5.22 5.22 0 2.89-2.33 5.22-5.22 5.22-.292 0-.578-.024-.857-.07-.74 1.397-2.195 2.353-3.875 2.353-.766 0-1.486-.2-2.115-.548-.682 1.38-2.11 2.327-3.768 2.327-2.331 0-4.227-1.899-4.227-4.233 0-.562.11-1.097.31-1.587-1.081-.762-1.795-2.011-1.795-3.45 0-2.33 1.9-4.232 4.232-4.232.559.007 1.091.12 1.577.326z"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Notify your teammates of the latest activities with instant Slack messages.
              </p>
              
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block feature-tag mb-6">
              <span>Reviews</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              What Our Customers Say
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Witness firsthand the user appreciation for our uncomplicated ticketing system in their daily activities.
            </p>
            
            <Link to="/testimonials" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
              View all reviews
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Khyati H.",
                role: "Designer",
                quote: "Zenix has been instrumental in helping us close deals faster. Its automation features have allowed us to focus on building relationships with our clients.",
                avatar: "https://wallpapers.com/images/featured/avatar-png-39rb7p1vdr4fh6ed.png"
              },
              {
                name: "Maya",
                role: "Designer",
                quote: "Zenix has exceeded our expectations in every way. From its seamless integration with our existing tools to its robust reporting capabilities, it has become an indispensable asset.",
                avatar: "https://wallpapers.com/images/featured/avatar-png-39rb7p1vdr4fh6ed.png"
              },
              {
                name: "John Doe",
                role: "Designer",
                quote: "I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.",
                avatar: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company History Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm mb-6">
                Company History
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Our Journey From Inception To Present Day
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      We are committed to continuously innovating in the development of CRM solutions that deliver added value to businesses worldwide.
                    </p>
                    
                    <div className="mt-6 flex space-x-4">
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Contact Us
                      </Button>
                      <Button variant="outline" className="border-gray-300 hover:border-gray-400">
                        View Pricing
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-8">
                    Founded in 2010, began as a small startup with a big vision to revolutionize customer relationship management
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  
                  <ul className="space-y-3">
                    {[
                      "Enhance Relationships",
                      "Drive Business Success",
                      "Innovate Continuously",
                      "Ensure Reliability",
                      "Focus on Integrity",
                      "Deliver Excellent Service",
                      "Inspire Positive Change",
                      "Create Meaningful Relationships"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                          <CheckIcon className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* <img 
              src="a1d3418b-bf94-44c5-9997-3705028bff76.png" 
              alt="Company office" 
              className="w-full h-72 object-cover"
            /> */}
            <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              <img 
                src="/lovable-uploads/1f71aa5e-0f38-41c4-8b5b-b1c6a687f572.png" 
                alt="Zenix Dashboard" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-12 teal-bg">
        <div className="container mx-auto px-4">
          <h3 className="text-white text-center text-lg font-medium mb-10">
            Trusted By 100,000+ Teams Globally At Innovative Companies
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brandLogos.map((brand, index) => (
              <div key={index} className="text-white font-bold text-xl">
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="page-container">
          <div className="text-center mb-12">
            <div className="inline-block feature-tag mb-4">
              <span>FAQs</span>
            </div>
            <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Discover our help desk FAQs to learn how we efficiently address your technical issues, ensuring you receive the support needed to stay productive and focused.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: 'How can I contact the help desk?',
                a: 'You can contact our help desk via email at support@zenix.com, through the in-app chat feature, or by calling our support line at +1-800-ZENIX-HELP during business hours.'
              },
              {
                q: 'What types of issues can the help desk assist with?',
                a: 'Our help desk can assist with account access, software functionality, integration issues, data migration, customization requests, and general usage questions about the Zenix platform.'
              },
              {
                q: 'Can the help desk assist remotely?',
                a: 'Yes, our help desk can provide remote assistance through screen sharing and remote access tools to diagnose and resolve complex issues more efficiently.'
              },
              {
                q: "What are the help desk's hours of operation?",
                a: 'Our help desk operates Monday through Friday from 8am to 8pm Eastern Time. Limited weekend support is available for critical issues.'
              },
              {
                q: 'Is there a way to check the status of my support request?',
                a: 'Yes, you can check the status of your support request by logging into your account and visiting the "Support Tickets" section in your dashboard.'
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <h4 className="text-lg font-medium">{faq.q}</h4>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Back to top button */}
      <a href="#top" className="back-to-top">
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Home;
