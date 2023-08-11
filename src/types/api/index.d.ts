import { ApiKey } from '@prisma/client';
import { ZodIssue } from 'zod';

// Zod is a TypeScript-first schema declaration and validation library.
// Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations.

export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}