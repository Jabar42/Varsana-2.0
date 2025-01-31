export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'http://localhost:3000'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'], // URL de tu frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true, // Habilita cookies y autenticación si es necesario
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
