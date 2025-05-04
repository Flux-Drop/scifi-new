"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Layers, RefreshCw, Shield, TargetIcon, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const visionPoints = [
    {
      title: "Innovation",
      description:
        "To be at the forefront of technological advancement, offering innovative solutions that enhance the quality of life for our customers.",
      icon: <Zap className="w-8 h-8 text-white " />,
    },
    {
      title: "Integration",
      description:
        "To create a seamless and interconnected ecosystem within homes, where technology enhances security, convenience, and entertainment.",
      icon: <Layers className="w-8 h-8 text-white " />,
    },
    {
      title: "Trust",
      description:
        "To be the most trusted and reliable partner for in-home technology, setting the standard for excellence in customer service and satisfaction.",
      icon: <Shield className="w-8 h-8 text-white " />,
    },
    {
      title: "Empowerment",
      description:
        "To drive social change by making advanced technology accessible and affordable, empowering individuals and communities.",
      icon: <Users className="w-8 h-8 text-white " />,
    },
    {
      title: "Adaptability",
      description:
        "To continuously innovate and evolve, anticipating and meeting the ever-changing needs of our customers and the market.",
      icon: <RefreshCw className="w-8 h-8 text-white " />,
    },
  ]

  return (
    <div className="text-white flex flex-col gap-16 items-start py-10 mx-auto w-full px-5 xs:px-10 md:px-24 relative min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-10 items-start justify-between"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 font-bold mb-6">
            About Scify
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Scify is a leading provider of cutting-edge fiber broadband connections and state-of-the-art home security
            solutions and automation. We are dedicated to revolutionizing the way people connect and protect their
            homes, offering high-speed internet services and advanced security systems tailored to meet the needs of
            modern households.
          </p>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-4">
            At Scify, we understand the importance of reliable internet connectivity and the peace of mind that comes
            with a secure home. That&rsquo;s why we strive to deliver innovative solutions at affordable price that not only
            enhance the way you live but also empower you to stay connected and protected at all times.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <motion.div
            className="relative w-full h-[400px] rounded-2xl overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/about-us1.jpg"
              alt="Scify Technology"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>

            {/* Founder's Note */}
            <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <motion.div
            className="p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 relative"
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-6 left-10 w-12 h-12 rounded-full bg-gradient-to-r from-[#904EF6] to-[#3F80F6] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">&quot;</span>
            </div>
            <p className="text-lg md:text-xl text-neutral-300 italic mb-6 leading-relaxed">
            &quot;At Scify, we are committed to democratizing technology, making it affordable and accessible to all. Our vision
            is to empower the masses by ensuring that cutting-edge technology is within reach of every individual.&quot;
          </p>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white">Vikram Kumar</h3>
            <p className="text-sm text-neutral-400">Founder, Scify</p>
          </div>

          </motion.div>
          </motion.div>

      <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      >
        {/* Vision Section */}
      <motion.div
        className="w-full py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-300 mb-10 text-center">Our Vision</h2>

        <div className="relative max-w-full mx-auto">
          {/* Vision Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visionPoints.map((point, index) => (
              <motion.div
              key={index}
              className={cn(
                "group relative transition-all duration-300 h-full",
                index === 3 && "col-span-2"
              )}
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#904EF6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl group-hover:border-[#904EF6]/20 transition-all duration-300 text-left h-full">
                
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl w-min mb-6 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
            
                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>
            
                <p className="text-gray-300">
                  {point.description}
                </p>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    <div className="relative max-w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#904EF6] to-[#3F80F6] opacity-[0.15] rounded-2xl blur-xl" />

      {/* Main content container */}
      <motion.div
        className="relative p-8 md:p-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-left"
        transition={{ duration: 0.3 }}
      >
        {/* Header Icon + Label */}
        <div className="flex items-center gap-3 mb-6">
          {/* Example icon: target */}
          <TargetIcon color="#904EF6" />
          <span className="text-[#904EF6] font-medium">Our Mission</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl">
          Empowering homes with seamless connectivity and unparalleled security.
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl">
          At Scify, we firmly believe in democratizing technology, making it affordable and accessible to all.
          We are driven by the vision of empowering the masses by ensuring that cutting-edge technology is
          within the reach of every individual.
        </p>
      </motion.div>
    </div>
</motion.div>
    </div>
  )
}
