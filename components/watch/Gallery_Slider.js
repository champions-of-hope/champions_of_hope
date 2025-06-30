import { useEffect, useRef } from "react";

export default function Gallery({
  name = "show",
  galleryItems = [
    [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        alt: "Modern house at dusk",
      },
      {
        src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        alt: "Futuristic digital display",
      },
      {
        src: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34",
        alt: "Concert stage with lights",
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e165b7",
        alt: "City skyline at night",
      },
      {
        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4b9d0",
        alt: "Mountain landscape with road",
      },
      {
        src: "https://images.unsplash.com/photo-1521747116042-5a8109252665",
        alt: "Urban street with graffiti",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        alt: "Snowy mountain peak",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        alt: "Tropical beach sunset",
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374b4e83c43",
        alt: "Forest path in autumn",
      },
      {
        src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e206",
        alt: "Desert dunes at sunrise",
      },
      {
        src: "https://images.unsplash.com/photo-1519750783820-4b87c2018b34",
        alt: "Aerial view of coastline",
      },
      {
        src: "https://images.unsplash.com/photo-1485470733090-0aae3a9a0990",
        alt: "Lake with mountain reflection",
      },
    ],
  ],
}) {
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 260; // Width of item + gap
      galleryRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateArrows = () => {
      if (galleryRef.current) {
        const gallery = galleryRef.current;
        const leftArrow = document.querySelector(".arrow-left");
        const rightArrow = document.querySelector(".arrow-right");

        if (leftArrow && rightArrow) {
          leftArrow.disabled = gallery.scrollLeft <= 0;
          rightArrow.disabled =
            gallery.scrollLeft + gallery.clientWidth >=
            gallery.scrollWidth - 10;
        }
      }
    };

    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener("scroll", updateArrows);
      updateArrows(); // Initial check
    }

    return () => {
      if (gallery) {
        gallery.removeEventListener("scroll", updateArrows);
      }
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto relative px-4 sm:px-8 md:px-16 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-gray-200">
          {name}
        </h2>
        <button
          className="arrow arrow-left absolute top-1/2 -translate-y-1/2 left-2 bg-black bg-opacity-70 text-white text-2xl sm:text-3xl p-2 rounded transition-colors hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => scrollGallery(-1)}
        >
          ❮
        </button>
        <div
          className="gallery flex overflow-x-hidden gap-2 scroll-smooth"
          ref={galleryRef}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item flex-shrink-0 w-[250px] h-[140px] bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-lg relative"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          className="arrow arrow-right absolute top-1/2 -translate-y-1/2 right-2 bg-black bg-opacity-70 text-white text-2xl sm:text-3xl p-2 rounded transition-colors hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => scrollGallery(1)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
