import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 animate-fade-in-up max-w-2xl">
        <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
          <MapPin className="w-12 h-12 text-primary animate-glow" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold glow-text">
          ErthaLoka
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground">
          A CoExIStic Ecoverse
        </p>
        
        <p className="text-lg text-foreground/80 max-w-xl mx-auto">
          Explore our live ecological restoration projects across India. 
          Real projects, measurable impact, visible change.
        </p>
        
        <Link to="/land-explorer">
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold text-lg px-8 py-6"
          >
            Explore Land Parcels
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        
        <div className="pt-8 space-y-2 text-sm text-muted-foreground">
          <p>Where People, Planet & Purpose Thrive Together</p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href="mailto:connect@erthaloka.com" className="hover:text-primary transition-colors">
              connect@erthaloka.com
            </a>
            <span>•</span>
            <a href="tel:+917829778299" className="hover:text-primary transition-colors">
              +91 78297 78299
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
