# **App Name**: VoterData Insights

## Core Features:

- Feature Showcase: Displays key features of the Assembly-Constituency Voter Database product using cards with icons and concise text, highlighting nationwide coverage, true random sampling, and flexible bundles.
- Live Data Preview: Implements an interactive data preview section with dropdown filters for state and constituency, displaying a sample table with relevant voter data columns.
- Process Visualization: Presents a clear 'How It Works' section using a horizontal timeline to illustrate the data processing steps, from downloading PDFs to delivering data via API or CSV.

## Style Guidelines:

- Use a light background (off-white or pale gray) to ensure readability and a clean aesthetic.
- Employ dark charcoal for headings to provide a strong contrast and professional look.
- Utilize #0070f3 as the accent color for buttons and links to draw attention and maintain brand consistency.
- Implement a 12-column responsive grid with generous whitespace for a structured and user-friendly layout.
- Incorporate subtle micro-animations, such as button hover effects (scale-up 1.03x and shadow fade) and section title fade-in/slide-up on scroll, to enhance user experience without being distracting.
- Select crisp, professional icons to accompany feature cards and other key sections, ensuring they are accessible with appropriate alt text.

## Original User Request:
Get the idea from the below promt and help me make something that looks good. 


```Build me a responsive, single-page marketing website for our “Assembly-Constituency Voter Database” product, aimed at market-research companies. The landing page must be clean, modern and use subtle micro-animations to delight without distracting. Follow these specs:

1. Visual Style & Layout  
   – **Palette & Typography**: Light background (off-white or pale gray), dark charcoal headings, accent color #0070f3 for buttons/links. Use a professional sans-serif (e.g. Inter or Poppins).  
   – **Spacing & Grids**: Generous white space, 12-column responsive grid, mobile-first.  
   – **Micro-Animations**:  
     • Button hover: subtle scale-up (1.03×) + shadow fade.  
     • Section titles: fade-in + slide-up on scroll.  
     • Data-preview table rows: background-color highlight on hover.  

2. Sections & Copy  

   **Hero**  
   - **Headline**: “Unlock India’s Constituency-Level Voter Data”  
   - **Subhead**: “Pure-random sampling frames, pre-parsed and ready for your research.”  
   - **CTA Button**: “See a Live Sample”  

   **Features** (3 cards, with icons + brief text)  
   1. **Nationwide Coverage**  
      – “All 543 Lok Sabha & 4,122 Assembly Constituencies”  
   2. **True Random Sampling**  
      – “Extracted direct from official PDFs for audit-grade rigor.”  
   3. **Flexible Bundles**  
      – “State, constituency or district-level packs, choose what you need.”  

   **Live Data Preview**  
   - **Interactive filter**: two dropdowns (“Select State”, “Select Constituency”)
   - **Table sample**: show 8–10 rows with columns:  
     • AC No. | AC Name | Part No. | No. of Voters | Cumulative | Sample Index  
   - **Micro-animation**: row highlight + subtle slide-in when data loads.  
   - **Note below table**: “Sample is blurred/truncated to protect full data integrity.”  

   **How It Works** (horizontal timeline or 4 steps)  
   1. “Download voter PDF →”  
   2. “Extract & normalize into MongoDB →”  
   3. “Organize by constituency & part →”  
   4. “Deliver via secure API or CSV”  

   **Pricing & Bundles**  
   - 3 plan cards:  
     • **State Bundle** – “All ACs in a state”  
     • **District Bundle** – “All ACs in a district”  
     • **Custom Bundle** – “Pick any 5 ACs”  
   - Each card: price placeholder, “Request Quote” CTA  

   **Footer**  
   - Links: About, Contact, Privacy Policy  
   - “© 2025 [Your Company Name]”  

3. Technical Requirements  
   – **Tech stack**: React (Next.js) or Vue + Tailwind CSS.  
   – **Data**: Fetch live sample from `/api/preview?state=Delhi&constituency=NERELA`.  
   – **Animations**: Use Framer Motion or GreenSock.  
   – **Accessibility**: All buttons and links keyboard-navigable; alt text on icons.  
   – **Responsive**: Breakpoints at 640px, 768px, 1024px, 1280px.  

4. Tone & Voice  
   – Confident, concise, B2B-professional.  
   – Focus on **credibility**, **rigor**, **flexibility**.  
   – Avoid jargon: lead with benefits (“pure random sampling”, “audit-grade data”).  

Deliver production-ready code and assets, plus a README on how to switch in live API endpoints.  ```
  
  