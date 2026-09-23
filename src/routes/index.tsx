import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Building2, CalendarDays, CarFront, Check, ChevronDown, Droplets, Gem,
  HeartHandshake, Landmark, Mail, MapPin, Menu, Phone, Power, Sparkles, Star, Users, Utensils, Zap,
  Wind, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mrd-grand-hall.jpg";
import miniHallImage from "@/assets/mrd-mini-hall.jpg";
import galleryOne from "@/assets/mrd-gallery-one.jpg";
import galleryTwo from "@/assets/mrd-gallery-two.jpg";

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

const nav = [["About","about"],["Halls","halls"],["Availability","enquiry"],["Gallery","gallery"]] as const;
const eventTypes = ["Weddings & Receptions","Engagements & Muhurtham Functions","Birthday Parties","Seemantham & Baby Showers","Corporate & Cultural Events","Family Gatherings","Stall showcasing"];
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

function scrollTo(id:string) { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); }

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
      <a href="#top" className="flex items-center gap-2 text-primary" aria-label="MRD Mahal home"><Building2 className="size-5"/><span className="display-heading text-2xl">MRD Mahal</span></a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`} className={`text-sm transition-colors hover:text-primary ${active===id?"text-primary":"text-foreground"}`}>{label}</a>)}</nav>
      <Button onClick={()=>scrollTo("enquiry")} className="hidden h-11 rounded-none px-6 md:inline-flex">Get offer</Button>
      <Button variant="ghost" size="icon" className="min-h-11 min-w-11 md:hidden" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
    </div>
    {open&&<nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="block border-b border-border py-3 text-primary">{label}</a>)}<Button onClick={()=>{setOpen(false);scrollTo("enquiry")}} className="mt-5 h-11 w-full rounded-none">Get offer</Button></nav>}
  </header>
}

function SectionTitle({children,light=false}:{children:string;light?:boolean}) { return <h2 className={`display-heading text-[clamp(2.7rem,6vw,5.8rem)] ${light?"text-primary-foreground":"text-primary"}`}>{children}</h2> }

function Index() {
  const [lightbox,setLightbox]=useState<number|null>(null); const [success,setSuccess]=useState(false); const [bookingChoice,setBookingChoice]=useState<"mahal"|"mini">("mahal");
  useEffect(()=>{if(lightbox===null)return;const fn=(e:KeyboardEvent)=>{if(e.key==="Escape")setLightbox(null)};document.addEventListener("keydown",fn);return()=>document.removeEventListener("keydown",fn)},[lightbox]);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(e.currentTarget.reportValidity())setSuccess(true)};
  const hallFeatures=[
    {name:"MRD Max Hall",subtitle:"Grand Celebrations Made Perfect",desc:"Our Max Hall is ideal for large-scale weddings, receptions, and cultural events. Designed to accommodate grand gatherings comfortably, this hall enhances every celebration with its spacious layout and elegant interiors.",features:["Seating Capacity: 1000 for large gatherings","Grand Stage Setup","Centralized Lighting & Decoration Flexibility","700+ peoples Separate Dining Area","Premium Ventilation & Ambience"],image:heroImage,alt:"Main hall stage and seating decorated for a wedding"},
    {name:"MRD Mini Hall",subtitle:"Intimate & Elegant Functions",desc:"Perfect for smaller functions such as engagement ceremonies, birthdays, and family gatherings, the Mini Hall offers a warm and elegant atmosphere while maintaining the same quality standards as our main hall.",features:["200 seats for small & medium gatherings","Compact yet elegant interiors","Budget-friendly option","Same premium facilities"],image:miniHallImage,alt:"MRD Mini Hall arranged for an intimate function"}
  ];
  const gallery=[
    [galleryOne,"Venue exterior"],[galleryOne,"Wedding couple"],[galleryOne,"Interior corridor"],
    [galleryTwo,"Main hall stage and seating"],[galleryTwo,"Decorated stage"],[galleryTwo,"Parking area"],
  ] as const;
  const selectedGallery = lightbox === null ? undefined : gallery[lightbox];
  return <div id="top" className="overflow-x-hidden bg-background"><Header/>
    <section className="relative bg-primary pt-20 text-primary-foreground md:min-h-dvh md:pt-0">
      <div className="grid md:min-h-dvh md:grid-cols-[42%_58%]">
        <div className="relative order-2 flex border-t border-gold bg-primary px-6 py-12 md:order-1 md:border-r md:border-t-0 md:px-10 md:pb-14 md:pt-32 lg:px-16 xl:px-20">
          <div className="my-auto w-full max-w-xl animate-fade-in">
            <div className="mb-7 h-px w-20 bg-gold"/>
            <h1 className="display-heading text-[clamp(4rem,8vw,7.5rem)] leading-[.92] text-primary-foreground">MRD Mahal</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/80 md:text-lg">Your Dream Moments in Our Grand venues</p>
            <div className="mt-9 grid grid-cols-2 border-y border-gold/45 py-1">
              {["25+ Years","1000+ Guests","7+ Rooms","60+ Parking"].map((stat,index)=><span key={stat} className={`stat-number flex min-h-14 items-center px-3 text-xs font-semibold uppercase text-primary-foreground sm:px-4 ${index%2===0?"border-r border-gold/35":""} ${index<2?"border-b border-gold/35":""}`}>{stat}</span>)}
            </div>
            <div className="mt-8 grid gap-3" role="group" aria-label="Hall booking selection">
              <Button type="button" variant="outline" aria-pressed={bookingChoice==="mahal"} onClick={()=>setBookingChoice("mahal")} className={`min-h-12 justify-start rounded-none border-gold/55 px-4 text-left text-sm transition-all ${bookingChoice==="mahal"?"bg-gold text-primary hover:bg-gold/90":"bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}>Book Mahal for wedding</Button>
              <Button type="button" variant="outline" aria-pressed={bookingChoice==="mini"} onClick={()=>setBookingChoice("mini")} className={`min-h-12 justify-start rounded-none border-gold/55 px-4 text-left text-sm transition-all ${bookingChoice==="mini"?"bg-gold text-primary hover:bg-gold/90":"bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}>Book Minihall for Meeting</Button>
            </div>
            <Button onClick={()=>scrollTo("enquiry")} size="lg" className="mt-5 h-14 w-full rounded-none bg-gold px-8 text-primary shadow-lg hover:bg-background">Book a Visit</Button>
          </div>
        </div>
        <div className="relative order-1 min-h-[54dvh] overflow-hidden md:order-2 md:min-h-dvh">
          <img src={heroImage} alt="Warm decorated MRD Mahal wedding hall" width={1920} height={1280} className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 hover:scale-[1.015]"/>
          <div className="absolute inset-0 bg-primary/15"/>
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-primary/20 to-transparent md:block"/>
        </div>
      </div>
      <div className="scroll-mark absolute bottom-5 right-6 hidden h-10 w-px bg-gold md:block"/>
    </section>

    <section id="about" className="paper-texture px-5 py-28 md:py-44"><div className="reveal mx-auto max-w-5xl text-center">
      <div className="mx-auto mb-8 h-16 w-px bg-gold"/><p className="mb-5 text-xs uppercase text-accent">Our Journey Since 2001</p><SectionTitle>About MRD Mahal</SectionTitle>
      <p className="mx-auto mt-12 max-w-4xl text-base leading-8 text-muted-foreground md:text-xl md:leading-10">Founded in 2001, MRD Mahal — Maharajan Ambalam Rajammal Thirumana Maaligai — Began with a vision to create a welcoming space where families could celebrate their most special moments. Over the past 25 years, MRD Mahal has grown into a trusted celebration destination in Madurai, hosting countless weddings, receptions and family occasions. Blending Tamil tradition with modern comfort, we continue to create memorable experiences while carrying forward the values of trust, hospitality and togetherness. 25 Years of Trust. Thousands of Celebrations. One MRD Family.</p>
    </div></section>

    <section id="halls" className="paper-texture bg-parchment px-5 py-24 md:py-36"><div className="mx-auto max-w-[1400px]"><SectionTitle>Our Halls</SectionTitle>
      <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">{hallFeatures.map((hall,i)=><article key={hall.name} className="reveal grid items-center lg:grid-cols-[1.08fr_.92fr]">
        <div className={`group relative z-10 min-h-[360px] overflow-hidden rounded-2xl border border-gold/60 shadow-xl md:min-h-[520px] lg:min-h-[620px] ${i?"lg:order-2 lg:-ml-8 lg:translate-y-8":"lg:mr-[-2rem]"}`}>
          <img loading="lazy" src={hall.image} alt={hall.alt} width={i?1600:1920} height={i?1200:1280} className="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"/><div className="absolute inset-0 bg-primary/10"/>
        </div>
        <div className={`relative rounded-2xl border border-gold/35 bg-background px-7 py-10 shadow-lg md:px-12 md:py-14 lg:px-16 lg:py-20 ${i?"lg:order-1 lg:mr-[-2rem]":"lg:ml-[-2rem]"}`}>
          <div className="border-l border-gold pl-6"><span className="inline-block border border-primary/45 bg-parchment px-4 py-2 text-xs uppercase text-primary">{hall.name}</span><h3 className="display-heading mt-5 text-[clamp(3.25rem,6vw,6.5rem)] text-primary">{hall.name}</h3><p className="mt-3 text-lg font-medium text-accent md:text-xl">{hall.subtitle}</p></div>
          <p className="mt-7 leading-7 text-muted-foreground">{hall.desc}</p><div className="mt-8 border-t border-gold/45 pt-6"><p className="font-semibold text-primary">Key Features:</p><div className="mt-4 space-y-3">{hall.features.map(f=><p key={f} className="reveal flex gap-3 text-sm leading-6 text-foreground"><Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true"/>{f}</p>)}</div></div>
        </div>
      </article>)}</div></div></section>

    <section className="bg-primary px-5 py-24 text-primary-foreground md:py-36"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="lg:sticky lg:top-32 lg:self-start"><SectionTitle light>Why Choose MRD Mahal?</SectionTitle><div className="mt-8 h-px w-24 bg-gold"/></div><div className="border-t border-gold/45">{benefits.map(([ReasonIcon,title,text],i)=><article key={title} tabIndex={0} className="reveal group grid gap-4 border-b border-gold/35 py-7 transition-transform duration-300 hover:translate-x-1 focus-visible:translate-x-1 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6"><span className="flex size-12 shrink-0 items-center justify-center border border-primary-foreground/25 text-primary-foreground transition-colors group-hover:border-gold group-hover:text-gold group-focus-visible:border-gold group-focus-visible:text-gold"><ReasonIcon className="size-6" strokeWidth={1.8} aria-hidden="true"/></span><div className="min-w-0"><div className="flex items-baseline gap-4"><span className="stat-number text-xs text-gold">0{i+1}</span><h3 className="display-heading text-2xl text-primary-foreground md:text-3xl">{title}</h3></div><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{text}</p></div></article>)}</div></div></section>

    <section className="paper-texture bg-blush px-5 py-24"><div className="mx-auto max-w-7xl"><SectionTitle>Event Types We Host</SectionTitle><div className="mt-12 grid gap-4 md:grid-cols-2">{eventTypes.map((item,i)=><div key={item} className={`reveal flex items-center gap-5 border border-primary/30 bg-background/50 px-6 py-5 ${i%2?"md:translate-y-5":""}`}><CalendarDays className="size-5 shrink-0 text-gold"/><span>{item}</span></div>)}</div></div></section>

    <section className="bg-primary px-5 py-24 md:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.7fr_1.3fr]"><SectionTitle light>Facilities & Amenities</SectionTitle><div className="grid md:grid-cols-2">{facilities.map(([Icon,title,text])=><article key={title} className="reveal border-b border-gold/50 p-6 text-primary-foreground"><Icon className="mb-5 size-6 text-gold"/><h3 className="display-heading text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/75">{text}</p></article>)}</div></div></section>

    <section id="gallery" className="bg-parchment py-24 md:py-36"><div className="px-5 md:px-12"><div className="mx-auto flex max-w-[1500px] items-end justify-between gap-8"><SectionTitle>Photo Gallery</SectionTitle><div className="hidden h-px flex-1 bg-gold md:block"/></div></div><div className="mt-14 grid grid-cols-2 md:grid-cols-6">{gallery.map(([src,title],i)=><button key={title} onClick={()=>setLightbox(i)} aria-label={`View ${title}`} className={`gallery-crop group relative h-[360px] overflow-hidden border border-background text-left md:h-[520px] ${i%2?"md:mt-16":""}`}><img loading="lazy" src={src} alt={title} width={1920} height={1024}/><span className="absolute inset-0 flex items-end bg-primary/0 p-5 text-sm text-primary-foreground opacity-0 transition group-hover:bg-primary/55 group-hover:opacity-100 group-focus-visible:bg-primary/55 group-focus-visible:opacity-100">{title}</span></button>)}</div></section>
    {selectedGallery&&<div role="dialog" aria-modal="true" aria-label={selectedGallery[1]} className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-5" onClick={()=>setLightbox(null)}><Button autoFocus variant="secondary" size="icon" aria-label="Close gallery" className="absolute right-5 top-5 min-h-11 min-w-11" onClick={()=>setLightbox(null)}><X/></Button><div className="gallery-crop h-[70dvh] w-full max-w-5xl overflow-hidden" onClick={e=>e.stopPropagation()}><img className={(lightbox ?? 0)%3===1?"-translate-x-1/3":(lightbox ?? 0)%3===2?"-translate-x-2/3":""} src={selectedGallery[0]} alt={selectedGallery[1]} width={1920} height={1024}/></div></div>}

    <section className="paper-texture px-5 py-28 font-body md:py-44"><div className="mx-auto max-w-7xl"><div className="text-center"><h2 className="display-heading text-[clamp(2.7rem,6vw,5.8rem)] text-primary">What Our Clients Say</h2></div><div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-16">{[
      ["“MRD Mahal made our wedding truly memorable.Spacious hall, excellent facilities, and the management was incredibly supportive throughout. Highly recommended!”","— Priya & Rajesh"],
      ["“Perfect venue for our engagement ceremony.The mini hall was just the right size, and the ambience was beautiful. Great support from the team!”","— Meena Family"]
    ].map(([quote,name],index)=><blockquote key={name} className={`reveal border-y border-gold p-8 md:p-14 ${index?"md:translate-y-16":""}`}><div className="mb-7 flex gap-1" aria-label="Five stars">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 text-gold"/>)}</div><p className="font-body text-2xl leading-relaxed text-primary md:text-4xl">{quote}</p><footer className="mt-7 font-body text-sm text-muted-foreground">{name}</footer></blockquote>)}</div></div></section>

    <section id="enquiry" className="grid bg-primary lg:grid-cols-2"><div className="px-6 py-20 text-primary-foreground md:px-16 lg:px-[max(4rem,calc((100vw-80rem)/2))]"><SectionTitle light>Quick Enquiry & Contact</SectionTitle><h3 className="display-heading mt-12 text-3xl">Get in Touch</h3><div className="mt-8 space-y-6 text-sm"><p className="flex gap-4"><Phone className="size-5 text-gold"/>Call / WhatsApp — +91 98765 43210</p><p className="flex gap-4"><Mail className="size-5 text-gold"/>Email — info@mrdmahal.com</p><p className="flex gap-4"><MapPin className="size-5 shrink-0 text-gold"/>Address — MRD Mahal, Main Road, City Name, State - 123456</p></div><div className="mt-12 flex min-h-52 items-center justify-center border border-gold/60 bg-wine"><MapPin className="size-12 text-gold" aria-hidden="true"/></div></div>
      <div className="paper-texture bg-parchment px-5 py-20 md:px-16"><form onSubmit={submit} className="mx-auto max-w-xl bg-background p-7 shadow-xl md:p-10" noValidate={false}>{success?<div role="status" className="py-24 text-center"><Check className="mx-auto size-12 text-gold"/><p className="display-heading mt-6 text-4xl text-primary">Submit Enquiry</p></div>:<div className="space-y-6">
        <label className="block text-sm font-medium">Name *<input required name="name" maxLength={100} placeholder="Your full name" className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <label className="block text-sm font-medium">Phone Number *<input required name="phone" type="tel" maxLength={20} pattern="[0-9+ ()-]{7,20}" placeholder="Your contact number" className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <label className="block text-sm font-medium">Event Type *<select required name="event" defaultValue="" className="mt-2 h-12 w-full border border-input bg-background px-4 text-foreground"><option value="" disabled>Select event type</option>{eventTypes.map(e=><option key={e}>{e}</option>)}</select></label>
        <label className="block text-sm font-medium">Preferred Date<input name="date" placeholder="DD/MM/YYYY" maxLength={10} className="mt-2 h-12 w-full border border-input bg-background px-4 placeholder:text-muted-foreground"/></label>
        <fieldset><legend className="text-sm font-medium">Hall Selection *</legend><div className="mt-3 flex gap-7"><label className="flex items-center gap-2"><input required type="radio" name="hall" value="Max Hall" className="size-4 accent-primary"/>Max Hall</label><label className="flex items-center gap-2"><input type="radio" name="hall" value="Mini Hall" className="size-4 accent-primary"/>Mini Hall</label></div></fieldset>
        <Button type="submit" className="h-12 w-full rounded-none">Submit Enquiry</Button>
      </div>}</form></div></section>

    <section className="px-5 py-24 md:py-36"><div className="mx-auto max-w-5xl"><SectionTitle>Frequently Asked Questions</SectionTitle><div className="mt-12 space-y-3">{Array.from({length:4}).map((_,i)=><details key={i} className="group border border-primary bg-background"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between px-6 text-primary focus-visible:outline-2"><span>What are the hall timings?</span><ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true"/></summary><p className="border-t border-primary/20 px-6 py-5 text-sm text-muted-foreground">Please contact MRD Mahal for details.</p></details>)}</div></div></section>

    <footer className="bg-primary px-5 pb-8 pt-20 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 border-b border-gold/60 pb-14 md:grid-cols-3"><div><div className="flex items-center gap-3"><Building2 className="text-gold"/><span className="display-heading text-4xl">MRD Mahal</span></div><p className="mt-5 text-sm text-primary-foreground/75">Where Every Auspicious Moment Begins ✨</p></div><div><h3 className="display-heading text-2xl">Quick Links</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/75"><li><a href="#about">About Us</a></li><li><a href="#halls">Our Halls</a></li><li><a href="#enquiry">Check Availability</a></li><li><a href="#gallery">Gallery</a></li></ul></div><div><h3 className="display-heading text-2xl">Contact Info</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/75"><li>+91 98765 43210</li><li>info@mrdmahal.com</li><li>Iravathanallur National Highway 85, Madurai, Tamil Nadu 625009</li></ul></div></div><p className="mx-auto max-w-7xl pt-8 text-center text-xs text-primary-foreground/65">© 2026 MRD Mahal. All rights reserved. | Where Every Auspicious Moment Begins ✨</p></footer>
  </div>;
}