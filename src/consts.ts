// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "もぺ";
export const SITE_TITLE = "もぺブログ";
export const SITE_DESCRIPTION = "技術系解説ブログ";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = `タグ - ${SITE_TITLE}`;
export const Tags_DESCRIPTION = `${SITE_TITLE}の全タグとそれぞれのタグの記事数`;

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `${tag}タグの全記事 - ${SITE_TITLE}`,
    description: `${SITE_TITLE}の${tag}カテゴリの全記事`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `${category}カテゴリの全記事 - ${SITE_TITLE}`,
    description: `${SITE_TITLE}の${category}カテゴリの全記事`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { title: "プライバシーポリシー", href: "/posts/privacy-policy/" },
  { title: "免責事項", href: "/posts/disclaimer/" },
  { title: "お問い合わせ", href: "/contact/" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [{ href: "/tags/", title: "タグ" }];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler--rss", label: "RSS" },
  {
    href: "https://nostree.me/npub1tehcg89zc3ynfewfq8xvn69dxxvymtyel27unmj4xzvj3d7y8p7qe783a6",
    icon: "ph--link",
    label: "Nostree",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `検索 - ${SITE_TITLE}`;
export const SEARCH_PAGE_DESCRIPTION = `${SITE_TITLE}の全記事を検索`;
