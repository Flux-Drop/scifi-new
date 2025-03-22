"use server";

import prisma from "@/db";

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!users) {
      return {
        success: false,
        message: "An error occurred",
      };
    }
    console.log("USERS: ", users);
    return {
      success: true,
      data: users,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while fetching the users",
    };
  }
};

export const getCurrentUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }
    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while fetching the user",
    };
  }
};
