import { Router } from "express";
import { z } from "zod";
import storage from "./storage";
import { insertVehicleSchema, contactFormSchema } from "@shared/schema";

const router = Router();

// Vehicle routes
router.get("/api/vehicles", async (req, res) => {
  try {
    const { brand, driveType } = req.query;
    let vehicles = await storage.getVehicles();
    
    if (brand && typeof brand === "string") {
      vehicles = vehicles.filter(v => v.brand === brand);
    }
    
    if (driveType && typeof driveType === "string") {
      vehicles = vehicles.filter(v => v.driveType === driveType);
    }
    
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

router.get("/api/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await storage.getVehicleById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicle" });
  }
});

router.get("/api/vehicles/brand/:brand", async (req, res) => {
  try {
    const { brand } = req.params;
    if (brand !== "denago" && brand !== "evolution") {
      return res.status(400).json({ error: "Invalid brand" });
    }
    
    const vehicles = await storage.getVehiclesByBrand(brand);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles by brand" });
  }
});

router.post("/api/vehicles", async (req, res) => {
  try {
    const validatedData = insertVehicleSchema.parse(req.body);
    const vehicle = await storage.createVehicle(validatedData);
    res.status(201).json(vehicle);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid vehicle data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to create vehicle" });
  }
});

router.put("/api/vehicles/:id", async (req, res) => {
  try {
    const validatedData = insertVehicleSchema.partial().parse(req.body);
    const vehicle = await storage.updateVehicle(req.params.id, validatedData);
    
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    
    res.json(vehicle);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid vehicle data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to update vehicle" });
  }
});

router.delete("/api/vehicles/:id", async (req, res) => {
  try {
    const deleted = await storage.deleteVehicle(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete vehicle" });
  }
});

// Contact form route
router.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    const success = await storage.submitContactForm(validatedData);
    
    if (success) {
      res.json({ success: true, message: "Contact form submitted successfully" });
    } else {
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid form data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

export default router;
