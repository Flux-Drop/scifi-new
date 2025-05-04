import {
    Mail,
    MapPin,
    Phone,
    Linkedin,
    Twitter,
    Github,
  } from "lucide-react";
  
  export default function ContactInformation() {
    return (
      <section className="w-1/2 text-gray-200 space-y-8">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          <p className="mt-1 text-gray-400">
            Get in touch with us through any of these channels.
          </p>
        </div>
  
        {/* Items */}
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <span className="p-3 rounded-xl bg-[#0f1f19]/60 text-emerald-400">
              <MapPin size={20} />
            </span>
            <div>
              <h4 className="font-semibold text-white">Address (Head Office)</h4>
              <p>Building No. 65, F2 Morna, Noida Sector 32, Near Bharat Petrol Pump, Noida, Uttar Pradesh,  2011301</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="p-3 rounded-xl bg-[#0f1f19]/60 text-emerald-400">
              <MapPin size={20} />
            </span>
            <div>
              <h4 className="font-semibold text-white">Address (Circle Office)</h4>
              <p>351A, Road Number 5, Ashok Nagar, Ranchi, Jharkhand, 834002</p>
            </div>
          </li>
  
          <li className="flex items-start gap-4">
            <span className="p-3 rounded-xl bg-[#0f1f19]/60 text-emerald-400">
              <Phone size={20} />
            </span>
            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <p>+91&nbsp;7070703697</p>
            </div>
          </li>
  
          <li className="flex items-start gap-4">
            <span className="p-3 rounded-xl bg-[#0f1f19]/60 text-emerald-400">
              <Mail size={20} />
            </span>
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p>support@scifyweb.live</p>
            </div>
          </li>
        </ul>
  
        {/* Follow‑us */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Github, href: "#" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="p-3 rounded-xl bg-[#1f2937] hover:bg-[#334155] transition-colors"
              >
                <Icon size={20} className="text-gray-300" />
              </a>
            ))}
          </div>
        </div>
  
        {/* Footnote */}
        <hr className="border-gray-700 my-6" />
        <p className="text-gray-400 text-sm">
          By contacting us, you agree to our{" "}
          <span className="text-emerald-400">
            Privacy Policy
          </span>.
        </p>
      </section>
    );
  }