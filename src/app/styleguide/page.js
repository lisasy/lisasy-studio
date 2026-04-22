"use client"

import React, { useState } from 'react';
import TwoColumn from '@/components/TwoColumn';
import { List, LayoutGrid } from 'lucide-react';

function Swatch({ color, name, token, className = "" }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`size-12 rounded-[10px] border border-foreground/10 ${className}`} style={{ backgroundColor: color }} />
      <div>
        <span className="text-sm font-normal block">{name}</span>
        <span className="text-xs text-text-secondary block">{token}</span>
        <span className="text-xs text-text-secondary block">{color}</span>
      </div>
    </div>
  );
}

function OpacitySwatch({ label, className, token }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`size-12 rounded-[10px] border border-foreground/10 ${className}`} />
      <div>
        <span className="text-sm font-normal block">{label}</span>
        <span className="text-xs text-text-secondary block">{token}</span>
      </div>
    </div>
  );
}

function SpecRow({ label, value, description }) {
  return (
    <div className="flex items-baseline gap-4 py-2 border-b border-foreground/5 last:border-0">
      <span className="text-sm font-normal w-48 shrink-0">{label}</span>
      <code className="text-xs bg-black/[0.06] px-2 py-0.5 rounded font-mono shrink-0">{value}</code>
      {description && <span className="text-xs text-text-secondary">{description}</span>}
    </div>
  );
}

