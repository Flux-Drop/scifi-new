"use client";

import { getCurrentUser, getUsers } from "@/actions/users";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type UserData = {
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  firstName: string;
  lastName: string | null;
};

type UserContextType = {
  currentUser: UserData | null;
  allUsers: UserData[];
  refreshUsers: () => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);
  const { data: session, status } = useSession();

  // Fetch current user
  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const response = await getCurrentUser(session.user.email);
          if (response.success && response.data) {
            setCurrentUser(response.data);
          }
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      }
    };
    fetchCurrentUser();
  }, [status, session?.user?.email]);

  // Fetch all users (for admin)
  const refreshUsers = async () => {
    try {
      const response = await getUsers();
      if (response.success && response.data) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        allUsers,
        refreshUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserDataProvider");
  }
  return context;
};
