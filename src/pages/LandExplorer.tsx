import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, TrendingUp, Globe } from 'lucide-react';
import { MapSection } from '@/components/MapSection';
import { ProjectCard, ProjectData } from '@/components/ProjectCard';
import { ImpactCounter } from '@/components/ImpactCounter';
import { Button } from '@/components/ui/button';
import vetiverBefore from '@/assets/vetiver-before.jpg';
import vetiverAfter from '@/assets/vetiver-after.jpg';
import regenerativeBefore from '@/assets/regenerative-before.jpg';
import regenerativeAfter from '@/assets/regenerative-after.jpg';
import urbanBefore from '@/assets/urban-before.jpg';
import urbanAfter from '@/assets/urban-after.jpg';

const projects: ProjectData[] = [
  {
    id: 'vetiver',
    title: 'Vetiver Deployment',
    area: '160 Acres',
    location: 'Puducherry',
    coordinates: { lat: 11.9321, lng: 79.8380 },
    description: 'Large-scale vetiver deployment for erosion control and soil stabilisation. This project demonstrates the power of vetiver grass in preventing soil degradation and creating sustainable land management solutions.',
    beforeImage: vetiverBefore,
    afterImage: vetiverAfter,
    impact: {
      erosionControl: '↑ 60%',
      soilHealth: '↑ 45%',
      waterRetention: '↑ 35%',
    },
  },
  {
    id: 'regenerative',
    title: 'Regenerative Agriculture',
    area: '100 Acres',
    location: 'Tamil Nadu',
    coordinates: { lat: 10.7905, lng: 78.7047 },
    description: 'Chemical-free regenerative farming improving biodiversity and carbon capture. This project showcases how sustainable agricultural practices can restore ecosystem health while maintaining productivity.',
    beforeImage: regenerativeBefore,
    afterImage: regenerativeAfter,
    impact: {
      carbon: '1,200 tons/year',
      biodiversity: '↑ 40%',
      soilHealth: '↑ 55%',
    },
  },
  {
    id: 'urban',
    title: 'Urban Forest',
    area: '40 Acres',
    location: 'Bangalore',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    description: 'Urban forest reducing heat islands and improving air quality. This transformative project brings nature back into the city, creating a green lung that benefits thousands of residents.',
    beforeImage: urbanBefore,
    afterImage: urbanAfter,
    impact: {
      airQuality: '↑ 55%',
      temperature: '↓ 3°C locally',
      biodiversity: '↑ 38%',
    },
  },
];

const LandExplorer = () => {
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleProjectSelect = (projectId: string) => {
    projectRefs.current[projectId]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-sm font-mono text-muted-foreground">
            ErthaLoka
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <Globe className="w-16 h-16 text-primary animate-glow mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold glow-text">
              Land Parcel Explorer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our live ecological restoration projects across India
            </p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <MapSection projects={projects} onProjectSelect={handleProjectSelect} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Live Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real projects. Measurable impact. Visible change.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[project.id] = el)}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Total Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collective transformation across all our restoration projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <ImpactCounter
              end={300}
              label="Total Area Protected"
              suffix=" Acres"
              icon={<Leaf className="w-12 h-12 text-primary" />}
            />
            <ImpactCounter
              end={2300}
              label="Total Carbon Sequestered"
              suffix=" Tons/Year"
              icon={<TrendingUp className="w-12 h-12 text-primary" />}
            />
            <ImpactCounter
              end={45}
              label="Average Biodiversity Growth"
              suffix="%"
              icon={<Globe className="w-12 h-12 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 glow-border">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Us in Expanding the ErthaLoka Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Support regenerative land restoration and ecological protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold"
              >
                Sponsor a Parcel
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">ErthaLoka</h3>
              <p className="text-muted-foreground italic">
                A CoExIStic Ecoverse
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <a href="mailto:connect@erthaloka.com" className="hover:text-primary transition-colors">
                  connect@erthaloka.com
                </a>
                {' • '}
                <a href="tel:+917829778299" className="hover:text-primary transition-colors">
                  +91 78297 78299
                </a>
              </p>
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Where People, Planet & Purpose Thrive Together
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandExplorer;
