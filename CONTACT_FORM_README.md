# Contact Form with Self-Destruct Confirmation

This implementation provides a contact/intake form with a playful confirmation message that includes a self-destruct countdown animation.

## Features

- **Playful Confirmation Message**: After form submission, users see: "Thank you for sharing your vision! The Agency will follow up within one business day with next steps. We can't wait to create something legendary with you."

- **Self-Destruct Countdown**: A countdown animation displays "This message will self-destruct in 5, 4, 3, 2, 1..." with animated numbers.

- **Smooth Animations**: 
  - Fade-in animation when confirmation appears
  - Pulse animation for countdown numbers
  - Bounce animation for the rocket icon
  - Fade-out animation when message disappears

## Implementation Options

### 1. Standalone HTML (contact-form.html)
A complete, self-contained HTML file that can be opened directly in a browser or served as a static page. No dependencies required.

```html
<!-- Simply open contact-form.html in a browser -->
```

### 2. React Component with Inline Styles (ContactForm.tsx)
A React/TypeScript component using Next.js style JSX for styling. Ideal for Next.js projects.

```tsx
import ContactForm from './ContactForm';

function App() {
  return <ContactForm />;
}
```

### 3. React Component with CSS Modules (ContactFormWithModule.tsx)
A React/TypeScript component using CSS Modules for styling. Works with Create React App, Next.js, and other modern React setups.

```tsx
import ContactFormWithModule from './ContactFormWithModule';

function App() {
  return <ContactFormWithModule />;
}
```

## Usage

### Testing the HTML Version
```bash
# Open the file in a browser
open contact-form.html
# or
python -m http.server 8000
# Then navigate to http://localhost:8000/contact-form.html
```

### Integration into React/Next.js
1. Copy the desired component file(s) to your project
2. Import and use the component in your application
3. Customize styling as needed

## Form Flow

1. User fills out the contact form with:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Vision/message (required)

2. Upon submission:
   - Form disappears
   - Confirmation message appears with rocket emoji 🚀
   - Countdown starts from 5 to 1
   - Each number pulses with animation

3. After countdown completes:
   - Message fades out smoothly
   - Form reappears, ready for another submission

## Customization

### Changing the Countdown Duration
Edit the initial countdown value in the code:
```tsx
const [countdown, setCountdown] = useState(5); // Change 5 to desired seconds
```

### Modifying the Confirmation Message
Edit the confirmation message text in the component/HTML:
```tsx
<div className="confirmation-message">
  Your custom message here
</div>
```

### Adjusting Colors
The gradient colors can be modified in the CSS/styles:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Technical Details

- **No external dependencies** for the HTML version
- **React 18+** recommended for React versions
- **TypeScript** support included
- **Responsive design** works on mobile and desktop
- **Accessible** with proper form labels and semantic HTML
