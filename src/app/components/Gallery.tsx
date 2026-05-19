"use client";

import * as React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import living1 from "../../imports/lgjklkgllkl.jpeg";
import living2 from "../../imports/image-1.png";
import living3 from "../../imports/image-2.png";
import living4 from "../../imports/image.png";
import bedroom1 from "../../imports/sdfgfdshgh.jpeg";
import bedroom2 from "../../imports/fgkhjlhjgll.jpeg";
import bathroom1 from "../../imports/sdfhgfsjgfsjf.jpeg";
import exterior1 from "../../imports/13.jpeg";
import exterior2 from "../../imports/24124.jpeg";
import exterior3 from "../../imports/adsfsadf.jpeg";
import hallway1 from "../../imports/asdfsaf.jpeg";
import hallway2 from "../../imports/asdgadg.jpeg";
import hallway3 from "../../imports/dgjhmvcmvcjm.jpeg";
import hallway4 from "../../imports/hjkhgjgjk.jpeg";

const galleryGroups = [
  {
    key: "living",
    title: "Living Areas",
    description: "Comfortable seating, natural light, and warm communal spaces.",
    photos: [
      {
        src: living1,
        alt: "A bright living area with comfortable seating",
      },
      {
        src: living2,
        alt: "Open family room with soft lighting and cozy seating",
      },
      {
        src: living3,
        alt: "Large living space with recliners and a welcoming layout",
      },
      {
        src: living4,
        alt: "Inviting lounge area with natural wood floors and light",
      },
    ],
  },
  {
    key: "bedroom",
    title: "Bedrooms",
    description: "Private, restful bedrooms designed for calm and comfort.",
    photos: [
      {
        src: bedroom1,
        alt: "Cozy bedroom with a comfortable bed and soft finishing touches",
      },
      {
        src: bedroom2,
        alt: "Quiet bedroom with a full bed and peaceful lighting",
      },
    ],
  },
  {
    key: "bathroom",
    title: "Bathrooms",
    description: "Accessible and clean bathroom spaces with safety rails.",
    photos: [
      {
        src: bathroom1,
        alt: "Accessible bathroom with grab bars and tiled walls",
      },
    ],
  },
  {
    key: "exterior",
    title: "Exterior",
    description: "The home's welcoming exterior and landscaped grounds.",
    photos: [
      {
        src: exterior1,
        alt: "Front entrance with flowering shrubs and a welcoming facade",
      },
      {
        src: exterior2,
        alt: "Exterior view of the home with a ramp and trimmed landscaping",
      },
      {
        src: exterior3,
        alt: "The home exterior surrounded by trees and greenery",
      },
    ],
  },
  {
    key: "hallway",
    title: "Hallways",
    description: "Hallways designed for easy navigation and comfortable flow.",
    photos: [
      {
        src: hallway1,
        alt: "Wide hallway with supportive railings and warm flooring",
      },
      {
        src: hallway2,
        alt: "Hallway view with clear walkways and safety handrails",
      },
      {
        src: hallway3,
        alt: "Hallway leading toward living spaces with even lighting",
      },
      {
        src: hallway4,
        alt: "Accessible hallway that connects rooms and living areas",
      },
    ],
  },
];

export function Gallery() {
  const [activeGroupKey, setActiveGroupKey] = React.useState(galleryGroups[0].key);
  const activeGroup = React.useMemo(
    () => galleryGroups.find((group) => group.key === activeGroupKey) ?? galleryGroups[0],
    [activeGroupKey],
  );
  const [selectedPhoto, setSelectedPhoto] = React.useState(activeGroup.photos[0]);

  React.useEffect(() => {
    setSelectedPhoto(activeGroup.photos[0]);
  }, [activeGroup]);

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
          {galleryGroups.map((group) => (
            <Button
              key={group.key}
              size="sm"
              variant={activeGroupKey === group.key ? "secondary" : "outline"}
              onClick={() => setActiveGroupKey(group.key)}
            >
              {group.title}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-start">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-[520px] object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <div className="p-6 bg-slate-50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{activeGroup.title}</p>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-2">{selectedPhoto.alt}</h3>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Full image
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{activeGroup.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {galleryGroups.map((group) => (
              <div key={group.key} className="rounded-[2rem] bg-white p-5 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{group.title}</p>
                    <h3 className="text-xl font-semibold text-slate-900">{group.description}</h3>
                  </div>
                  <Button
                    size="sm"
                    variant={activeGroupKey === group.key ? "secondary" : "outline"}
                    onClick={() => setActiveGroupKey(group.key)}
                  >
                    View group
                  </Button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {group.photos.map((photo) => {
                    const isSelected = selectedPhoto.src === photo.src;

                    return (
                      <button
                        key={photo.alt}
                        type="button"
                        className={`relative min-w-[180px] flex-shrink-0 overflow-hidden rounded-3xl border transition-all duration-300 ${
                          isSelected
                            ? "border-emerald-500 shadow-[0_16px_48px_-24px_rgba(34,197,94,0.8)]"
                            : "border-slate-200 hover:border-emerald-300"
                        }`}
                        onClick={() => {
                          setActiveGroupKey(group.key);
                          setSelectedPhoto(photo);
                        }}
                      >
                        <ImageWithFallback
                          src={photo.src}
                          alt={photo.alt}
                          className="h-32 w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-3 text-white text-xs font-medium">
                          {photo.alt}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
