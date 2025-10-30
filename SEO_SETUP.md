# SEO Setup Guide

This document explains the SEO implementation and provides instructions for creating missing assets.

## ✅ Implemented Features

### Meta Tags & Social Media

- ✅ Complete meta tags (title, description, author)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Alternate language links (hreflang)
- ✅ Robots meta tag support

### Structured Data

- ✅ JSON-LD Person schema
- ✅ Organization and education data
- ✅ Social profile links

### Technical SEO

- ✅ robots.txt configured
- ✅ Sitemap integration (@astrojs/sitemap)
- ✅ Web manifest (PWA basics)
- ✅ Security.txt
- ✅ Theme color meta tags

### Files Created

```tree
src/
├── components/seo.astro         # Main SEO component
└── config/seo.ts                # SEO configuration

public/
├── robots.txt                   # Search engine directives
├── site.webmanifest            # PWA manifest
└── .well-known/
    └── security.txt            # Security contact info
```

## 📝 Missing Assets (To Create)

You need to create the following image assets in the `public/` directory:

### Favicons

```tree
public/
├── favicon-16x16.png           # 16x16 favicon
├── favicon-32x32.png           # 32x32 favicon
├── apple-touch-icon.png        # 180x180 Apple touch icon
├── favicon-192x192.png         # 192x192 for manifest
└── favicon-512x512.png         # 512x512 for manifest
```

### Open Graph Image

```tree
public/
└── og-image.png                # 1200x630 Open Graph image
```

## 🎨 Creating the Assets

### Quick Setup with Favicon Generator

1. **Use a favicon generator** like:
   - <https://realfavicongenerator.net/>
   - <https://favicon.io/>

2. **Upload your logo/profile image**

3. **Download the generated package** containing all sizes

4. **Place files in `/public/` directory**

### Manual Creation (Recommended sizes)

| File                   | Size     | Purpose              |
| ---------------------- | -------- | -------------------- |
| `favicon-16x16.png`    | 16x16    | Browser tabs         |
| `favicon-32x32.png`    | 32x32    | Browser tabs         |
| `apple-touch-icon.png` | 180x180  | iOS home screen      |
| `favicon-192x192.png`  | 192x192  | Android/Chrome       |
| `favicon-512x512.png`  | 512x512  | Android/Chrome       |
| `og-image.png`         | 1200x630 | Social media preview |

### OG Image Tips

- **Dimensions**: 1200x630px (Facebook recommended)
- **Include**: Your name, role, and maybe a portrait
- **Keep text readable**: Minimum 14px font size
- **Safe zone**: Keep important content within 1200x600px center
- **File size**: Under 1MB

## 📊 Testing Your SEO

### Tools to Verify

1. **Meta Tags**
   - [metatags.io](https://metatags.io/)
   - Check how your site appears on Google, Facebook, Twitter

2. **Open Graph**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

3. **Twitter Cards**
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

4. **Structured Data**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema Markup Validator](https://validator.schema.org/)

5. **General SEO**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (built into Chrome DevTools)

## 🔧 Customization

### Update Site Information

Edit `/src/config/seo.ts` to customize:

- Site name
- Default descriptions
- Keywords
- Social media handles

### Per-Page SEO

Each page can override SEO settings:

```astro
---
import BaseLayout from '@/layouts/base-layout.astro';

const customSeo = {
  title: 'Custom Page Title',
  description: 'Custom description for this page',
  ogImage: '/custom-og-image.png',
  ogType: 'article',
};
---

<BaseLayout {...customSeo}>
  <!-- Page content -->
</BaseLayout>
```

## 📈 SEO Checklist

- [x] Meta tags implemented
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured Data (JSON-LD)
- [x] Sitemap configured
- [x] robots.txt
- [x] Canonical URLs
- [x] hreflang tags (i18n)
- [ ] Create favicons (all sizes)
- [ ] Create OG image
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph on Facebook debugger
- [ ] Verify Twitter Card on Twitter validator

## 🚀 Next Steps

1. **Create the missing images** (favicons + OG image)
2. **Deploy your site** to production
3. **Test with the tools** listed above
4. **Submit sitemap** to search engines:
   - Google: <https://search.google.com/search-console>
   - Bing: <https://www.bing.com/webmasters>
5. **Monitor performance** in Google Search Console

---

Your site is now optimized for search engines and social media sharing! 🎉
