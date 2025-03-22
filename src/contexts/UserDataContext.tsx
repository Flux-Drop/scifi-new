"use client";

import { getCurrentUser } from "@/actions/users";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

interface UserDataContext {
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  firstName: string;
  lastName: string | null;
}

const UserContext = createContext<UserDataContext | null>(null);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserDataContext | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const response = await getCurrentUser(session.user.email);
          if (response.success && response.data) {
            setUser(response.data);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [status, session?.user?.email]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
