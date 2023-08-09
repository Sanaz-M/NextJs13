import { PrismaClient } from '@prisma/client'

//extends the global type (which represents the global namespace in Node.js) to include a new property named cachedPrisma.
declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}


{/*This section checks if the app is in production mode or development/testing mode based on the NODE_ENV environment variable.
This behavior is set up because in a development environment (especially with tools like Next.js), 
your server code can be hot-reloaded frequently, leading to many instances of PrismaClient being created 
if you don't cache it. In a production environment, the code typically initializes once, 
so you don't have the same concern about excessive instances. */}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma