import { z } from 'zod'

// Common validation patterns
const emailSchema = z.string().email('Invalid email address')
const phoneSchema = z.string().regex(/^[\d\s()-]{10,15}$/, 'Invalid phone number format')
const zipCodeSchema = z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format')
const ssnSchema = z.string().regex(/^(\d{3}-\d{2}-\d{4}|\d{9})$/, 'Invalid SSN/ITIN format')

// Payment Intent Schema
export const createPaymentIntentSchema = z.object({
  amount: z.number()
    .min(249, 'Amount must be at least $249')
    .max(329, 'Amount cannot exceed $329')
    .refine(val => val === 249 || val === 329, 'Amount must be either $249 or $329'),
  applicationId: z.string()
    .min(1, 'Application ID is required')
    .max(100, 'Application ID too long'),
  entityType: z.string()
    .min(1, 'Entity type is required')
    .max(50, 'Entity type too long'),
  customerEmail: z.string().email('Invalid email address').optional(),
  serviceTier: z.enum(['standard', 'express']).default('standard'),
})

// Chat Message Schema
export const chatMessageSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string()
        .min(1, 'Message content cannot be empty')
        .max(2000, 'Message too long (max 2000 characters)'),
    })
  ).min(1, 'At least one message is required')
    .max(50, 'Too many messages in conversation'),
})

// EIN Application Schema
export const einApplicationSchema = z.object({
  // Business Information
  businessName: z.string()
    .min(1, 'Business name is required')
    .max(100, 'Business name too long'),
  businessAddress: z.string()
    .min(1, 'Business address is required')
    .max(200, 'Business address too long'),
  businessCity: z.string()
    .min(1, 'City is required')
    .max(50, 'City name too long'),
  businessState: z.string()
    .min(2, 'State is required')
    .max(2, 'State must be 2 characters'),
  businessZip: zipCodeSchema,
  
  // Contact Information
  contactName: z.string()
    .min(1, 'Contact name is required')
    .max(100, 'Contact name too long'),
  contactEmail: emailSchema,
  contactPhone: phoneSchema,
  contactSSN: ssnSchema,
  
  // Entity Type
  entityType: z.string()
    .min(1, 'Entity type is required')
    .max(50, 'Entity type too long'),
  
  // Optional fields based on entity type
  llcMembers: z.number().min(1).max(100).optional(),
  incorporationState: z.string().max(2).optional(),
  
  // Business details
  businessPurpose: z.string()
    .min(1, 'Business purpose is required')
    .max(500, 'Business purpose too long'),
  startDate: z.string().optional(),
  
  // Agreement
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
})

// Priority Contact Schema
export const priorityContactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name too long'),
  email: emailSchema,
  phone: phoneSchema,
  message: z.string()
    .min(1, 'Message is required')
    .max(1000, 'Message too long'),
  entityType: z.string()
    .min(1, 'Entity type is required')
    .max(50, 'Entity type too long'),
})

// Generic validation helper
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors
        .map(err => `${err.path.join('.')}: ${err.message}`)
        .join(', ')
      return { success: false, error: errorMessage }
    }
    return { success: false, error: 'Validation failed' }
  }
}

// Sanitization helpers
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000) // Limit length
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

export function sanitizePhone(phone: string): string {
  // Remove all non-digit characters except spaces, hyphens, and parentheses
  return phone.replace(/[^0-9\s()-]/g, '').trim()
}