# LLC Formation Website - Mindscape Global Formations

**© 2025 Zeeshan Keerio / Mindscape Analytics. All Rights Reserved.**

**PROPRIETARY SOFTWARE - UNAUTHORIZED USE IS PROHIBITED**

A modern, professional website for LLC formation services built with Next.js 15, TypeScript, and Tailwind CSS. Features dual-service offerings: LLC Formation and Software Development (Mindscape Analytics).

---

## ⚖️ Copyright & License

**Copyright (c) 2025 Zeeshan Keerio / Mindscape Analytics**

This software is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without explicit written permission from the copyright holder.

For licensing inquiries, contact:
- **Email**: zeeshan.keerio@mindscapeanalytics.com
- **Phone**: +1-307-210-6155

See [LICENSE](./LICENSE) file for full terms.

---

## 🌟 Features

- 🚀 **Fast Performance** - Built with Next.js 15, optimized for Vercel deployment
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Meta tags, sitemap, and structured data
- 🛡️ **Type Safe** - Full TypeScript support with strict configuration
- 🎨 **Modern UI** - Beautiful components with Radix UI and Lucide icons
- 💬 **Interactive Chatbot** - AI-powered customer support
- 📞 **WhatsApp Integration** - Direct contact through WhatsApp
- 🎯 **Dual Services** - LLC Formation + Software Development
- 🔄 **Rotating CTA** - Smart banner alternating between services
- 📧 **Contact Forms** - Multiple contact points with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (optimized)
- **Analytics**: Vercel Analytics (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd llc-formation-website
```

2. **Install dependencies:**
```bash
pnpm install
```

4. **Start the development server:**
```bash
pnpm dev
```

5. **Open your browser:**
```
http://localhost:3000
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components (Radix)
│   ├── contact-form.tsx  # Main contact form
│   ├── popup-contact-form.tsx # Popup contact form
│   ├── standard-navigation.tsx # Main navigation
│   ├── standard-footer.tsx # Footer component
│   ├── unified-chatbot.tsx # Chatbot widget
│   ├── sticky-cta-bar.tsx # Rotating service banner
│   └── ...
├── lib/                  # Utility functions
│   ├── utils.ts          # Helper functions
│   └── ...
├── public/               # Static assets
├── styles/               # Additional styles
├── vercel.json           # Vercel configuration
├── next.config.mjs       # Next.js configuration
└── tailwind.config.ts    # Tailwind configuration
```

## 🌐 Deployment to Vercel

### Quick Deploy (Recommended)

1. **Push to Git:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

### Detailed Instructions

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for comprehensive deployment guide.

### Using Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

## 📋 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your site URL | No | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_NAME` | Site name | No | `Mindscape Global Formations` |
| `NEXT_PUBLIC_MINDSCAPE_URL` | Mindscape Analytics URL | No | `https://mindscapeanalytics.com` |

See `.env.example` for complete list of available variables.

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Use `pnpm build` to analyze bundle size
- **Caching**: Proper cache headers and Supabase caching
- **CDN**: Static assets served via CDN

## Security Features

- **Input Validation**: Zod schemas for all form inputs
- **Rate Limiting**: Protection against spam and abuse
- **CSRF Protection**: Built-in Next.js CSRF protection
- **XSS Prevention**: Proper input sanitization
- **SQL Injection**: Supabase RLS and parameterized queries

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@mindscapeanalytics.com or join our Discord community.

## Changelog

### v1.0.0
- Initial release
- Complete LLC formation website
- Supabase integration
- Responsive design
- SEO optimization
