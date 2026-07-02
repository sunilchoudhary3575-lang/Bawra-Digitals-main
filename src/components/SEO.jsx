import { useEffect } from 'react';

export default function SEO({ title, description, schema }) {
  useEffect(() => {
    // Update Title
    const brandName = "Bawra Digitals";
    document.title = title ? `${title} | ${brandName}` : `${brandName} | Healthcare Marketing Agency for Doctors`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "Grow your OPD, build your doctor brand, and acquire more patients with Bawra Digitals Pvt. Ltd., India's leading healthcare digital marketing agency.";

    // Inject Schema Markup
    let scriptSchema = document.getElementById('jsonld-schema');
    if (scriptSchema) {
      scriptSchema.remove();
    }
    
    // Default Schema if none provided
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Bawra Digitals Pvt. Ltd.",
      "alternateName": "Bawra Digitals",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "image": "https://images.unsplash.com/photo-1579684389782-64d84b5e902a",
      "description": "India's leading healthcare marketing agency for doctors, clinics, and hospitals. Specializing in OPD growth, doctor branding, and lead generation.",
      "telephone": "+91-63777-90409",
      "email": "contact@bawradigitals.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Bombay Motors Circle, Pratap Nagar",
        "addressLocality": "Jodhpur",
        "addressRegion": "Rajasthan",
        "postalCode": "342003",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/bawradigitals",
        "https://www.instagram.com/bawradigitals",
        "https://www.linkedin.com/company/bawradigitals"
      ]
    };

    const activeSchema = schema || defaultSchema;

    scriptSchema = document.createElement('script');
    scriptSchema.id = 'jsonld-schema';
    scriptSchema.type = 'application/ld+json';
    scriptSchema.innerHTML = JSON.stringify(activeSchema);
    document.head.appendChild(scriptSchema);

    return () => {
      const oldSchema = document.getElementById('jsonld-schema');
      if (oldSchema) {
        oldSchema.remove();
      }
    };
  }, [title, description, schema]);

  return null;
}
