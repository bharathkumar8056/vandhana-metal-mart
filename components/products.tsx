'use client';

import Image from 'next/image';

export function Products() {
  // Generate array of 48 products
  const vessels = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    image: `/assets/vessel-${i + 1}.jpg`,
    name: `Premium Metal Vessel ${i + 1}`,
    alt: `Premium Stainless Steel Vessel ${i + 1} - Wholesale Metal Vessels Chennai - Vandhanaa Metal Mart`,
  }));

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
            Wholesale Metal Vessels Collection
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Premium Stainless Steel Vessels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of high-quality metal vessels - Perfect for bulk orders, wholesale buyers, and international export to Sri Lanka, Malaysia, Singapore, and Dubai
          </p>
        </div>

        {/* Products Grid - 6 columns on desktop, responsive on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {vessels.map((vessel) => (
            <div
              key={vessel.id}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="aspect-square relative overflow-hidden bg-background">
                <Image
                  src={vessel.image}
                  alt={vessel.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  unoptimized
                  loading={vessel.id <= 12 ? 'eager' : 'lazy'}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-semibold text-sm">{vessel.name}</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Premium
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-foreground mb-6 text-lg">
            Interested in bulk orders? Contact us for wholesale pricing and customization options.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}
