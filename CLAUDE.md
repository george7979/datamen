# CLAUDE.md - Datamen Website Project

This file provides guidance to Claude Code when working with the Datamen bilingual website project.

## Project Context

**Datamen** is a bilingual (Polish/English) marketing website project for a storage solutions company targeting post-production studios and CCTV/security companies. This is a **web development project** with focus on professional marketing presentation and lead generation.

## Website Architecture

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design**: Glass morphism, dark theme, minimalist approach
- **Animation**: AOS library for scroll animations
- **Language System**: Dynamic bilingual switching with localStorage persistence
- **Development Server**: Python HTTP server for local testing

### Key Features
- ✅ **Bilingual Support**: Complete Polish/English content switching
- ✅ **Responsive Design**: Mobile-first approach with glass morphism effects
- ✅ **Contact Integration**: Hidden WhatsApp integration with form fallback
- ✅ **SEO Optimization**: Meta tags, structured data, semantic HTML
- ✅ **Performance**: Lazy loading, optimized animations, minimal dependencies

## Critical Bilingual Content Management Rules

### **🔄 MANDATORY SYNCHRONIZATION PRINCIPLE**
**Whenever content is changed in Polish version, it MUST be simultaneously updated in English version**

### Translation Management Process
1. **Always update both languages simultaneously** - never leave one language incomplete
2. **Use the translation object in JavaScript** (`TRANSLATIONS` in `main.js`) as the single source of truth
3. **Verify data attributes** exist on HTML elements that need translation (`data-translate="key.path"`)
4. **Test language switching** after any content changes
5. **Maintain consistent messaging** across both languages

### Content Areas Requiring Synchronization
- **Navigation items** (`nav.about`, `nav.services`, etc.)
- **Hero section** (`hero.title`, `hero.subtitle`, `hero.ctaPrimary`, `hero.ctaSecondary`)
- **Service descriptions** (`services.postprod.*`, `services.cctv.*`)
- **Benefits/features** (`whyUs.benefit1-6.*`)
- **Process steps** (`process.step1-5.*`)
- **Contact form** (`contact.form.*`)
- **All section headers and descriptions**

## File Structure Standards

```
datamen/
├── CLAUDE.md              # This file - project guidelines
├── README.md              # Project overview and setup
└── website/               # Main website application
    ├── index.html         # Single-page bilingual website
    ├── css/style.css      # Complete styles with variables
    ├── js/main.js         # All functionality + translations
    ├── server.py          # Development server
    ├── README.md          # Website-specific documentation
    ├── assets/            # Static assets
    └── images/            # Website images
```

## Development Guidelines

### Content Changes Workflow
1. **Identify the content** to be changed in both languages
2. **Update JavaScript translations** in `TRANSLATIONS` object first
3. **Verify HTML data attributes** are correctly assigned
4. **Test both language versions** work correctly
5. **Check mobile responsiveness** if layout changes were made

### Code Modification Rules
- **Preserve existing design patterns** (glass morphism, color scheme)
- **Maintain bilingual functionality** - never break language switching
- **Keep performance optimizations** (lazy loading, debouncing, throttling)
- **Follow existing naming conventions** for CSS classes and JS functions
- **Test WhatsApp integration** after form-related changes

