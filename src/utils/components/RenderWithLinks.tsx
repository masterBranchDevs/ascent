const RenderTextWithLinks = (text: string, linkClassName: string) => {
  const urlRegex = /(https?:\/\/(?:www\.)?[^\s)]+|www\.[^\s)]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(urlRegex, (match, url, offset) => {
    // Add the text before the URL
    if (offset > lastIndex) {
      parts.push(text.substring(lastIndex, offset));
    }

    const fullUrl = url.startsWith('www.') ? `https://${url}` : url;

    // Add the link
    parts.push(
      <a
        key={offset}
        href={fullUrl}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url} {/* Display the full URL as link text */}
      </a>
    );
    lastIndex = offset + match.length;
    return match; // Return the match to continue replacement
  });

  // Add any remaining text after the last URL
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};


export default RenderTextWithLinks;