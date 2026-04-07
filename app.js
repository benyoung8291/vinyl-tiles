/* ============================================================
   PREMREST VINYL TILES — APP JS
   Product data, interactions, scroll animations, form handling.
   ============================================================ */

// ─── Product Data ───────────────────────────────────────────
const products = {
    interface: [
        {
            name: "Natural Woodgrains",
            collection: "Level Set Collection",
            badge: "Best Seller",
            specs: ["250×1000mm", "4.5mm", "Sound Choice™"],
            colors: ["#c8a97e", "#8b6f47", "#a38b6d", "#d4b896", "#6b5340"],
            colorNames: ["Beech", "Chestnut", "Rustic Oak", "Washed Maple", "Walnut"],
            gradient: "linear-gradient(135deg, #c8a97e 0%, #8b6f47 50%, #a38b6d 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/natural-woodgrains/A002R.html"
        },
        {
            name: "Textured Woodgrains",
            collection: "Level Set Collection",
            badge: "Popular",
            specs: ["250×1000mm", "4.5mm", "Ceramor™"],
            colors: ["#b89b7a", "#7a6348", "#9c8060", "#d1b794", "#5e4a35"],
            colorNames: ["Antique Oak", "Dark Walnut", "Distressed Hickory", "Blonde Maple", "Ebony"],
            gradient: "linear-gradient(135deg, #b89b7a 0%, #7a6348 50%, #5e4a35 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/textured-woodgrains/A004R.html"
        },
        {
            name: "Textured Stones",
            collection: "Level Set Collection",
            badge: "Stone Look",
            specs: ["500×500mm", "4.5mm", "39% Recycled"],
            colors: ["#c4bdb4", "#918a81", "#a89f96", "#d6cfc7", "#78716c"],
            colorNames: ["Warm Limestone", "Dark Slate", "Sandstone", "Travertine", "Basalt"],
            gradient: "linear-gradient(135deg, #c4bdb4 0%, #918a81 50%, #78716c 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/textured-stones/A003R.html"
        },
        {
            name: "Brushed Lines",
            collection: "Level Set Collection",
            specs: ["250×1000mm", "4.5mm", "Sound Choice™"],
            colors: ["#baa58c", "#947b60", "#a69078", "#cbb9a2", "#7d6650"],
            colorNames: ["Almond", "Pecan", "Driftwood", "Birch", "Mocha"],
            gradient: "linear-gradient(135deg, #baa58c 0%, #947b60 50%, #7d6650 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/brushed-lines/A016R.html"
        },
        {
            name: "Northern Grain",
            collection: "Level Set Collection",
            specs: ["250×1000mm", "4.5mm", "Ceramor™"],
            colors: ["#d4c4ad", "#a89279", "#c0ad95", "#e2d5c2", "#8c7660"],
            colorNames: ["Nordic Birch", "Tawny", "Oatmeal", "Whitewash", "Hazel"],
            gradient: "linear-gradient(135deg, #d4c4ad 0%, #a89279 50%, #8c7660 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/northern-grain/A026R.html"
        },
        {
            name: "Drawn Lines",
            collection: "Level Set Collection",
            specs: ["250×1000mm", "4.5mm", "39% Recycled"],
            colors: ["#a09080", "#786858", "#8c7c6c", "#b4a494", "#665848"],
            colorNames: ["Flax", "Umber", "Taupe", "Sand", "Cocoa"],
            gradient: "linear-gradient(135deg, #a09080 0%, #786858 50%, #665848 100%)",
            url: "https://shop.interface.com/AU/en-AU/resilient/lvt/drawn-lines/A009R.html"
        }
    ],
    karndean: [
        {
            name: "Pure Fabric Oak",
            collection: "LooseLay Longboard — LLP329",
            badge: "Best Seller",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#d4c4a8", "#b8a88c", "#c4b498", "#e0d0b8", "#a89880"],
            colorNames: ["White", "Stone", "Grey", "Cappuccino", "Natural"],
            gradient: "linear-gradient(135deg, #d4c4a8 0%, #b8a88c 50%, #a89880 100%)",
            url: "https://www.karndean.com/en-au/floors/products/pure-fabric-oak-llp329/"
        },
        {
            name: "Field Oak",
            collection: "LooseLay Longboard — LLP356",
            badge: "New",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#d8c8a0", "#c4b488", "#ccbc98", "#e4d8b8", "#b8a878"],
            colorNames: ["Straw", "Golden", "Honey", "Limed", "Amber"],
            gradient: "linear-gradient(135deg, #d8c8a0 0%, #c4b488 50%, #b8a878 100%)",
            url: "https://www.karndean.com/en-au/floors/products/field-oak-llp356/"
        },
        {
            name: "Pure Danish Oak",
            collection: "LooseLay Longboard — LLP357",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#ddd0b8", "#c8b898", "#d0c0a8", "#e8dcc8", "#b8a888"],
            colorNames: ["Blonde", "Burnished", "Natural", "Pale", "Warm"],
            gradient: "linear-gradient(135deg, #ddd0b8 0%, #c8b898 50%, #b8a888 100%)",
            url: "https://www.karndean.com/en-au/floors/products/pure-danish-oak-llp357/"
        },
        {
            name: "Honey Ironbark",
            collection: "LooseLay Longboard — LLP325",
            badge: "Popular",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#c8a468", "#a88848", "#b89858", "#d8b878", "#987838"],
            colorNames: ["Mustard", "Golden Caramel", "Coffee", "Blonde", "Amber"],
            gradient: "linear-gradient(135deg, #c8a468 0%, #a88848 50%, #987838 100%)",
            url: "https://www.karndean.com/en-au/floors/products/australian-woods/honey-ironbark-v"
        },
        {
            name: "Tasmanian Oak",
            collection: "LooseLay Longboard — LLP312",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#dcc8a0", "#c4b08c", "#d0bc98", "#e8d8b8", "#b4a078"],
            colorNames: ["Soft Blonde", "Honey", "Natural", "Light", "Warm"],
            gradient: "linear-gradient(135deg, #dcc8a0 0%, #c4b08c 50%, #b4a078 100%)",
            url: "https://www.karndean.com/en-au/floors/products/our-ranges/loose-lay/looselay/tasmanian-oak-llp312"
        },
        {
            name: "Mountain Spotted Gum",
            collection: "LooseLay Longboard — LLP316",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#a07858", "#886048", "#946c50", "#b88868", "#785040"],
            colorNames: ["Rich Brown", "Deep Walnut", "Warm Chestnut", "Caramel", "Dark Cocoa"],
            gradient: "linear-gradient(135deg, #a07858 0%, #886048 50%, #785040 100%)",
            url: "https://www.karndean.com/en-au/floors/products/mountain-spotted-gum-llp316/"
        },
        {
            name: "Twilight Oak",
            collection: "LooseLay Longboard — LLP301",
            specs: ["1500×250mm", "4.5mm", "0.55mm Wear"],
            colors: ["#9c9490", "#847c78", "#908880", "#b0a8a0", "#787068"],
            colorNames: ["Mid Grey", "Charcoal", "Ash", "Silver", "Slate"],
            gradient: "linear-gradient(135deg, #9c9490 0%, #847c78 50%, #787068 100%)",
            url: "https://www.karndean.com/en-us/floors/products/twilight-oak-llp301/"
        }
    ],
    armstrong: [
        {
            name: "Natural Creations",
            collection: "Diamond 10® Technology",
            badge: "Best Seller",
            specs: ["Multiple Sizes", "3.2mm", "20mil Wear"],
            colors: ["#c8a878", "#8c7050", "#a08860", "#dcc098", "#6c5440"],
            colorNames: ["Maple", "Rustic Oak", "Pine", "Light Oak", "Dark Walnut"],
            gradient: "linear-gradient(135deg, #c8a878 0%, #8c7050 50%, #6c5440 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/natural-creations-with-diamond-10.html"
        },
        {
            name: "Biome",
            collection: "Diamond 10® — Wood Patterns",
            badge: "New",
            specs: ["6\"×48\"", "2.5mm", "Diamond 10®"],
            colors: ["#b09878", "#8a7258", "#9c8468", "#c4ac90", "#786048"],
            colorNames: ["Earthen", "Forest Floor", "Canopy", "Savanna", "Woodland"],
            gradient: "linear-gradient(135deg, #b09878 0%, #8a7258 50%, #786048 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/biome.html"
        },
        {
            name: "Terra",
            collection: "Diamond 10® — Stone Inspired",
            specs: ["18\"×18\"", "2.5mm", "Diamond 10®"],
            colors: ["#c4b8a8", "#a09488", "#b4a898", "#d4c8bc", "#908478"],
            colorNames: ["Limestone", "Slate", "Sandstone", "Marble", "Granite"],
            gradient: "linear-gradient(135deg, #c4b8a8 0%, #a09488 50%, #908478 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/terra.html"
        },
        {
            name: "Coalesce",
            collection: "Diamond 10® — Textile & Mosaic",
            specs: ["12\"×24\"", "2.5mm", "Diamond 10®"],
            colors: ["#b8a898", "#9c8c7c", "#a89888", "#c8b8a8", "#8c7c6c"],
            colorNames: ["Woven", "Linen", "Canvas", "Sisal", "Burlap"],
            gradient: "linear-gradient(135deg, #b8a898 0%, #9c8c7c 50%, #8c7c6c 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/coalesce.html"
        },
        {
            name: "Exchange",
            collection: "Diamond 10® — Contemporary",
            badge: "Popular",
            specs: ["Multiple Sizes", "2.5mm", "Diamond 10®"],
            colors: ["#d4c4b0", "#948474", "#b8a894", "#e0d0c0", "#7c6c5c"],
            colorNames: ["Pastel", "Neutral", "Saturated", "Cool", "Warm"],
            gradient: "linear-gradient(135deg, #d4c4b0 0%, #948474 50%, #7c6c5c 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/exchange.html"
        },
        {
            name: "Duo",
            collection: "Diamond 10® — Neutral & Color",
            specs: ["Multiple Sizes", "2.5mm", "Diamond 10®"],
            colors: ["#c0b0a0", "#a09080", "#b0a090", "#d0c0b0", "#908070"],
            colorNames: ["Warm Neutral", "Cool Grey", "Blush", "Ivory", "Clay"],
            gradient: "linear-gradient(135deg, #c0b0a0 0%, #a09080 50%, #908070 100%)",
            url: "https://www.armstrongflooring.com/commercial/en-us/products/lvt-luxury-flooring/duo.html"
        }
    ],
    tarkett: [
        {
            name: "iD Inspiration Ultimate",
            collection: "Rigid Composite Vinyl Tile",
            badge: "Premium",
            specs: ["Multiple Sizes", "Tru-Grain™", "Click Install"],
            colors: ["#c0a880", "#8c7458", "#a49068", "#d4bc98", "#746050"],
            colorNames: ["Classic Oak", "Vintage Walnut", "Rustic Elm", "Blonde Ash", "Smoked Oak"],
            gradient: "linear-gradient(135deg, #c0a880 0%, #8c7458 50%, #746050 100%)",
            url: "https://professionals.tarkett.com.au/en_AU/collection-C001339-id-inspiration-ultimate"
        },
        {
            name: "iD Comfort 19",
            collection: "Acoustic LVT — 0.55mm Wear",
            badge: "Best Seller",
            specs: ["Multiple Sizes", "0.55mm Wear", "Acoustic"],
            colors: ["#b89c78", "#947c58", "#a48c68", "#ccb490", "#806848"],
            colorNames: ["Natural Oak", "Warm Walnut", "Honey Pine", "Pale Birch", "Deep Teak"],
            gradient: "linear-gradient(135deg, #b89c78 0%, #947c58 50%, #806848 100%)",
            url: "https://professionals.tarkett.com.au/en_AU/collection-C002811-id-comfort-19"
        },
        {
            name: "iD Naturals 70",
            collection: "Heavy Traffic — Wood & Stone",
            specs: ["Multiple Formats", "0.70mm Wear", "800kg Load"],
            colors: ["#c8b898", "#a89878", "#b8a888", "#d8c8a8", "#988868"],
            colorNames: ["Light Pine", "Heritage Oak", "Sandstone", "Travertine", "Slate"],
            gradient: "linear-gradient(135deg, #c8b898 0%, #a89878 50%, #988868 100%)",
            url: "https://professionals.tarkett.com.au/en_AU/collection-C000771-id-naturals-70"
        },
        {
            name: "Urban Naturals",
            collection: "Timber & Concrete Designs",
            badge: "Popular",
            specs: ["Plank Format", "10yr Warranty", "Glue Down"],
            colors: ["#a8947c", "#8c7860", "#98886c", "#bca48c", "#786450"],
            colorNames: ["Urban Oak", "Concrete Grey", "Reclaimed Pine", "Loft Timber", "Raw Steel"],
            gradient: "linear-gradient(135deg, #a8947c 0%, #8c7860 50%, #786450 100%)",
            url: "https://professionals.tarkett.com.au/en_AU/collection-C001592-urban-naturals"
        },
        {
            name: "AU Locally Stocked",
            collection: "Quick-Ship Collection",
            badge: "In Stock",
            specs: ["Ready to Ship", "Multiple Ranges", "Fast Delivery"],
            colors: ["#c4b09c", "#a49080", "#b4a08c", "#d4c0ac", "#948070"],
            colorNames: ["Selection 1", "Selection 2", "Selection 3", "Selection 4", "Selection 5"],
            gradient: "linear-gradient(135deg, #c4b09c 0%, #a49080 50%, #948070 100%)",
            url: "https://professionals.tarkett.com.au/en_AU/quickship/Resilient%20Flooring/au_C01006?category_name=Luxury+Vinyl+Tiles"
        }
    ]
};

// ─── Render Product Cards ───────────────────────────────────
function createProductCard(product, brand) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.brand = brand;

    const colorsHTML = product.colors.map((c, i) =>
        `<div class="product-card-color" style="background:${c}" title="${product.colorNames[i]}"></div>`
    ).join('');

    const specsHTML = product.specs.map(s =>
        `<span class="product-card-spec">${s}</span>`
    ).join('');

    const badgeHTML = product.badge
        ? `<div class="product-card-badge">${product.badge}</div>`
        : '';

    card.innerHTML = `
        <div class="product-card-swatch">
            <div class="product-card-swatch-inner" style="background:${product.gradient}"></div>
            <div class="product-card-swatch-overlay"></div>
            ${badgeHTML}
        </div>
        <div class="product-card-body">
            <h3 class="product-card-name">${product.name}</h3>
            <p class="product-card-collection">${product.collection}</p>
            <div class="product-card-specs">${specsHTML}</div>
            <div class="product-card-colors">${colorsHTML}</div>
            <div class="product-card-cta">
                <a href="${product.url}" target="_blank" rel="noopener" class="product-card-link">
                    View Product
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#contact" class="product-card-quote">Get Quote</a>
            </div>
        </div>
    `;

    // Click "Get Quote" prefills checkbox
    card.querySelector('.product-card-quote').addEventListener('click', (e) => {
        e.preventDefault();
        const brandCheckboxMap = {
            interface: 'Interface LVT',
            karndean: 'Karndean Looselay Longboard',
            armstrong: 'Armstrong LVT',
            tarkett: 'Tarkett LVT'
        };
        const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
        checkboxes.forEach(cb => {
            if (cb.value === brandCheckboxMap[brand]) cb.checked = true;
        });
        const msg = document.getElementById('message');
        if (msg && !msg.value.includes(product.name)) {
            msg.value = msg.value
                ? msg.value + `\nInterested in: ${product.name} (${product.collection})`
                : `Interested in: ${product.name} (${product.collection})`;
        }
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    return card;
}

function renderProducts() {
    const grids = {
        interface: document.getElementById('interfaceGrid'),
        karndean: document.getElementById('karndeanGrid'),
        armstrong: document.getElementById('armstrongGrid'),
        tarkett: document.getElementById('tarkettGrid')
    };

    Object.entries(products).forEach(([brand, items]) => {
        const grid = grids[brand];
        if (!grid) return;
        items.forEach(product => {
            grid.appendChild(createProductCard(product, brand));
        });
    });
}

// ─── Brand Filter ───────────────────────────────────────────
function initBrandFilter() {
    const btns = document.querySelectorAll('.brand-nav-btn');
    const sections = document.querySelectorAll('.brand-section');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const brand = btn.dataset.brand;

            sections.forEach(section => {
                if (brand === 'all' || section.dataset.brand === brand) {
                    section.style.display = '';
                    // Re-trigger reveal for cards in this section
                    section.querySelectorAll('.product-card').forEach((card, i) => {
                        card.style.transitionDelay = `${i * 0.06}s`;
                        card.classList.remove('revealed');
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                card.classList.add('revealed');
                            });
                        });
                    });
                } else {
                    section.style.display = 'none';
                }
            });

            // Also show/hide the CTA and Why sections
            document.querySelector('.cta-section').style.display = '';
            document.querySelector('.why-section').style.display = '';
        });
    });
}

