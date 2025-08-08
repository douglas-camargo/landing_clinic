import React, { useState, useEffect } from 'react';
import { getOptimizedImageAttributes, OptimizedImageProps } from '../../utils/imageOptimization';

interface ImageProps extends OptimizedImageProps {
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  sizes,
  className,
  fallbackSrc,
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      onError?.();
    }
  };

  const imageAttributes = getOptimizedImageAttributes({
    src: imageSrc,
    alt,
    width,
    height,
    loading,
    decoding,
    sizes,
    className
  });

  return (
    <img
      {...imageAttributes}
      {...props}
      onLoad={handleLoad}
      onError={handleError}
      className={`${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{
        ...(width && { width: `${width}px` }),
        ...(height && { height: `${height}px` })
      }}
    />
  );
}
