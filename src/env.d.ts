/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface SvgIconArgs {
    class?: string | null,
    stroke?: string | null,
    fill?: string | null,
    width?: string | null, // needs to specify type, px, em...
    height?: string | null, // needs to specify type, px, em...
    strokeWidth?: number
}