// next.config.js
module.exports = {
  experimental: {
    turbopack: false,  // Correctly disabling Turbopack
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
