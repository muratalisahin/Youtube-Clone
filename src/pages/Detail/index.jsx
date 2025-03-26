import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api"; // This looks correct as per the structure (utils/api.js)
import ReactPlayer from "react-player";
import ChannelInfo from "../../components/ChannelInfo"; // Correct: components/ChannelInfo/index.jsx
import Description from "../../components/Description"; // Correct: components/Description/index.jsx
import Comments from "../../components/Comments"; // Correct: components/Comments/index.jsx
import VideoCard from "../../components/VideoCard"; // Fixed: components/VideoCard/index.jsx
import ErrorComponent from "../../components/Error";
import { BasicLoader } from "../../components/Loader";




const Detail = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = searchParams.get("v");

  useEffect(() => {
    const params = {
      id,
      extend: 1,
    };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]); // id bağımlılığı eklendi



  return (

    <div className="detail-page h-screen overflow-auto">
      {error ? (
        <ErrorComponent />
      ) : loading ? (
        <BasicLoader/>
      ) : (
        <div className="page-content grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          {/* Video İçeriği - 2/3 genişlik */}
          <div className="lg:col-span-2">
            <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                height="100%"
                width="100%"
                controls
              />
            </div>

            <div>
              <h1 className="my-3 text-xl font-bold line-clamp-2">{video?.title}</h1>
              <ChannelInfo video={video} />
              <Description video={video} />
              <Comments videoId={id} />
            </div>
          </div>

          {/* Önerilen Videolar - 1/3 genişlik */}
          <div className="flex flex-col gap-5 p-1">
            <h2 className="font-bold text-lg mb-4">Önerilen Videolar</h2>
            <div className="flex flex-col gap-4">
              {video?.relatedVideos?.data.map((i, key) =>
                i.type === "video" && <VideoCard video={i} key={key} isRow />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;