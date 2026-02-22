import React from 'react';

const Videos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore our Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full aspect-[9/16] max-h-[600px] object-cover"
              controls
            >
              <source src="/assets/videos/video-1.mp4" type="video/mp4" /> {/* Replace with actual video source */}
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              {/* <h3 className="text-xl font-semibold mb-2">Video Title 1</h3> */}
              {/* <p className="text-gray-600">Description of the first video.</p> */}
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full aspect-[9/16] max-h-[600px] object-cover"
              controls
            >
              <source src="/assets/videos/video-2.mp4" type="video/mp4" /> {/* Replace with actual video source */}
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              {/* <h3 className="text-xl font-semibold mb-2">Video Title 2</h3> */}
              {/* <p className="text-gray-600">Description of the second video.</p> */}
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full aspect-[9/16] max-h-[600px] object-cover"
              controls
            >
              <source src="/assets/videos/video-3.mp4" type="video/mp4" /> {/* Replace with actual video source */}
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              {/* <h3 className="text-xl font-semibold mb-2">Video Title 3</h3> */}
              {/* <p className="text-gray-600">Description of the third video.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;