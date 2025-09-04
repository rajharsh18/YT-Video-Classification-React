import React from "react";

const VideoResult = ({ result }) => {
  if (!result) return null;

  const {
    title,
    result: classification,
    embedUrl,
    isEducational,
    category,
  } = result;

  // Parse the classification result to get a cleaner display
  const getDisplayResult = () => {
    if (isEducational && category) {
      return `Educational - ${category}`;
    } else if (isEducational) {
      return "Educational Content";
    } else {
      return "Not Educational Content";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Video Title */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
          {title}
        </h2>
      </div>

      {/* Classification Result */}
      <div className="text-center">
        <div
          className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${
            isEducational
              ? "bg-green-500 bg-opacity-20 border border-green-500 text-green-300"
              : "bg-red-500 bg-opacity-20 border border-red-500 text-red-300"
          }`}
        >
          <span
            className={`w-3 h-3 rounded-full mr-3 ${
              isEducational ? "bg-green-400" : "bg-red-400"
            }`}
          ></span>
          {getDisplayResult()}
        </div>

        {/* Show full classification result if available */}
        {classification && classification !== getDisplayResult() && (
          <div className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
            <p>{classification}</p>
          </div>
        )}
      </div>

      {/* Video Embed */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div
            className="relative w-full bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            />
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">
          Classification based on video title and description analysis
        </p>
        {category && (
          <p className="text-blue-400 text-sm font-medium">
            Category: {category}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoResult;
