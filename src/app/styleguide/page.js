"use client"

import React, { useState } from 'react';
import TwoColumn from '@/components/TwoColumn';
import PageSection from '@/components/PageSection';
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
      <code className="text-xs bg-background-secondary px-2 py-0.5 rounded font-mono shrink-0">{value}</code>
      {description && <span className="text-xs text-text-secondary">{description}</span>}
    </div>
  );
}

const TYPE_SCALE = [
  { style: "h1", mobile: "30px · text-3xl", md: "36px · text-4xl", lg: "48px · text-5xl", weight: "Regular (400)", lineHeight: "1.33", usage: "Page hero (rare)" },
  { style: "h2", mobile: "24px · text-2xl", md: "30px · text-3xl", lg: "36px · text-4xl", weight: "Regular (400)", lineHeight: "1.33", usage: "Section title" },
  { style: "h3", mobile: "20px · text-xl", md: "24px · text-2xl", lg: "30px · text-3xl", weight: "Regular (400)", lineHeight: "1.33", usage: "Page title" },
  { style: "h4", mobile: "18px · text-lg", md: "20px · text-xl", lg: "24px · text-2xl", weight: "Regular (400)", lineHeight: "1.33", usage: "Subsection" },
  { style: "h5", mobile: "16px · text-base", md: "18px · text-lg", lg: "20px · text-xl", weight: "Regular (400)", lineHeight: "1.33", usage: "TwoColumn labels" },
  { style: "h6", mobile: "14px · text-sm", md: "16px · text-base", lg: "18px · text-lg", weight: "Regular (400)", lineHeight: "1.33", usage: "Captions" },
  { style: "p", mobile: "16px · text-base", md: "18px · text-lg", lg: "20px · text-xl", weight: "Regular (400)", lineHeight: "1.45", usage: "Default body, TwoColumn" },
  { style: ".lead", mobile: "16px · text-base", md: "20px · text-xl", lg: "24px · text-2xl", weight: "Regular (400)", lineHeight: "1.45", usage: "Page intros, lead paragraphs" },
  { style: ".text-list", mobile: "16px · text-base", md: "18px · text-lg", lg: "18px · text-lg", weight: "Regular (400)", lineHeight: "1.2", usage: "Product list rows, sidebar titles" },
  { style: ".text-ui", mobile: "16px · text-base", md: "16px · text-base", lg: "16px · text-base", weight: "Regular (400)", lineHeight: "1.2", usage: "Nav, tabs, metadata" },
];

