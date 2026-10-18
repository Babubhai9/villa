// Zepvora Digital villa enquiry website
// IMPORTANT: Replace the placeholder WhatsApp number, phone number, email, social links and address below.
const CONFIG = {
  whatsappNumber: "910000000000", // digits only, with country code; example: 919876543210
  phoneNumber: "+910000000000",
  email: "hello@zepvoradigital.com",
  instagramUrl: "https://instagram.com/", // replace with your Instagram profile
  currency: "₹"
};

const villas = [
  {id:1,name:"Sunset Villa",location:"Lonavala",price:12000,guests:10,beds:4,baths:4,tag:"Guest favourite",rating:"4.9",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85"],description:"A serene private escape with a sparkling pool, generous living spaces and beautiful green views. Ideal for families and groups looking to slow down and reconnect.",amenities:["Private pool","Mountain views","4 bedrooms","Air conditioning","Fully equipped kitchen","Parking","Garden","Wi-Fi"],video:""},
  {id:2,name:"Ocean Breeze Villa",location:"Goa",price:25000,guests:8,beds:3,baths:3,tag:"Near the coast",rating:"4.8",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85"],description:"A relaxed coastal-inspired villa with open spaces, contemporary comforts and room to enjoy Goa at your own pace. Ask our team about availability and local recommendations.",amenities:["Private pool","3 bedrooms","Outdoor lounge","Air conditioning","Kitchen","Parking","Wi-Fi","Garden"],video:""},
  {id:3,name:"Hill View Villa",location:"Pune",price:9500,guests:6,beds:3,baths:2,tag:"Peaceful retreat",rating:"4.7",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85"],description:"A welcoming hideaway with calm interiors and outdoor space for easy weekends. A great fit for small groups and family breaks away from the everyday.",amenities:["Garden","3 bedrooms","Mountain views","Kitchen","Parking","Wi-Fi","Outdoor dining","Air conditioning"],video:""},
  {id:4,name:"Forest Retreat Villa",location:"Coorg",price:15000,guests:8,beds:4,baths:3,tag:"Nature escape",rating:"4.9",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85"],description:"Surrounded by lush scenery, this nature-led stay is made for slow mornings, long conversations and restful evenings. Reach out to tailor your stay.",amenities:["Garden","4 bedrooms","Nature views","Kitchen","Parking","Wi-Fi","Outdoor seating","Dining area"],video:""},
  {id:5,name:"Palm Grove Villa",location:"Alibaug",price:18500,guests:10,beds:4,baths:4,tag:"Group getaway",rating:"4.8",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85"],description:"A spacious villa for gathering your favourite people, with airy indoor-outdoor spaces and a laid-back holiday feel. Contact us to plan a group escape.",amenities:["Private pool","4 bedrooms","Outdoor lounge","Kitchen","Parking","Wi-Fi","Garden","BBQ area"],video:""},
  {id:6,name:"The Olive House",location:"Lonavala",price:14000,guests:8,beds:3,baths:3,tag:"Design-led stay",rating:"4.8",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85"],description:"A contemporary retreat with thoughtful details, generous spaces and a welcoming atmosphere for weekends, celebrations and time away together.",amenities:["Private pool","3 bedrooms","Air conditioning","Kitchen","Parking","Wi-Fi","Garden","Lounge"],video:""}
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let activeLocation = "all";
let toastTimer;
const currency = n => `${CONFIG.currency}${n.toLocaleString("en-IN")}`;
const whatsappLink = message => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

function villaCard(v) {
  return `<article class="villa-card" data-id="${v.id}" data-aos="fade-up">
    <div class="villa-image"><img loading="lazy" src="${v.image}" alt="${v.name} in ${v.location}" onerror="this.src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'"><span class="villa-tag">${v.tag}</span><button class="favorite" aria-label="Save ${v.name}" data-favorite="${v.id}"><i class="fa-regular fa-heart"></i></button></div>
    <div class="villa-body"><p class="villa-location"><i class="fa-solid fa-location-dot"></i> ${v.location}</p><div class="villa-title-row"><h3 class="villa-title">${v.name}</h3><span class="villa-rating"><i class="fa-solid fa-star"></i> ${v.rating}</span></div><div class="villa-meta"><span><i class="fa-solid fa-bed"></i>${v.beds} bedrooms</span><span><i class="fa-solid fa-user-group"></i>${v.guests} guests</span><span><i class="fa-solid fa-bath"></i>${v.baths} baths</span></div><div class="villa-footer"><span class="price"><strong>${currency(v.price)}</strong> / night*</span><button class="card-link" data-open-villa="${v.id}">View details <i class="fa-solid fa-arrow-right"></i></button></div></div>
  </article>`;
}
function renderFeatured() {
  $("#featuredGrid").innerHTML = villas.slice(0,3).map(villaCard).join("");
}
function renderVillas() {
  let results = villas.filter(v => activeLocation === "all" || v.location === activeLocation);
  const guest = $("#guestFilter")?.value || "all";
  if (guest !== "all") results = results.filter(v => v.guests >= Number(guest));
  const sort = $("#sortFilter")?.value || "featured";
  if (sort === "low") results.sort((a,b)=>a.price-b.price);
  if (sort === "high") results.sort((a,b)=>b.price-a.price);
  $("#villaGrid").innerHTML = results.map(villaCard).join("");
  $("#noResults").hidden = results.length > 0;
  $$("#filterChips .chip").forEach(chip => chip.classList.toggle("active", chip.dataset.location === activeLocation));
  if (window.AOS) AOS.refreshHard();
}
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>toast.classList.remove("show"), 3200);
}
function openVilla(id) {
  const v = villas.find(item=>item.id === Number(id)); if(!v) return;
  const imageMarkup = `<div class="modal-gallery"><img src="${v.images[0]}" alt="${v.name} main view"><div class="modal-gallery-side"><img src="${v.images[1]}" alt="${v.name} interior"><img src="${v.images[2]}" alt="${v.name} outdoor area"></div></div>`;
  $("#modalContent").innerHTML = `${imageMarkup}<div class="modal-info"><p class="villa-location"><i class="fa-solid fa-location-dot"></i> ${v.location} · PRIVATE VILLA</p><div class="modal-topline"><h2 id="modalTitle">${v.name}</h2><div class="modal-price"><strong>${currency(v.price)}</strong> / night*</div></div><div class="villa-meta"><span><i class="fa-solid fa-bed"></i>${v.beds} bedrooms</span><span><i class="fa-solid fa-user-group"></i>Up to ${v.guests} guests</span><span><i class="fa-solid fa-bath"></i>${v.baths} bathrooms</span><span><i class="fa-solid fa-star"></i>${v.rating} guest rating*</span></div><p class="modal-description">${v.description}</p><h3 style="font:22px var(--serif);margin:24px 0 0">Made for your comfort</h3><div class="amenity-list">${v.amenities.map(a=>`<span class="amenity"><i class="fa-solid fa-check"></i>${a}</span>`).join("")}</div><div class="modal-actions"><a class="btn btn-gold" href="${whatsappLink(`Hi Zepvora Digital! I am interested in ${v.name} in ${v.location}. Please share availability, final pricing and booking details.`)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp</a><button class="btn btn-outline" id="galleryVideo"><i class="fa-regular fa-circle-play"></i> Villa video</button></div><p style="font-size:9px;color:#929087;margin:14px 0 0">*Demo content and indicative prices. Confirm details and availability with the team.</p><div id="videoArea"></div></div>`;
  $("#villaModal").classList.add("open"); $("#villaModal").setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
  $("#galleryVideo").addEventListener("click",()=> {
    $("#videoArea").innerHTML = `<div class="video-placeholder"><i class="fa-regular fa-circle-play"></i><h3 style="font:24px var(--serif);margin:0">Villa video</h3><p>Add your villa video URL in script.js to display a real video here. This demo gallery currently uses photographs only.</p></div>`;
  });
}
function closeModal() { $("#villaModal").classList.remove("open"); $("#villaModal").setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); }
function setLocation(location) { activeLocation = location; renderVillas(); }
function handleSearch(e) {
  e.preventDefault();
  const location = $("#locationFilter").value;
  setLocation(location);
  $("#villas").scrollIntoView({behavior:"smooth"});
  const inDate = $("#checkIn").value, outDate = $("#checkOut").value;
  if(inDate && outDate && outDate <= inDate) { showToast("Check-out should be after check-in."); return; }
  if(inDate || outDate) showToast("Dates selected. Please confirm availability with our team.");
}

document.addEventListener("click", e => {
  const open = e.target.closest("[data-open-villa]");
  const fav = e.target.closest("[data-favorite]");
  if(open) openVilla(open.dataset.openVilla);
  if(fav) { fav.classList.toggle("saved"); fav.innerHTML = `<i class="${fav.classList.contains("saved")?"fa-solid":"fa-regular"} fa-heart"></i>`; showToast(fav.classList.contains("saved")?"Added to your saved villas":"Removed from saved villas"); }
  if(e.target.closest("[data-close-modal]")) closeModal();
  const scroll = e.target.closest("[data-scroll]");
  if(scroll) { e.preventDefault(); document.querySelector(scroll.dataset.scroll)?.scrollIntoView({behavior:"smooth"}); }
});
$("#filterChips").addEventListener("click",e=>{const chip=e.target.closest("[data-location]");if(chip)setLocation(chip.dataset.location);});
$("#searchForm").addEventListener("submit",handleSearch);
$("#sortFilter").addEventListener("change",renderVillas);
$("#guestFilter").addEventListener("change",renderVillas);
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$$(".nav-link, #mainNav a").forEach(link=>link.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#watchVideo").addEventListener("click",()=>showToast("Add your brand or villa video URL to enable video playback."));
$("#enquiryForm").addEventListener("submit",e=>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get("name"), phone = form.get("phone"), email = form.get("email"), destination = form.get("destination"), guests = form.get("guests"), message = form.get("message");
  const text = `Hello Zepvora Digital! I'd like to enquire about a villa stay.\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nDestination: ${destination}\nGuests: ${guests}\nTrip details: ${message || "Not provided"}`;
  window.open(whatsappLink(text), "_blank", "noopener");
  showToast("Opening WhatsApp with your enquiry. Please send the message there.");
});
$("#floatWhatsApp").href = whatsappLink("Hi Zepvora Digital! I'd like to enquire about your villas.");
$("#floatWhatsApp").addEventListener("click",e=>{if(CONFIG.whatsappNumber==="910000000000"){showToast("Demo WhatsApp number: replace it in script.js before publishing.");}});
$("#year").textContent = new Date().getFullYear();
renderFeatured(); renderVillas();
if(window.AOS) AOS.init({duration:650,once:true,offset:65,easing:"ease-out-cubic"});
// Keep mobile bottom nav active as sections enter view.
const sections = ["home","villas","about","contact"].map(id=>document.getElementById(id)).filter(Boolean);
if("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) {
        $$(".mobile-nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
        $$(".desktop-nav .nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
      }
    });
  },{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>observer.observe(s));
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
