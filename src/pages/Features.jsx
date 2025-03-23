
import React from 'react';
import { Check, ArrowUpRight, ChevronDown, ArrowUp } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Features = () => {
  // Integration cards data
  const integrations = [
    {
      name: 'Slack',
      category: 'Productivity',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://www.pngall.com/wp-content/uploads/13/Slack-Logo-PNG-Image.png'
    },
    {
      name: 'Zapier',
      category: 'Productivity',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://cdn.ucraft.com/fs/user_files/15696/media/images/fully-online.webp'
    },
    {
      name: 'HubSpot',
      category: 'CRM',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://logosear.ch/favicon.svg'
    },
    {
      name: 'PayPal',
      category: 'Payment',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-0.png'
    },
    {
      name: 'Stripe',
      category: 'Payment',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg'
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Notify your teammates of the latest activities with instant Slack messages.',
      logo: 'https://logodownload.org/wp-content/uploads/2020/04/salesforce-logo-0.png'
    }
  ];

  // Customer testimonials data
  const testimonials = [
    {
      quote: '"Zenix has exceeded our expectations in every way. From its seamless integration with our existing tools to its robust reporting capabilities, it has become an indispensable asset."',
      author: 'Maya',
      position: 'Designer',
      avatar: 'https://wallpapers.com/images/featured/avatar-png-39rb7p1vdr4fh6ed.png'
    },
    {
      quote: 'I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.',
      author: 'John Doe',
      position: 'Designer',
      avatar: 'https://www.pngarts.com/files/3/Avatar-Transparent-Image.png'
    },
    {
      quote: "\"I've tried several CRM platforms, but Zenix stands out for its user-friendly interface and comprehensive features. It has truly simplified our workflow productivity.\"",
      author: 'Max Doe',
      position: 'Designer',
      avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-HD-Image.png'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How can I contact the help desk?',
      answer: 'You can contact our help desk through multiple channels. The easiest way is by submitting a ticket through your Zenix dashboard. Alternatively, you can email us at support@zenix.com or call our dedicated support line at +1 (800) 123-4567 during business hours.'
    },
    {
      question: 'What types of issues can the help desk assist with?',
      answer: 'Our help desk can assist with a wide range of issues including account management, software functionality, integration problems, data migration, reporting issues, billing questions, and general troubleshooting. We are equipped to handle both technical and non-technical inquiries.'
    },
    {
      question: 'Can the help desk assist remotely?',
      answer: 'Yes, our help desk provides comprehensive remote assistance. Our support team can securely access your system (with your permission) to diagnose and resolve issues directly. We also offer screen sharing sessions for guided troubleshooting and training.'
    },
    {
      question: 'What are the help desk\'s hours of operation?',
      answer: 'Our help desk operates Monday through Friday from 8:00 AM to 8:00 PM Eastern Time. Weekend support is available for emergency issues. Enterprise customers have access to 24/7 support as part of their service package.'
    },
    {
      question: 'Is there a way to check the status of my support request?',
      answer: 'Yes, you can check the status of your support request at any time by logging into your Zenix account and visiting the "Support" section. There you\'ll find a list of all your tickets with their current status, assigned agent, and expected resolution time.'
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              What You Will Get?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Features & Services</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Discover how our tech solutions can transform your business. Explore our features and take your business to new heights.
            </p>
            
            <Breadcrumb className="justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-green-500">Features</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="inline-flex bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unveiling The Success Of Our Achievements</h2>
              <p className="text-gray-600 mb-8">
                We believe that numbers tell a powerful story. Our counters provide a snapshot of the significant achievements we've reached in our journey to revolutionize customer support.
              </p>
              <Button to="/contact" className="bg-green-500 hover:bg-green-600 text-white">
                Contact Us
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/1f71aa5e-0f38-41c4-8b5b-b1c6a687f572.png" 
                alt="Dashboard Screenshot" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 md:py-24 teal-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex bg-green-100/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Boost Your Efficiency With Integrations</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect every part of your business with integrations that will simplify your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-teal-dark p-6 rounded-lg hover:bg-opacity-80 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.category}</p>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src={integration.logo} alt={integration.name} className="h-8 w-8" />
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{integration.description}</p>
                <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="md:max-w-lg mb-8 md:mb-0">
              <div className="inline-flex bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Reviews
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600">
                Witness firsthand the user appreciation for our uncomplicated ticketing system in their daily activities.
              </p>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              View all reviews
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                </div>
                <p className="text-gray-700 mb-6 text-center">{testimonial.quote}</p>
                <div className="text-center">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-10">
            <span className="mx-2 text-gray-500">04</span>
            <div className="w-20 h-px bg-gray-300 mx-2"></div>
            <span className="mx-2 text-gray-500">04</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 teal-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex bg-green-100/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our help desk FAQs to learn how we efficiently address your technical issues, ensuring you receive the support needed to stay productive and focused.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="border-gray-700">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-0">
                  <AccordionTrigger className="py-6 text-white hover:text-green-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default Features;
