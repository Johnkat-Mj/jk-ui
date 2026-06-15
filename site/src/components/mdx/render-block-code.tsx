

import type { SupportedLanguage } from '@/types/index';
import { getHighlightedCode } from '@/lib/shiki';

interface RenderBlockCodeProps {
    code: string;
    lang: SupportedLanguage;
}

export const RenderBlockCode = async({ code, lang }: RenderBlockCodeProps) => {
    const html = await getHighlightedCode(code, lang);
    return (
    <figure
      dangerouslySetInnerHTML={{ __html: html }}
      data-code-snippet
      className="*:py-4 w-full min-w-max"
    />
  );
}
