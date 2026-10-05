import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Baby, Building2, CakeSlice, CalendarDays, CarFront, Check, ChevronDown, ChevronLeft, ChevronRight,
  Droplets, Facebook, Gem, HeartHandshake, Instagram, Landmark, Linkedin, Mail, MapPin, Menu,
  MessageCircle, Phone, Power, Sparkles, Store, Users, UsersRound, Utensils, Wind, X, Youtube, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mrd-grand-hall.jpg";
import miniHallImage from "@/assets/mrd-mini-hall.jpg";
import galleryOne from "@/assets/mrd-gallery-one.jpg";
import galleryTwo from "@/assets/mrd-gallery-two.jpg";
import logoAsset from "@/assets/mrd-mahal-logo.png.asset.json";
import bannerAsset from "@/assets/mrd-mahal-banner.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "MRD Mahal | Grand Wedding Venue" },
    { name: "description", content: "MRD Mahal — Your Dream Moments in Our Grand venues." },
    { property: "og:title", content: "MRD Mahal | Grand Wedding Venue" },
    { property: "og:description", content: "MRD Mahal — Your Dream Moments in Our Grand venues." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const nav = [["About","about"],["Halls","halls"],["Availability","quick-enquiry"],["Gallery","gallery"]] as const;
const eventTypes = ["Weddings & Receptions","Engagements & Muhurtham Functions","Birthday Parties","Seemantham & Baby Showers","Corporate & Cultural Events","Family Gatherings","Stall showcasing"];
const eventIcons = [HeartHandshake, Sparkles, CakeSlice, Baby, Building2, UsersRound, Store] as const;
const socialLinks = [
  [Facebook,"Facebook","https://www.facebook.com/mrdmahalmadurai"],
  [Instagram,"Instagram","https://www.instagram.com/mrd_mahal/"],
  [Youtube,"YouTube","https://www.youtube.com/@mrd_mahal_madurai"],
  [Linkedin,"LinkedIn","https://www.linkedin.com/company/maharajan-ambalam-rajammal-thirumana-mahal/"],
  [null,"Pinterest","https://in.pinterest.com/mrdmahalmadurai/"],
] as const;
const benefits = [
  [Landmark,"Traditional & Modern Architecture","Blend of classic elegance and contemporary design"],
  [Utensils,"Separate Dining & Function Areas","Spacious and well-organized spaces"],
  [Zap,"Power Backup & Generator Support","Uninterrupted power supply for your events"],
  [CarFront,"Spacious 360 Parking Facility","Ample parking space for all your guests"],
  [MapPin,"Easy Access Location Near NH85","Conveniently located with easy accessibility"],
  [HeartHandshake,"Friendly Management & Event Support","Dedicated team to assist you throughout"],
] as const;
const facilities = [
  [Power,"Generator Backup","Uninterrupted power supply throughout your event"],
  [Droplets,"Drinking Water Facility","Clean and purified water available"],
  [Users,"Bride & Groom Rooms","Comfortable private changing rooms"],
  [Sparkles,"Restrooms with Maintenance Support","Well-maintained facilities with support staff"],
  [Gem,"Decoration & Catering Coordination Support","Professional assistance for all your event needs"],
  [Building2,"7+ rooms available for hosts and guests.","room availability, occupancy, and booking terms for your event date."],
] as const;
const testimonials = [
  ["Big marriage Hall with good ambience and has unique design. Dining hall is quite big but not neatly maintained. Surrounding area outside the hall can be kept neatly and cleaner.","Anjan kumar"],
  ["One of the best advantages of MRD Mahal is its location near Teppakulam, which is very easy to access. The mahal is spacious, clean, and suitable for big functions. Parking facilities are decent and well-organized. Overall, it offers good value for the facilities provided.","Nithiskumar"],
  ["This is the best mahal in Theppakulam, Madurai. I hosted my sister’s wedding here, and the ambiance was excellent throughout the event.","suba lakshmi.k"],
  ["Good & wide free place.mess underground,stage in 1st floor,rooms are in 2nd floor and top empty madi.backside toilet.nearly Madurai theppakkulam.&also near as Meenakshi Amman temple.","A Hari Vengadesh (Venky )"],
  ["MRD Mahal is a beautiful place for weddings and family functions. The interiors are elegant, lighting is well done, and the stage setup looks amazing in photos. The ambience feels grand and welcoming. Overall, a great choice for memorable events.","Sri Minimax"],
] as const;

function scrollTo(id:string) { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); }

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-current" aria-hidden="true"><path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.89c0 1.75.46 3.46 1.33 4.97L2 22l5.27-1.38a9.88 9.88 0 0 0 4.76 1.21h.01c5.46 0 9.89-4.44 9.89-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.56 3.72-8.27 8.28-8.27a8.22 8.22 0 0 1 5.85 2.42 8.22 8.22 0 0 1 2.42 5.85c0 4.56-3.72 8.27-8.28 8.27Zm4.54-6.19c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.28 3.79.6.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z"/></svg>;
}

