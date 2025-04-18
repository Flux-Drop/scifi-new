"use server";

import prisma from "@/db";
import { BannerParams } from "@/types/types";

export const createBanner = async (params: BannerParams) => {
  try {
    const banner = await prisma.banner.create({
      data: {
        title: params.title,
        description: params.description,
        image: params.image,
        order: params.order,
        bannerStatus: params.bannerStatus,
      },
    });
    console.log("Banner: ", banner);
    if (!banner) {
      return {
        success: false,
        message: "An error occurred",
      };
    }

    return {
      success: true,
      message: "banner created successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the banner",
    };
  }
};

export const getBanner = async () => {
  try {
    const banners = await prisma.banner.findMany({
      select: {
        title: true,
        image: true,
        description: true,
        order: true,
        bannerStatus: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!banners) {
      return {
        success: false,
        message: "An error occurred",
      };
    }
    console.log("Banner: ", banners);
    return { success: true, data: banners };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while creating the Product",
    };
  }
};
