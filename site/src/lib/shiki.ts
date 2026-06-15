import { codeToHtml } from 'shiki';

export async function getHighlightedCode(code: string, lang: string) {
  return await codeToHtml(code, {
    lang,
    theme: "aurora-x",
  });
}


interface HighlightRequest {
  key: string;
  code: string;
  lang: string;
}

export interface HighlightResult {
  key: string;
  html: string;
}

export const getMultipleHighlights = async (
  items: HighlightRequest[]
): Promise<HighlightResult[]> => {
  
  // 1. Map each item to a promise
  const highlightPromises = items.map(async (item) => {
    const html = await getHighlightedCode(item.code, item.lang);

    return {
      key: item.key, 
      html: html  
    };
  });

  const results = await Promise.all(highlightPromises);
  return results;
};