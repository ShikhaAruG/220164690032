import React, { useState } from "react";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrls, setShortUrls] = useState({}); // {shortId: originalUrl}
  const [generated, setGenerated] = useState("");

  const generateShortUrl = () => {
    if (!originalUrl) return alert("Enter a URL!");
    const shortId = Math.random().toString(36).substring(7);
    const shortUrl = `${window.location.origin}/${shortId}`;
    setShortUrls(prev => ({ ...prev, [shortId]: originalUrl }));
    setGenerated(shortUrl);
    setOriginalUrl("");
  };

  const handleRedirect = (shortId) => {
    const longUrl = shortUrls[shortId];
    if (longUrl) {
      window.open(longUrl, "_blank");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter your URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        style={{ width: "300px", padding: "0.5rem" }}
      />
      <button onClick={generateShortUrl} style={{ marginLeft: "1rem" }}>
        Shorten
      </button>

      {generated && (
        <div style={{ marginTop: "1rem" }}>
          <p>
            Short URL:{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => handleRedirect(generated.split("/").pop())}
            >
              {generated}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
