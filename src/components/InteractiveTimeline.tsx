import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

const InteractiveTimeline = ({ items }: InteractiveTimelineProps) => {
  return (
    <div className="w-full space-y-16">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div
            key={item.id}
            className="relative"
          >
            {/* Connector Line (except for last item) */}
            {index < items.length - 1 && (
              <div className="absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-blue-200 to-transparent hidden lg:block" />
            )}

            <div className={cn(
              "grid lg:grid-cols-2 gap-10 items-center",
              isEven ? "" : "lg:grid-flow-dense"
            )}>
              
              {/* Image Side */}
              <div className={cn(
                "relative group",
                isEven ? "lg:order-1" : "lg:order-2"
              )}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold text-blue-600">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={cn(
                "space-y-6",
                isEven ? "lg:order-2" : "lg:order-1"
              )}>
                {/* Milestone Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Milestone {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats Grid */}
                {item.stats && item.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs lg:text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="pt-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveTimeline;
