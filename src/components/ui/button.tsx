// ============================================================
// SHADCN-STYLE BUTTON — src/components/ui/button.tsx
//
// Used by HeroBlock (hero-block-shadcnui.tsx) for the primary
// and secondary CTA buttons on every non-home page.
//
// Key feature — asChild prop:
//   When asChild=true, Radix UI Slot renders the button styles
//   on the child element (<Link> or <a>) instead of wrapping it
//   in a real <button>. This avoids invalid HTML like <button><a>.
//
// Exports: Button (component), buttonVariants (class string helper)
// ============================================================

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// --- Variant map ---
// cva() builds a className string based on the variant + size you pass in.
// Edit this object to change the visual styles of HeroBlock's CTA buttons.
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:   'bg-slate-100 text-slate-950 hover:bg-white',
        outline:   'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
        secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
        ghost:     'text-slate-100 hover:bg-white/10',
        link:      'text-cyan-200 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm:      'h-9 px-3 text-xs',
        lg:      'h-11 px-6',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Set asChild=true when you want to render this as a <Link> or <a>
  asChild?: boolean;
}

// The Button component itself — renders as <button> by default,
// or as its child element when asChild=true (polymorphic via Slot).
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
