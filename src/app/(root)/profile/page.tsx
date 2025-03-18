"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, LogOut, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  const [isHovering, setIsHovering] = useState(false);

  // Mock user data - would come from your auth system in a real app
  const user = {
    name: "Sarah Johnson",
    role: "Senior Product Designer",
    email: "sarah.johnson@example.com",
    profileImage: "/placeholder.svg?height=150&width=150",
    coverImage: "/placeholder.svg?height=400&width=1200",
  };

  return (
    <div className="w-screen h-[60vh] bg-gradient-to-b from-black to-gray-300 mt-0"></div>
  );
}