### Design Principles
- **Color Scheme**: Deep navy (#0A1628) with turquoise accent (#00D9FF)
- **Typography**: Inter font family, responsive scaling
- **Effects**: Glass morphism backgrounds, smooth animations
- **Layout**: Mobile-first, responsive grid systems

### Development Tools Available
- **Playwright Browser Automation**: For testing language switching and UI validation
- **Python Development Server**: Local testing with `python3 server.py`
- **Live Reload**: Automatic browser refresh during development
- **Browser DevTools**: Console logging, performance monitoring
- **Git Version Control**: Track changes and maintain project history

## Technical Implementation

### Language System Architecture
- **Storage**: localStorage (`datamen-language`) for user preference
- **Detection**: Browser language detection with fallback to Polish
- **Switching**: Dynamic DOM content updates via `data-translate` attributes
- **Scope**: All text content, form labels, placeholders, meta tags

### Form and Integration Systems
- **Contact Form**: Simplified to name, contact (email/phone), message
- **WhatsApp Integration**: Hidden background sending with formatted messages
- **Validation**: Real-time validation with localized error messages
- **Submission**: Dual-channel (form endpoint + WhatsApp) with user feedback

## Quality Assurance

### Testing Checklist (After Any Changes)
- [ ] Both languages display correctly
- [ ] Language switcher updates active state
- [ ] All sections translate properly
- [ ] Form labels and placeholders are localized
- [ ] Mobile layout remains responsive
- [ ] WhatsApp integration sends correct language message
- [ ] No console errors in browser
- [ ] Page load performance is maintained

### Automated Testing with Playwright
**Available for verification:** The development environment includes Playwright browser automation for comprehensive testing.

**Playwright Capabilities:**
- **Language switching verification**: Automatically test Polish ↔ English transitions
- **UI element validation**: Verify all sections translate correctly
- **Navigation testing**: Check all internal links and menu functionality
- **Form testing**: Validate contact form behavior in both languages
- **Visual regression**: Take screenshots to compare layouts
- **Performance monitoring**: Check page load times and responsiveness

**Usage Example:**
```javascript
// Navigate to localhost:8000
// Click language switcher (PL → EN)
// Verify footer navigation: "Usługi" → "Services"
// Verify hero section: "Zapytaj o wycenę" → "Get a Quote"
// Take screenshots for visual comparison
```

**Testing Commands:**
- Use `mcp__playwright__browser_navigate` to load the website
- Use `mcp__playwright__browser_click` to test language switching
- Use `mcp__playwright__browser_snapshot` to verify content changes
- Use `mcp__playwright__browser_take_screenshot` for visual documentation

### Console Error Verification (MANDATORY)

**Po każdej zmianie w kodzie strony OBOWIĄZKOWE jest sprawdzenie konsoli deweloperskiej przeglądarki w celu wykrycia błędów i ostrzeżeń.**

#### Procedura sprawdzania konsoli:
1. **Otwórz Developer Tools** (F12) w przeglądarce
2. **Przejdź do zakładki Console**
3. **Odśwież stronę** (Ctrl+F5) aby zobaczyć wszystkie komunikaty od początku ładowania
4. **Sprawdź desktop widok** - zweryfikuj konsolę w pełnym widoku strony
5. **Sprawdź mobilny widok** - zmień na mobile viewport (375x812) i ponownie sprawdź konsolę
6. **Przetestuj funkcjonalność** - przełącz język, nawiguj po sekcjach, testuj formularze, przełącz theme (dark/light)

#### Dopuszczalne komunikaty:
- **Dozwolone ostrzeżenia**: Pochodzące od rozszerzeń przeglądarki (np. z pliku `content.js`)
- **Informacje/debug**: Komunikaty informacyjne z bibliotek zewnętrznych

#### NIEDOPUSZCZALNE błędy:
- ❌ **404 errors** dla zasobów strony (CSS, JS, obrazy)
- ❌ **JavaScript errors** w kodzie strony
- ❌ **CSP violations** związane z Content Security Policy
- ❌ **Network errors** dla krytycznych zasobów
- ❌ **Failed to load resource** dla plików własnych

#### W przypadku błędów:
1. **Zidentyfikuj źródło** - czy błąd pochodzi z kodu strony czy rozszerzenia przeglądarki
2. **Napraw błędy z kodu strony** przed zakończeniem zadania
3. **Udokumentuj** rozwiązania w komentarzach do commitów
4. **Zweryfikuj ponownie** po wprowadzeniu poprawek

#### Narzędzia do weryfikacji:
- **Playwright**: `mcp__playwright__browser_console_messages` - dla zautomatyzowanej weryfikacji
- **Chrome DevTools**: Ręczna weryfikacja podczas developmentu
- **Firefox DevTools**: Dodatkowa weryfikacja cross-browser

### Content Verification
- [ ] Polish and English messaging is consistent
- [ ] Technical terms are accurately translated
- [ ] Call-to-action buttons are appropriately localized
- [ ] Contact information is correct for target markets
- [ ] Services descriptions match business positioning

## Project Goals

### Primary Objectives
- **Lead Generation**: Professional presentation to attract B2B clients
- **Market Positioning**: Establish credibility in storage solutions
- **User Experience**: Seamless bilingual browsing experience
- **Conversion Optimization**: Clear CTAs and contact methods

### Success Metrics
- Clean, professional design that builds trust
- Fast loading times and smooth interactions
- Effective contact form conversion
- Proper SEO for Polish and international markets

---

**This is a professional marketing website with bilingual capabilities. Always maintain content synchronization between Polish and English versions.**