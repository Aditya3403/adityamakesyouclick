"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function YouTubeThumbnailsPage() {
  const router = useRouter();
  const sections = [
    {
      title: "Informational Thumbnails",
      images: [
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620079/YT_Thumbnail_4a_t8z2qc.png",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620022/YouTube_Thumbnail_15a_hm9h65.png",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620092/YT_Thumbnail_20a_pd0kxe.png",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620233/YT_Thumbnail_6_plxid8.png",
      ],
    },
    {
      title: "Educational Thumbnails",
      images: [
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737619471/The_Engineering_Digest_YT_Thumbnail_7a_l1gl5i.jpg",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737619471/The_Engineering_Digest_YT_Thumbnail_6_pms3vu.jpg",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737619483/The_Engineering_Digest_YT_Thumbnail_2_z7pf8b.png",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737619488/The_Engineering_Digest_YT_Thumbnail_3_w70v3o.jpg",
      ],
    },
    {
      title: "Podcast Thumbnails",
      images: [
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620184/Positivity_Around_YouTube_Thumbnail_3_mdkvoj.jpg",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620199/VisualViewMedia_Thumbnail_k6dpu1.png",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620608/Positivity_Around_YouTube_Thumbnail_2b_jpkfma.jpg",
        "https://res.cloudinary.com/memoriesshare/image/upload/v1737620750/Positivity_Around_YouTube_Thumbnail_1a_ega5ic.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-8">
      {/* Going Back Button */}
      <button
                onClick={() => router.push('/')} 
                className="absolute top-18 left-10 p-1 sm:p-2 md:p-3 bg-[#212121] rounded-full"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
          </button>

      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="xl:text-4xl md:text-3xl lg:text-4xl sm:text-xl font-bold mb-2">YouTube Thumbnails</h1>
        <p className="xl:text-xl lg:text-xl md:text-lg text-xs sm:text-base md:text-lg text-gray-400">
          A creative collection of thumbnails designed for diverse purposes.
        </p>
      </div>

      {/* Sections with Subheadings */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="mb-12 bg-[#0F0F0F] p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl"
        >
          {/* Subheading */}
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-semibold mb-6 text-center">
            {section.title}
          </h2>

          {/* Thumbnail Box Layout */}
          <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-2 gap-5 justify-center items-center mx-auto md:mx-0">
            {section.images.map((image, idx) => (
              <div
                key={idx}
                className="bg-[#212121] h-auto w-full flex items-center justify-center border border-transparent rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${section.title} thumbnail ${idx + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
