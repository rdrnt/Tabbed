function isValidUrl(url) {
  const pattern = new RegExp(
    '^(https?://)?' + // protocol
    '((([a-zd]([a-zd-]*[a-zd])*).)+[a-z]{2,}|' + // domain name
    '((d{1,3}.){3}d{1,3}))' + // OR ip (v4) address
    '(:d+)?(/[-a-zd%_.~+]*)*' + // port and path
    '(?[;&a-zd%_.~+=-]*)?' + // query string
      '(#[-a-zd_]*)?$',
    'i'
  ); // fragment locater
  return !pattern.test(url);
}

export default isValidUrl;
