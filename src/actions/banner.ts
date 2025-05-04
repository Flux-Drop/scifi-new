"use server";

import prisma from "../db";
import { BannerParams } from "@/types/types";


//create
export const createBanner = async ({title, description, ctaText, ctaUrl, imageUrl, isActive, order}: BannerParams) => {
  try {
    const banner = await prisma.banner.create({
      data: {
        title: title,
        description: description,
        ctaText: ctaText,
        ctaUrl: ctaUrl,
        imageUrl: imageUrl,
        order: order,
        isActive: isActive,
      },
    });
    if (!banner) {
      return {
        success: false,
        message: "An error occurred while creating the banner",
      };
    }
    return {
      success: true,
      message: "Banner created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while creating the banner",
    };
  }
};

// Get all banners, ordered by 'order' field
export const getBanners = async () => {
  try {
    const banners = await prisma.banner.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        ctaText: true,
        ctaUrl: true,
        imageUrl: true,
        order: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        order: "asc",
      },
    });
    if (!banners) {
      return {
        success: false,
        message: "An error occurred while fetching banners",
      };
    }
    return { success: true, data: banners };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching banners",
    };
  }
};

//get active banners
export const getActiveBanners = async () => {
  try {
    const activeBanners = await prisma.banner.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        createdAt: true,
      },
      orderBy: {
        order: "asc",
      },
    });
    if (!activeBanners) {
      return {
        success: false,
        message: "An error occurred while fetching banners",
      };
    }
    return { success: true, data: activeBanners };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching banners",
    };
  }
}

// Update an existing banner by ID
export const updateBanner = async (id: string, params: Partial<BannerParams>) => {
  try {
    const banner = await prisma.banner.update({
      where: { id },
      data: {
        title: params.title,
        description: params.description,
        ctaText: params.ctaText,
        ctaUrl: params.ctaUrl,
        imageUrl: params.imageUrl,
        order: params.order,
        isActive: params.isActive,
      },
    });
    if (!banner) {
      return {
        success: false,
        message: "Banner not found or update failed",
      };
    }
    return {
      success: true,
      message: "Banner updated successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while updating the banner",
    };
  }
};

export const getBannerById = async (id: string) => {
  try {
    const banner = await prisma.banner.findUnique({
      where: { id },
      select: {
        title: true,
        description: true,
        ctaText: true,
        ctaUrl: true,
        isActive: true,
        imageUrl: true,
        order: true,
      }
    });
    if (!banner) {
      return {
        success: false,
        message: "Banner not found",
      };
    }
    return {
      success: true,
      message: "Banner found successfully",
      data: banner
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while updating the banner",
    };
  }
}

// Delete a banner by ID
export const deleteBanner = async (id: string) => {
  try {
    const banner = await prisma.banner.delete({
      where: { id },
    });
    if (!banner) {
      return {
        success: false,
        message: "Banner not found or deletion failed",
      };
    }
    return {
      success: true,
      message: "Banner deleted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while deleting the banner",
    };
  }
};