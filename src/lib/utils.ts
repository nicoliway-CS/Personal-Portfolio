// ============================================================
// UTILITY — src/lib/utils.ts
//
// cn() is a tiny className helper that merges multiple class strings
// into one, filtering out any falsy values (false, null, undefined).
//
// Usage: cn("base-class", condition && "conditional-class", "always-on")
//
// Note: This is a lightweight version. It does NOT use tailwind-merge,
// so conflicting Tailwind classes (e.g. "text-red-500 text-blue-500")
// won't be auto-resolved — the last one wins in the stylesheet.
// If you ever hit class conflicts, consider installing tailwind-merge
// and updating this function.
// ============================================================

export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}
