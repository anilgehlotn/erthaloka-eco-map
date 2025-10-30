import ReactCompareImage from 'react-compare-image';

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
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        leftImageLabel={beforeLabel}
        rightImageLabel={afterLabel}
        sliderLineWidth={2}
        sliderLineColor="hsl(var(--primary))"
      />
    </div>
  );
};
