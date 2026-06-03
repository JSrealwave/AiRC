"use server";

import { contactFormSchema } from "@/lib/validations";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    formType: formData.get("formType"),
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role") || undefined,
    phone: formData.get("phone") || undefined,
    message: formData.get("message"),
    productInterest: formData.get("productInterest") || undefined,
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Placeholder: wire to Resend, HubSpot, or internal API via CONTACT_WEBHOOK_URL
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      return {
        success: false,
        message: "Submission failed. Please email us directly.",
      };
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[Contact form]", parsed.data);
  }

  return {
    success: true,
    message:
      "Thank you. Our team will respond within one business day. For urgent integration questions, note your timeline in follow-up correspondence.",
  };
}
