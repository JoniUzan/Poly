import { prisma } from '@poly/database'
import type { CreateContactInput, UpdateContactInput } from '../validation/contact.schema'

export const contactService = {
  /**
   * Creates a new contact in the database
   * @param data - Contact creation data with email, name, and optional phone/company
   * @returns Created contact with generated ID and timestamps
   * @throws Error if email already exists (unique constraint violation)
   */
  async create(data: CreateContactInput) {
    return prisma.contact.create({ data })
  },

  /**
   * Retrieves all contacts from the database
   * @returns Array of contacts ordered by creation date (newest first)
   */
  async findAll() {
    return prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  /**
   * Finds a contact by ID
   * @param id - Contact ID to search for
   * @returns Contact if found
   * @throws Error if contact with the given ID does not exist
   */
  async findById(id: number) {
    const contact = await prisma.contact.findUnique({
      where: { id },
    })

    if (!contact) {
      throw new Error(`Contact with ID ${id} not found`)
    }

    return contact
  },

  /**
   * Updates an existing contact
   * @param id - Contact ID to update
   * @param data - Partial contact data to update
   * @returns Updated contact
   * @throws Error if contact not found or email already exists
   */
  async update(id: number, data: UpdateContactInput) {
    // Check if contact exists first
    await this.findById(id)

    return prisma.contact.update({
      where: { id },
      data,
    })
  },

  /**
   * Deletes a contact from the database
   * @param id - Contact ID to delete
   * @returns Deleted contact
   * @throws Error if contact not found
   */
  async delete(id: number) {
    // Check if contact exists first
    await this.findById(id)

    return prisma.contact.delete({
      where: { id },
    })
  },

  /**
   * Returns the total number of contacts in the database
   * @returns Contact count
   */
  async count() {
    return prisma.contact.count()
  },
}
