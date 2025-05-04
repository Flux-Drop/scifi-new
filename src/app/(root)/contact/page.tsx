"use client"
import ContactInformation from "@/components/global/contact-information"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ContactSchema from "@/helpers/zod/contact-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { LocateIcon, Mail, MapPin, MapPinned, MessageSquare, Phone, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function ContactUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
      pinCode: "",
      installationAddress: "",
    },
  });

  const [addressLoading, setAddressLoading] = useState<boolean>(false);

  const handleGeolocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setAddressLoading(true);
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      console.log("position: ", position)

      // Use a geocoding service to get address from coordinates
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
      );
      console.log("response: ", response)
      
      const data = await response.json();
      console.log('data:', data)
      const components = data.results[0].components;
      
      form.setValue("installationAddress", [
        components.road,
        components.city,
        components.state,
        components.country
      ].filter(Boolean).join(", "));
      
      form.setValue("pinCode", components.postcode);
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Error fetching location. Please enter manually.");
    } finally {
      setAddressLoading(false);
    }
  };

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    console.log(values);
  };
  return (
    <div className="text-white flex flex-col gap-16 items-start py-10 mx-auto w-full px-5 xs:px-10 md:px-24 relative min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-10 items-start justify-between"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
         <div className="lg:w-1/2 relative">
          <motion.div
            className="relative w-full h-[400px] rounded-2xl overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/contact-us.jpg"
              alt="Scify Technology"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 font-bold mb-6">
           Let&apos;s Connect
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            At Scify, our goal is to make you feel at home while providing the support you need. Reach out to us with any questions or concerns; our dedicated team is here to help. Choose Scify for a seamless experience and reliable support.
          </p>
        </div>
      </motion.div>
      {/* contact location and map */}
    <div className="w-full flex items-start gap-8">
      <Form {...form}>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
      {/* Name */}
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel><User size={16} />Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Enter your name"
                {...field}
                className="h-12 w-full rounded-md border bg-gray-900/50 border-gray-700 focus:border-[#2BB490] px-4 text-base placeholder:text-gray-200"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Phone */}
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel><Phone size={16} />Phone</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                {...field}
                className="h-12 w-full rounded-md border bg-gray-900/50 border-gray-700 focus:border-[#2BB490] px-4 text-base placeholder:text-gray-200"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Email */}
      <div className="col-span-2">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel><Mail size={16} />Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="youremail@example.com"
                {...field}
                className="h-12 w-full rounded-md border bg-gray-900/50 border-gray-700 focus:border-[#2BB490] px-4 text-base placeholder:text-gray-200"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>

      {/* PIN Code + Location Button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2">
        <FormField
          control={form.control}
          name="pinCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel><MapPinned size={16} />PIN Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter PIN code"
                  {...field}
                  className="h-12 w-full rounded-md border bg-gray-900/50 border-gray-700 focus:border-[#2BB490] px-4 text-base placeholder:text-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-end">
          <Button
            type="button"
            onClick={handleGeolocation}
            disabled={addressLoading}
            className="flex items-center justify-center py-3 px-3 rounded-md border bg-[#2BB490]/20 border-[#2BB490] text-[#2BB490] shadow-lg shadow-[#2BB490]/10 cursor-pointer transition-all duration-300 h-12 hover:bg-[#2BB490] hover:text-white font-semibold"
            variant="outline"
          >
           <MapPin /> {addressLoading ? "Fetching..." : "Use Current Location"}
          </Button>
        </div>
      </div>

      {/* Installation Address */}
      <FormField
        control={form.control}
        name="installationAddress"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel><LocateIcon size={16} /> Installation Address</FormLabel>
            <FormControl>
              <Input
                placeholder="Start typing your address"
                {...field}
                className="h-12 w-full rounded-md border bg-gray-900/50 border-gray-700 focus:border-[#2BB490] px-4 text-base placeholder:text-gray-200"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Query */}
      <FormField
        control={form.control}
        name="query"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel><MessageSquare size={16} />Message</FormLabel>
            <FormControl>
            <textarea
              rows={4}
              className="w-full p-4 border rounded-md bg-gray-900/50 border-gray-700 placeholder:text-gray-200 text-base resize-none "
              {...field}
            />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Submit Button */}
      <div className="md:col-span-2">
        <Button
          type="submit"
         className="flex items-center justify-center py-3 px-3 rounded-md border  shadow-lg shadow-[#2BB490]/10 cursor-pointer h-12 bg-[#2BB490] text-white font-semibold w-full border-[#2BB490] hover:bg-[#2BB490]"
        >
          Send Query
        </Button>
      </div>
    </form>
  </Form>
<ContactInformation />

</div>
{/* form */}

    </div>
  )
}
