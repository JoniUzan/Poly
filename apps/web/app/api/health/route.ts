import { prisma } from '@poly/database'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test database connection with a simple query
    await prisma.contact.count()

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected',
      environment: process.env.NODE_ENV,
    })
  } catch (error: unknown) {
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
