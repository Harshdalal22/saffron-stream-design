# Shopping Cart & WhatsApp Integration

## Features Added

### 1. **Shopping Cart Functionality**
- Users can add products to cart from the product grid
- Each product can be added with different weights (500g, 1kg, 2kg)
- Cart stores all items with their quantities and weights
- Real-time cart count badge on the floating cart button

### 2. **Floating Cart Button**
- Fixed position cart button in the bottom-right corner
- Shows total item count in a badge
- Mobile-friendly and accessible on all screen sizes
- Smooth animations when opening/closing

### 3. **Cart Sidebar**
- Slides in from the right side
- Shows all cart items with images and details
- Quantity controls (+/-) for each item
- Remove individual items
- Clear entire cart option
- Shows total price calculation
- Fully responsive for mobile devices

### 4. **WhatsApp Integration**
- "Order via WhatsApp" button in the cart
- Automatically formats order details
- Opens WhatsApp with pre-filled message containing:
  - All product names
  - Quantities and weights
  - Individual prices
  - Total amount
- Message is professionally formatted for easy reading

### 5. **Mobile-Friendly Design**
- Cart sidebar is full-width on mobile devices
- Touch-friendly buttons and controls
- Smooth animations optimized for mobile
- Responsive layout throughout

## How to Configure WhatsApp Number

In the file `src/components/FloatingCart.tsx`, find this line (around line 36):

```typescript
const phoneNumber = '919876543210'; // Replace with actual number
```

Replace `919876543210` with your actual WhatsApp business number:
- Include country code (e.g., 91 for India)
- No spaces, dashes, or special characters
- No + symbol
- Example: `919876543210` for +91 98765 43210

## How It Works

1. **Adding to Cart**: Users click "Add to Cart" or "Quick Add" on any product
2. **Cart Management**: Users can view cart by clicking the floating cart button
3. **Adjusting Quantities**: Use +/- buttons to change quantities
4. **Placing Order**: Click "Order via WhatsApp" to send order details via WhatsApp
5. **Order Message**: WhatsApp opens with a formatted message ready to send

## Mobile Optimization

The entire website is now optimized for mobile devices:
- Touch-friendly buttons (minimum 44x44px)
- Responsive cart sidebar
- Smooth scrolling and animations
- Easy-to-use quantity controls
- Large, accessible buttons

## Toast Notifications

When items are added to cart, users see a toast notification confirming the action.

## Technologies Used

- React Context API for state management
- Framer Motion for smooth animations
- Lucide React for icons
- Tailwind CSS for responsive styling
- WhatsApp Web API for order integration
