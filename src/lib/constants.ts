import { NavLink, Testimonial } from "@/types/types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Login",
    path: "/sign-in",
    className: "font-semibold border-t w-full border-slate-400",
  },
];

export const servicesCards = [
  {
    title: "Internet for Business",
    copy: "Stay ahead in the digital world with our reliable business internet services, designed to meet the demands of modern businesses for uninterrupted connectivity and efficiency.",
  },

  {
    title: "Entertainment plans with OTT/IPTV",
    copy: "Enjoy a wide range of entertainment options with our bundled plans featuring popular OTT and IPTV services like Netflix, Disney+ Hotstar, Zee5, and more, all accessible at your fingertips.",
  },
  {
    title: "Home Security & Automation",
    copy: "Ensure the safety of your home with our comprehensive security solutions, including smart home automation features that provide convenience and peace of mind.",
  },

  {
    title: "High Speed Fiber Internet",
    copy: "Experience blazing-fast internet with our fiber-optic broadband, ensuring seamless connectivity for all your online needs.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Scify has been a lifesaver for me during wfh. Working from home became so much easier with their fast and reliable internet. I can attend online meetings, collaborate with my team, and complete tasks without any issues. The free checks of my home electronics have also been a huge help. Scify has made working from home a smooth experience, and I'm grateful for their services.",
    name: "Priya Singh",
    designation: "CEO at TechSolutions",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Choosing Scify was a good decision. Their plans are cheap, and the internet is always fast. The customer service is helpful. When I had a problem, they fixed it quickly. I tell everyone to use Scify for internet and safety.",
    name: "Ranjan Mishra",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Scify stands out because of their excellent customer service. Unlike other providers I've tried, Scify's team is always there to help and resolves any issues quickly. Their internet is fast and reliable, and the security features, like the wifi camera, are top-notch. Scify not only offers great services but also cares about their customers, making them the best choice for internet and security.",
    name: "Sumant",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const FIELD_TYPES = {
  firstName: "text",
  lastName: "text",
  email: "email",
  password: "password",
};
export const FIELD_PLACEHOLDERS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
};

export const adminSidebarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/upload.svg",
    route: "/admin/banner",
    text: "Banner",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/plans",
    text: "All Plans",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/products",
    text: "All Products",
  },
];



// src/data/faqs.ts
export interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const faqs: FAQ[] = [
  {
    category: "New Connection",
    questions: [
      {
        question: "How do I apply for a new connection with Scify?",
        answer:
          "You can apply for a new connection with Scify by visiting our website and filling out the online application form. Alternatively, you can contact our customer service team for assistance with the application process.",
      },
      {
        question: "What documents do I need to provide for a new connection?",
        answer:
          "The documents required for a new connection may vary depending on your location and the type of service you are applying for. Generally, you will need to provide proof of identity, proof of address, and any other relevant documents requested by Scify for KYC.",
      },
      {
        question: "How long does it take to get a new connection installed?",
        answer:
          "The time taken to install a new connection can vary depending on various factors such as location, availability of infrastructure, and the type of service requested. Our customer service team will provide you with an estimated timeline for installation.",
      },
    ],
  },
  {
    category: "Account",
    questions: [
      {
        question: "How can I access my Scify account?",
        answer:
          "You can access your Scify account through our website. Simply log in using your username and password to view your account details, billing information, and more.",
      },
      {
        question: "How can I update my account information?",
        answer:
          "You can update your account information by logging into your Scify account and navigating to the profile or settings section. From there, you can update your contact details, billing information, and other account information as needed.",
      },
      {
        question: "How can I change my Scify plan?",
        answer:
          "You can change your Scify plan by logging into your account and selecting the option to change your plan. Alternatively, you can contact our customer service team for assistance with changing your plan.",
      },
    ],
  },
  {
    category: "Payment",
    questions: [
      {
        question: "What payment methods does Scify accept?",
        answer:
          "Scify accepts various payment methods including credit/debit cards, net banking, mobile wallets, and more. You can choose the payment method that is most convenient for you.",
      },
      {
        question: "Can I set up auto-pay for my Scify bill?",
        answer:
          "Yes, you can set up auto-pay for your Scify bill through your account settings. This will ensure that your bill is automatically paid on the due date each month.",
      },
      {
        question: "What should I do if I have issues with my payment?",
        answer:
          "If you have any issues with your payment, please contact our customer service team for assistance. We will work with you to resolve the issue as quickly as possible.",
      },
    ],
  },
  {
    category: "Shifting and Reconnection",
    questions: [
      {
        question:
          "How can I request a shift or reconnection of my Scify services?",
        answer:
          "You can request a shift or reconnection of your Scify services by contacting our customer service team. They will assist you with the process and provide you with the necessary information.",
      },
      {
        question: "Is there a fee for shifting or reconnection of services?",
        answer:
          "Fees for shifting or reconnection of services may vary depending on the type of service and the location. Our customer service team will provide you with information about any applicable fees.",
      },
      {
        question: "How long does it take to shift or reconnect my services?",
        answer:
          "The time taken to shift or reconnect your services can vary depending on various factors such as location and availability of infrastructure. Our customer service team will provide you with an estimated timeline for the process.",
      },
    ],
  },
  {
    category: "Referral",
    questions: [
      {
        question: "Does Scify offer a referral program?",
        answer:
          "Yes, Scify offers a referral program where you can earn rewards for referring new customers to us. Please visit our website or contact our customer service team for more information about our referral program.",
      },
      {
        question: "How can I refer a friend to Scify?",
        answer:
          "You can refer a friend to Scify by sharing your referral link or code with them. When they sign up for a new connection using your referral link or code, you will be eligible for rewards as per our referral program.",
      },
      {
        question: "When will I receive my referral rewards?",
        answer:
          "Referral rewards are typically processed once the new customer has successfully signed up for a new connection with Scify and met the eligibility criteria of our referral program. You will receive your rewards as per the terms and conditions of the program.",
      },
    ],
  },
  {
    category: "Home Security Solutions",
    questions: [
      {
        question: "What home security solutions does Scify offer?",
        answer:
          "Scify offers a range of home security solutions including video door phones, smart security cameras, and more. These solutions are designed to enhance the security of your home and provide you with peace of mind.",
      },
      {
        question: "How can I purchase home security solutions from Scify?",
        answer:
          "You can purchase home security solutions from Scify by visiting our website or contacting our customer service team. Our team will assist you in selecting the right security solutions for your home and arrange for installation if required.",
      },
      {
        question: "Are Scify's home security solutions customizable?",
        answer:
          "Yes, Scify's home security solutions can be customized to meet your specific security needs. Our team will work with you to design a security system that fits your requirements and budget.",
      },
    ],
  },
];


