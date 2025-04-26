import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the message schema
      const messageData = insertMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createMessage(messageData);
      
      // Return a success response
      return res.status(201).json({
        message: "Message received successfully",
        data: message
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        message: "Failed to submit message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
