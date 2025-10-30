import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden glow-border">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage 
            src={beforeImage} 
            alt={beforeLabel}
          />
        }
        itemTwo={
          <ReactCompareSliderImage 
            src={afterImage} 
            alt={afterLabel}
          />
        }
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '16/9'
        }}
        position={50}
      />
      <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  );
};
