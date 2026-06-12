"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CalendarCheck, Car, Fish, Flame, Home, Package, ShieldCheck, Truck, UserCheck, Utensils, Wheat } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Why Choose Us",
          id: "#why-choose-us",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Ritaj Dar El Hout"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Ritaj Dar El Hout"
      description="Enjoy the finest fresh fish and seafood in Meknes with quality service and a welcoming atmosphere."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Reserve a Table",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+212661484172",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/fish-with-herbs-lemon-slice-narsharab_140725-6623.jpg"
      imageAlt="Fresh Seafood Display at Ritaj Dar El Hout"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="About Ritaj Dar El Hout"
      description={[
        "Ritaj Dar El Hout is a trusted seafood destination in Meknes, renowned for its commitment to serving fresh daily seafood.",
        "We pride ourselves on friendly service, a warm family-friendly atmosphere, and offering great value for money, ensuring a comfortable and memorable dining experience for all our guests.",
      ]}
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Daily Fish",
          description: "We source the freshest catch daily to guarantee the highest quality seafood on your plate.",
          icon: Fish,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/raw-fish-market-counter_1398-2418.jpg",
              imageAlt: "Freshly caught fish on ice",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-fish-near-crab-legs-ice_181624-4131.jpg",
              imageAlt: "Chef selecting fresh fish",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fish-with-herbs-lemon-slice-narsharab_140725-6623.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Professional Service",
          description: "Our dedicated team provides attentive and friendly service to make your dining experience exceptional.",
          icon: UserCheck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/two-happy-female-colleagues-using-tablet-pc-cafe_1262-12563.jpg",
              imageAlt: "Waiter serving food",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31449.jpg",
              imageAlt: "Restaurant staff greeting guests",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-friends-eating-lunch-together_23-2148451631.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Family Friendly",
          description: "Enjoy a welcoming atmosphere perfect for families, with spacious seating and options for all ages.",
          icon: Home,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/children-having-lemonade-stand_23-2149398372.jpg",
              imageAlt: "Family dining happily",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/parking-valet-his-job-with-vehicle-woman_23-2149946655.jpg",
              imageAlt: "Kids enjoying meal",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-with-tables-chairs-street_1127-2172.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Spacious Parking",
          description: "Convenient and ample parking is available to ensure a hassle-free visit for all our guests.",
          icon: Car,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-courier-red-uniform-yellow-background_179666-36966.jpg",
              imageAlt: "Spacious restaurant parking lot",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-woman-outdoors-with-takeaway-food_23-2149025872.jpg",
              imageAlt: "Empty parking spaces",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-coffee-cups-sweets_140725-3711.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Delivery Available",
          description: "Enjoy our delicious seafood from the comfort of your home with our reliable delivery service.",
          icon: Car,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/laughing-women-drawing-together_23-2147770089.jpg",
              imageAlt: "Food delivery on a scooter",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-breakfast-table-flat-lay-fried-eggs-with-herbs-tomatoes-sausages_140725-12540.jpg",
              imageAlt: "Restaurant staff handing over delivery",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16142.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Dine-In & Takeaway",
          description: "Whether you prefer dining in or taking your meal to go, we offer flexible options to suit your needs.",
          icon: Utensils,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-cooking_23-2150980182.jpg",
              imageAlt: "Elegant restaurant interior",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-handsome-cook-chef-uniform-holding-plate-doing-ok-sign-isolated-white-wall_141793-101094.jpg",
              imageAlt: "Guests enjoying dinner",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/marmelades-with-glass-tea-metallic-platter-top-view_114579-13002.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Catering Services",
          description: "Elevate your events with our exquisite seafood catering, tailored to impress your guests.",
          icon: Flame,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/overhead-shot-round-wooden-plate-with-different-kinds-square-shaped-sweets-nuts_181624-1588.jpg",
              imageAlt: "Catering food display",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-round-platter-steel-fork-dinner-knife-notebook-black-table_140725-63597.jpg",
              imageAlt: "Chef preparing catering dishes",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-holding-blackboard-white-uniform-looking-shocked_176474-10562.jpg",
          imageAlt: "fresh fish market display",
        },
        {
          title: "Halal Food",
          description: "All our dishes are prepared following strict Halal guidelines, ensuring a permissible dining experience.",
          icon: Wheat,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-cake-white-notebook-appetizing-cake-with-grapes_140725-71872.jpg",
              imageAlt: "Halal food preparation",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-burger-with-mock-up-clipboard_23-2148235028.jpg",
              imageAlt: "Halal certification symbol",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-3920.jpg",
          imageAlt: "fresh fish market display",
        },
      ]}
      title="Why Choose Ritaj Dar El Hout?"
      description="Experience unparalleled dining with our dedication to quality, service, and convenience."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "menu-1",
          name: "Menu Page 1",
          price: "See in Restaurant",
          variant: "Moroccan Style",
          imageSrc: "http://img.b2bpic.net/free-photo/marmelades-with-glass-tea-metallic-platter-top-view_114579-13002.jpg",
          imageAlt: "First page of the menu",
        },
        {
          id: "menu-2",
          name: "Menu Page 2",
          price: "See in Restaurant",
          variant: "Fresh Seafood",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-shot-round-wooden-plate-with-different-kinds-square-shaped-sweets-nuts_181624-1588.jpg",
          imageAlt: "Second page of the menu",
        },
        {
          id: "menu-3",
          name: "Menu Page 3",
          price: "See in Restaurant",
          variant: "Special Dishes",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-round-platter-steel-fork-dinner-knife-notebook-black-table_140725-63597.jpg",
          imageAlt: "Third page of the menu",
        },
        {
          id: "menu-4",
          name: "Menu Page 4",
          price: "See in Restaurant",
          variant: "Grilled Options",
          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-holding-blackboard-white-uniform-looking-shocked_176474-10562.jpg",
          imageAlt: "Fourth page of the menu",
        },
        {
          id: "menu-5",
          name: "Menu Page 5",
          price: "See in Restaurant",
          variant: "Desserts & Drinks",
          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-cake-white-notebook-appetizing-cake-with-grapes_140725-71872.jpg",
          imageAlt: "Fifth page of the menu",
        },
        {
          id: "menu-6",
          name: "Menu Page 6",
          price: "See in Restaurant",
          variant: "Chef's Recommendations",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-burger-with-mock-up-clipboard_23-2148235028.jpg",
          imageAlt: "Sixth page of the menu",
        },
      ]}
      title="Our Exquisite Menu"
      description="Discover a delightful array of fresh seafood dishes, expertly prepared to tantalize your taste buds. Our menu is crafted to offer exceptional taste and value, ready for your uploads."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "gallery-1",
          name: "Restaurant Interior",
          price: "Ambiance",
          variant: "Elegant",
          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-3920.jpg",
          imageAlt: "Interior view of Ritaj Dar El Hout",
        },
        {
          id: "gallery-2",
          name: "Fresh Fish Display",
          price: "Quality",
          variant: "Daily Catch",
          imageSrc: "http://img.b2bpic.net/free-photo/pieces-raw-steak-from-fresh-salmon-lying-ice-counter_169016-36250.jpg",
          imageAlt: "Display of fresh fish on ice",
        },
        {
          id: "gallery-3",
          name: "Fried Fish Dishes",
          price: "Taste",
          variant: "Crispy Perfection",
          imageSrc: "http://img.b2bpic.net/free-photo/view-fried-fishes-lemon-slices-brown-plate-tomatoes-kumquats-mix-colors-table-with-free-space_179666-18160.jpg",
          imageAlt: "Platter of crispy fried fish",
        },
        {
          id: "gallery-4",
          name: "Seafood Platters",
          price: "Variety",
          variant: "Deluxe",
          imageSrc: "http://img.b2bpic.net/free-photo/seafood-mussels-salad-with-galetta-white-plate_114579-2359.jpg",
          imageAlt: "Assortment of seafood on a large platter",
        },
        {
          id: "gallery-5",
          name: "Family Dining",
          price: "Experience",
          variant: "Welcoming",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-having-cocktails_23-2150244975.jpg",
          imageAlt: "Family enjoying a meal at the restaurant",
        },
        {
          id: "gallery-6",
          name: "Kitchen Team",
          price: "Craftsmanship",
          variant: "Expert Chefs",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-chefs-team-acting-funny-with-knives-restaurant-kitchen-making-joke-about-professional-cuisine-service-cheerful-man-woman-working-gourmet-meal-dish-with-culinary-recipe_482257-43535.jpg",
          imageAlt: "Kitchen team preparing dishes",
        },
        {
          id: "gallery-7",
          name: "Outdoor View",
          price: "Relaxation",
          variant: "Scenic",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-with-donut_1157-8701.jpg",
          imageAlt: "Outdoor seating area of the restaurant",
        },
      ]}
      title="A Glimpse of Our Restaurant"
      description="Explore the ambiance, fresh catch, and culinary creations that define the Ritaj Dar El Hout experience. Large image slots ready for uploads."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah K.",
          role: "Local Resident",
          testimonial: "Excellent service and delicious fried fish. I highly recommend this restaurant.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
          imageAlt: "Customer Sarah K.",
        },
        {
          id: "2",
          name: "Ahmed B.",
          role: "Satisfied Diner",
          testimonial: "It was our first visit and we were very satisfied. Great food and excellent service.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-looking-front-smiling-showing-thumbs-up-standing-orange-wall_141793-96783.jpg",
          imageAlt: "Customer Ahmed B.",
        },
        {
          id: "3",
          name: "Fatima Z.",
          role: "Food Enthusiast",
          testimonial: "Fresh products, impeccable service, and excellent value for money.",
          imageSrc: "http://img.b2bpic.net/free-photo/ok-sign-showed-by-attractive-woman_329181-13410.jpg",
          imageAlt: "Customer Fatima Z.",
        },
        {
          id: "4",
          name: "Youssef M.",
          role: "Regular Guest",
          testimonial: "Fresh fish at reasonable prices. A restaurant worth discovering.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-friends-having-wine-together_23-2148454148.jpg",
          imageAlt: "Customer Youssef M.",
        },
        {
          id: "5",
          name: "Nadia L.",
          role: "Happy Customer",
          testimonial: "Delicious food, friendly staff, and excellent service.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-paying-with-her-phone-via-contactless-payment-while-having-lunch-with-boyfriend-bar_637285-647.jpg",
          imageAlt: "Customer Nadia L.",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our valued customers about their memorable dining experiences at Ritaj Dar El Hout."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Dine-In",
          description: "Enjoy the full Ritaj Dar El Hout experience in our elegant and welcoming restaurant space.",
          icon: Utensils,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/wide-restaurant-hall-with-wooden-table-chairs-6-persons_140725-8910.jpg",
              imageAlt: "Restaurant dining area",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-table-with-burgers_23-2148705534.jpg",
              imageAlt: "People dining in restaurant",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fish-with-herbs-lemon-slice-narsharab_140725-6623.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "Takeaway",
          description: "Order your favorite seafood dishes and pick them up fresh and hot from our kitchen.",
          icon: Package,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-ready-eat-meal_23-2151187720.jpg",
              imageAlt: "Food packed for takeaway",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-with-pizza_23-2149872393.jpg",
              imageAlt: "Customer picking up order",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/raw-fish-market-counter_1398-2418.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "Delivery",
          description: "Have our delicious Moroccan seafood delivered directly to your doorstep for ultimate convenience.",
          icon: Truck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-courier-yellow-uniform-holding-food-package-notepad-with-smile-pink-wall_140725-45771.jpg",
              imageAlt: "Food delivery service",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/i-m-hungry-hands-man-looking-food-delivery-app-his-smartphone-ordering-dinner-online_662251-2108.jpg",
              imageAlt: "Delivery driver at doorstep",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-fish-near-crab-legs-ice_181624-4131.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "No-Contact Delivery",
          description: "For your safety and peace of mind, we offer no-contact delivery options.",
          icon: ShieldCheck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/local-vendor-weighing-cabbage-scale_482257-76091.jpg",
              imageAlt: "No-contact delivery at door",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-party-covid_23-2149316413.jpg",
              imageAlt: "Delivery person with mask",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-female-colleagues-using-tablet-pc-cafe_1262-12563.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "Drive-Through",
          description: "Grab your order quickly and efficiently without leaving your vehicle with our drive-through service.",
          icon: Car,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-girl-drinking-coffee-cafe-window_613910-19228.jpg",
              imageAlt: "Drive-through lane",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-with-car_23-2150274560.jpg",
              imageAlt: "Handing food to car window",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31449.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "Catering",
          description: "Let us cater your next event with a magnificent spread of our finest seafood dishes.",
          icon: Flame,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-proposing-girlfriend-with-card_53876-24968.jpg",
              imageAlt: "Catering buffet setup",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-pouring-wine-glass_23-2148893906.jpg",
              imageAlt: "Catering chef preparing food",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-friends-eating-lunch-together_23-2148451631.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
        {
          title: "Table Reservations",
          description: "Secure your spot effortlessly. Book a table online or by phone for a guaranteed dining experience.",
          icon: CalendarCheck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-playing-with-smartphone_23-2149663589.jpg",
              imageAlt: "Phone for table reservation",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-vector/flat-web-button-set_23-2147946983.jpg",
              imageAlt: "Online booking system",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/children-having-lemonade-stand_23-2149398372.jpg",
          imageAlt: "restaurant interior elegant dining",
        },
      ]}
      title="Our Convenient Services"
      description="We offer a comprehensive range of services to ensure a seamless and enjoyable dining experience for every occasion."
    />
  </div>

  <div id="features" data-section="features">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Halal Food",
        "Good For Families",
        "Good For Kids",
        "Tourist Friendly",
        "Cozy Atmosphere",
        "Quiet Environment",
        "Trendy Dining",
        "Large Parking Area",
      ]}
      title="Restaurant Features"
      description="Discover the unique attributes that make Ritaj Dar El Hout a standout dining destination in Meknes."
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get In Touch"
      title="Visit Us or Make a Reservation"
      description="We look forward to welcoming you to Ritaj Dar El Hout. Contact us for inquiries or to book your table. Find us easily using the map below."
      buttons={[
        {
          text: "WhatsApp Us",
          href: "https://wa.me/212661484172",
        },
        {
          text: "Email Us",
          href: "mailto:Ritajdarelhout@gmail.com",
        },
        {
          text: "Get Directions",
          href: "https://www.google.com/maps/search/?api=1&query=Naim+3-4,+Number+318,+Route+Rabat-F%C3%A8s,+between+Atacadao+Roundabout+and+Bridia+Roundabout,+Meknes,+Morocco",
        },
        {
          text: "Call Us",
          href: "tel:+212661484172",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Ritaj Dar El Hout"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
          ],
        },
        {
          title: "Contact Information",
          items: [
            {
              label: "Naim 3-4, Number 318, Route Rabat-Fès, Meknes, Morocco",
              href: "https://www.google.com/maps/search/?api=1&query=Naim+3-4,+Number+318,+Route+Rabat-F%C3%A8s,+between+Atacadao+Roundabout+and+Bridia+Roundabout,+Meknes,+Morocco",
            },
            {
              label: "+212 661 484 172",
              href: "tel:+212661484172",
            },
            {
              label: "Ritajdarelhout@gmail.com",
              href: "mailto:Ritajdarelhout@gmail.com",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/212661484172",
            },
          ],
        },
      ]}
      copyrightText="© 2026 Ritaj Dar El Hout. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
