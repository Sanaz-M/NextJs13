import { ApiKey } from '@prisma/client';
import { ZodIssue } from 'zod';

//Zod is a TypeScript-first schema declaration and validation library.

export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}