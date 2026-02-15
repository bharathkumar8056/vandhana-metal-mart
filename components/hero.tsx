'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                Premium Quality Vessels
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance leading-tight">
                Excellence in Metal{' '}
                <span className="text-primary">Craftsmanship</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl leading-relaxed">
                Vandhanaa Metal Mart is a leading wholesale supplier of premium metal vessels,
                serving international markets across Sri Lanka, Malaysia, Singapore and Dubai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Explore Products <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground mt-1">Export Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground mt-1">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <Image
                src="/assets/vessel-16.jpg"
                alt="Premium Metal Vessels - Vandhanaa Metal Mart"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
