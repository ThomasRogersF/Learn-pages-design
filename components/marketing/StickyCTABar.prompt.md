Mobile-only sticky bottom CTA. Gate to mobile with:

```css
@media (min-width:768px){ :root{ --sticky-display:none; } }
```

```jsx
<StickyCTABar showAfter={600} href="#offer"/>
```