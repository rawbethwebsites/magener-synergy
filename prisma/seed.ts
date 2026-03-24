import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Magener Synergy database...');

  // ── BLOG POSTS ──────────────────────────────────────────────────────────────
  const blogPosts = [
    {
      title: '10 Things Every Nigerian Needs to Know Before Applying for a UK Visa',
      slug: '10-things-nigerian-uk-visa',
      excerpt:
        'From financial documentation to interview preparation, here is everything you need to give your UK visa application the best possible chance of approval.',
      content: `<h2>1. Understand Which Visa You Need</h2>
<p>The UK offers several visa categories — Standard Visitor, Student (Tier 4), Skilled Worker, and more. Applying for the wrong category is one of the most common reasons for refusal. If you are visiting for tourism or a business meeting, the Standard Visitor Visa is your route. If you plan to study for more than six months, you need the Student Visa.</p>

<h2>2. Your Bank Statement Is Everything</h2>
<p>The UK Home Office wants to see that you can fund your trip without working illegally. As a general rule, your account should show consistent balance over the last three to six months — not a sudden large deposit right before you apply. Aim for at least £2,500–£5,000 for a two-week visit, more for longer stays.</p>

<h2>3. Book Your Appointment Early</h2>
<p>UK visa appointments at VFS Global in Abuja and Lagos fill up fast — sometimes weeks in advance. Start your application at least eight weeks before your intended travel date. This gives you time to gather documents, book your appointment, and allow for processing time (typically 3–8 weeks).</p>

<h2>4. Your Ties to Nigeria Matter</h2>
<p>The visa officer needs to believe you will return home after your visit. Strong ties include: a stable job with a letter from your employer, property ownership, family responsibilities, or a running business. Document all of these clearly in your application.</p>

<h2>5. Travel History Helps — But Is Not Mandatory</h2>
<p>Previous travel to the US, Canada, Schengen, or other countries strengthens your application considerably. It shows the officer that you have respected visa conditions before. If this is your first international travel, it is not a dealbreaker — just ensure every other part of your application is exceptionally strong.</p>

<h2>6. Your Invitation Letter Must Be Specific</h2>
<p>If you are visiting family or friends in the UK, their invitation letter should include their UK address, immigration status, relationship to you, duration of your stay, and confirmation of who is covering accommodation costs. Vague letters raise red flags.</p>

<h2>7. Do Not Overload Your Application With Unnecessary Documents</h2>
<p>More is not always better. A well-organised, concise application with the right documents is far more effective than a bulky folder of irrelevant papers. Follow the official checklist and include only what is asked for.</p>

<h2>8. The Online Form Requires Complete Honesty</h2>
<p>Any misrepresentation — even small inaccuracies — can result in a refusal and a potential 10-year ban from the UK. If you have been refused a visa before (to any country), you must declare it. If you have family members in the UK, declare them.</p>

<h2>9. Attend Your Biometric Appointment Prepared</h2>
<p>Bring your appointment confirmation, valid international passport, and any physical documents you wish to submit. Dress professionally — while the biometric appointment is brief, first impressions at the VFS centre can matter.</p>

<h2>10. Work With a Trusted Travel Consultant</h2>
<p>UK visa rules change regularly and the stakes of a refusal are high — both financially and in terms of future applications. Working with an experienced travel consultant like Magener Synergy gives you access to expert document review, a personalised cover letter, and guidance every step of the way.</p>

<p>Ready to start your UK visa application? <a href="/contact">Book a free consultation</a> with our visa specialists today.</p>`,
      published: true,
    },
    {
      title: 'Study in Canada: The Complete Guide for Nigerian Students in 2025',
      slug: 'study-canada-guide-nigerian-students-2025',
      excerpt:
        'Canada remains the top study destination for Nigerian students. Here is everything you need to know about admissions, study permits, and life after graduation.',
      content: `<h2>Why Canada?</h2>
<p>Canada has welcomed more Nigerian students than any other African country over the past five years. The combination of world-class universities, post-graduation work permits, and genuine pathways to permanent residency makes it uniquely attractive. Cities like Toronto, Vancouver, Calgary, and Ottawa offer vibrant Nigerian communities, making the transition from home feel less daunting.</p>

<h2>Top Universities for Nigerian Students</h2>
<p>The most popular institutions among Nigerian applicants include:</p>
<ul>
<li><strong>University of Toronto</strong> — ranked #21 globally, strong in engineering, medicine, and business</li>
<li><strong>University of British Columbia</strong> — top-ranked for research and environmental sciences</li>
<li><strong>McGill University</strong> — Montreal-based, bilingual environment, world-class law and medicine</li>
<li><strong>York University</strong> — large Nigerian student community, flexible programmes</li>
<li><strong>Seneca College & Humber College</strong> — diploma programmes with direct pathways to work permits</li>
</ul>

<h2>Understanding the Study Permit Process</h2>
<p>To study in Canada, you need a Study Permit — not a visa. Here is the typical timeline:</p>
<ol>
<li>Receive your Letter of Acceptance from a Designated Learning Institution (DLI)</li>
<li>Apply online for your Study Permit through IRCC (Immigration, Refugees and Citizenship Canada)</li>
<li>Provide biometrics at the Canadian High Commission in Abuja or Lagos</li>
<li>Processing time: typically 8–16 weeks</li>
</ol>

<h2>Financial Requirements</h2>
<p>Canada requires proof that you can cover tuition and living expenses. You will need to show:</p>
<ul>
<li>First year's tuition fees (varies: CAD $15,000–$35,000 depending on programme)</li>
<li>Living expenses: CAD $10,000 per year (minimum)</li>
<li>Return flight costs</li>
</ul>

<h2>Post-Graduation Work Permit (PGWP)</h2>
<p>This is Canada's greatest advantage over other study destinations. After completing a full-time programme at a DLI, you qualify for a PGWP valid for up to three years — matching the length of your programme. During this time, you can work for any Canadian employer and build the work experience needed for permanent residency through Express Entry or Provincial Nominee Programmes.</p>

<h2>Scholarships Available to Nigerian Students</h2>
<p>Several scholarships are open to Nigerian applicants including the Vanier Canada Graduate Scholarships, Ontario Graduate Scholarships, and institution-specific bursaries. Our advisors can help identify scholarships aligned with your academic profile.</p>

<h2>Start Your Canada Journey Today</h2>
<p>Magener Synergy has helped hundreds of Nigerian students secure admissions, study permits, and accommodation in Canada. <a href="/contact">Contact our study abroad team</a> for a personalised consultation.</p>`,
      published: true,
    },
    {
      title: 'Dubai on a Budget: How to Experience Luxury Without Overspending',
      slug: 'dubai-budget-luxury-travel-guide',
      excerpt:
        'Think Dubai is only for the ultra-wealthy? Think again. With the right planning, Nigerian travellers can experience the best of Dubai without breaking the bank.',
      content: `<h2>The Dubai Myth</h2>
<p>Dubai has a reputation for excess — seven-star hotels, gold ATMs, and the world's tallest building. But beneath the glitter lies a city that, with smart planning, is far more accessible than most people assume. Here is how to experience the best of Dubai without the eye-watering price tag.</p>

<h2>Best Time to Visit</h2>
<p>Dubai's peak season runs from November to March when the weather is perfect (24–30°C). Avoid June to September — temperatures exceed 45°C and outdoor attractions are largely unbearable. Shoulder seasons (April–May, October) offer a sweet spot of manageable heat and lower prices.</p>

<h2>Flights From Nigeria</h2>
<p>Emirates, Etihad, and Air Arabia all fly from Lagos and Abuja to Dubai. Book at least 8 weeks in advance for the best fares. Emirates often has the best deals on round trips, averaging ₦350,000–₦550,000 depending on the season.</p>

<h2>Free and Affordable Attractions</h2>
<ul>
<li><strong>Dubai Fountain Show</strong> — free, nightly, spectacular. Watch from the Souk Al Bahar bridge</li>
<li><strong>Al Fahidi Historical Neighbourhood</strong> — Dubai's oldest quarter, free to explore, fascinating museums</li>
<li><strong>JBR Beach (Jumeirah Beach Residence)</strong> — free public beach with stunning skyline views</li>
<li><strong>Dubai Frame</strong> — AED 50 (₦6,000) for a remarkable bridge connecting old and new Dubai</li>
<li><strong>Global Village</strong> — AED 25 entry, representing 90+ countries with food, culture, and entertainment</li>
</ul>

<h2>Where to Eat Well for Less</h2>
<p>Skip the mall restaurants and explore Dubai's incredible Indian, Pakistani, and Filipino food scenes in Deira and Bur Dubai. Meals from AED 15–35 (₦1,800–₦4,200) are common and genuinely excellent. The Shawarma at Al Ustad do Brasil in Bur Dubai is legendary and costs under AED 15.</p>

<h2>Smart Accommodation</h2>
<p>Stay in Deira or Bur Dubai — 15–20 minutes from Downtown by metro — and save 40–60% on hotel costs compared to staying in Downtown or Dubai Marina. The Dubai Metro is clean, air-conditioned, and incredibly affordable (AED 2–8 per journey).</p>

<h2>The Burj Khalifa: Worth It?</h2>
<p>The Burj Khalifa observation deck (Level 124) costs AED 149 if booked online in advance — significantly cheaper than the AED 200+ walk-up price. Book the sunset slot for the most spectacular views over the city.</p>

<h2>Plan Your Dubai Trip With Us</h2>
<p>Magener Synergy specialises in getting Nigerian travellers to Dubai at the best possible prices. <a href="/contact">Get in touch</a> for a custom Dubai package.</p>`,
      published: true,
    },
    {
      title: 'Malaysia: Africa\'s Best-Kept Secret for Affordable Quality Education',
      slug: 'malaysia-affordable-education-african-students',
      excerpt:
        'A British-curriculum education at a fraction of UK prices — Malaysia\'s twinning programmes are transforming how African students access world-class degrees.',
      content: `<h2>Why Malaysian Education Is a Game-Changer</h2>
<p>Imagine studying a University of London degree — with the same curriculum, the same exams, and the same certificate — but paying 60% less and living in a modern, English-speaking Asian city. That is precisely what Malaysia's twinning programme offers, and thousands of Nigerian students are now taking advantage of it.</p>

<h2>What Is a Twinning Programme?</h2>
<p>Twinning programmes are partnerships between Malaysian private universities and established UK, Australian, or Canadian institutions. You study in Kuala Lumpur for one to two years, then transfer to the partner university abroad for your final year — or complete the full degree in Malaysia and receive a certificate from the foreign university. Popular partnerships include:</p>
<ul>
<li>HELP University × University of London</li>
<li>Taylor's University × University of the West of England</li>
<li>Monash University Malaysia (full Monash degree, fraction of Australian costs)</li>
<li>University of Nottingham Malaysia</li>
<li>Heriot-Watt University Malaysia</li>
</ul>

<h2>Cost Comparison</h2>
<p>A Business degree in the UK costs approximately £45,000–£60,000 in tuition alone. The same quality programme in Malaysia costs between MYR 80,000–120,000 (approximately £14,000–£21,000) — plus living costs that are 70% lower than London.</p>

<h2>The Malaysia Student Pass Process</h2>
<p>Getting into Malaysia is straightforward compared to UK or Canadian immigration:</p>
<ol>
<li>Receive offer letter from a Malaysian institution (we can help secure this)</li>
<li>Apply for the Malaysia Student Pass through EMGS (Education Malaysia Global Services)</li>
<li>EMGS processes your application in 3–4 weeks</li>
<li>Collect your Student Pass at the Malaysian embassy in Abuja</li>
<li>Fly to Kuala Lumpur and begin your studies</li>
</ol>

<h2>Life in Kuala Lumpur</h2>
<p>KL is a modern, multicultural city with an excellent MRT system, world-class shopping malls, stunning street food, and a surprisingly large Nigerian and West African community. The city is safe, English is widely spoken, and the food (especially the Mamak stalls open 24 hours) is extraordinary.</p>

<h2>Part-Time Work Rights</h2>
<p>Malaysian Student Pass holders can work up to 20 hours per week during semester breaks at approved employers. This helps students offset living costs significantly.</p>

<h2>Start Your Malaysia Journey</h2>
<p>Magener Synergy has direct partnerships with several Malaysian institutions and can guarantee offer letters within two weeks. <a href="/contact">Speak with our study abroad team today</a>.</p>`,
      published: true,
    },
    {
      title: 'Paris for Nigerian Travellers: The Ultimate Honeymoon and Leisure Guide',
      slug: 'paris-guide-nigerian-travellers-honeymoon',
      excerpt:
        'From the Eiffel Tower to hidden neighbourhood bistros — here is how to experience Paris like a local, with practical advice for Nigerian passport holders.',
      content: `<h2>The City of Light Awaits</h2>
<p>Paris consistently ranks as the world's most visited city for good reason — it is simply magnificent. The architecture, the food, the art, the romance — no other city delivers quite the same combination of history and elegance. For Nigerian couples on their honeymoon or leisure travellers seeking something extraordinary, Paris belongs at the top of the list.</p>

<h2>Schengen Visa: Your Gateway to 26 Countries</h2>
<p>The France Schengen Visa is not just a pass to Paris — it opens the entire Schengen Zone: Germany, Italy, Spain, Netherlands, Switzerland, Greece, and 20 more countries. Process your France Schengen visa at the French Embassy in Abuja. Requirements include:</p>
<ul>
<li>Valid passport (minimum 6 months validity beyond return date)</li>
<li>Hotel bookings and flight itinerary</li>
<li>Bank statements (last 3 months) showing sufficient funds</li>
<li>Travel insurance covering minimum €30,000</li>
<li>Employer letter or business registration documents</li>
</ul>
<p>Processing time is 15 business days from the date of appointment. Book your appointment early — slots fill up 4–6 weeks in advance.</p>

<h2>When to Visit Paris</h2>
<p>Spring (April–June) is Paris at its best — cherry blossoms in the Tuileries Garden, outdoor café culture in full swing, long evenings. September to October brings warm weather with thinner crowds. Avoid August — many Parisians leave the city and some restaurants close for summer holidays.</p>

<h2>Must-Do Experiences</h2>
<ul>
<li><strong>Eiffel Tower at Night</strong> — the light show every hour on the hour is magical and free to watch from Trocadéro</li>
<li><strong>Seine River Dinner Cruise</strong> — Bateaux Parisiens offers a three-course dinner with views of illuminated Paris. Perfect for couples</li>
<li><strong>Louvre Museum</strong> — book tickets online to skip the queues. Arrive when it opens at 9am</li>
<li><strong>Montmartre</strong> — the artist's quarter. Visit the Sacré-Cœur, browse local art, and have lunch at a neighbourhood café</li>
<li><strong>Versailles Day Trip</strong> — 40 minutes from Paris by RER train. The Palace of Versailles and its gardens are unmissable</li>
</ul>

<h2>Where Nigerians Love to Eat in Paris</h2>
<p>Paris has an excellent West African food scene — particularly around Château Rouge in the 18th arrondissement, which has been called "Little Africa". For French cuisine on a budget, seek out Prix-Fixe lunch menus (two or three courses for €15–€25) which most bistros offer on weekdays.</p>

<h2>Honeymoon Packages</h2>
<p>Magener Synergy specialises in Paris honeymoon packages that include return flights from Lagos, airport transfers, boutique hotel accommodation, Seine River dinner cruise, and a dedicated concierge. <a href="/contact">Get a custom quote</a> for your Paris honeymoon.</p>`,
      published: true,
    },
    {
      title: 'The Magener Synergy Visa Success Formula: Why We Have a 98% Approval Rate',
      slug: 'magener-synergy-98-percent-visa-success-formula',
      excerpt:
        'What separates a successful visa application from a rejected one? After processing thousands of applications, our team has identified the factors that matter most.',
      content: `<h2>Our Track Record</h2>
<p>Since our founding, Magener Synergy has maintained a 98% first-application visa approval rate across all destination countries. That is not luck — it is the result of a rigorous, detail-oriented process that we have refined over 12 years and thousands of applications.</p>

<h2>Factor 1: Document Integrity</h2>
<p>The single biggest cause of visa refusals is documentation issues — missing documents, inconsistent information, or documents that don't tell a coherent story. Our team reviews every document before submission against the specific requirements of each embassy. We cross-reference bank statements with tax returns, employment letters with payslips, and invitation letters with sponsor documents to ensure everything is consistent and credible.</p>

<h2>Factor 2: The Cover Letter</h2>
<p>Most applicants underestimate the power of a well-written cover letter. This document speaks directly to the visa officer and addresses the unspoken questions in every application: Why are you travelling? How will you fund the trip? Why will you return home? Our consultants write personalised, specific cover letters — never generic templates — that proactively address potential concerns before the officer raises them.</p>

<h2>Factor 3: Timing</h2>
<p>When you apply matters. We advise clients on the optimal window for each destination: avoiding peak application periods, accounting for embassy processing times, and ensuring all documents are dated appropriately. A bank statement that is six weeks old, or an employment letter dated after your application, can derail an otherwise strong application.</p>

<h2>Factor 4: Purpose Clarity</h2>
<p>Visa officers make decisions in minutes. If your application's purpose is not immediately clear — if the officer has to guess why you are travelling — you are at a disadvantage. Every application we process tells a single, clear, compelling story from start to finish.</p>

<h2>Factor 5: Managing Refusal Risk Proactively</h2>
<p>Before submitting, we assess each application against the specific refusal patterns we have observed for that embassy and that applicant profile. If we identify a risk area — insufficient funds, weak ties to Nigeria, incomplete travel history — we address it before submission, not after a refusal.</p>

<h2>What Happens If You Are Refused?</h2>
<p>In the rare cases where a client is refused despite our best efforts, we conduct a full review of the refusal reasons and prepare a stronger reapplication. We have successfully converted refusals from embassies including the UK, Canada, and Schengen into approvals on the second attempt.</p>

<h2>Ready to Apply?</h2>
<p><a href="/contact">Book a visa consultation</a> and let our specialists give your application the best possible chance of success.</p>`,
      published: true,
    },
  ];

  console.log('📝 Creating blog posts...');
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
    console.log(`  ✓ ${post.title}`);
  }

  // ── DESTINATIONS ─────────────────────────────────────────────────────────────
  const destinations = [
    {
      name: 'London',
      country: 'United Kingdom',
      slug: 'london',
      tag: 'Study & Leisure',
      image: '/destination-london.png',
      description:
        "From Buckingham Palace to Oxford's dreaming spires, London blends world-class education with iconic culture. One of the most sought-after destinations for Nigerian students and leisure travellers alike.",
      highlights: JSON.stringify([
        'Top-ranked universities (UCL, Imperial, LSE, King\'s College)',
        'UK Student Visa support with 98% success rate',
        'World-class museums, galleries & theatre',
        'Multicultural city with thriving African communities',
        'Gateway to Europe for weekend travel',
        'Strong graduate work visa pathways',
      ]),
      featured: true,
      sortOrder: 1,
    },
    {
      name: 'Toronto',
      country: 'Canada',
      slug: 'toronto',
      tag: 'Study & Immigration',
      image: '/destination-toronto.png',
      description:
        "Canada's largest city is a beacon for international students and professionals. Toronto's world-ranked universities, robust immigration pathways, and Nigerian diaspora community make it a top choice.",
      highlights: JSON.stringify([
        'University of Toronto — ranked top 20 globally',
        'Study Permit & PGWP guidance included',
        'Post-graduation immigration pathways (Express Entry, PNP)',
        'High standard of living & public safety',
        'One of the most diverse cities in the world',
        'Thriving Nigerian-Canadian business community',
      ]),
      featured: true,
      sortOrder: 2,
    },
    {
      name: 'Kuala Lumpur',
      country: 'Malaysia',
      slug: 'kuala-lumpur',
      tag: 'Education Hub',
      image: '/destination-kl.png',
      description:
        "Malaysia's dynamic capital is Asia's most affordable education hub, offering international-quality degrees at a fraction of the cost. Dual-degree programmes with UK and Australian universities are widely available.",
      highlights: JSON.stringify([
        'Twinning programmes with UK & Australian universities',
        'Cost of living 60% lower than UK/Canada',
        'Malaysia Student Pass (EMGS) — fast 4-week processing',
        'Vibrant food scene, warm climate, modern infrastructure',
        'Petronas Twin Towers & world-class shopping',
        'Direct flights from Abuja via Middle East hubs',
      ]),
      featured: true,
      sortOrder: 3,
    },
    {
      name: 'Dubai',
      country: 'United Arab Emirates',
      slug: 'dubai',
      tag: 'Luxury Travel',
      image: '/destination-dubai.png',
      description:
        'The city of superlatives — the tallest building, the largest mall, the most luxurious hotels. Dubai offers an unmatched luxury travel experience with straightforward tourist visa processing.',
      highlights: JSON.stringify([
        'Burj Khalifa, Palm Jumeirah, Desert Safari',
        '5-star all-inclusive resort packages',
        'Tax-free shopping at Dubai Mall & Gold Souk',
        'World-class dining with Michelin-starred restaurants',
        'Dubai Expo City & MICE corporate travel venue',
        'Year-round sunshine — 320+ days of sun',
      ]),
      featured: true,
      sortOrder: 4,
    },
    {
      name: 'Paris',
      country: 'France',
      slug: 'paris',
      tag: 'Romance & Culture',
      image: '/destination-paris.png',
      description:
        'The City of Light is synonymous with romance, haute couture, and culinary excellence. From the Eiffel Tower to Versailles, Paris delivers an unforgettable honeymoon or cultural escape.',
      highlights: JSON.stringify([
        'Eiffel Tower, Louvre, Versailles, Montmartre',
        'Seine River dinner cruises for couples',
        'Michelin-starred dining experiences',
        'Luxury fashion — Chanel, Dior, Louis Vuitton flagship stores',
        'Day trips to Loire Valley châteaux',
        'Schengen visa covers 26 European countries',
      ]),
      featured: true,
      sortOrder: 5,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      slug: 'tokyo',
      tag: 'Tech & Culture',
      image: '/destination-tokyo.png',
      description:
        "Where ancient tradition meets cutting-edge technology. Tokyo is a safe, efficient, and endlessly fascinating city for the curious traveller — from cherry blossom season to Akihabara's tech quarter.",
      highlights: JSON.stringify([
        'Cherry Blossom (Sakura) season packages — March/April',
        'Shibuya Crossing, Shinjuku, Harajuku & Akihabara',
        'Authentic ramen, sushi & teppanyaki experiences',
        'Day trips to Mount Fuji & Kyoto',
        'Ranked world\'s safest major city',
        'Japan Rail Pass for unlimited Shinkansen travel',
      ]),
      featured: true,
      sortOrder: 6,
    },
  ];

  console.log('🗺️  Creating destinations...');
  for (const dest of destinations) {
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: dest,
      create: dest,
    });
    console.log(`  ✓ ${dest.name}`);
  }

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────────
  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'Student, University of Toronto',
      quote:
        "Magener Synergy made the impossible feel effortless. I had been rejected twice before I came to them. They reviewed my entire application, rewrote my cover letter, and I had my Canadian study permit within eight weeks. I'm now in my second year at U of T.",
      rating: 5,
      featured: true,
    },
    {
      name: 'Chidi & Ngozi Eze',
      role: 'Honeymooners, Lagos',
      quote:
        "We gave Magener Synergy a budget and told them we wanted Paris and the Maldives for our honeymoon. What they delivered exceeded every expectation — the Seine dinner cruise, the overwater villa, the little surprise notes in our room. Truly unforgettable.",
      rating: 5,
      featured: true,
    },
    {
      name: 'Blessing Adeyemi',
      role: 'Business Executive, Abuja',
      quote:
        "As someone who travels frequently for business, I needed a travel partner who could move fast and deliver consistently. Magener Synergy handles everything from my Schengen renewals to booking my hotel suites. Absolute professionals.",
      rating: 5,
      featured: true,
    },
    {
      name: 'Tunde Fashola',
      role: 'Parent, Port Harcourt',
      quote:
        "I wanted the best for my daughter's education abroad. Magener Synergy helped us secure a place at a top Malaysian university with a UK twinning programme — at a cost I could actually afford. My daughter starts in September.",
      rating: 5,
      featured: true,
    },
    {
      name: 'Kemi Adunola',
      role: 'Entrepreneur, Lagos',
      quote:
        "I needed a UK business visa urgently and every agency I called said it was impossible in the timeframe. Magener Synergy not only got it done — they got it done three days early. Outstanding.",
      rating: 5,
      featured: false,
    },
  ];

  console.log('⭐ Creating testimonials...');
  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t }).catch(() => {
      // Skip duplicates on re-run
    });
    console.log(`  ✓ ${t.name}`);
  }

  console.log('\n✅ Database seeded successfully!');
  console.log(`   📝 ${blogPosts.length} blog posts`);
  console.log(`   🗺️  ${destinations.length} destinations`);
  console.log(`   ⭐ ${testimonials.length} testimonials`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
