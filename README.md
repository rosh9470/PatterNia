# PatternNia - Handmade Laptop & iPad Cases

A beautiful, responsive React website for PatternNia, a handmade laptop and iPad case business. Built with React, React Router, and optimized for deployment on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Beautiful layouts that work on desktop, tablet, and mobile
- **Product Gallery**: Showcase of handmade cases with filtering and sorting
- **Custom Order System**: Contact form for custom case requests
- **About Page**: Story of the artisan and crafting process
- **FAQ Section**: Comprehensive answers to common questions
- **Modern UI**: Clean, friendly design with handmade/artisanal aesthetic
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **GitHub Pages Ready**: Configured for easy deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rosh9470/PatterNia.git
   cd PatterNia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
patternia-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── FAQ.jsx
│   ├── data/
│   │   └── products.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Brand Colors

The website uses CSS custom properties for easy theming. Update the colors in `src/index.css`:

```css
:root {
  --primary-color: #8B7355;    /* Warm brown */
  --secondary-color: #D4A574;  /* Light camel */
  --accent-color: #F4E4BC;     /* Cream */
  --text-dark: #2C2C2C;
  --text-light: #666;
  --background-light: #FAF8F5;
  --border-color: #E8E0D6;
}
```

### Adding Products

Add new products to `src/data/products.js`:

```javascript
{
  id: 7,
  name: "Your Product Name",
  category: "laptop", // or "ipad"
  size: "13-14 inch",
  price: 45,
  description: "Product description...",
  image: "/images/your-product.jpg",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  inStock: true
}
```

### Replacing Placeholder Images

1. Add your images to the `public/images/` directory
2. Update the image paths in `src/data/products.js`
3. Replace placeholder images in components with actual photos

## 📦 Deployment to GitHub Pages

### Automatic Deployment with GitHub Actions (Recommended)

This project is configured with GitHub Actions for automatic deployment. Simply push to the main branch and your site will be deployed automatically.

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy PatternNia website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Scroll to "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

3. **Access your site**
   - Your site will be available at: `https://rosh9470.github.io/PatterNia`
   - It may take a few minutes for the first deployment to complete

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **The `dist` folder contains your built website**
   - Upload the contents of the `dist` folder to any static hosting service
   - Or commit the `dist` folder to a `gh-pages` branch

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for search engines and social media
- **Alt Text**: All images include descriptive alt text
- **Semantic HTML**: Proper heading structure and semantic elements
- **Performance**: Optimized images and efficient React code
- **Mobile-First**: Responsive design prioritizing mobile experience

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the FAQ section of the website
2. Review this README for common solutions
3. Open an issue on GitHub
4. Contact the development team

## 🎨 Design Credits

- Color palette inspired by natural, handmade aesthetics
- Typography: System fonts for performance and accessibility
- Icons: Unicode emojis for universal compatibility
- Layout: CSS Grid and Flexbox for modern, responsive design

## 🔄 Future Enhancements

- [ ] Product image galleries with multiple photos
- [ ] Customer review system
- [ ] Blog section for crafting stories
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Inventory management
- [ ] Email newsletter signup
- [ ] Social media integration
- [ ] Multi-language support

---

**Made with ❤️ for PatternNia**

*This website showcases the beautiful handmade laptop and iPad cases created by our talented artisan. Each case is crafted with love, attention to detail, and a commitment to quality that you can see and feel.*
