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
