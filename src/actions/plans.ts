"use server";
import prisma from "../db";


export const getPlans = async () => {
    try {
      const plans = await prisma.plan.findMany({
        select: {
          name: true,
          dataLimit: true,
          speed:true,
          offers: true,
          createdAt: true,
          updatedAt: true,
               
        },
      });
      console.log(JSON.stringify(plans, null, 2));
      if (plans.length === 0) {
        return {
          success: false,
          message: "No plans found",
        };
      }
      return { success: true, data: plans };
    } catch (error) {
      console.error("Error fetching plans:", error);
      return {
        success: false,
        message: "An error occurred while getting the plans",
      };
    }
  };

  export const createPlan = async () => {
    try {
        const plan = prisma.plan.create({
            data:{
                category: "ENTERTAINMENT",
                dataLimit: "Unlimited Data",
                name: "Scify Gold",
                offers: [],
                ottSubscriptions: [],
                speed: "50 MBPS",
                pricings: {
                    create: {
                        priceWithoutTax: 649,
                        priceWithTax: 766,
                        duration: 1,
                        
                    }
                }
            }
        })
        if (!plan) {
            return {
                success: false,
                message: "An error occurred while gett the plans",
              };
        }
        return {success: true, data: plan}
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while creating the plan" + error,
          };
    }
  }
// export const updatePlan = async (id: string, params: PlanParams) => {
//     try {
//       const plan = await prisma.plan.update({
//         where: { id },
//         data: {
//           name: params.name,
//           speed: params.speed,
//           dataLimit: params.dataLimit,
//           category: params.category,
//           ottSubscriptions: params.ottSubscriptions,
//           offers: params.offers,
//           pricings: {
//             deleteMany: {}, // Remove existing pricings
//             create: params.pricings.map((pricing) => ({
//               duration: pricing.duration,
//               priceWithoutTax: pricing.priceWithoutTax,
//               priceWithTax: pricing.priceWithTax,
//             })),
//           },
//         },
//       });
//       if (!plan) {
//         return {
//           success: false,
//           message: "An error occurred while updating the plan",
//         };
//       }
//       return {
//         success: true,
//         message: "Plan updated successfully",
//       };
//     } catch (error) {
//       console.error(error);
//       return {
//         success: false,
//         message: "An error occurred while updating the plan",
//       };
//     }
//   };