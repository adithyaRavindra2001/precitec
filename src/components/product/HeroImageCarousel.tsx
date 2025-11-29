import { useState } from "react";
import type { ProductImage } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroImageCarouselProps {
  images: ProductImage[];
  productName: string;
}

const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";

export function HeroImageCarousel({
  images,
  productName,
}: HeroImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Handle empty images array
  if (!images || images.length === 0) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-xl">
        <img
          src={PLACEHOLDER_IMAGE}
          alt={productName}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const currentImage = images[currentIndex];

  const handleImageError = (imageId: string) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const getImageUrl = (img: ProductImage) => {
    return imageErrors[img.id] ? PLACEHOLDER_IMAGE : img.url;
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-xl group">
      {/* Main Image */}
      <img
        src={getImageUrl(currentImage)}
        alt={currentImage.alt || productName}
        className="h-full w-full object-cover"
        onError={() => handleImageError(currentImage.id)}
      />

      {/* Image Caption */}
      {currentImage.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-sm text-white">{currentImage.caption}</p>
        </div>
      )}

      {/* Show controls only if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
