import { z } from "zod";

// Vehicle schema
export const vehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.enum(["denago", "evolution"]),
  driveType: z.enum(["2x4", "4x4"]),
  seats: z.number(),
  category: z.string(), // e.g., "Ranger", "Forester", "Turfman"
  price: z.number(),
  status: z.enum(["available", "pre-order", "sold"]),
  images: z.array(z.string()),
  description: z.string(),
  features: z.array(z.string()),
  specifications: z.record(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Vehicle = z.infer<typeof vehicleSchema>;

// Insert schemas
export const insertVehicleSchema = vehicleSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertVehicle = z.infer<typeof insertVehicleSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  interest: z.enum(["sales", "service", "parts", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
