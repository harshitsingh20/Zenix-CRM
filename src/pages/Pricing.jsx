import React, { useState } from 'react';
import { Check, X, ChevronDown, Minus, Slack, CreditCard, ChevronRight, ArrowUp } from 'lucide-react';
import Button from '../components/Button';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const brandLogos = [
    { name: 'Gourmet', color: 'white' },
    { name: 'Harvest', color: 'white' },
    { name: 'Lunaxy', color: 'white' },
    { name: 'Quantum', color: 'white' },
    { name: 'Runwaay', color: 'white' },
    { name: 'Urban', color: 'white' },
  ];
  
  const mainPlans = [
    {
      name: 'Premium',
      price: 199,
      description: 'Best for medium business owners, startups who needes landing page for their business.',
      buttonVariant: 'default'
    },
    {
      name: 'Enterprise',
      price: 399,
      description: 'Best for medium business owners, startups who needes landing page for their business.',
      buttonVariant: 'outline'
    }
  ];

  const includedFeatures = [
    '130+ Coded Blocks',
    'Best for Developers, Freelancers',
    'Made with TailwindCSS',
    'Premium Support',
    'Future Updates'
  ];
  
  const comparisonPlans = [
    { name: 'Personal', price: 156, priceUnit: 'Mo' },
    { name: 'Professional', price: 256, priceUnit: 'Mo' }
  ];
  
  const comparisonFeatures = [
    {
      name: 'Time Management Integration',
      description: 'Tackle the right tasks at the right time.',
      personal: true,
      professional: true
    },
    {
      name: 'Customizable Reporting Dashboard',
      description: 'Tackle the right tasks at the right time.',
      personal: true,
      professional: true
    },
    {
      name: 'Detailed Transaction Payloads',
      description: 'Tackle the right tasks at the right time.',
      personal: true,
      professional: true
    },
    {
      name: 'Basic Registration And Ticketing',
      description: 'Tackle the right tasks at the right time.',
      personal: true,
      professional: true
    },
    {
      name: 'Real-Time Notifications',
      description: 'Tackle the right tasks at the right time.',
      personal: true,
      professional: true
    },
    {
      name: 'Multilingual Support',
      description: 'Tackle the right tasks at the right time.',
      personal: false,
      professional: true
    },
  ];
  
  const faqs = [
    {
      question: 'How can I contact the help desk?',
      answer: 'You can contact our help desk by sending an email to support@zenix.com or by using the contact form on our website. Our team is available 24/7 to assist you.'
    },
    {
      question: 'What types of issues can the help desk assist with?',
      answer: 'Our help desk can assist with technical issues, account management, billing inquiries, feature requests, and general questions about our platform.'
    },
    {
      question: 'Can the help desk assist remotely?',
      answer: 'Yes, our help desk offers remote assistance through screen sharing and remote access tools when needed, with your permission.'
    },
    {
      question: 'What are the help desk\'s hours of operation?',
      answer: 'Our help desk operates 24 hours a day, 7 days a week, including holidays, to ensure you always have support when you need it.'
    },
    {
      question: 'Is there a way to check the status of my support request?',
      answer: 'Yes, you can check the status of your support request by logging into your account and visiting the support section, or by responding to the email thread created when you submitted your request.'
    }
  ];
  
  return (
    <div className="page-transition">
      <section className="section bg-background pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full mb-6">
              Pricing Plans
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Find The Right Package</h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget.
            </p>
            
            <div className="flex items-center text-sm">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-green-500">Pricing</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-background -mt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mainPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">{plan.name}</h3>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
                
                <p className="text-gray-600 mb-8">
                  {plan.description}
                </p>
                
                <Button 
                  className="w-full mb-8" 
                  variant={plan.buttonVariant === 'default' ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-medium mb-2">What's included:</h4>
                  {includedFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
      
      <section className="section bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-8 border-b">
              <h3 className="text-2xl font-semibold mb-3">Compare Plans</h3>
              <p className="text-gray-600">Transparent pricing for every stage.</p>
            </div>
            
            <div className="grid grid-cols-3">
              <div className="col-span-1 border-r">
                <div className="h-24 flex items-end px-6 pb-6"></div>
                
                {comparisonFeatures.map((feature, index) => (
                  <div key={index} className="border-t p-6">
                    <h4 className="font-medium mb-1">{feature.name}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {comparisonPlans.map((plan, planIndex) => (
                <div key={planIndex} className={`col-span-1 ${planIndex === 0 ? 'border-r' : ''}`}>
                  <div className="h-24 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                    <div className="text-xl font-bold">${plan.price}/{plan.priceUnit}</div>
                  </div>
                  
                  {comparisonFeatures.map((feature, featureIndex) => {
                    const isIncluded = planIndex === 0 ? feature.personal : feature.professional;
                    return (
                      <div key={featureIndex} className="border-t p-6 flex justify-center">
                        {isIncluded ? (
                          <Check className="h-6 w-6 text-green-500" />
                        ) : (
                          <Minus className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
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
                  <h3 className="text-xl font-semibold">PayPal</h3>
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
                  <CreditCard className="h-8 w-8 text-[#635BFF]" />
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
      
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm mb-4">
                FAQs
              </div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our help desk FAQs to learn how we efficiently address your
                technical issues, ensuring you receive the support needed to stay
                productive and focused.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="text-left py-5 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-3 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <section className="section teal-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              {/* <Button className="bg-green-500 hover:bg-green-400 mb-6">Get Started</Button> */}
              <h2 className="text-4xl font-bold text-white mb-6">Ready To Boost Your Business?</h2>
              <p className="text-white/80 mb-8">
                Boost sales and stay ahead of the competition with our innovative solutions. Be one of the first to benefit!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" className="bg-green-500 hover:bg-green-400">Contact Us</Button>
                <Button to="/pricing" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Business dashboard" 
                className="max-w-full  bg-green-400/10"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Back to top button */}
      <a href="#top" className="back-to-top">
        <ArrowUp className="h-5 w-5" />
      </a>
    {/* </div> */}
    </div>
    
  );
};

export default Pricing;
