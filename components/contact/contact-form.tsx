"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const formTypes = [
  { value: "quote", label: "Request Quote" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "integration", label: "Integration Discussion" },
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") ?? "quote";
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    }
  }, [state.success]);

  return (
    <form id="contact-form" action={formAction} className="space-y-6">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Inquiry type</legend>
        <div className="flex flex-wrap gap-4">
          {formTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="formType"
                value={type.value}
                defaultChecked={defaultType === type.value}
                className="accent-[var(--brand-accent)]"
              />
              {type.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
          {state.errors?.name && (
            <p className="text-xs text-destructive">{state.errors.name[0]}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
          {state.errors?.email && (
            <p className="text-xs text-destructive">{state.errors.email[0]}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" required />
          {state.errors?.company && (
            <p className="text-xs text-destructive">{state.errors.company[0]}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role / title</Label>
          <Input id="role" name="role" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="productInterest">Product or vertical interest</Label>
          <Input
            id="productInterest"
            name="productInterest"
            placeholder="e.g., H8L 2MP module, toll lane integration"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your deployment, volume, timeline, and integration requirements."
        />
        {state.errors?.message && (
          <p className="text-xs text-destructive">{state.errors.message[0]}</p>
        )}
      </div>

      {state.message && (
        <p
          role="status"
          className={
            state.success
              ? "rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200"
              : "rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          }
        >
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="min-w-[160px]">
        {pending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}
