import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Portal | Urban Gloss",
  description:
    "Instant SMS OTP sign-in for Urban Gloss clients. View your hair appointments, styling records, and consultations on Wicklow Street.",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
