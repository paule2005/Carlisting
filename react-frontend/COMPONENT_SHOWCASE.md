# 🎨 Component Showcase

## Visual Guide to All Components

### 🏠 Landing Page
**Location**: `src/pages/LandingPage.jsx`

**Features**:
- Large hero section with gradient background
- Decorative SVG wave pattern
- Bold typography (4rem → 2rem responsive)
- Call-to-action button
- Three feature cards with icons
- Smooth fade-in animations

**Mobile Adaptations**:
- Hero padding: 8rem → 4rem → 3rem
- Title size: 4rem → 2.5rem → 2rem
- Single column feature cards
- Full-width CTA button

---

### 🚗 Car Listing Page
**Location**: `src/pages/CarListingPage.jsx`

**Features**:
- Page header with title and description
- Filter button (opens side panel)
- Results counter
- Grid of car cards (3-4 columns → 1 column)
- Click to open car modal

**Mobile Adaptations**:
- Full-width filter button
- Single column grid
- Reduced padding
- Touch-optimized spacing

---

### 🎴 Car Card Component
**Location**: `src/components/CarCard.jsx`

**Visual Elements**:
```
┌─────────────────────────┐
│  [Featured]      [❤️]   │ ← Badges
│                         │
│      Car Image          │ ← 220px height
│    (with zoom on        │
│       hover)            │
│                         │
├─────────────────────────┤
│ Tesla Model 3    [2023] │ ← Name & Year
│ $45,000                 │ ← Price (gradient)
│ ┌─────────────────────┐ │
│ │ 🛣️ 5,000 mi         │ │ ← Specs
│ │ ⚙️ Automatic         │ │
│ └─────────────────────┘ │
│ [View Details] [Order]  │ ← Actions
└─────────────────────────┘
```

**Interactions**:
- Hover: Card lifts, image zooms
- Click: Opens car modal
- Favorite button: Heart animation
- Touch: Scale down feedback

**Mobile Adaptations**:
- Image height: 220px → 200px → 180px
- Stacked specs on small screens
- Full-width buttons
- Larger touch targets

---

### 🔍 Side Panel (Filters)
**Location**: `src/components/SidePanel.jsx`

**Layout**:
```
┌─────────────────────────┐
│ 🔍 Filters         [✕]  │ ← Header (gradient)
├─────────────────────────┤
│                         │
│ Price Range             │
│ [Min] - [Max]           │
│ ━━━━━━━━━━━━━━━━━━━━━  │ ← Slider
│                         │
│ Year Range              │
│ [From] - [To]           │
│                         │
│ Transmission            │
│ [Dropdown ▼]            │
│                         │
│ Max Mileage: 100,000    │
│ ━━━━━━━━━━━━━━━━━━━━━  │
│                         │
│ Sort By                 │
│ [Dropdown ▼]            │
│                         │
├─────────────────────────┤
│ [Reset]    [Apply]      │ ← Footer
└─────────────────────────┘
```

**Features**:
- Slides in from left (desktop)
- Full-screen on mobile
- Backdrop overlay with blur
- Touch-friendly sliders
- Real-time value display
- Reset to defaults
- Apply filters

**Mobile Adaptations**:
- Full-screen width
- Larger touch controls
- Optimized spacing
- Easy-to-tap buttons

---

### 🎯 Car Modal
**Location**: `src/components/CarModal.jsx`

**Layout**:
```
┌─────────────────────────────────┐
│                            [✕]  │
│                                 │
│        Car Image                │ ← 300px height
│                    [$45,000]    │ ← Price badge
│                                 │
├─────────────────────────────────┤
│ Tesla Model 3          [2023]   │
│                                 │
│ [Details] [Specs] [Features]    │ ← Tabs
│ ─────────                       │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📅 Year: 2023               │ │
│ │ 🛣️ Mileage: 5,000 miles    │ │
│ │ ⚙️ Transmission: Automatic  │ │
│ │ 🎨 Color: Various           │ │
│ └─────────────────────────────┘ │
│                                 │
│ Description                     │
│ This premium vehicle offers...  │
│                                 │
│ [📞 Contact] [🛒 Order Now]    │
└─────────────────────────────────┘
```

**Tabs**:
1. **Details**: Year, mileage, transmission, color, description
2. **Specifications**: Engine, horsepower, fuel type, drive type, seating, MPG
3. **Features**: 10+ standard features with checkmarks

**Interactions**:
- Click backdrop to close
- Click X button to close
- Switch between tabs
- Scroll content
- Click action buttons

