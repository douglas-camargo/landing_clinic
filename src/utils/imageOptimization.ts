// Utilidades para optimización de imágenes y SEO

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  className?: string;
}

/**
 * Función para generar URLs de imágenes optimizadas
 * @param originalUrl - URL original de la imagen
 * @param width - Ancho deseado
 * @param height - Alto deseado
 * @param format - Formato de salida (webp, jpg, etc.)
 * @returns URL optimizada
 */
export function getOptimizedImageUrl(
  originalUrl: string,
  width?: number,
  height?: number,
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  // Si es una imagen de Pexels, usar sus parámetros de optimización
  if (originalUrl.includes('pexels.com')) {
    const baseUrl = originalUrl.split('?')[0];
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('auto', 'compress');
    params.append('cs', 'tinysrgb');
    params.append('fit', 'crop');
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  // Para otras imágenes, retornar la URL original
  return originalUrl;
}

/**
 * Función para generar atributos de imagen optimizados para SEO
 * @param props - Propiedades de la imagen
 * @returns Objeto con atributos optimizados
 */
export function getOptimizedImageAttributes(props: OptimizedImageProps) {
  const {
    src,
    alt,
    width,
    height,
    loading = 'lazy',
    decoding = 'async',
    sizes,
    className
  } = props;

  return {
    src: getOptimizedImageUrl(src, width, height),
    alt,
    width,
    height,
    loading,
    decoding,
    sizes,
    className,
    // Atributos adicionales para SEO
    'data-src': src, // Para lazy loading
    'data-srcset': width ? `${getOptimizedImageUrl(src, width)} ${width}w` : undefined,
    'data-sizes': sizes || '100vw'
  };
}

/**
 * Función para generar srcset para imágenes responsivas
 * @param baseUrl - URL base de la imagen
 * @param widths - Array de anchos para diferentes breakpoints
 * @returns String de srcset
 */
export function generateSrcSet(baseUrl: string, widths: number[]): string {
  return widths
    .map(width => `${getOptimizedImageUrl(baseUrl, width)} ${width}w`)
    .join(', ');
}

/**
 * Función para generar sizes para imágenes responsivas
 * @param breakpoints - Array de breakpoints con sus anchos
 * @returns String de sizes
 */
export function generateSizes(breakpoints: Array<{ min: string; width: string }>): string {
  return breakpoints
    .map(bp => `(min-width: ${bp.min}) ${bp.width}`)
    .join(', ') + ', 100vw';
}

/**
 * Función para verificar si una imagen está cargada
 * @param src - URL de la imagen
 * @returns Promise que resuelve cuando la imagen está cargada
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Función para precargar imágenes críticas
 * @param urls - Array de URLs de imágenes críticas
 */
export function preloadCriticalImages(urls: string[]): void {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Función para generar metadatos de imagen para Open Graph
 * @param imageUrl - URL de la imagen
 * @param title - Título de la imagen
 * @param description - Descripción de la imagen
 * @returns Objeto con metadatos de Open Graph
 */
export function generateImageMetaTags(
  imageUrl: string,
  title: string,
  description: string
) {
  return {
    'og:image': imageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': title,
    'twitter:image': imageUrl,
    'twitter:image:alt': description
  };
}
