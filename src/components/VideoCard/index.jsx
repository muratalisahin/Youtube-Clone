import React from 'react';
import millify from "millify";
import moment from "moment";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "moment/locale/tr";

// Türkçe dilini global olarak ayarlıyoruz
moment.locale("tr");

const VideoCard = ({ data }) => {
  //Video resmini belirleyeçek state
  const [isHover, setIsHover] = useState(false);

  // Zaman formatlama
  const formattedTime = data?.publishedAt
    ? moment(data.publishedAt).format("LLLL") // "LLLL" Türkçe formatta tam tarih/saat verir
    : "Bilinmeyen Tarih";

  // Eüer video üzerine hover olunduysa vs movingThumbnails varsa bunu yoksa veya hover olunmadıysa thumbnail render et
  const thumbnail = isHover && data?.richThumbnail?.length > 0
    ? data.richThumbnail[data.richThumbnail.length - 1].url
    : (data?.thumbnail?.length > 0
      ? data.thumbnail[data.thumbnail.length - 1].url
      : '');

  // Moving thumbnails tanımı (daha güvenli bir kontrol)
  const movingThumbnails = data?.richThumbnail?.length > 0
    ? data.richThumbnail[data.richThumbnail.length - 1]
    : null;

  // Test için çıktılar (production'da kaldırılabilir)
  console.log("Thumbnail:", thumbnail);
  console.log("Moving Thumbnails:", movingThumbnails);
  console.log("Video Data:", data);
// Video kart üzerine hover olunma durumuna bağlı olarak isHover stateni güncelle
  return (
    <Link
      to={`/watch?v=${data.videoId}`}
      className="cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Resim Alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={thumbnail || 'https://via.placeholder.com/150'} // Varsayılan bir resim ekledim
          alt="video-resmi"
        />
      </div>
      {/* Alt Detay Alanı */}
      <div className="mt-4 flex gap-4">
        <img
          src={data?.channelThumbnail?.[0]?.url || 'https://via.placeholder.com/56'} // Varsayılan bir kanal resmi
          className="size-14 rounded-full"
          alt="kanal-resmi"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{data?.title || "Başlık Yok"}</h4>
          <p>{data?.channelTitle || "Kanal Bilinmiyor"}</p>

          <div className="flex gap-3 items-center mt-2">
            {data?.viewCount && (
              <p className="fw-bold">
                <span>{millify(data.viewCount)}</span>
                <span className="pe-3"> Görüntülenme</span>
              </p>
            )}
            <p>
              {data?.isLive ? (
                <span className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</span>
              ) : (
                <span>{data?.publishedTimeText || formattedTime}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;