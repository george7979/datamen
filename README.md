# Datamen Website - Wersja Finalna

## 🚀 Quick Start

### Viewing the Website
The website is currently running at: **http://localhost:8000**

Open this URL in your browser to see the updated landing page.

### Alternative: Start Your Own Server
If the server is not running, you can start it using any of these methods:

```bash
# Python 3 (recommended)
python3 -m http.server 8000

# Using the included server script
python3 server.py

# Node.js (if available)
npx http-server -p 8000
```

## 📱 Features to Test

### Desktop Experience
1. **Navigation**: Smooth scrolling between sections
2. **Hero Section**: Glass morphism effects on cards
3. **Services**: Hover effects on service cards
4. **Process**: Interactive timeline
5. **Contact Form**: Validation and submission
6. **WhatsApp Button**: Opens WhatsApp with pre-filled message

### Mobile Experience
1. **Responsive Design**: Test at different screen sizes
2. **Mobile Menu**: Hamburger menu functionality
3. **Touch Interactions**: Swipe and tap gestures
4. **Performance**: Fast loading on mobile

### Interactive Elements
- ✅ Smooth scrolling navigation  
- ✅ Sticky header on scroll
- ✅ Uproszczony formularz kontaktowy (nazwa, email/telefon, wiadomość)
- ✅ **WhatsApp integration w tle** - automatyczne wysyłanie zapytań (niewidoczne dla użytkownika)
- ✅ Walidacja formularza z komunikatami błędów
- ✅ Cookie consent banner (appears after 2 seconds)
- ✅ Scroll to top button
- ✅ FAQ accordion
- ✅ Number counter animations in stats

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep Navy (#0A1628)
- **Accent**: Turquoise (#00D9FF)
- **Success**: Green (#00E676)
- **Background**: Dark gradient with glass morphism

### Technologies Used
- **HTML5**: Semantic markup with SEO optimization
- **CSS3**: Modern features including:
  - CSS Variables for theming
  - Glass morphism effects
  - Smooth animations
  - Grid and Flexbox layouts
- **JavaScript**: Vanilla JS with:
  - ES6+ features
  - Performance optimizations
  - Form validation
  - WhatsApp integration

## 🔧 Configuration

### WhatsApp Number
Edit `js/main.js` line 13:
```javascript
whatsapp: {
    number: '+48555123456', // Change to your actual WhatsApp Business number
    defaultMessage: 'Your message here'
}
```

**WAŻNE:** WhatsApp działa teraz automatycznie w tle - użytkownicy nie widzą przycisku WhatsApp, ale wszystkie formularze są automatycznie przekazywane na WhatsApp jako sformatowane wiadomości.

### Contact Form Endpoint
Edit `js/main.js` line 17:
```javascript
form: {
    endpoint: '/api/contact', // Your backend endpoint
    timeout: 10000
}
```

## 📊 SEO Features
- Schema.org structured data
- Open Graph meta tags
- Twitter Card meta tags
- Semantic HTML5 markup
- Optimized meta descriptions
- Sitemap ready structure

## 🔒 Security Features
- Content Security Policy headers
- XSS protection
- Form sanitization
- Honeypot spam protection
- GDPR compliance checkbox

## 🚦 Performance
- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Core Web Vitals optimized
- Mobile-first approach

## 📝 Next Steps

1. **Configure WhatsApp**: Update the phone number in `js/main.js`
2. **Set up Backend**: Implement the contact form endpoint
3. **Add Analytics**: Configure Google Analytics in the cookie consent
4. **Deploy**: Upload to your hosting service
5. **SSL Certificate**: Ensure HTTPS is enabled
6. **Testing**: Test on real devices and browsers

## 🌍 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📂 File Structure
```
website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # All JavaScript
├── images/            # Images (to be added)
├── server.py          # Test server
└── README.md          # This file
```

## 💡 Tips
- Use Chrome DevTools to test responsive design
- Check the Console for any JavaScript errors
- Test form submission with various inputs
- Verify all links and navigation work correctly
- Test on actual mobile devices if possible

---

**Created for Datamen** - Premium Storage Solutions