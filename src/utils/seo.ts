// Utilidades para SEO y metadatos dinámicos

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

/**
 * Función para actualizar el título de la página
 * @param title - Nuevo título
 */
export function updatePageTitle(title: string): void {
  document.title = title;
}

/**
 * Función para actualizar la descripción meta
 * @param description - Nueva descripción
 */
export function updateMetaDescription(description: string): void {
  let metaDescription = document.querySelector('meta[name="description"]');
  
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  
  metaDescription.setAttribute('content', description);
}

/**
 * Función para actualizar las palabras clave meta
 * @param keywords - Array de palabras clave
 */
export function updateMetaKeywords(keywords: string[]): void {
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  
  metaKeywords.setAttribute('content', keywords.join(', '));
}

/**
 * Función para actualizar la URL canónica
 * @param url - URL canónica
 */
export function updateCanonicalUrl(url: string): void {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
}

/**
 * Función para actualizar metadatos de Open Graph
 * @param config - Configuración de Open Graph
 */
export function updateOpenGraph(config: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}): void {
  const ogTags = {
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.image,
    'og:url': config.url,
    'og:type': config.type || 'website'
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    if (content) {
      let meta = document.querySelector(`meta[property="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    }
  });
}

/**
 * Función para actualizar metadatos de Twitter Card
 * @param config - Configuración de Twitter Card
 */
export function updateTwitterCard(config: {
  card?: string;
  title?: string;
  description?: string;
  image?: string;
}): void {
  const twitterTags = {
    'twitter:card': config.card || 'summary_large_image',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.image
  };

  Object.entries(twitterTags).forEach(([name, content]) => {
    if (content) {
      let meta = document.querySelector(`meta[name="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    }
  });
}

/**
 * Función para configurar robots meta tag
 * @param noIndex - Si debe indexar o no
 */
export function updateRobotsMeta(noIndex: boolean = false): void {
  let metaRobots = document.querySelector('meta[name="robots"]');
  
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  
  metaRobots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
}

/**
 * Función principal para actualizar todos los metadatos SEO
 * @param config - Configuración completa de SEO
 */
export function updateSEO(config: SEOConfig): void {
  // Actualizar título
  updatePageTitle(config.title);
  
  // Actualizar descripción
  updateMetaDescription(config.description);
  
  // Actualizar palabras clave
  updateMetaKeywords(config.keywords);
  
  // Actualizar URL canónica
  if (config.canonical) {
    updateCanonicalUrl(config.canonical);
  }
  
  // Actualizar Open Graph
  updateOpenGraph({
    title: config.title,
    description: config.description,
    image: config.ogImage,
    url: config.canonical,
    type: config.ogType
  });
  
  // Actualizar Twitter Card
  updateTwitterCard({
    card: config.twitterCard,
    title: config.title,
    description: config.description,
    image: config.ogImage
  });
  
  // Actualizar robots
  updateRobotsMeta(config.noIndex);
}

/**
 * Función para generar breadcrumbs estructurados
 * @param items - Array de elementos del breadcrumb
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>): string {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };

  return JSON.stringify(breadcrumbData);
}

/**
 * Función para generar FAQ estructurado
 * @param faqs - Array de preguntas y respuestas
 */
export function generateFAQ(faqs: Array<{ question: string; answer: string }>): string {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return JSON.stringify(faqData);
}

/**
 * Función para generar datos estructurados de organización
 * @param orgData - Datos de la organización
 */
export function generateOrganizationData(orgData: {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
}): string {
  const orgStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    'name': orgData.name,
    'url': orgData.url,
    'logo': orgData.logo,
    'description': orgData.description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': orgData.address.street,
      'addressLocality': orgData.address.city,
      'addressRegion': orgData.address.state,
      'postalCode': orgData.address.postalCode,
      'addressCountry': orgData.address.country
    },
    'telephone': orgData.phone,
    'email': orgData.email
  };

  return JSON.stringify(orgStructuredData);
}
