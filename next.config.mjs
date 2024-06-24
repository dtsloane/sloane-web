import withMDX from '@next/mdx';

const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  // Append MDX to page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Image configuration
  images: {
    domains: ['m.media-amazon.com', 'img3.od-cdn.com'], // Add external domains here
  },

  // Other Next.js config options can go here
});

export default nextConfig;
