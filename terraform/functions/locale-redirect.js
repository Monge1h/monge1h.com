// CloudFront Function (viewer-request): redirects `/` to `/es/` when the
// visitor prefers Spanish. The `lang` cookie (set by the site's language
// switcher) always wins over the Accept-Language header.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/' || uri === '/index.html') {
    var lang = '';

    var cookies = request.cookies;
    if (cookies && cookies.lang && cookies.lang.value) {
      lang = cookies.lang.value;
    }

    if (!lang) {
      var headers = request.headers;
      var acceptLanguage =
        headers && headers['accept-language'] ? headers['accept-language'].value : '';
      if (acceptLanguage.toLowerCase().indexOf('es') === 0) {
        lang = 'es';
      }
    }

    if (lang === 'es') {
      return {
        statusCode: 302,
        statusDescription: 'Found',
        headers: {
          location: { value: '/es/' },
          'cache-control': { value: 'no-store' },
          vary: { value: 'Accept-Language, Cookie' },
        },
      };
    }
  }

  return request;
}
