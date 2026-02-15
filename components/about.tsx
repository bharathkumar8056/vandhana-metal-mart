import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Vandhanaa Metal Mart
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium Metal Vessels Wholesale & Export
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Leading Metal Vessel Exporters in Chennai</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Vandhanaa Metal Mart is Chennai's premier wholesale supplier and exporter of premium metal vessels,
                catering to both domestic and international markets. Located at Mint Street, Park Town, Chennai (near MGR Central Railway Station),
                we have been serving our clients with unwavering commitment to quality and excellence for over 25 years.
              </p>
              <p className="text-foreground leading-relaxed">
                Our stainless steel vessels are manufactured using high-grade materials and premium metals,
                ensuring durability, reliability, and exceptional value for wholesale buyers, exporters, and commercial customers across India and internationally.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Premium Quality</h4>
                  <p className="text-muted-foreground">High-grade stainless steel and certified materials</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">International Export</h4>
                  <p className="text-muted-foreground">Shipping to Sri Lanka, Malaysia, Dubai and beyond</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Competitive Pricing</h4>
                  <p className="text-muted-foreground">Best wholesale rates without compromising quality</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Reliable Delivery</h4>
                  <p className="text-muted-foreground">Timely and secure shipment to your location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Business Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                  <p className="text-lg font-semibold text-foreground">Vandhanaa Metal Mart</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="text-lg font-semibold text-foreground">
                    No 257, Mint Street<br />Park Town, Chennai 600003.<br />
                    (Near MGR Central Railway station)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Primary Product</p>
                  <p className="text-lg font-semibold text-foreground">Premium Metal Vessels</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Export Markets</p>
                  <p className="text-lg font-semibold text-foreground">
                    Sri Lanka, Malaysia, Dubai, Singapore
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Industry-leading quality standards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Competitive wholesale pricing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reliable and prompt delivery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Excellent customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
