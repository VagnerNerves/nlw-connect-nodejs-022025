import postgres from 'postgres'
import { env } from '../env'

import { drizzle } from 'drizzle-orm/postgres-js'

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg)
