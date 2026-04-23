"use client"

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { getFilteredProductGroups } from '@/lib/product-design';

function Thumbnail({ src, size = "sm", onWhite = false }) {
  const fitClass = onWhite ? "object-contain" : "object-cover";
  const whitePlate = onWhite ? "bg-[#ffffff]" : "";
  const innerPad = onWhite ? `p-1.5 flex items-center justify-center ${whitePlate}` : "";
  if (size === "lg") {
    return src
      ? (
        <div className={`w-full aspect-square rounded-[9px] overflow-hidden ${whitePlate}`}>
          <div className={`relative w-full h-full ${innerPad}`}>
            <Image src={src} alt="" fill sizes="256px" className={fitClass} />
          </div>
        </div>
      )
      : <div className="w-full aspect-square rounded-[9px] bg-[#d9d9d9]" />;
  }
  return src
    ? (
      <div
        className={`size-10 rounded-[9px] overflow-hidden flex-shrink-0 ${whitePlate}`}
      >
        <div className={`relative size-full ${innerPad}`}>
          <Image src={src} alt="" fill sizes="40px" className={fitClass} />
        </div>
      </div>
    )
    : <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />;
}

function ListItem({ text, detail, type = "title", showThumbnail = true, thumbnail, thumbnailOnWhite }) {
  const isProject = type === "project";
  return (
    <div className="flex min-h-12 items-center px-6 py-3 rounded-[10px]">
      <div className="flex-1 min-w-0">
        <span className={`text-lg font-normal leading-[1.2] block ${isProject ? "opacity-60" : ""}`}>{text}</span>
        {detail ? <span className="text-base text-text-secondary leading-[1.2] block">{detail}</span> : null}
      </div>
      {showThumbnail ? <Thumbnail src={thumbnail} onWhite={thumbnailOnWhite} /> : null}
    </div>
  );
}

export default function ProductSoftware() {
  const groups = useMemo(() => getFilteredProductGroups("all"), []);

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
          <ListView groups={groups} />
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
                  detail={group.companyDetail}
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
