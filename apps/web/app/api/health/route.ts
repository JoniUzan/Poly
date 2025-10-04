import { prisma } from '@poly/database'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected',
      environment: process.env.NODE_ENV,
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        database: 'disconnected',
      },
      { status: 500 }
    )
  }
}