function Header() {
  const [scrolled,setScrolled] = useState(false); const [open,setOpen] = useState(false); const [active,setActive] = useState("about");
  useEffect(() => {
    const onScroll=()=>setScrolled(window.scrollY>40); onScroll(); window.addEventListener("scroll",onScroll);
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:"-30% 0px -60%"});
    nav.forEach(([,id])=>{const el=document.getElementById(id);if(el)observer.observe(el)});
    return()=>{window.removeEventListener("scroll",onScroll);observer.disconnect()};
  },[]);
  return <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled?"bg-background/95 shadow-md backdrop-blur py-2":"bg-background/75 backdrop-blur-sm py-4 md:top-5 md:mx-6 md:border md:border-background/50"}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
      <a href="#top" className="flex items-center text-primary" aria-label="MRD Mahal home"><img src={logoAsset.url} alt="MRD Mahal logo" width={1920} height={1920} className="h-16 w-auto -my-2 md:h-20 md:-my-3"/></a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`} className={`text-sm transition-colors hover:text-primary ${active===id?"text-primary":"text-foreground"}`}>{label}</a>)}</nav>
       <Button asChild className="hidden h-11 rounded-none px-6 md:inline-flex"><a href="https://wa.me/918220013444?text=Hello%2C%20I%20am%20interested%20in%20booking%20MRD%20Mahal%20for%20an%20upcoming%20event.%20Kindly%20share%20the%20available%20dates%2C%20venue%20details%2C%20pricing%2C%20and%20booking%20terms.%20Thank%20you." target="_blank" rel="noopener noreferrer" aria-label="Get Quote on WhatsApp"><WhatsAppMark/>Get Quote</a></Button>
      <Button variant="ghost" size="icon" className="min-h-11 min-w-11 md:hidden" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
    </div>
    {open&&<nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="block border-b border-border py-3 text-primary">{label}</a>)}<Button asChild className="mt-5 h-11 w-full rounded-none"><a href="https://wa.me/918220013444?text=Hello%2C%20I%20am%20interested%20in%20booking%20MRD%20Mahal%20for%20an%20upcoming%20event.%20Kindly%20share%20the%20available%20dates%2C%20venue%20details%2C%20pricing%2C%20and%20booking%20terms.%20Thank%20you." target="_blank" rel="noopener noreferrer" aria-label="Get Quote on WhatsApp"><WhatsAppMark/>Get Quote</a></Button></nav>}
  </header>
}

function SectionTitle({children,light=false}:{children:string;light?:boolean}) { return <h2 className={`display-heading text-[clamp(2.7rem,6vw,5.8rem)] ${light?"text-primary-foreground":"text-primary"}`}>{children}</h2> }

function Index() {
  const [lightbox,setLightbox]=useState<number|null>(null); const [success,setSuccess]=useState(false); const [bookingChoice,setBookingChoice]=useState<"mahal"|"mini"|"other">("mahal");
  const [testimonialRef,testimonialApi]=useEmblaCarousel({loop:true}); const [activeTestimonial,setActiveTestimonial]=useState(0);
  useEffect(()=>{if(lightbox===null)return;const fn=(e:KeyboardEvent)=>{if(e.key==="Escape")setLightbox(null)};document.addEventListener("keydown",fn);return()=>document.removeEventListener("keydown",fn)},[lightbox]);
  useEffect(()=>{if(!testimonialApi)return;const updateActive=()=>setActiveTestimonial(testimonialApi.selectedScrollSnap());testimonialApi.on("select",updateActive);testimonialApi.on("reInit",updateActive);updateActive();return()=>{testimonialApi.off("select",updateActive);testimonialApi.off("reInit",updateActive)}},[testimonialApi]);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const d=new FormData(f);const v=(k:string)=>String(d.get(k)??"").trim()||"Not provided";
    const msg=`Hello, I would like to enquire about booking MRD Mahal.\n\nName: ${v("name")}\nPhone: ${v("phone")}\nEvent Type: ${v("event")}\nPreferred Date: ${v("date")}\nPreferred Hall: ${v("hall")}\n\nPlease share the availability, pricing, facilities, and booking terms.\n\nThank you.`;
    window.open(`https://wa.me/918220013444?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");setSuccess(true)};
  const hallFeatures=[
    {name:"MRD Max Hall",label:"MRD Mahal",heading:"Max Hall",subtitle:"Grand Celebrations Made Perfect",desc:"Our Max Hall is ideal for large-scale weddings, receptions, and cultural events. Designed to accommodate grand gatherings comfortably, this hall enhances every celebration with its spacious layout and elegant interiors.",features:["Comfortably Accommodates 1,000 Guests","Grand Stage Setup","Centralized Lighting & Decoration Flexibility","700+ peoples Separate Dining Area","Premium Ventilation & Ambience"],image:heroImage,alt:"MRD Max Hall grand wedding and function hall interior"},
    {name:"MRD Mini Hall",label:"MRD Mini Hall",heading:"MRD Mini Hall",subtitle:"Intimate & Elegant Functions",desc:"Perfect for smaller functions such as engagement ceremonies, birthdays, and family gatherings, the Mini Hall offers a warm and elegant atmosphere while maintaining the same quality standards as our main hall.",features:["200 seats for small & medium gatherings","Compact yet elegant interiors","Budget-friendly option","Same premium facilities"],image:miniHallImage,alt:"MRD Mini Hall intimate wedding and function hall interior"}
  ];
  const gallery=[
    [galleryOne,"Venue Exterior","MRD Mahal venue exterior"],[galleryOne,"Wedding Couple","Wedding couple celebration at MRD Mahal"],[galleryOne,"Max Hall Interior Corridor","MRD Max Hall interior corridor"],
    [galleryTwo,"Mini Hall Stage","MRD Mini Hall stage"],[galleryTwo,"Dining Area","MRD Mahal dining area"],[galleryTwo,"Car Parking","MRD Mahal car parking area"],
  ] as const;
  const selectedGallery = lightbox === null ? undefined : gallery[lightbox];
  return <div id="top" className="overflow-x-hidden bg-background"><Header/>
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[max(980px,calc(100svh+120px))] flex-col justify-between overflow-hidden bg-primary text-primary-foreground md:min-h-[max(1120px,calc(100svh+220px))]">
      <img src={bannerAsset.url} alt="MRD Mahal wedding venue banner with decorated wedding stage and guest seating" width={1672} height={941} fetchPriority="high" className="absolute inset-x-0 bottom-0 top-44 h-[calc(100%-11rem)] w-full object-cover object-top transition-transform md:top-56 md:h-[calc(100%-14rem)] duration-[1800ms] hover:scale-[1.025] motion-reduce:transform-none"/>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-8 pt-24 text-center [text-shadow:0_2px_12px_rgb(0_0_0/0.55)] sm:px-8 md:pt-28">
        <div className="mx-auto mb-5 h-px w-16 bg-gold" aria-hidden="true"/>
        <h1 id="hero-title" className="display-heading mx-auto max-w-5xl text-[clamp(2rem,5vw,4.75rem)] leading-[1.06] text-primary-foreground">
          <span className="block">Your Dream Moments in Our</span>
          <span className="block text-primary-foreground">Grand venues</span>
        </h1>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-12 text-center sm:px-8 md:pb-16">
        <p className="display-heading mb-3 text-3xl text-primary-foreground sm:text-4xl">MRD Mahal</p>
        <p className="stat-number mx-auto max-w-3xl text-xs font-semibold leading-6 text-primary-foreground/90 sm:text-sm">25+ Years | 1000+ Guests | 7+ Rooms | 60+ Parking</p>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="group" aria-label="Event booking selection">
          <Button type="button" variant="outline" aria-pressed={bookingChoice==="mahal"} onClick={()=>{setBookingChoice("mahal");scrollTo("max-hall")}} className={`flex min-h-12 items-center justify-center gap-2 rounded-md border-gold bg-foreground/90 px-5 text-center text-sm leading-tight text-background transition-all hover:bg-foreground hover:text-background ${bookingChoice==="mahal"?"ring-2 ring-gold ring-offset-2 ring-offset-primary":""}`}><WhatsAppMark/>Book Mahal for Wedding</Button>
          <Button type="button" variant="outline" aria-pressed={bookingChoice==="mini"} onClick={()=>{setBookingChoice("mini");scrollTo("mini-hall")}} className={`flex min-h-12 items-center justify-center gap-2 rounded-md border-gold bg-foreground/90 px-5 text-center text-sm leading-tight text-background transition-all hover:bg-foreground hover:text-background ${bookingChoice==="mini"?"ring-2 ring-gold ring-offset-2 ring-offset-primary":""}`}><WhatsAppMark/>Book Minihall for Meeting</Button>
          <Button type="button" variant="outline" aria-pressed={bookingChoice==="other"} onClick={()=>{setBookingChoice("other");scrollTo("quick-enquiry")}} className={`min-h-12 rounded-md border-gold bg-foreground/90 px-5 text-center text-sm leading-tight text-background transition-all hover:bg-foreground hover:text-background ${bookingChoice==="other"?"ring-2 ring-gold ring-offset-2 ring-offset-primary":""}`}>Book for Other Events</Button>
        </div>
      </div>
      <div className="scroll-mark absolute bottom-4 right-6 z-10 hidden h-10 w-px bg-gold md:block" aria-hidden="true"/>
    </section>

    <section id="about" className="paper-texture px-5 py-28 md:py-44"><div className="reveal mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2"><div className="min-w-0 text-center md:text-left">
      <p className="mb-5 text-xs uppercase text-accent">Our Journey Since 2001</p><SectionTitle>About MRD Mahal</SectionTitle>
      <p className="mx-auto mt-12 max-w-4xl text-base leading-8 text-muted-foreground md:mx-0 md:text-lg md:leading-9">Founded in 2001, MRD Mahal — Maharajan Ambalam Rajammal Thirumana Maaligai — Began with a vision to create a welcoming space where families could celebrate their most special moments. Over the past 25 years, MRD Mahal has grown into a trusted celebration destination in Madurai, hosting countless weddings, receptions and family occasions. Blending Tamil tradition with modern comfort, we continue to create memorable experiences while carrying forward the values of trust, hospitality and togetherness. 25 Years of Trust. Thousands of Celebrations. One MRD Family.</p>
    </div><img src={miniHallImage} alt="MRD Mahal wedding venue" loading="lazy" width={1600} height={1200} className="aspect-[4/5] w-full min-w-0 object-cover [mask-image:linear-gradient(to_right,transparent,black_45%)]"/></div></section>

    <section id="halls" className="paper-texture bg-parchment px-5 py-24 md:py-36"><div className="mx-auto max-w-[1400px]"><SectionTitle>Our Halls</SectionTitle>
      <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">{hallFeatures.map((hall,i)=><article id={i===0?"max-hall":"mini-hall"} key={hall.name} className="reveal scroll-mt-24 grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={`group relative min-w-0 overflow-hidden border border-gold/60 shadow-lg ${i===0?"order-2 lg:order-2":"order-1 lg:order-1"}`}>
          <img loading="lazy" src={hall.image} alt={hall.alt} width={i?1600:1920} height={i?1200:1280} className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"/>
          <div className="pointer-events-none absolute inset-4 border border-background/55" aria-hidden="true"/>
        </div>
        <div className={`min-w-0 py-2 md:py-8 ${i===0?"order-1 lg:order-1":"order-2 lg:order-2"}`}>
          <div className="border-l-2 border-gold pl-5 sm:pl-7"><span className="display-heading text-2xl text-accent">{hall.label}</span><h3 className="display-heading mt-2 text-[clamp(3.3rem,6vw,6.2rem)] leading-[1.05] text-primary">{hall.heading}</h3><p className="mt-3 font-display text-xl text-accent sm:text-2xl">{hall.subtitle}</p></div>
          <p className="mt-7 max-w-2xl leading-7 text-muted-foreground">{hall.desc}</p>
          <div className="mt-7 border-t border-gold/45 pt-6"><p className="font-semibold text-primary">Key Features:</p><div className="mt-4 space-y-3">{hall.features.map(f=><p key={f} className="reveal flex gap-3 text-sm leading-6 text-foreground"><Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true"/>{f}</p>)}</div></div>
          <Button asChild className="mt-7 h-11 rounded-md bg-wine px-5 text-primary-foreground transition-colors hover:bg-primary focus-visible:ring-2 focus-visible:ring-gold"><a href={i===0?"https://wa.me/918220013444?text=Hello%2C%20I%20am%20interested%20in%20booking%20MRD%20Max%20Hall%20for%20an%20upcoming%20large-scale%20event.%20Kindly%20share%20the%20available%20dates%2C%20seating%20capacity%2C%20venue%20facilities%2C%20pricing%2C%20and%20booking%20terms.%20Thank%20you.":"https://wa.me/918220013444?text=Hello%2C%20I%20am%20interested%20in%20booking%20MRD%20Mini%20Hall%20for%20an%20upcoming%20intimate%20event.%20Kindly%20share%20the%20available%20dates%2C%20seating%20capacity%2C%20facilities%2C%20pricing%2C%20and%20booking%20terms.%20Thank%20you."} target="_blank" rel="noopener noreferrer" aria-label={i===0?"Book MRD Max Hall on WhatsApp":"Book MRD Mini Hall on WhatsApp"}><MessageCircle className="size-4" aria-hidden="true"/>Book mahal</a></Button>
        </div>
      </article>)}</div></div></section>

    <section className="bg-primary px-5 py-24 text-primary-foreground md:py-36"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="lg:sticky lg:top-32 lg:self-start"><SectionTitle light>Why Choose MRD Mahal?</SectionTitle><div className="mt-8 h-px w-24 bg-gold"/></div><div className="border-t border-gold/45">{benefits.map(([ReasonIcon,title,text],i)=><article key={title} tabIndex={0} className="reveal group grid gap-4 border-b border-gold/35 py-7 transition-transform duration-300 hover:translate-x-1 focus-visible:translate-x-1 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6"><span className="flex size-12 shrink-0 items-center justify-center border border-primary-foreground/25 text-primary-foreground transition-colors group-hover:border-gold group-hover:text-gold group-focus-visible:border-gold group-focus-visible:text-gold"><ReasonIcon className="size-6" strokeWidth={1.8} aria-hidden="true"/></span><div className="min-w-0"><div className="flex items-baseline gap-4"><span className="stat-number text-xs text-gold">0{i+1}</span><h3 className="display-heading text-2xl text-primary-foreground md:text-3xl">{title}</h3></div><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{text}</p></div></article>)}</div></div></section>

     <section className="paper-texture bg-parchment px-5 py-24"><div className="mx-auto max-w-7xl"><SectionTitle>Event Types We Host</SectionTitle><div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{eventTypes.map((item,i)=>{const EventIcon=eventIcons[i] ?? CalendarDays;return <article key={item} tabIndex={0} className="reveal group flex aspect-square min-w-0 flex-col items-center justify-center gap-4 border border-primary/25 bg-background p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"><EventIcon className="size-9 shrink-0 text-primary transition-colors group-hover:text-accent sm:size-10 lg:size-11" strokeWidth={1.8} aria-hidden="true"/><h3 className="max-w-full break-words text-sm font-semibold leading-5 text-foreground sm:text-base">{item}</h3></article>})}</div></div></section>

    <section className="bg-primary px-5 py-24 md:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.7fr_1.3fr]"><SectionTitle light>Facilities & Amenities</SectionTitle><div className="grid md:grid-cols-2">{facilities.map(([Icon,title,text])=><article key={title} className="reveal border-b border-gold/50 p-6 text-primary-foreground"><Icon className="mb-5 size-6 text-gold"/><h3 className="display-heading text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/75">{text}</p></article>)}</div></div></section>

    <section id="gallery" className="bg-parchment py-24 md:py-36"><div className="px-5 md:px-12"><div className="mx-auto flex max-w-[1500px] items-end justify-between gap-8"><SectionTitle>Photo Gallery</SectionTitle><div className="hidden h-px flex-1 bg-gold md:block"/></div></div><div className="mt-14 grid grid-cols-2 md:grid-cols-6">{gallery.map(([src,title,alt],i)=><button key={title} onClick={()=>setLightbox(i)} aria-label={`View ${title}`} className={`gallery-crop group relative h-[360px] overflow-hidden border border-background text-left md:h-[520px] ${i%2?"md:mt-16":""}`}><img loading="lazy" src={src} alt={alt} width={1920} height={1024}/><span className="absolute inset-0 flex items-end bg-primary/0 p-5 text-sm text-primary-foreground opacity-0 transition group-hover:bg-primary/55 group-hover:opacity-100 group-focus-visible:bg-primary/55 group-focus-visible:opacity-100">{title}</span></button>)}</div></section>
    {selectedGallery&&<div role="dialog" aria-modal="true" aria-label={selectedGallery[1]} className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-5" onClick={()=>setLightbox(null)}><Button autoFocus variant="secondary" size="icon" aria-label="Close gallery" className="absolute right-5 top-5 min-h-11 min-w-11" onClick={()=>setLightbox(null)}><X/></Button><div className="gallery-crop h-[70dvh] w-full max-w-5xl overflow-hidden" onClick={e=>e.stopPropagation()}><img className={(lightbox ?? 0)%3===1?"-translate-x-1/3":(lightbox ?? 0)%3===2?"-translate-x-2/3":""} src={selectedGallery[0]} alt={selectedGallery[2]} width={1920} height={1024}/></div></div>}

    <section className="paper-texture px-5 py-28 font-body md:py-44"><div className="mx-auto max-w-5xl"><div className="text-center"><h2 className="display-heading text-[clamp(2.7rem,6vw,5.8rem)] text-primary">What Our Clients Say</h2></div><div className="mt-12" aria-roledescription="carousel" aria-label="Customer testimonials"><div className="overflow-hidden" ref={testimonialRef}><div className="flex touch-pan-y">{testimonials.map(([quote,name],index)=><div key={name} className="min-w-0 flex-[0_0_100%] px-1" role="group" aria-roledescription="slide" aria-label={`${name}, ${index+1} of ${testimonials.length}`}><blockquote className="flex min-h-[320px] flex-col justify-between border-y border-gold px-5 py-9 sm:px-10 md:min-h-[360px] md:px-16 md:py-14"><p className="font-body text-xl leading-relaxed text-primary sm:text-2xl md:text-3xl">“{quote}”</p><footer className="mt-8 border-t border-gold/50 pt-5 font-body text-sm font-semibold text-muted-foreground">{name}</footer></blockquote></div>)}</div></div><div className="mt-8 flex items-center justify-between gap-4"><Button type="button" variant="outline" size="icon" className="size-11 rounded-full" aria-label="Previous testimonial" onClick={()=>testimonialApi?.scrollPrev()}><ChevronLeft aria-hidden="true"/></Button><div className="flex items-center gap-2" aria-label="Select testimonial">{testimonials.map(([_,name],index)=><button key={name} type="button" aria-label={`Show testimonial ${index+1}`} aria-current={activeTestimonial===index?"true":undefined} onClick={()=>testimonialApi?.scrollTo(index)} className={`size-3 rounded-full border border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTestimonial===index?"bg-primary":"bg-transparent"}`}/>)}</div><Button type="button" variant="outline" size="icon" className="size-11 rounded-full" aria-label="Next testimonial" onClick={()=>testimonialApi?.scrollNext()}><ChevronRight aria-hidden="true"/></Button></div><p className="sr-only" aria-live="polite">Testimonial {activeTestimonial+1} of {testimonials.length}</p></div></div></section>

    <section id="quick-enquiry" className="grid scroll-mt-20 bg-primary lg:grid-cols-2"><div className="px-6 py-20 text-primary-foreground md:px-16 lg:px-[max(4rem,calc((100vw-80rem)/2))]"><SectionTitle light>Quick Enquiry & Contact</SectionTitle><h3 className="display-heading mt-12 text-3xl">Get in Touch</h3><div className="mt-8 space-y-6 text-sm"><p className="flex gap-4"><Phone className="size-5 shrink-0 text-gold"/><span>Call / WhatsApp — <a href="tel:+918220013444" className="underline underline-offset-4 focus-visible:outline-2">082200 13444</a></span></p><p className="flex gap-4"><Mail className="size-5 shrink-0 text-gold"/>Email — info@mrdmahal.com</p><p className="flex gap-4"><MapPin className="size-5 shrink-0 text-gold"/><span>Address — <a href="https://maps.app.goo.gl/RF14vSjpUZpm2W5Q6" target="_blank" rel="noopener noreferrer" aria-label="View MRD Mahal location on Google Maps" className="underline underline-offset-4 focus-visible:outline-2">Iravathanallur National Highway, 85, Madurai, Tamil Nadu 625009</a></span></p></div><a href="https://maps.app.goo.gl/RF14vSjpUZpm2W5Q6" target="_blank" rel="noopener noreferrer" aria-label="View MRD Mahal location on Google Maps" className="mt-12 flex min-h-52 items-center justify-center border border-gold/60 bg-wine focus-visible:outline-2"><MapPin className="size-12 text-gold" aria-hidden="true"/></a></div>
      <div className="paper-texture bg-parchment px-5 py-20 md:px-16"><form onSubmit={submit} className="mx-auto max-w-xl bg-background p-7 shadow-xl md:p-10" noValidate={false}>{success?<div role="status" className="py-24 text-center"><Check className="mx-auto size-12 text-gold"/><p className="mt-6 text-lg text-primary">Your enquiry message has been prepared in WhatsApp. Please review and send it to complete your enquiry.</p></div>:<div className="space-y-6">
        <label className="block text-sm font-medium">Name *<input required name="name" maxLength={100} placeholder="Your full name" className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <label className="block text-sm font-medium">Phone Number *<input required name="phone" type="tel" maxLength={20} pattern="[0-9+ ()-]{7,20}" placeholder="Your contact number" className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <label className="block text-sm font-medium">Event Type *<select required name="event" defaultValue="" className="mt-2 h-12 w-full border border-input bg-background px-4 text-foreground"><option value="" disabled>Select event type</option>{eventTypes.map(e=><option key={e}>{e}</option>)}</select></label>
        <label className="block text-sm font-medium">Preferred Date<input name="date" placeholder="DD/MM/YYYY" maxLength={10} className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <fieldset><legend className="text-sm font-medium">Hall Selection *</legend><div className="mt-3 flex gap-7"><label className="flex items-center gap-2"><input required type="radio" name="hall" value="Max Hall" className="size-4 accent-primary"/>Max Hall</label><label className="flex items-center gap-2"><input type="radio" name="hall" value="Mini Hall" className="size-4 accent-primary"/>Mini Hall</label></div></fieldset>
        <Button type="submit" aria-label="Submit enquiry through WhatsApp" className="h-12 w-full rounded-none">Submit Enquiry</Button>
      </div>}</form></div></section>

    <section className="px-5 py-24 md:py-36"><div className="mx-auto max-w-5xl"><SectionTitle>Frequently Asked Questions</SectionTitle><div className="mt-12 space-y-3">{["How many people can be seated at a time in the MRD Max Hall?","How many people can be seated at a time in the MRD Mini Hall?","Do you provide decoration arrangements such as Thoranam,and other traditional decorations?","How far is MRD Mahal from the Theppakulam?"].map(q=><details key={q} className="group border border-primary bg-background"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between px-6 text-primary focus-visible:outline-2"><span>{q}</span><ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true"/></summary><p className="border-t border-primary/20 px-6 py-5 text-sm text-muted-foreground">Please contact MRD Mahal for details.</p></details>)}</div></div></section>

    <footer className="bg-primary px-5 pb-8 pt-20 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 border-b border-gold/60 pb-14 md:grid-cols-3"><div><div className="flex items-center gap-3"><Building2 className="text-gold"/><span className="display-heading text-4xl">MRD Mahal</span></div><p className="mt-5 text-sm text-primary-foreground/75">Where Every Auspicious Moment Begins ✨</p><div className="mt-6 flex items-center gap-3" aria-label="Social media links">{socialLinks.map(([Icon,label,url])=><a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="inline-flex size-10 items-center justify-center border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold">{Icon?<Icon className="size-4" strokeWidth={1.8} aria-hidden="true"/>:<svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.427 7.627 11.194-.105-.95-.2-2.413.042-3.453.22-.937 1.416-5.98 1.416-5.98s-.362-.724-.362-1.794c0-1.68.974-2.936 2.185-2.936 1.03 0 1.527.774 1.527 1.701 0 1.036-.66 2.584-1.001 4.02-.286 1.202.604 2.18 1.79 2.18 2.149 0 3.8-2.267 3.8-5.54 0-2.897-2.08-4.92-5.05-4.92-3.44 0-5.463 2.58-5.463 5.25 0 1.04.4 2.155.899 2.76.1.12.114.224.085.346l-.334 1.353c-.053.218-.175.264-.403.159-1.507-.702-2.448-2.906-2.448-4.676 0-3.8 2.76-7.29 7.954-7.29 4.176 0 7.424 2.976 7.424 6.951 0 4.148-2.616 7.485-6.247 7.485-1.22 0-2.368-.634-2.762-1.384l-.75 2.86c-.27 1.045-1.003 2.355-1.493 3.154A12 12 0 0012 24c6.628 0 12-5.372 12-12S18.628 0 12 0z"/></svg>}</a>)}</div></div><div><h3 className="display-heading text-2xl">Quick Links</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/75"><li><a href="#about">About Us</a></li><li><a href="#halls">Our Halls</a></li><li><a href="#quick-enquiry">Check Availability</a></li><li><a href="#gallery">Gallery</a></li></ul></div><div><h3 className="display-heading text-2xl">Contact Info</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/75"><li>082200 13444</li><li>info@mrdmahal.com</li><li>Iravathanallur National Highway, 85, Madurai, Tamil Nadu 625009</li></ul></div></div><p className="mx-auto max-w-7xl pt-8 text-center text-xs text-primary-foreground/65">© 2026 MRD Mahal. All rights reserved. | Where Every Auspicious Moment Begins ✨</p></footer>
  </div>;
}