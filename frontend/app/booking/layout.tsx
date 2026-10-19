import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Hair Appointment | Urban Gloss",
  description:
    "Reserve your precision haircut, French balayage, or restorative hair therapy at Urban Gloss on Wicklow Street, Dublin. Instant 24/7 online booking.",
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
