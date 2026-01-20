import { ArrowRight, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold mb-4 tracking-wide uppercase text-sm">
            Professional Auditing & Accounting Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for
            <span className="text-secondary block mt-2">Financial Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            MFH Chartered Accountants Inc. provides comprehensive accounting, auditing, and tax services 
            to businesses across South Africa. Trusted by clients since our establishment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent transition-colors text-lg"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <Shield className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">Certified CPAs</p>
                <p className="text-sm text-primary-foreground/70">SAICA Registered</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <Award className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">4.3★ Rating</p>
                <p className="text-sm text-primary-foreground/70">11 Reviews</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <Users className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">South Africa</p>
                <p className="text-sm text-primary-foreground/70">Nationwide Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;