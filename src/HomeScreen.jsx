import React, { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import VideoResult from "./components/VideoResult";

const HomeScreen = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    // Basic YouTube URL validation
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)/;
    if (!youtubeRegex.test(url.trim())) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://192.168.1.8:5000/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (err) {
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError(
          "Unable to connect to the server. Make sure the Flask app is running on http://localhost:5000"
        );
      } else {
        setError(err.message || "Failed to classify video");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-sm z-10">
        <nav className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/logo2.jpg"
              alt="GenZ Logo"
              className="w-12 h-12 rounded-full"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="text-2xl font-bold text-white">
              Gen<span className="text-red-500">Z</span>
            </div>
          </div>
          {result && (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Classify Another Video
            </button>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {!result ? (
            // Initial Form View
            <div className="space-y-12">
              {/* Title */}
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  YouTube Video Classifier
                </h1>
                <p className="text-xl text-gray-300 animate-fade-in">
                  Determine if a YouTube video is educational and discover its
                  category
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Smart Classification
                  </h3>
                  <p className="text-gray-400">
                    Advanced algorithm analyzes video content to determine
                    educational value
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    12+ Categories
                  </h3>
                  <p className="text-gray-400">
                    Categorizes educational content into specific subject areas
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Instant Results
                  </h3>
                  <p className="text-gray-400">
                    Fast processing with embedded video preview
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 animate-fade-in">
                      <p className="text-red-200 text-center">{error}</p>
                    </div>
                  </div>
                )}

                {/* URL Input */}
                <div className="max-w-2xl mx-auto">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste YouTube link here... (e.g., https://www.youtube.com/watch?v=...)"
                    className="w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    {loading ? "Analyzing Video..." : "Classify Video"}
                  </button>
                </div>

                {/* Loading Spinner */}
                {loading && (
                  <div className="flex flex-col items-center space-y-4">
                    <LoadingSpinner />
                    <p className="text-gray-400 text-sm">
                      Analyzing video content...
                    </p>
                  </div>
                )}
              </form>
            </div>
          ) : (
            // Result View
            <div>
              <VideoResult result={result} />
              {result && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Classify Another Video
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-gray-400">© Team GenZ • YouTube Video Classifier</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
