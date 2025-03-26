import { useState } from "react"; 
import millify from "millify";

const Description = ({ video }) => {

    const [isOpen, setIsOpen] = useState(false);
    const text =isOpen 
     ? video?.description
     : video?.description.slice(0, 100) + "... daha fazla"; 
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="mt-4 p-2 cursor-pointer bg-[#34403f] hover:opacity-80">
            <div className="flex gap-4 mb-2">
                <p>
                    {millify(video?.viewCount)} Görüntülenme
                </p>
                <p>
                    {new Date(video?.publishDate).toLocaleDateString("tr", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </div>
            {/* whitespace:pre-wrap ==> Satır sonuna  göre elemanları bölmek için kullanılır */}
            <p className="whitespace-pre-wrap">{text}</p>
        </div>
    );
};

export default Description;