# 🛒 Shopping Cart - Quick Usage Guide

## How to Use the Shopping Cart

### 1. Adding Items to Cart

#### From Car Listing Page
```
1. Browse cars on the listing page
2. Click "🛒 Add to Cart" button on any car card
3. Button changes to "✓ Added!" with green background
4. Cart badge updates automatically
```

#### From Car Details Modal
```
1. Click "View Details" on any car card
2. Modal opens with car information
3. Click "🛒 Add to Cart" button at the bottom
4. Button shows "✓ Added to Cart!" confirmation
```

### 2. Viewing Your Cart

#### Desktop
```
1. Look at the top navbar
2. Click the cart icon (🛒) on the right
3. Cart modal opens showing all items
```

#### Mobile
```
1. Look at the bottom navigation bar
2. Tap the cart icon (🛒) in the middle
3. Cart modal slides up from bottom
```

### 3. Managing Cart Items

#### Adjust Quantity
```
┌─────────────────────────┐
│  [−]  2  [+]           │  ← Click + to increase
│                         │    Click − to decrease
└─────────────────────────┘
```

#### Remove Item
```
┌─────────────────────────┐
│  [−]  1  [+]    [🗑️]   │  ← Click trash icon
└─────────────────────────┘
```

#### Clear All Items
```
┌─────────────────────────┐
│  Total: $90,000         │
│  [Clear Cart] [Checkout]│  ← Click "Clear Cart"
└─────────────────────────┘
```

### 4. Checkout Process

```
1. Review items in cart
2. Check total amount
3. Click "Proceed to Checkout"
4. Fill out order form
5. Submit order
```

## Visual Guide

### Cart Icon States

#### Empty Cart
```
🛒  (no badge)
```

#### Cart with Items
```
🛒 [3]  ← Badge shows item count
```

### Cart Modal Layout

```
┌─────────────────────────────────┐
│ 🛒 Shopping Cart           [✕]  │ ← Header
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Image] Tesla Model 3       │ │
│ │         2023                │ │
│ │         $45,000             │ │
│ │         [−] 1 [+]    [🗑️]  │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Image] BMW 3 Series        │ │
│ │         2022                │ │
│ │         $42,000             │ │
│ │         [−] 2 [+]    [🗑️]  │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│ Total: $129,000                 │ ← Summary
│ [Clear Cart] [Proceed to Checkout]│
└─────────────────────────────────┘
```

### Empty Cart State

```
┌─────────────────────────────────┐
│ 🛒 Shopping Cart           [✕]  │
├─────────────────────────────────┤
│                                 │
│           🛒                    │
│                                 │
│    Your cart is empty           │
│    Add some cars to get started!│
│                                 │
│    [Continue Shopping]          │
│                                 │
└─────────────────────────────────┘
```

## Features

### ✅ Automatic Calculations
- Item subtotals (price × quantity)
- Cart total (sum of all items)
- Item count badge

### ✅ Visual Feedback
- Success animation on add
- Badge pulse animation
- Button state changes
- Hover effects

### ✅ Data Persistence
- Cart saved to localStorage
- Survives page refresh
- Persists across sessions

### ✅ Mobile Optimized
- Touch-friendly buttons
- Responsive layout
- Bottom navigation integration
- Smooth animations

## Common Actions

### Add Multiple Quantities
```
1. Add item to cart (quantity: 1)
2. Click "Add to Cart" again (quantity: 2)
3. Or use +/− buttons in cart modal
```

### Remove Last Item
```
1. Open cart modal
2. Click − button until quantity is 0
3. Item automatically removed
4. Or click trash icon directly
```

### Start Fresh
```
1. Open cart modal
2. Click "Clear Cart" button
3. Confirm action
4. All items removed
```

## Tips & Tricks

### Quick Add
- Click "Add to Cart" multiple times to increase quantity
- No need to open modal each time

### Keyboard Shortcuts
- `Esc` - Close cart modal
- `Tab` - Navigate through items
- `Enter` - Activate buttons

### Mobile Gestures
- Tap cart icon to open
- Tap backdrop to close
- Swipe to scroll items

## Troubleshooting

### Cart Badge Not Updating?
```
✓ Check if item was added successfully
✓ Look for success message
✓ Refresh the page
```

### Items Disappeared?
```
✓ Check if you cleared the cart
✓ Check browser localStorage
✓ Try adding items again
```

### Can't Open Cart?
```
✓ Click the cart icon (🛒)
✓ Check if modal is behind other elements
✓ Try refreshing the page
```

## Best Practices

### For Users
1. Review cart before checkout
2. Adjust quantities as needed
3. Remove unwanted items
4. Check total amount

### For Testing
1. Add various items
2. Test quantity controls
3. Verify total calculation
4. Test persistence (refresh page)
5. Try on mobile device

## Examples

### Example 1: Single Item
```
Cart Contents:
- Tesla Model 3 (2023) × 1 = $45,000

Total: $45,000
```

### Example 2: Multiple Items
```
Cart Contents:
- Tesla Model 3 (2023) × 2 = $90,000
- BMW 3 Series (2022) × 1 = $42,000
- Audi A4 (2022) × 3 = $120,000

Total: $252,000
```

### Example 3: After Removing Items
```
Cart Contents:
- Tesla Model 3 (2023) × 1 = $45,000

Total: $45,000
```

## Integration with Order Page

### Checkout Flow
```
1. Cart → "Proceed to Checkout"
2. Order Page → Fill form
3. Submit → Order confirmation
4. Cart → Automatically cleared (optional)
```

## Accessibility

### Screen Reader Support
- Cart count announced
- Item details read aloud
- Button actions described
- Total amount announced

### Keyboard Navigation
- Tab through all controls
- Enter to activate buttons
- Escape to close modal
- Arrow keys for quantity

## Mobile Specific

### Portrait Mode
- Full-screen modal
- Stacked item layout
- Large touch targets
- Easy scrolling

### Landscape Mode
- Optimized width
- Horizontal layout
- Accessible controls
- Smooth animations

## Summary

The shopping cart is:
✅ Easy to use
✅ Visually appealing
✅ Mobile-friendly
✅ Persistent
✅ Accessible
✅ Fast and responsive

Start adding cars to your cart and enjoy the seamless shopping experience! 🚗💨
