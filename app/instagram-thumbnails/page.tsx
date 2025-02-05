"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function InstagramThumbnailsPage() {
    const router = useRouter();
    
    const sections = [
        { 
            title: "Trending Reel Covers", 
            images: [
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737633877/Be_in_1_and_leave_99_ooetzo.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737633705/Instagram_Thumbnail_63_Design_1_hgghbt.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737633853/Instagram_Thumbnail_39_Design_1_anfofi.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737633700/Instagram_Thumbnail_5_Design_1_npddjx.png",
            ],
        },
        { 
            title: "Educational Reel Covers", 
            images: [
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737627466/Engineering_Digest_Instagram_Thumbnail_1_Design_1_zhx29s.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737627316/Engineering_Digest_Instagram_Thumbnail_11_Design_1_fwa3kr.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737627300/Engineering_Digest_Instagram_Thumbnail_36_Design_1_mco6ax.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737627248/Engineering_Digest_Instagram_Thumbnail_44_Design_1_chjovj.png",
            ],
        },
        { 
            title: "Podcast Reel Covers", 
            images: [
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737625796/Positivity_Around_Instagram_Thumbnail_13_ifwib6.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737625775/Positivity_Around_Instagram_Thumbnail_7_c7v3yq.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737632683/Positivity_Around_Instagram_Thumbnail_6_osfjvv.png",
                "https://res.cloudinary.com/memoriesshare/image/upload/v1737632670/Positivity_Around_Instagram_Thumbnail_10_fv0vpt.png",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-6 sm:p-8 md:p-10">
            
            {/* Responsive Back Button */}
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
                <h1 className="xl:text-4xl md:text-3xl lg:text-4xl sm:text-xl font-bold mb-2">
                    Instagram Thumbnails
                </h1>
                <p className="xl:text-xl lg:text-xl md:text-lg text-xs sm:text-base md:text-lg text-gray-400">
                    A vibrant collection of thumbnails designed for Instagram reels.
                </p>
            </div>

            {/* Sections with Subheadings */}
            {sections.map((section, index) => (
                <div key={index} className="mb-12 bg-[#0F0F0F] p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl">
                    {/* Subheading */}
                    <h2 className="xl:text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
                        {section.title}
                    </h2>

                    {/* Thumbnail Box Layout */}
                    <div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
                        {section.images.map((image, idx) => (
                            <div
                                key={idx}
                                className="w-full flex items-center justify-center bg-[#212121] border border-transparent rounded-lg overflow-hidden"
                            >
                                <Image 
                                    src={image}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={300} 
                                    height={500}
                                    layout="responsive"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
