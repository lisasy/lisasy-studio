"use client"

import React, { useState, useMemo } from 'react';
import { getFilteredProductGroups, getTotalProjectCount } from '@/lib/product-design';
import { List, LayoutGrid } from 'lucide-react';

const TABS = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "personal", label: "Personal" },
];

function Thumbnail({ src, size = "sm", onWhite = false }) {
  const fitClass = onWhite ? "object-contain" : "object-cover";
  const imgClass = onWhite
    ? `max-h-full max-w-full ${fitClass}`
    : `size-full ${fitClass}`;
  const whitePlate = onWhite ? "bg-[#ffffff]" : "";
  const innerPad = onWhite ? `p-1.5 flex items-center justify-center ${whitePlate}` : "";
  if (size === "lg") {
    return src
      ? (
        <div className={`w-full aspect-square rounded-[9px] overflow-hidden ${whitePlate}`}>
          <div className={`w-full h-full ${innerPad}`}>
            <img src={src} alt="" className={imgClass} />
          </div>
        </div>
      )
      : <div className="w-full aspect-square rounded-[9px] bg-[#d9d9d9]" />;
  }
  return src
    ? (
      <div
        className={`size-10 rounded-[9px] overflow-hidden flex-shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${whitePlate}`}
      >
        <div className={`size-full ${innerPad}`}>
          <img src={src} alt="" className={imgClass} />
        </div>
      </div>
    )
    : <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />;
}

function ListItem({ text, hoverText, type = "title", showThumbnail = true, thumbnail, thumbnailOnWhite }) {
  const isProject = type === "project";
  return (
    <div className="group flex h-12 items-center px-6 py-3 rounded-[10px] transition-colors hover:bg-background-hover cursor-pointer">
      <span className={`flex-1 text-lg font-normal leading-[1.2] ${isProject ? "opacity-60" : ""}`}>
        {hoverText ? (
          <>
            <span className="group-hover:hidden">{text}</span>
            <span className="hidden group-hover:inline">{hoverText}</span>
          </>
        ) : text}
      </span>
      {showThumbnail && <Thumbnail src={thumbnail} onWhite={thumbnailOnWhite} />}
    </div>
  );
}

export default function ProductSoftware() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("list");

  const groups = useMemo(() => getFilteredProductGroups(activeTab), [activeTab]);
  const totalCount = useMemo(() => getTotalProjectCount(activeTab), [activeTab]);

  return (
    <article>
      <div className="flex flex-col">
        <h3>Product Design</h3>
        <p className="smaller mt-5 mb-12">
          Experienced and entrepreneurial product designer with over 14 years of
          designing at-scale at Facebook, Instagram, Coinbase, Dropbox, startups,
          and agencies. My experience spans consumer-facing and B2B monetization
          and growth experiences, fintech, trust and safety, and music. I work
          best in 0-to-1 environments wearing all hats, including rapid
          prototyping and production front-end-development through the tools such
          as Cursor, Claude Code, and previously Origami.
        </p>

        <div className="flex flex-col gap-5">
          {/* Controls row */}
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex gap-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center justify-center h-8 px-3 py-1 rounded-[10px] text-base font-normal leading-[1.2] transition-colors cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-foreground text-background"
                      : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Count + View toggle */}
            <div className="flex gap-1.5 items-center pr-6">
              <span className="text-base font-normal leading-[1.2]">{totalCount} Items</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center justify-center h-8 px-3 py-1 rounded-[10px] transition-colors cursor-pointer ${
                    viewMode === "list"
                      ? "bg-foreground text-background"
                      : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
                  }`}
                  aria-label="List view"
                >
                  <List size={16} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center justify-center h-8 px-3 py-1 rounded-[10px] transition-colors cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-foreground text-background"
                      : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          {viewMode === "list" ? (
            <ListView groups={groups} />
          ) : (
            <GridView groups={groups} />
          )}
        </div>
      </div>
    </article>
  );
}

function ListView({ groups }) {
  return (
    <div className="flex flex-col gap-2">
      {groups.map((group, i) => (
        <div key={group.year} className="flex flex-col gap-2">
          {/* Section */}
          <div className="flex items-start w-full">
            {/* Year column */}
            <div className="flex h-12 items-center py-3 shrink-0 w-[129px]">
              <span className="text-lg leading-[1.2]">{group.year}</span>
            </div>

            {/* List column */}
            <div className="flex flex-col flex-1 min-w-0">
              {group.company && (
                <ListItem
                  text={group.company}
                  hoverText={group.companyDetail}
                  type="title"
                  thumbnail={group.thumbnail}
                  thumbnailOnWhite={group.thumbnailOnWhite}
                />
              )}
              {group.projects.map((project) => (
                <ListItem
                  key={project.slug}
                  text={project.name}
                  type={group.company ? "project" : "title"}
                  showThumbnail={!group.company}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          {i < groups.length - 1 && (
            <div className="h-px w-full bg-foreground/10" />
          )}
        </div>
      ))}
    </div>
  );
}

function GridView({ groups }) {
  const allProjects = groups.flatMap((group) =>
    group.projects.map((project) => ({
      ...project,
      year: group.year,
      company: group.company,
    }))
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {allProjects.map((project) => (
        <div key={project.slug} className="flex flex-col gap-2">
          <Thumbnail size="lg" />
          <div>
            <span className="text-sm leading-[1.2]">{project.name}</span>
            <span className="text-xs text-text-secondary block leading-[1.2]">
              {project.company || project.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
