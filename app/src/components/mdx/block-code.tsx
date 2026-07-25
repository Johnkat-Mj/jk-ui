"use client"

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { BtnCopyCode } from '@/components/atoms/btn-copy-code';
import { cx } from '@/lib/utils';

/**
 * Code icon mapping - similar to Laravel's CodeIcon helper
 */
const codeIconMap: Record<string, string> = {
  blade: 'simple-icons--laravel',
  php: 'simple-icons--php',
  vite: 'vite.svg',
  html: 'simple-icons--html5',
  js: 'simple-icons--javascript',
  ts: 'simple-icons--typescript',
  tsx: 'simple-icons--typescript',
  jsx: 'simple-icons--javascript',
  css: 'simple-icons--css3',
  laravel: 'simple-icons--laravel',
  shell: 'simple-icons--gnometerminal',
  bash: 'simple-icons--gnometerminal',
  sh: 'simple-icons--gnometerminal',
  react: 'simple-icons--react',
};

/**
 * Get icon value for a given language/icon name
 */
const getCodeIcon = (icon: string): string => {
  return codeIconMap[icon] || '';
};

/**
 * Check if icon value is a file (contains a dot)
 */
const isIconFile = (iconValue: string): boolean => {
  return iconValue.includes('.');
};

interface BlockCodeProps {
  /** Title to display in the header */
  title: string;
  /** Icon identifier (language name or custom icon) */
  icon?: string | null;
  /** Whether to show shell-style indicator */
  shellStyle?: boolean;
  /** Code content */
  children: ReactNode;
  /** Additional className for the container */
  className?: string;
  /** Value to copy (if different from children content) */
  copyValue?: string;
}


export const BlockCode = ({
  title,
  icon = null,
  shellStyle = false,
  children,
  className,
  copyValue,
}: BlockCodeProps) => {
  const iconVal = icon ? getCodeIcon(icon) : null;
  const codeRef = useRef<HTMLDivElement>(null);

  // Get the value to copy - either from prop or from the code element
  const getValueToCopy = (): string | HTMLElement => {
    if (copyValue) return copyValue;
    if (codeRef.current) {
      const codeElement = codeRef.current.querySelector('[data-code-snippet]');
      if (codeElement) return codeElement as HTMLElement;
    }
    return '';
  };

  return (
    <div className={cx('w-full', className)} ref={codeRef}>
      {/* Header with title, icon, and copy button */}
      <div className="flex justify-between items-center pl-3.5 pr-2.5 pb-1.5 pt-px">
        <div className="flex items-center gap-x-3">
          {iconVal && (
            <>
              {isIconFile(iconVal) ? (
                <img
                  src={`/icons/${iconVal}`}
                  alt={`icon ${icon}`}
                  width={20}
                  className="h-4 w-auto"
                />
              ) : (
                <span aria-hidden="true" className={cx('flex iconify', iconVal)} />
              )}
            </>
          )}
          <span className="text-sm font-medium text-white text-nowrap truncate">{title}</span>
        </div>
        <div className="flex items-center text-gray-200">
          <BtnCopyCode value={() => getValueToCopy()} />
        </div>
      </div>

      {/* Code content container */}
      <div className="relative group overflow-hidden max-h-140 bg-(--astro-code-color-background) border border-gray-700 dark:border-gray-800 inner-radius w-full grid">
        <div
          data-shell-indicator={shellStyle ? 'true' : 'false'}
          data-code-snippet
          className="grid overflow-hidden"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
