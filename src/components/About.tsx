import { CheckCircle, Target, Eye } from "lucide-react";

const highlights = [
  "SAICA Registered Chartered Accountants",
  "Comprehensive Financial Solutions",
  "Personalized Client Service",
  "Trusted by Businesses Across South Africa",
  "Competitive & Transparent Pricing",
  "Dedicated Professional Team",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-secondary font-semibold mb-3 tracking-wide uppercase text-sm">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Partner in Financial Success
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              MFH Chartered Accountants Inc. is a professional accounting firm based in 
              Centurion, Gauteng. We provide a wide range of auditing, accounting, and 
              advisory services to businesses of all sizes across South Africa.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of experienced professionals is committed to delivering exceptional 
              service, ensuring compliance, and helping our clients achieve their financial goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide professional, reliable, and comprehensive financial services 
                    that empower our clients to make informed business decisions and achieve 
                    sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the preferred accounting and advisory partner for businesses 
                    in South Africa, recognized for our integrity, expertise, and commitment 
                    to client success.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-3xl font-bold text-secondary">4.3★</p>
                  <p className="text-sm text-primary-foreground/80">Google Rating</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-secondary">11+</p>
                  <p className="text-sm text-primary-foreground/80">Client Reviews</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-secondary">SA</p>
                  <p className="text-sm text-primary-foreground/80">Wide Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;