// ─── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Product cards with stagger
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const grid = entry.target.closest('.product-grid');
                if (grid) {
                    const cards = Array.from(grid.querySelectorAll('.product-card'));
                    const index = cards.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.08}s`;
                }
                entry.target.classList.add('revealed');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.product-card').forEach(el => cardObserver.observe(el));
}

// ─── Navigation ─────────────────────────────────────────────
function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Scroll state
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        nav.classList.toggle('scrolled', scrollY > 80);

        // Show/hide floating CTA
        const floatingCta = document.getElementById('floatingCta');
        floatingCta.classList.toggle('visible', scrollY > 600);

        lastScroll = scrollY;
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
        document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// ─── Cursor Glow ────────────────────────────────────────────
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
}

// ─── Count-Up Animation ─────────────────────────────────────
function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const increment = Math.max(1, Math.floor(target / 40));
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current;
                }, 40);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

// ─── Form Handling ──────────────────────────────────────────
function initForm() {
    const form = document.getElementById('contactForm');
    const successEl = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.style.display = 'none';
                successEl.classList.add('visible');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Enquiry</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
            alert('Something went wrong. Please call us on 1300 207 915 or try again.');
        }
    });
}

// ─── Smooth scroll for anchor links ─────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('nav').offsetHeight;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ─── Initialize Everything ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initBrandFilter();
    initNav();
    initCursorGlow();
    initCountUp();
    initForm();
    initSmoothScroll();

    // Delay scroll reveal slightly so products are in DOM
    requestAnimationFrame(() => {
        initScrollReveal();
    });
});
