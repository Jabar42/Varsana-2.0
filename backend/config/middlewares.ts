export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',  // Asegúrate de que este middleware esté presente
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'http://localhost:3000', 'http://localhost:3001'],  // Añadir localhost:3001
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000', 'http://localhost:3001'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000', 'http://localhost:3001'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:3001'], // Añadir localhost:3001
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

