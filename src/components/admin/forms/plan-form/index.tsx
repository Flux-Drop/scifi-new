// "use client";

// import { updatePlan } from "@/actions/plans"; // Adjust the import path
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { planSchema } from "@/helpers/zod/admin/plan-schema"; // Adjust the import path
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Plan } from "@prisma/client";
// import { useRouter } from "next/navigation";
// import { useFieldArray, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { z } from "zod";

// interface PlanFormProps {
//   type: "create" | "update";
//   plan?: Plan & {
//     pricings: { duration: number; priceWithoutTax: number; priceWithTax: number }[];
//   };
// }

// const PlanForm = ({ type, plan }: PlanFormProps) => {
//   const router = useRouter();
//   const form = useForm<z.infer<typeof planSchema>>({
//     resolver: zodResolver(planSchema),
//     defaultValues: {
//       name: plan?.name || "",
//       speed: plan?.speed || "",
//       dataLimit: plan?.dataLimit || "Unlimited",
//       category: plan?.category || "ENTERTAINMENT",
//       ottSubscriptions: (plan?.ottSubscriptions as string[]) || [],
//       offers: (plan?.offers as string[]) || [
//         "Get installation free with 3 months+ plans purchase.",
//         "Free installation + 45-day extension with 12-month plan.",
//       ],
//       pricings: plan?.pricings || [
//         { duration: 1, priceWithoutTax: 0, priceWithTax: 0 },
//       ],
//     },
//   });

//   const { fields: pricingFields, append: appendPricing, remove: removePricing } = useFieldArray({
//     control: form.control,
//     name: "pricings",
//   });

//   const { fields: ottFields, append: appendOtt, remove: removeOtt } = useFieldArray({
//     control: form.control,
//     name: "ottSubscriptions",
//   });



//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Plan Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Plan Name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="speed"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Speed</FormLabel>
//               <FormControl>
//                 <Input placeholder="e.g., 40 MBPS" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="dataLimit"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Data Limit</FormLabel>
//               <FormControl>
//                 <Input placeholder="e.g., Unlimited" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="category"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Category</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select category" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="ENTERTAINMENT">Entertainment</SelectItem>
//                   <SelectItem value="SPEED">Speed</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="ottSubscriptions"
//           render={() => (
//             <FormItem>
//               <FormLabel>OTT Subscriptions</FormLabel>
//               {ottFields.map((field, index) => (
//                 <div key={field.id} className="flex items-center space-x-2">
//                   <FormControl>
//                     <Input
//                       placeholder="OTT Subscription"
//                       {...form.register(`ottSubscriptions.${index}`)}
//                     />
//                   </FormControl>
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     onClick={() => removeOtt(index)}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => appendOtt("")}
//               >
//                 Add OTT Subscription
//               </Button>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="offers"
//           render={() => (
//             <FormItem>
//               <FormLabel>Offers</FormLabel>
//               {form.getValues("offers").map((offer, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <FormControl>
//                     <Input
//                       placeholder="Offer"
//                       {...form.register(`offers.${index}`)}
//                     />
//                   </FormControl>
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     onClick={() => form.setValue("offers", form.getValues("offers").filter((_, i) => i !== index))}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => form.setValue("offers", [...form.getValues("offers"), ""])}
//               >
//                 Add Offer
//               </Button>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="pricings"
//           render={() => (
//             <FormItem>
//               <FormLabel>Pricing Options</FormLabel>
//               {pricingFields.map((field, index) => (
//                 <div key={field.id} className="flex items-center space-x-2">
//                   <FormControl>
//                     <Input
//                       type="number"
//                       placeholder="Duration (months)"
//                       {...form.register(`pricings.${index}.duration`, {
//                         valueAsNumber: true,
//                       })}
//                     />
//                   </FormControl>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       placeholder="Price without tax"
//                       {...form.register(`pricings.${index}.priceWithoutTax`, {
//                         valueAsNumber: true,
//                       })}
//                     />
//                   </FormControl>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       placeholder="Price with tax"
//                       {...form.register(`pricings.${index}.priceWithTax`, {
//                         valueAsNumber: true,
//                       })}
//                     />
//                   </FormControl>
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     onClick={() => removePricing(index)}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => appendPricing({ duration: 1, priceWithoutTax: 0, priceWithTax: 0 })}
//               >
//                 Add Pricing
//               </Button>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button
//           type="submit"
//           className="w-full bg-[#6D54B5] text-white hover:bg-[#6D54B5]/80"
//         >
//           Update Plan
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default PlanForm;