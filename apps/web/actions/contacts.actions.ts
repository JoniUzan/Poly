"use server";

import { revalidatePath } from "next/cache";
import { contactService } from "@poly/api/services/contact.service";
import {
  createContactSchema,
  updateContactSchema,
} from "@poly/api/validation/contact.schema";

export async function createContact(formData: FormData) {
  try {
    // Extract and validate form data
    const rawData = {
      email: formData.get("email"),
      name: formData.get("name"),
      phone: formData.get("phone") || undefined,
      company: formData.get("company") || undefined,
    };

    const validatedData = createContactSchema.parse(rawData);

    // Create contact via service
    const contact = await contactService.create(validatedData);

    // Revalidate the contacts page cache
    revalidatePath("/contacts");

    return { success: true, contact };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updateContact(id: number, formData: FormData) {
  try {
    const rawData = {
      email: formData.get("email") || undefined,
      name: formData.get("name") || undefined,
      phone: formData.get("phone") || undefined,
      company: formData.get("company") || undefined,
    };

    const validatedData = updateContactSchema.parse(rawData);

    const contact = await contactService.update(id, validatedData);

    revalidatePath("/contacts");
    revalidatePath(`/contacts/${id}`);

    return { success: true, contact };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function deleteContact(id: number) {
  try {
    await contactService.delete(id);

    revalidatePath("/contacts");

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}
