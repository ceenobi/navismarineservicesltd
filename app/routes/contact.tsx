import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useFetcher } from "react-router";
import type { z } from "zod/v4";
import {
  RiLoaderLine,
  RiMailLine,
  RiMessageLine,
  RiSendPlane2Line,
  RiUserLine,
} from "@remixicon/react";
import Logo from "~/components/ui/logo";
import { Button } from "~/components/ui/button";
import { contactSchema } from "~/lib/schema";
import { seoMeta, SITE_DESCRIPTION } from "~/lib/seo";
import { type E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { Route } from "./+types/contact";
import { contactEmailTemplate } from "~/components/ui/email-template";
type contactSchemaType = z.infer<typeof contactSchema>;

export function meta({}: Route.MetaArgs) {
  return seoMeta({
    title:
      "Contact Navis Marine Services Ltd | Ship Agency & Maritime Solutions in Nigeria",
    description: SITE_DESCRIPTION,
    path: "/contact",
  });
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const parsed = contactSchema.safeParse({
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { success: false, message: "Please fix the errors and try again." };
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  if (!brevoApiKey) {
    return { success: false, message: "Brevo API key not configured." };
  }

  const inquiry = parsed.data;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Navis Marine Services Ltd",
          email: "info@navismarineservicesltd.com",
        },
        replyTo: { email: inquiry.email, name: inquiry.fullname },
        to: [{ email: "info@navismarineservicesltd.com", name: "Navis Marine Services Ltd" }],
        subject: `New Contact Inquiry from ${inquiry.fullname}`,
        htmlContent: contactEmailTemplate(inquiry),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Brevo Delivery Failed: ${detail}`);
    }

    return {
      success: true,
      message:
        "Message sent successfully. We'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again.",
    };
  }
}

const inputClassName =
  "w-full rounded-md border border-zinc-200 bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-deepBlue focus:ring-2 focus:ring-deepBlue/20 focus:outline-none dark:border-muted-foreground/30 dark:text-mainWhite dark:placeholder:text-muted-foreground";

const inputErrorClassName =
  "w-full rounded-md border border-destructive bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-destructive focus:ring-2 focus:ring-destructive/20 focus:outline-none dark:border-destructive dark:text-mainWhite dark:placeholder:text-muted-foreground";

export default function Contact() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state === "submitting";
  const submitResult = fetcher.data;

  const watchedValues = watch();
  const requiredFilled = Boolean(
    watchedValues.fullname?.trim() &&
      watchedValues.email?.trim() &&
      watchedValues.message?.trim(),
  );
  const canSubmit = isValid && requiredFilled && !isSubmitting;

  const onFormSubmit: SubmitHandler<contactSchemaType> = (data) => {
    fetcher.submit(data, {
      method: "post",
      action: "/contact",
    });
    reset();
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-6 sticky top-0 overflow-hidden h-[30svh] md:min-h-svh">
          <img
            src="https://res.cloudinary.com/ceenobi/image/upload/ar_3:4,c_auto/e_enhance/f_webp/q_auto:best/clientproject/navis/william-william-hlG6OlY0WBo-unsplash_tbt8en.jpg"
            alt="Vessel ship image"
            width="427"
            height="542"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 relative z-30 bg-white flex items-center">
          <div className="w-full max-w-125 mx-auto py-10 px-4 md:px-8">
            <Logo classname="w-34" />
            <div className="mt-10 mb-6 space-y-4">
              <h1 className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] leading-tight text-balance">
                Get in touch with us
              </h1>
              <p className="text-lightGray text-base">
                Reach out for ship agency, marine consultancy, HSSEQ, marine
                procurement and integrated maritime solutions.
              </p>
            </div>
            {submitResult && (
              <p
                role="status"
                aria-live="polite"
                className={
                  submitResult.success
                    ? "text-sm text-deepBlue dark:text-mainWhite"
                    : "text-sm text-destructive"
                }
              >
                {submitResult.message}
              </p>
            )}
            <fetcher.Form
              onSubmit={handleSubmit(onFormSubmit)}
              className="space-y-3"
              noValidate
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-deepBlue dark:text-mainWhite"
                >
                  Full Name
                </label>
                <div className="relative">
                  <RiUserLine
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="fullname"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    {...register("fullname")}
                    aria-invalid={Boolean(errors.fullname)}
                    aria-describedby={
                      errors.fullname ? "fullname-error" : undefined
                    }
                    className={`${errors.fullname ? inputErrorClassName : inputClassName} pl-10`}
                  />
                </div>
                {errors.fullname && (
                  <p
                    id="fullname-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-deepBlue dark:text-mainWhite"
                >
                  Email
                </label>
                <div className="relative">
                  <RiMailLine
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    spellCheck={false}
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${errors.email ? inputErrorClassName : inputClassName} pl-10`}
                  />
                </div>
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-deepBlue dark:text-mainWhite"
                >
                  Phone Number <span className="text-muted-foreground">(optional)</span>
                </label>
                <div className="relative">
                  <RiUserLine className="hidden" aria-hidden="true" />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        id="phone"
                        defaultCountry="NG"
                        placeholder="Phone Number"
                        international
                        withCountryCallingCode
                        autoComplete="tel"
                        value={value as E164Number | undefined}
                        onChange={onChange}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`${errors.phone ? inputErrorClassName : inputClassName} [&>input]:py-1 [&>input]:pl-3 [&>input]:text-sm`}
                      />
                    )}
                  />
                </div>
                {errors.phone && (
                  <p
                    id="phone-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-deepBlue dark:text-mainWhite"
                >
                  Message
                </label>
                <div className="relative">
                  <RiMessageLine
                    className="pointer-events-none absolute left-3.5 top-4 size-4.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    {...register("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${errors.message ? inputErrorClassName : inputClassName} resize-none pl-10`}
                  />
                </div>
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full bg-deepBlue text-mainWhite hover:bg-deepBlue/90 dark:bg-mainWhite dark:text-deepBlue dark:hover:bg-mainWhite/90"
                disabled={!canSubmit}
              >
                {isSubmitting ? (
                  <RiLoaderLine className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <RiSendPlane2Line className="size-4" aria-hidden="true" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </>
  );
}