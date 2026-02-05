# Specification

## Summary
**Goal:** Add an “Instant Price Calculator” page to the existing React site that instantly estimates a price from two dropdown selections and provides a WhatsApp contact CTA.

**Planned changes:**
- Add a new route `/instant-price-calculator` rendering inside the existing `SiteLayout` with a single H1: “Instant Price Calculator”.
- Add navigation links labeled “Instant Price Calculator” to both the TopNav and SiteFooter, matching existing styling and active-link behavior.
- Build the calculator UI with exactly two dropdowns: “Service Type” (PPT Making, Website Help, Document / Notes Work) and “Work Level” (Basic, Medium, Advanced), with responsive spacing consistent with the rest of the site.
- Implement instant estimate display that updates when either dropdown changes, including a neutral placeholder state until both selections are chosen, with pricing stored in a single easy-to-edit configuration object.
- Display the note text exactly: “Final price may vary based on requirements” near the estimate.
- Add a “Contact / WhatsApp” button below the estimate that opens https://wa.me/918855003190 in a new tab with appropriate rel attributes.
- Add SEO metadata (title + meta description) using the existing SEO hook pattern, including “Instant Price Calculator” and “Digital Pro Hub” in the title.

**User-visible outcome:** Users can navigate to “Instant Price Calculator”, choose a service type and work level to see an immediate estimated price, read a pricing disclaimer, and click a button to contact via WhatsApp.
