"use server";

import prisma from "../db";
import { ProductParams } from "@/types/types";

export const createProduct = async (params: ProductParams) => {
  try {
    const product = await prisma.product.create({
      data: {
        title: params.title,
        description: params.description,
        price: params.price,
        image: params.image,
        stock: params.stock,
      },
    });
    console.log("PRODUCT: ", product);
    if (!product) {
      return {
        success: false,
        message: "An error occurred",
      };
    }

    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the Product",
    };
  }
};

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        title: true,
        price: true,
        image: true,
        description: true,
        createdAt: true,
        stock: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!products) {
      return {
        success: false,
        message: "An error occurred",
      };
    }
    console.log("PRODUCTS: ", products);
    return { success: true, data: products };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while creating the Product",
    };
  }
};
