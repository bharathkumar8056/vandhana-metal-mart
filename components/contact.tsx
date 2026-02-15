'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  const whatsappNumber = '918838169177';
  const whatsappMessage = 'Hi! I am interested in your metal vessels. Can you provide more information?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact Vandhanaa Metal Mart 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us for wholesale inquiries, bulk orders, export queries, or visit our shop at Mint Street, Park Town, Chennai
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Address</h4>
                <p className="text-muted-foreground">
                  No 257, Mint Street,<br />
                  Park Town, Chennai - 600003.<br />
                  (Near MGR Central Railway station)<br />
                  India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <a
                  href="tel:+918838169177"
                  className="text-primary hover:underline phone-number"
                >
                  +91 8838 169 177
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a
                  href="mailto:Vanthanaametalmart@gmail.com"
                  className="text-primary hover:underline font-semibold break-all"
                >
                  Vanthanaametalmart@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline phone-number"
                >
                  +91 8838 169 177
                </a>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-8 border-t border-border space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:Vanthanaametalmart@gmail.com"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="tel:+918838169177"
                className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Inquiry about vessels"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
