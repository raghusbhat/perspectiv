// React 19 native metadata support - simple SEO component
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEO({
  title = "AI Vision System for Industrial Inspection | Perspectiv Labs",
  description = "Deploy AI-powered quality inspection with real-time edge hardware and intelligent vision software. Zero-defect manufacturing for automotive, pharmaceutical, and aerospace industries.",
  keywords = "AI vision, industrial inspection, edge AI hardware, quality control, manufacturing, computer vision, defect detection",
  canonical
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.svg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/logo.svg" />
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  );
}