"use client"

import React, { useState, useMemo } from 'react';
import { getProductGroups, getFilteredProductGroups, getTotalProjectCount } from '@/lib/product';
import { List, LayoutGrid } from 'lucide-react';

const TABS = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "personal", label: "Personal" },
];

function ThumbnailPlaceholder({ size = "sm" }) {
  const sizeClass = size === "lg" ? "w-full aspect-square" : "w-10 h-10 md:w-12 md:h-12";
  return <div className={`${sizeClass} rounded bg-background-secondary flex-shrink-0`} />;
}

export default function ProductSoftware() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("list");

  const groups = useMemo(() => getFilteredProductGroups(activeTab), [activeTab]);
  const totalCount = useMemo(() => getTotalProjectCount(activeTab), [activeTab]);

  return (
    <article>
      <div className="text-left leading-[1.33]">
        <p>
          Experienced and entrepreneurial product designer with over 14 years of
          designing at-scale at Facebook, Instagram, Coinbase, Dropbox, startups,
          and agencies. My experience spans consumer-facing and B2B monetization
          and growth experiences, fintech, trust and safety, and music. I work
          best in 0-to-1 environments wearing all hats, including rapid
          prototyping and production front-end-development through the tools such
          as Cursor, Claude Code, and previously Origami.
        </p>

        {/* Controls row */}
        <div className="flex items-center justify-between mt-6 mb-6">
          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-full text-sm font-normal transition-colors ${
                  activeTab === tab.key
                    ? "bg-foreground text-background"
                    : "bg-background-secondary text-foreground hover:bg-background-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Count + View toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-secondary">{totalCount} Items</span>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-foreground text-background"
                    : "text-text-secondary hover:text-foreground"
                }`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-foreground text-background"
                    : "text-text-secondary hover:text-foreground"
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
    </article>
  );
}

function ListView({ groups }) {
  return (
    <div className="flex flex-col divide-y divide-foreground/10">
      {groups.map((group) => (
        <div key={group.year} className="py-4 first:pt-0">
          {/* Year + company header row */}
          <div className="flex gap-8 mb-1">
            <span className="text-sm text-text-secondary w-20 flex-shrink-0 pt-0.5">
              {group.year}
            </span>
            {group.company && (
              <span className="text-sm font-bold">{group.company}</span>
            )}
          </div>

          {/* Project rows */}
          <div className="flex flex-col">
            {group.projects.map((project) => (
              <div
                key={project.slug}
                className="flex items-center justify-between gap-4 py-2 ml-28"
              >
                <span className="text-sm">{project.name}</span>
                <ThumbnailPlaceholder />
              </div>
            ))}
          </div>
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
          <ThumbnailPlaceholder size="lg" />
          <div>
            <span className="text-sm font-normal">{project.name}</span>
            <span className="text-xs text-text-secondary block">
              {project.company || project.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
