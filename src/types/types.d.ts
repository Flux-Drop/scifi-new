export type NavLink = {
  name: string;
  path: string;
  className?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AuthCredentials {
  email: string;
  password: string;
  password: string;
  firstName: string;
  lastName?: string;
}

interface ProductParams {
  title: string;
  stock: number;
  description: string;
  price: number;
  image: string;
}
export interface PlanParams {
  name: string;
  speed: string;
  dataLimit: string;
  category: "ENTERTAINMENT" | "SPEED";
  ottSubscriptions?: string[];
  offers: string[];
  pricings: {
    duration: number;
    priceWithoutTax: number;
    priceWithTax: number;
  }[];
}