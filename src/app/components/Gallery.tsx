"use client";

import * as React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import galleryPhoto1 from "../../imports/lgjklkgllkl.jpeg";
import galleryPhoto2 from "../../imports/sdfgfdshgh.jpeg";
import galleryPhoto3 from "../../imports/sdfhgfsjgfsjf.jpeg";
import galleryPhoto4 from "../../imports/image-1.png";
import galleryPhoto5 from "../../imports/image-2.png";

const filters = ["All", "Kitchen", "Bathroom", "Bedroom", "Living", "Dining"];

const photos = [
  {
    src: galleryPhoto1,
    alt: "Aby Adult Family Home — welcoming living area",
    label: "Living",
    description: "Open-plan living area with gentle natural light.",
  },
  {
    src: galleryPhoto2,
    alt: "Aby Adult Family Home — cozy bedroom",
    label: "Bedroom",
    description: "Comfortable bedroom designed for restful stays.",
  },
  {
    src: galleryPhoto3,
    alt: "Aby Adult Family Home — warm dining",
    label: "Dining",
    description: "Shared dining space for meals and connection.",
  },
  {
    src: galleryPhoto4,
    alt: "Aby Adult Family Home — bright kitchen",
    label: "Kitchen",
    description: "A bright kitchen with a welcoming, homey feel.",
  },
  {
    src: galleryPhoto5,
    alt: "Aby Adult Family Home — calm bathroom",
    label: "Bathroom",
    description: "Accessible bathroom with thoughtful finishes.",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const filteredPhotos = React.useMemo(
    () =>
      photos.filter(
        (photo) => activeFilter === "All" || photo.label === activeFilter,
      ),
    [activeFilter],
  );

  React.useEffect(() => {
    if (selectedIndex >= filteredPhotos.length) {
      setSelectedIndex(0);
    }
  }, [filteredPhotos, selectedIndex]);

  const selectedPhoto = filteredPhotos[selectedIndex] ?? filteredPhotos[0];

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #F0FDFA 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
          >
            Our Home
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            A Warm, Welcoming Place <br />
            <span style={{ color: "#2BB5A0" }}>to Call Home</span>
          </h2>
          <p
            className="text-gray-500 mt-4 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Take a look inside Aby Adult Family Home — thoughtfully designed for comfort, safety, and joy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant={activeFilter === filter ? "secondary" : "outline"}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedIndex(0);
              }}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-start">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="relative group overflow-hidden">
              <ImageWithFallback
                src={selectedPhoto?.src}
                alt={selectedPhoto?.alt}
                className="w-full h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {selectedPhoto?.label}
                </span>
                <p className="mt-4 max-w-xl text-xl font-semibold leading-tight drop-shadow-sm">
                  {selectedPhoto?.description}
                </p>
              </div>
            </div>
            <div className="p-6 bg-slate-50">
              <p className="text-sm text-slate-600">
                Click any tile to enlarge the image. Use the arrows to scroll through photos and keep exploring the home.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-5 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Gallery</p>
                  <h3 className="text-xl font-semibold text-slate-900">Explore photos</h3>
                </div>
                <div className="text-right text-sm text-slate-500">
                  {filteredPhotos.length} photo{filteredPhotos.length === 1 ? "" : "s"}
                </div>
              </div>

              <div className="relative">
                <Carousel opts={{ align: "start", containScroll: "trimSnaps" }}>
                  <CarouselContent className="gap-4 py-2">
                    {filteredPhotos.map((photo, index) => {
                      const isSelected = selectedPhoto === photo;

                      return (
                        <CarouselItem key={`${photo.alt}-${index}`} className="w-[240px]">
                          <button
                            type="button"
                            className={`group relative block w-full overflow-hidden rounded-[1.75rem] border transition duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 ${
                              isSelected
                                ? "border-emerald-500 shadow-[0_20px_60px_-20px_rgba(34,197,94,0.6)]"
                                : "border-slate-200 hover:border-emerald-300"
                            }`}
                            onClick={() => setSelectedIndex(index)}
                            onFocus={() => setSelectedIndex(index)}
                          >
                            <div className="relative h-44 overflow-hidden">
                              <ImageWithFallback
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                            <div className="p-4 bg-white">
                              <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                {photo.label}
                              </span>
                              <p className="mt-3 text-sm font-medium text-slate-900">
                                {photo.alt}
                              </p>
                            </div>
                            {isSelected && (
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-emerald-100 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-700">
                                Selected
                              </div>
                            )}
                          </button>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>

                  <CarouselPrevious className="bg-white shadow-lg text-slate-900 hover:bg-slate-100" />
                  <CarouselNext className="bg-white shadow-lg text-slate-900 hover:bg-slate-100" />
                </Carousel>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900">Designed for comfort</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Each photo is grouped into a category so visitors can quickly jump to Kitchen, Bedroom, Bathroom, Living, or Dining scenes. The active tile grows and shows a soft focus effect when selected or focused.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
