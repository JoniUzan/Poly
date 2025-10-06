import { prisma, Prisma } from '@poly/database'
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
    // Handle Prisma-specific errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        {
          status: 'error',
          message: error.message,
          code: error.code,
          database: 'disconnected',
        },
        { status: 500 }
      )
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Failed to initialize database connection',
          details: error.message,
          database: 'disconnected',
        },
        { status: 500 }
      )
    }

    // Generic error handling
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
