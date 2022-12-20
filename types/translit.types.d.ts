declare module 'translit-npm' {
  export function translitForUrl(russianString: string): string;
  export function translitFromEnglish(englString: string): string;
}