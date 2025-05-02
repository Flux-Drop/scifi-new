"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ContactSchema from "@/helpers/zod/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Contact = () => {
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

  const [loading, setLoading] = useState<boolean>(false);
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
    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-4">
      {/* Left Side Form */}
      <div className="flex flex-col flex-1 bg-white p-10 rounded-[20px]">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between py-6 gap-2">
          <h1 className="text-xl lg:text-3xl font-semibold">
            We{"'"}ll get your business set up in less than 24 hours.
          </h1>
          <p className="text-sm">
            Sounds impossible, right? Wait until you see how easy it is to run
            your business on Scify
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6">
          <Form {...form}>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="email"
                        placeholder="youremail@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* New Location Fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="pinCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PIN Code</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter PIN code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-end">
                  <Button
                    type="button"
                    onClick={handleGeolocation}
                    disabled={addressLoading}
                    className="w-full"
                    variant="outline"
                  >
                    {addressLoading ? "Fetching..." : "Use Current Location"}
                  </Button>
                </div>
              </div>

              <FormField
                control={form.control}
                name="installationAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Installation Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Start typing your address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full p-2 border rounded-md"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loading}
                type="submit"
                className="w-full cursor-pointer"
              >
                Send Query
              </Button>
            </form>
          </Form>
        </div>

        <p className="text-sm text-center text-black mt-4">
          Prefer Email?{" "}
          <a href="mailto:hello@scify.com" className="underline font-medium">
            hello@scify.com
          </a>
        </p>
      </div>

      {/* Right Side Image */}
      <div
        className="flex-1/4 bg-cover bg-center bg-no-repeat min-h-full p-10 flex flex-col justify-end text-white rounded-[20px]"
        style={{ backgroundImage: "url('/assets/contact.png')" }}
      >
        <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold">
          Empowering homes with seamless connectivity and unparalleled security.
        </h1>
        <p className="mt-2">Vikram Kumar</p>
        <p>Owner, Scify</p>
      </div>
    </div>
  );
};

export default Contact;
