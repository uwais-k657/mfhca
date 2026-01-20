import { 
  Calculator, 
  FileCheck, 
  TrendingUp, 
  Building2, 
  Receipt, 
  Scale,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Auditing Services",
    description: "Independent external audits, internal audits, and compliance reviews to ensure your financial statements are accurate and reliable.",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive bookkeeping, financial statement preparation, and management accounts tailored to your business needs.",
  },
  {
    icon: Receipt,
    title: "Tax Services",
    description: "Tax planning, compliance, and advisory services including VAT, PAYE, income tax returns, and tax dispute resolution.",
  },
  {
    icon: Building2,
    title: "Company Secretarial",
    description: "Company registration, annual returns, CIPC compliance, and all statutory requirements for your business.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic financial planning, business valuations, cash flow management, and growth consulting services.",
  },
  {
    icon: Scale,
    title: "B-BBEE Verification",
    description: "B-BBEE scorecards, verification, and advisory services to help your business achieve and maintain compliance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-3 tracking-wide uppercase text-sm">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial solutions tailored to meet the unique needs of 
            businesses and individuals across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-secondary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;