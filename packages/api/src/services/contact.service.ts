import { prisma } from '@poly/database'
import type { CreateContactInput, UpdateContactInput } from '../validation/contact.schema'

export const contactService = {
  async create(data: CreateContactInput) {
    return prisma.contact.create({ data })
  },

  async findAll() {
    return prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  async findById(id: number) {
    return prisma.contact.findUnique({
      where: { id },
    })
  },

  async update(id: number, data: UpdateContactInput) {
    return prisma.contact.update({
      where: { id },
      data,
    })
  },

  async delete(id: number) {
    return prisma.contact.delete({
      where: { id },
    })
  },

  async count() {
    return prisma.contact.count()
  },
}
