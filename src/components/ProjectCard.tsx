import { MapPin, TrendingUp, Leaf, Droplets } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export interface ProjectData {
  id: string;
  title: string;
  area: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  beforeImage: string;
  afterImage: string;
  impact: {
    carbon?: string;
    biodiversity?: string;
    soilHealth?: string;
    waterRetention?: string;
    erosionControl?: string;
    airQuality?: string;
    temperature?: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover:glow-border transition-all duration-500 group">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{project.location}</span>
            </div>
            <div className="text-primary font-semibold">{project.area}</div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground font-mono">
            GPS: {project.coordinates.lat}° N, {project.coordinates.lng}° E
          </div>
        </div>

        <p className="text-foreground/90 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-primary">Impact Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.impact.carbon && (
              <ImpactMetric
                icon={<Leaf className="w-5 h-5" />}
                label="Carbon Sequestration"
                value={project.impact.carbon}
              />
            )}
            {project.impact.biodiversity && (
              <ImpactMetric
                icon={<TrendingUp className="w-5 h-5" />}
                label="Biodiversity Growth"
                value={project.impact.biodiversity}
              />
            )}
            {project.impact.soilHealth && (
              <ImpactMetric
                icon={<Leaf className="w-5 h-5" />}
                label="Soil Health"
                value={project.impact.soilHealth}
              />
            )}
            {project.impact.waterRetention && (
              <ImpactMetric
                icon={<Droplets className="w-5 h-5" />}
                label="Water Retention"
                value={project.impact.waterRetention}
              />
            )}
            {project.impact.erosionControl && (
              <ImpactMetric
                icon={<TrendingUp className="w-5 h-5" />}
                label="Erosion Control"
                value={project.impact.erosionControl}
              />
            )}
            {project.impact.airQuality && (
              <ImpactMetric
                icon={<Leaf className="w-5 h-5" />}
                label="Air Quality"
                value={project.impact.airQuality}
              />
            )}
            {project.impact.temperature && (
              <ImpactMetric
                icon={<TrendingUp className="w-5 h-5" />}
                label="Temperature"
                value={project.impact.temperature}
              />
            )}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">
            Transformation Through Restoration
          </h4>
          <BeforeAfterSlider
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
          />
        </div>
      </div>
    </div>
  );
};

const ImpactMetric = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-card/30 border border-border/30">
    <div className="text-primary mt-0.5">{icon}</div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold text-foreground">{value}</div>
    </div>
  </div>
);
