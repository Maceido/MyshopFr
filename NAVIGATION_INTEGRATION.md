Top Navigation: Dark, responsive nav

Files added:
- `sections/top-nav.liquid` — Shopify section with the navigation markup
- `assets/top-nav.css` — Styles (dark, clean Apple-like look)
- `assets/top-nav.js` — JS to move overflowing items into a `More` dropdown and handle mobile toggles
- `demo.html` — Local static demo to test the header quickly in a browser

Quick local test:

1. Open `demo.html` in a browser (e.g., open the file in your editor or double-click it).
2. Resize the window to see items move into the `More` menu. Hover "Women's Clothing" to see its submenu.

Mobile-first testing notes:

- The menu includes a mobile-first UX: on small screens the menu uses a full-width stacked layout with accordion submenus and larger touch targets.
- To test on desktop, use your browser's device toolbar to emulate a mobile viewport (e.g., Chrome DevTools: Toggle device toolbar → select a phone size). Open the menu with the ☰ button and tap submenu toggles (▸) to expand categories.
- `More` is hidden on mobile because items are stacked vertically in the mobile menu.

How to configure the menu in Shopify:

How to integrate into a Shopify theme:

1. In Shopify admin go to **Online Store → Themes → Actions → Edit code**.
2. Add the files:
   - Create a new section named `top-nav.liquid` and paste the contents of `sections/top-nav.liquid`.
   - Upload `assets/top-nav.css` and `assets/top-nav.js` into the `assets/` folder.
3. Include the section where you want the header to appear. In `layout/theme.liquid` (or the relevant layout), add:

```liquid
{% raw %}{% section 'top-nav' %}{% endraw %}
```

4. Save and preview your theme. The header should appear and respond to resizing.

Notes & next steps:
- The navigation is provided as a static list; you can replace links and text with dynamic menus or Liquid `linklists` if you prefer.
- The section now supports a configurable Shopify Navigation (link list). In the theme editor or section settings choose the `Main menu` (the linklist) to control top-level items and children.
- The overflow logic is JS-driven and moves items into a simple `More` list; if you have very large menus you may want to convert submenu markup into richer panels.
- If you'd like, I can make this section configurable via the section schema (menus pulled from Shopify Navigation) so you can edit categories from the admin UI.

To configure the menu in Shopify:

1. In Shopify admin go to **Online Store → Navigation** and create a menu with top-level items and child links (for submenus).
2. In the Theme Editor (Customize) open the `Top Navigation` section and choose the menu under "Main menu".

Notes about the demo:
- `demo.html` is a static local demo (it does not render Liquid or read your Shopify menus). Use the live theme preview to see the section using your store menus.