function TypeScaleTable() {
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[42rem] text-sm border-collapse">
        <thead>
          <tr className="text-left text-xs text-text-secondary border-b border-foreground/10">
            <th className="py-2 pr-4 font-normal">Style</th>
            <th className="py-2 pr-4 font-normal">&lt; 768px</th>
            <th className="py-2 pr-4 font-normal">md · 768px+</th>
            <th className="py-2 pr-4 font-normal">lg · 1024px+</th>
            <th className="py-2 pr-4 font-normal">Weight</th>
            <th className="py-2 pr-4 font-normal">LH</th>
            <th className="py-2 font-normal">Usage</th>
          </tr>
        </thead>
        <tbody>
          {TYPE_SCALE.map((row) => (
            <tr key={row.style} className="border-b border-foreground/5 align-top">
              <td className="py-2.5 pr-4 font-normal">
                <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">{row.style}</code>
              </td>
              <td className="py-2.5 pr-4 text-text-secondary">{row.mobile}</td>
              <td className="py-2.5 pr-4 text-text-secondary">{row.md}</td>
              <td className="py-2.5 pr-4 text-text-secondary">{row.lg}</td>
              <td className="py-2.5 pr-4 text-text-secondary">{row.weight}</td>
              <td className="py-2.5 pr-4 text-text-secondary">{row.lineHeight}</td>
              <td className="py-2.5 text-text-secondary">{row.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TypeSample({ label, spec, children }) {
  return (
    <div>
      {children}
      <span className="text-xs text-text-secondary block mt-1">{label} · {spec}</span>
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

          <div className="flex flex-col gap-2 mb-6">
            <span className="text-sm font-normal text-text-secondary">Breakpoints</span>
            <p className="!mb-0 text-sm text-text-secondary leading-[1.45]">
              Four semantic roles — <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">p</code>, <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">.lead</code>, <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">.text-list</code>, <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">.text-ui</code> — scale at <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">md</code> (768px) and <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">lg</code> (1024px) where noted. Page layout uses <code className="text-xs bg-background-secondary px-1.5 py-0.5 rounded font-mono">PageSection</code> for spacing only.
            </p>
            <div className="flex flex-col">
              <SpecRow label="Mobile (default)" value="&lt; 768px" description="Base sizes — no breakpoint prefix" />
              <SpecRow label="md" value="768px+" description="Second step in heading/body scale" />
              <SpecRow label="lg" value="1024px+" description="Largest step in heading/body scale" />
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <span className="text-sm font-normal text-text-secondary">Responsive Type Scale</span>
            <TypeScaleTable />
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
            <TypeSample label="h1" spec="30px → 36px → 48px · line-height 1.33">
              <h1>Heading 1</h1>
            </TypeSample>
            <TypeSample label="h2" spec="24px → 30px → 36px · line-height 1.33">
              <h2>Heading 2</h2>
            </TypeSample>
            <TypeSample label="h3" spec="20px → 24px → 30px · line-height 1.33 · Page titles">
              <h3>Heading 3</h3>
            </TypeSample>
            <TypeSample label="h4" spec="18px → 20px → 24px · line-height 1.33">
              <h4>Heading 4</h4>
            </TypeSample>
            <TypeSample label="h5" spec="16px → 18px → 20px · line-height 1.33 · TwoColumn labels">
              <h5>Heading 5</h5>
            </TypeSample>
            <TypeSample label="h6" spec="14px → 16px → 18px · line-height 1.33 · Captions">
              <h6>Heading 6</h6>
            </TypeSample>

            <div className="h-px bg-foreground/10" />

            <TypeSample label="p" spec="16px → 18px → 20px · font-normal (400) · line-height 1.45">
              <p>Body text — GT America Light at the base responsive scale. Used for bios, long-form content, and descriptions across the site.</p>
            </TypeSample>
            <TypeSample label=".lead" spec="16px → 20px → 24px · font-normal (400) · line-height 1.45">
              <p className="lead">Lead text — page intros and opening paragraphs that need more presence than body copy.</p>
            </TypeSample>
            <div>
              <span className="text-list block mb-1">List item text — scales with body at md</span>
              <span className="text-xs text-text-secondary">.text-list · 16px → 18px → 18px · line-height 1.2 · Product list rows, sidebar</span>
            </div>
            <div>
              <span className="text-ui block mb-1">UI chrome text — fixed at 16px</span>
              <span className="text-xs text-text-secondary">.text-ui · 16px at all breakpoints · line-height 1.2 · Tabs, nav, metadata</span>
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
              <OpacitySwatch label="Control Inactive" className="bg-background-secondary" token="bg-background-secondary" />
              <OpacitySwatch label="Control Hover" className="bg-background-secondary-hover" token="hover:bg-background-secondary-hover" />
              <OpacitySwatch label="List Hover" className="bg-background-hover" token="hover:bg-background-hover" />
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
              <div className="size-16 bg-background-secondary rounded-[10px]" />
              <span className="text-xs text-text-secondary">10px</span>
              <span className="text-xs text-text-secondary">Controls, hovers</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-[#d9d9d9] rounded-[9px]" />
              <span className="text-xs text-text-secondary">9px</span>
              <span className="text-xs text-text-secondary">Thumbnails</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-background-secondary rounded-lg" />
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
                  className={`flex items-center justify-center h-8 px-4 py-1 rounded-[10px] text-ui transition-colors cursor-pointer ${
                    demoTab === label.toLowerCase()
                      ? "bg-foreground text-background"
                      : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="text-xs text-text-secondary">.text-ui · h-8 px-4 py-1 rounded-[10px] (32px) · Active: bg-foreground text-background · Inactive: bg-background-secondary</span>
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
                    : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
                }`}
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setDemoView("grid")}
                className={`flex items-center justify-center h-8 px-4 py-1 rounded-[10px] transition-colors cursor-pointer ${
                  demoView === "grid"
                    ? "bg-foreground text-background"
                    : "bg-background-secondary text-foreground hover:bg-background-secondary-hover"
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
              <div className="group flex h-12 items-center px-6 py-3 rounded-[10px] transition-colors hover:bg-background-hover cursor-pointer">
                <span className="flex-1 text-list">
                  <span className="group-hover:hidden">Company Title</span>
                  <span className="hidden group-hover:inline">Company · Role detail on hover</span>
                </span>
                <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />
              </div>
              <div className="group flex h-12 items-center px-6 py-3 rounded-[10px] transition-colors hover:bg-background-hover cursor-pointer">
                <span className="flex-1 text-list opacity-60">Project Name</span>
                <div className="size-10 rounded-[9px] bg-[#d9d9d9] flex-shrink-0" />
              </div>
            </div>
            <span className="text-xs text-text-secondary">h-12 px-6 py-3 · .text-list · Title: full opacity · Project: opacity-60 · Hover: bg-background-hover rounded-[10px]</span>
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

          {/* PageSection */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">PageSection Layout</span>
            <PageSection>
              <h5 className="mb-0">Section Title</h5>
              <p className="!mb-0">Spacing-only wrapper — gap-4 md:gap-7, no typography. Pass narrow for max-w-3xl content.</p>
            </PageSection>
            <span className="text-xs text-text-secondary">flex flex-col gap-4 md:gap-7 · optional narrow (max-w-3xl)</span>
          </div>

          {/* TwoColumn */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-normal">TwoColumn Layout</span>
            <TwoColumn title="Section Title">
              <p>
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
                  <span className="text-ui">Section Name</span>
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
            <SpecRow label="Control hover" value="hover:bg-background-secondary-hover" description="Tabs, view toggles" />
            <SpecRow label="List hover" value="hover:bg-background-secondary-hover" description="List rows" />
            <SpecRow label="Nav hover" value="hover:bg-background-secondary" description="Sidebar links" />
            <SpecRow label="Active control" value="bg-foreground text-background" description="Selected tab/toggle" />
            <SpecRow label="Active nav" value="bg-background-secondary" description="Current page" />
            <SpecRow label="Transition" value="transition-colors" description="All interactive surfaces" />
            <SpecRow label="Cursor" value="cursor-pointer" description="All clickable elements" />
          </div>
        </section>

        <div className="h-px bg-foreground/10" />
        <p className="text-xs text-text-secondary">
          Reference doc: <code className="bg-background-secondary px-1.5 py-0.5 rounded font-mono">src/data/styleguide.md</code>
        </p>
      </div>
    </article>
  );
}
