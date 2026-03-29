// CloudFront Function: rewrite directory-like URIs to index.html
// Handles trailingSlash Next.js static exports served via S3 + OAC.
// e.g. /contact  → /contact/index.html
//      /contact/ → /contact/index.html
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // If the URI ends with '/' serve index.html
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  }
  // If the URI has no file extension, treat as directory route
  else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
