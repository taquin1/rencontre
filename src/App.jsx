import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    setResult("");

    const res = await fetch("/.netlify/functions/generate", {
      method: "POST",
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    setResult(
      data.choices?.[0]?.message?.content || JSON.stringify(data, null, 2)
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>LlamaCoder (Netlify Version)</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
        rows={6}
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