**Mobile Adaptations**:
- Slides up from bottom
- Image height: 300px → 250px → 200px
- Scrollable tabs
- Stacked detail items
- Full-width buttons

---

### 🧭 Bottom Navigation
**Location**: `src/components/BottomNav.jsx`

**Layout**:
```
┌─────────────────────────────────┐
│  🏠    🚗    🛒    ❤️    👤    │
│ Home Browse Order Fav Profile   │
│  ━━                             │ ← Active indicator
└─────────────────────────────────┘
```

**Features**:
- Fixed at bottom
- 5 navigation items
- Icon + label
- Active state indicator (line on top)
- Smooth animations
- Auto-hides on desktop (768px+)

**Interactions**:
- Tap to navigate
- Active page highlighted
- Icon scales on hover/tap
- Smooth transitions

**Mobile Only**:
- Visible below 768px
- Touch-optimized spacing
- Minimum 44x44px tap targets

---

### 🔝 Navbar
**Location**: `src/components/Navbar.jsx`

**Layout**:
```
┌─────────────────────────────────┐
│ 🚗 CarListing  [Home] [Browse] [Order] │
└─────────────────────────────────┘
```

**Features**:
- Gradient background
- Sticky positioning
- Logo with icon
- Navigation links
- Hover effects with underline
- Box shadow for depth

**Mobile Adaptations**:
- Hides menu items below 768px
- Shows only logo
- Reduced padding
- Smaller font size

---

### 📝 Order Page
**Location**: `src/pages/OrderPage.jsx`

**Layout**:
```
┌─────────────────────────┐
│   Order Your Dream Car  │
│   Fill out the form     │
│                         │
│ ┌─────────────────────┐ │
│ │ Name                │ │
│ │ [Input field]       │ │
│ │                     │ │
│ │ Email               │ │
│ │ [Input field]       │ │
│ │                     │ │
│ │ Phone               │ │
│ │ [Input field]       │ │
│ │                     │ │
│ │ Car Model           │ │
│ │ [Input field]       │ │
│ │                     │ │
│ │ Message             │ │
│ │ [Textarea]          │ │
│ │                     │ │
│ │   [Submit Order]    │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

**Features**:
- Centered form container
- Clear labels
- Focus states
- Success message
- Gradient submit button

**Mobile Adaptations**:
- Full-width inputs
- Larger touch targets
- Optimized spacing
- 16px font size (prevents zoom)

---

## 🎨 Color Palette

### Primary Colors
```css
--primary: #667eea;
--secondary: #764ba2;
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Neutral Colors
```css
--background: #f8f9fa;
--card-bg: #ffffff;
--text-primary: #333333;
--text-secondary: #666666;
--border: #e0e0e0;
```

### Semantic Colors
```css
--success: #d4edda;
--success-text: #155724;
--error: #f8d7da;
--error-text: #721c24;
```

---

## 📐 Spacing System

```css
--space-xs: 0.25rem;  /* 4px */
--space-sm: 0.5rem;   /* 8px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
--space-2xl: 3rem;    /* 48px */
```

---

## 🔤 Typography Scale

```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 2rem;     /* 32px */
--text-4xl: 2.5rem;   /* 40px */
```

---

## 🎭 Animation Timings

```css
--duration-fast: 0.15s;
--duration-normal: 0.3s;
--duration-slow: 0.5s;
--easing: ease;
--easing-in: ease-in;
--easing-out: ease-out;
```

---

## 📱 Responsive Grid

### Desktop (1024px+)
```css
.cars-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
```

### Tablet (768px - 1023px)
```css
.cars-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Mobile (< 768px)
```css
.cars-grid {
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
```

---

## 🎯 Component States

### Hover (Desktop)
- Cards: Lift up, shadow increases
- Buttons: Lift up, shadow increases
- Links: Underline appears
- Images: Zoom in

### Active (Mobile)
- Cards: Scale down
- Buttons: Background darkens
- Links: Background color
- No hover effects

### Focus
- Outline: 2px solid #667eea
- Offset: 2px
- Visible for keyboard navigation

### Disabled
- Opacity: 0.5
- Cursor: not-allowed
- No interactions

---

## 🚀 Performance Tips

### Animations
- Use `transform` and `opacity` (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`

### Images
- Use appropriate sizes
- Lazy load off-screen images
- Use modern formats (WebP)
- Provide fallbacks

### Touch
- Minimum 44x44px tap targets
- Remove tap highlight
- Use `touch-action: manipulation`
- Provide visual feedback

---

This showcase provides a complete visual reference for all components in the car listing application!
