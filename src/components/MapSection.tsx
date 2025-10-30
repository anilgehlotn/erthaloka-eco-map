import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ProjectData } from './ProjectCard';
import { X } from 'lucide-react';

interface MapSectionProps {
  projects: ProjectData[];
  onProjectSelect: (projectId: string) => void;
}

export const MapSection = ({ projects, onProjectSelect }: MapSectionProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4.5,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers for each project
    projects.forEach((project) => {
      const el = document.createElement('div');
      el.className = 'project-marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = 'hsl(155, 66%, 57%)';
      el.style.border = '3px solid hsl(150, 100%, 0.4%)';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 0 20px hsl(155, 66%, 57%)';
      el.style.transition = 'all 0.3s ease';
      
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.3)';
        el.style.boxShadow = '0 0 30px hsl(155, 66%, 57%)';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '0 0 20px hsl(155, 66%, 57%)';
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([project.coordinates.lng, project.coordinates.lat])
        .addTo(map.current!);

      el.addEventListener('click', () => {
        setSelectedProject(project);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [projects]);

  const handleViewDetails = () => {
    if (selectedProject) {
      onProjectSelect(selectedProject.id);
      setSelectedProject(null);
    }
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden glow-border">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {selectedProject && (
        <div className="absolute top-4 left-4 right-4 md:left-auto md:w-96 glass-card p-6 rounded-xl animate-fade-in-up z-10">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-xl font-bold mb-2 text-primary">
            {selectedProject.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-1">
            {selectedProject.location} • {selectedProject.area}
          </p>
          <p className="text-xs text-muted-foreground font-mono mb-4">
            {selectedProject.coordinates.lat}° N, {selectedProject.coordinates.lng}° E
          </p>
          
          <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
            {selectedProject.description}
          </p>
          
          <div className="space-y-2 mb-4">
            {Object.entries(selectedProject.impact).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleViewDetails}
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all glow-border"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
};