export default function Styleguide() {
  const [demoTab, setDemoTab] = useState("all");
  const [demoView, setDemoView] = useState("list");

  return (
    <article>
      <div className="flex flex-col gap-12">
        <h3>Styleguide</h3>

        {/* ---- TYPOGRAPHY ---- */}
        <section className="flex flex-col gap-6">
          <h4>Typography</h4>

          <div className="flex flex-col gap-1 mb-2">
            <span className="text-sm font-normal text-text-secondary">Font Family</span>
            <span className="text-lg font-normal">GT America Standard</span>
            <span className="text-xs text-text-secondary">Weights: Light (300), Regular (400), Bold (700)</span>
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <span className="text-sm font-normal text-text-secondary">Font Weights</span>
            <div>
              <span className="text-lg font-light leading-[1.45] block">Light (300) — &ldquo;But is there really such a thing as nothing, as nothingness? I don&rsquo;t know. I know we&rsquo;re still here, who knows for how long, ablaze with our care, its ongoing song.&rdquo;</span>
            </div>
            <div>
              <span className="text-lg font-normal leading-[1.45] block">Regular (400) — &ldquo;But is there really such a thing as nothing, as nothingness? I don&rsquo;t know. I know we&rsquo;re still here, who knows for how long, ablaze with our care, its ongoing song.&rdquo;</span>
            </div>
            <div>
              <span className="text-lg font-bold leading-[1.45] block">Bold (700) — &ldquo;But is there really such a thing as nothing, as nothingness? I don&rsquo;t know. I know we&rsquo;re still here, who knows for how long, ablaze with our care, its ongoing song.&rdquo;</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1>Heading 1</h1>
              <span className="text-xs text-text-secondary">h1 · 30/36/48px · line-height 1.33</span>
            </div>
            <div>
              <h2>Heading 2</h2>
              <span className="text-xs text-text-secondary">h2 · 24/30/36px · line-height 1.33</span>
            </div>
            <div>
              <h3>Heading 3</h3>
              <span className="text-xs text-text-secondary">h3 · 20/24/30px · line-height 1.33 · Page titles</span>
            </div>
            <div>
              <h4>Heading 4</h4>
              <span className="text-xs text-text-secondary">h4 · 18/20/24px · line-height 1.33</span>
            </div>
            <div>
              <h5>Heading 5</h5>
              <span className="text-xs text-text-secondary">h5 · 16/18/20px · line-height 1.33 · TwoColumn labels</span>
            </div>
            <div>
              <h6>Heading 6</h6>
              <span className="text-xs text-text-secondary">h6 · 14/16/18px · line-height 1.33 · Captions</span>
            </div>

            <div className="h-px bg-foreground/10" />

            <div>
              <p>Body text — GT America Light at the base responsive scale. Used for bios, long-form content, and descriptions across the site.</p>
              <span className="text-xs text-text-secondary">p · base/xl/2xl · font-light (300) · line-height 1.45</span>
            </div>
            <div>
              <p className="smaller">Smaller body — used inside TwoColumn sections on the About page and for secondary content.</p>
              <span className="text-xs text-text-secondary">.smaller · base/lg/xl · font-light (300) · line-height 1.45</span>
            </div>
            <div>
              <span className="text-lg font-normal leading-[1.2] block mb-1">List item text — Regular weight at 18px</span>
              <span className="text-xs text-text-secondary">text-lg font-normal · 18px · line-height 1.2 · Product list rows</span>
            </div>
            <div>
              <span className="text-base font-normal leading-[1.2] block mb-1">UI chrome text — Regular weight at 16px</span>
              <span className="text-xs text-text-secondary">text-base font-normal · 16px · line-height 1.2 · Tabs, nav, item count</span>
            </div>
          </div>
        </section>

        {/* ---- COLORS ---- */}
        <section className="flex flex-col gap-6">
          <h4>Colors</h4>

          <div>
            <span className="text-sm font-normal text-text-secondary mb-3 block">Theme Tokens</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Swatch color="#131313" name="Foreground" token="--color-foreground" />
              <Swatch color="#EAE9E3" name="Background" token="--color-background" />
              <Swatch color="#dfddd2" name="Background Secondary" token="--color-background-secondary" />
              <Swatch color="#131313" name="Accent" token="--color-accent" />
              <Swatch color="#B7B12A" name="Accent Hover" token="--color-accent-hover" />
              <Swatch color="#757367" name="Text Secondary" token="--color-text-secondary" />
            </div>
          </div>

          <div>
            <span className="text-sm font-normal text-text-secondary mb-3 block">Opacity Surfaces</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <OpacitySwatch label="Control Inactive" className="bg-black/[0.06]" token="bg-black/[0.06]" />
              <OpacitySwatch label="Control Hover" className="bg-black/[0.1]" token="hover:bg-black/[0.1]" />
              <OpacitySwatch label="List Hover" className="bg-black/[0.03]" token="hover:bg-black/[0.03]" />
              <OpacitySwatch label="Divider" className="bg-foreground/10" token="bg-foreground/10" />
              <OpacitySwatch label="Thumbnail" className="bg-[#d9d9d9]" token="bg-[#d9d9d9]" />
            </div>
          </div>
        </section>

        {/* ---- SPACING ---- */}
        <section className="flex flex-col gap-6">
          <h4>Spacing &amp; Layout</h4>

          <div className="flex flex-col">
            <SpecRow label="Nav width" value="14rem (224px)" description="Sidebar navigation" />
            <SpecRow label="Mobile header" value="3.5rem (56px)" description="Top bar on mobile" />
            <SpecRow label="Content max-width" value="max-w-4xl (896px)" description="Main content area" />
            <SpecRow label="Content padding (mobile)" value="p-6 (24px)" />
            <SpecRow label="Content padding (desktop)" value="md:p-8 (32px)" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-normal text-text-secondary mb-2">Gap Scale</span>
            <SpecRow label="Major sections" value="gap-10 (40px)" description="Title → bio → table" />
            <SpecRow label="Controls → content" value="gap-5 (20px)" description="Toolbar to list" />
            <SpecRow label="Grid / cards" value="gap-4 (16px)" description="Home cards, grid thumbnails" />
            <SpecRow label="Controls / sections" value="gap-2 (8px)" description="Between tabs, list sections" />
            <SpecRow label="Nav items" value="gap-1 (4px)" description="Sidebar links" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-normal text-text-secondary mb-2">Component Dimensions</span>
            <SpecRow label="List item row" value="h-12 (48px)" />
            <SpecRow label="List item padding" value="px-6 py-3 (24/12px)" />
            <SpecRow label="Year column" value="w-[129px]" description="Fixed left column" />
            <SpecRow label="Thumbnail (list)" value="size-10 (40px)" />
            <SpecRow label="Thumbnail (grid)" value="aspect-square" description="Full width, square" />
            <SpecRow label="Tab height" value="h-8 (32px)" />
            <SpecRow label="Tab padding" value="px-4 py-1 (16/4px)" />
            <SpecRow label="Nav link padding" value="py-1 px-4 (4/16px)" />
          </div>
        </section>

        {/* ---- BORDER RADIUS ---- */}
        <section className="flex flex-col gap-6">
          <h4>Border Radius</h4>
          <div className="flex gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-black/[0.06] rounded-[10px]" />
              <span className="text-xs text-text-secondary">10px</span>
              <span className="text-xs text-text-secondary">Controls, hovers</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-[#d9d9d9] rounded-[9px]" />
              <span className="text-xs text-text-secondary">9px</span>
              <span className="text-xs text-text-secondary">Thumbnails</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-black/[0.06] rounded-lg" />
              <span className="text-xs text-text-secondary">8px (lg)</span>
              <span className="text-xs text-text-secondary">Nav links</span>
            </div>
          </div>
        </section>

        {/* ---- COMPONENTS ---- */}
        <section className="flex flex-col gap-6">
          <h4>Components</h4>

          {/* Segmented Control */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">Segmented Control (Tabs)</span>
            <div className="flex gap-2">
              {["All", "Work", "Personal"].map((label) => (
                <button
                  key={label}
                  onClick={() => setDemoTab(label.toLowerCase())}
                  className={`flex items-center justify-center h-8 px-4 py-1 rounded-[10px] text-base font-normal leading-[1.2] transition-colors cursor-pointer ${
                    demoTab === label.toLowerCase()
                      ? "bg-foreground text-background"
                      : "bg-black/[0.06] text-foreground hover:bg-black/[0.1]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="text-xs text-text-secondary">text-base font-normal · h-8 px-4 py-1 rounded-[10px] (32px) · Active: bg-foreground text-background · Inactive: bg-black/[0.06]</span>
          </div>

          {/* View Toggle */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">View Toggle</span>
            <div className="flex gap-2">
              <button
                onClick={() => setDemoView("list")}
                className={`flex items-center justify-center h-8 px-4 py-1 rounded-[10px] transition-colors cursor-pointer ${
                  demoView === "list"
                    ? "bg-foreground text-background"
                    : "bg-black/[0.06] text-foreground hover:bg-black/[0.1]"
                }`}
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setDemoView("grid")}
                className={`flex items-center justify-center h-8 px-4 py-1 rounded-[10px] transition-colors cursor-pointer ${
                  demoView === "grid"
                    ? "bg-foreground text-background"
                    : "bg-black/[0.06] text-foreground hover:bg-black/[0.1]"
                }`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>
            <span className="text-xs text-text-secondary">Same surface treatment as tabs · Icon: lucide 16px</span>
          </div>

          {/* List Item */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">List Item</span>
            <div className="flex flex-col max-w-xl">
              <div className="group flex h-12 items-center px-6 py-3 rounded-[10px] transition-colors hover:bg-black/[0.03] cursor-pointer">
                <span className="flex-1 text-lg font-normal leading-[1.2]">
                  <span className="group-hover:hidden">Company Title</span>
                  <span className="hidden group-hover:inline">Company · Role detail on hover</span>
                </span>
                <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />
              </div>
              <div className="group flex h-12 items-center px-6 py-3 rounded-[10px] transition-colors hover:bg-black/[0.03] cursor-pointer">
                <span className="flex-1 text-lg font-normal leading-[1.2] opacity-60">Project Name</span>
                <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />
              </div>
            </div>
            <span className="text-xs text-text-secondary">h-12 px-6 py-3 · Title: full opacity · Project: opacity-60 · Hover: bg-black/[0.03] rounded-[10px]</span>
          </div>

          {/* Thumbnail */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">Thumbnail</span>
            <div className="flex gap-4 items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="size-10 rounded-[9px] bg-[#d9d9d9]" />
                <span className="text-xs text-text-secondary">Small (40px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 aspect-square rounded-[9px] bg-[#d9d9d9]" />
                <span className="text-xs text-text-secondary">Grid (square)</span>
              </div>
            </div>
          </div>

          {/* TwoColumn */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">TwoColumn Layout</span>
            <TwoColumn title="Section Title">
              <p className="smaller">
                Content spans two columns on desktop. Used on the About page for structured sections like Artist Statement, Education, and Contact.
              </p>
            </TwoColumn>
            <span className="text-xs text-text-secondary">md:grid-cols-3 · Title: h5 col-1 · Content: md:col-span-2</span>
          </div>

          {/* Home Card */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">Home Page Card</span>
            <div className="w-64">
              <div className="rounded-lg border border-foreground/10 bg-background-secondary/50 overflow-hidden transition-colors hover:bg-background-secondary cursor-pointer">
                <div className="aspect-[4/3] bg-background-secondary" />
                <div className="px-4 py-3">
                  <span className="text-base font-normal">Section Name</span>
                </div>
              </div>
            </div>
            <span className="text-xs text-text-secondary">rounded-lg · border-foreground/10 · bg-background-secondary/50 · Image: aspect-[4/3]</span>
          </div>
        </section>

        {/* ---- INTERACTIVE PATTERNS ---- */}
        <section className="flex flex-col gap-6">
          <h4>Interactive Patterns</h4>
          <div className="flex flex-col">
            <SpecRow label="Control hover" value="hover:bg-black/[0.1]" description="Tabs, view toggles" />
            <SpecRow label="List hover" value="hover:bg-black/[0.03]" description="List rows (subtler)" />
            <SpecRow label="Nav hover" value="hover:bg-background-secondary" description="Sidebar links" />
            <SpecRow label="Active control" value="bg-foreground text-background" description="Selected tab/toggle" />
            <SpecRow label="Active nav" value="bg-background-secondary" description="Current page" />
            <SpecRow label="Transition" value="transition-colors" description="All interactive surfaces" />
            <SpecRow label="Cursor" value="cursor-pointer" description="All clickable elements" />
          </div>
        </section>

        <div className="h-px bg-foreground/10" />
        <p className="text-xs text-text-secondary">
          Reference doc: <code className="bg-black/[0.06] px-1.5 py-0.5 rounded font-mono">src/data/styleguide.md</code>
        </p>
      </div>
    </article>
  );
}
