import { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

// export const metadata: Metadata = {
//   title: 'Verify Email | Minimalistic Connect',
//   description: 'Verify your email to continue',
// }

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="absolute top-5 right-7">
        <ThemeToggle />
      </div>
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo flex-shrink-0"
          aria-hidden
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Minimalistic Connect</h1>
      </div>
      <div className="max-w-md w-full space-y-8 p-8 card">
        <div>
          <h2 className="mt-6 text-3xl font-bold text-center text-foreground">
            Verify your email
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            We've sent an email to your email address. Please click the link in the email to verify your account.
          </p>
        </div>
        <div className="text-sm text-center">
          <Link href="/auth/login" className="font-medium text-primary hover:text-primary/90">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
