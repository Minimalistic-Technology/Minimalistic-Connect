"use client"
import Link from 'next/link'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');

    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

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
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary focus:border-primary text-foreground bg-background ${emailError ? 'border-red-500' : ''}`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-error text-xs mt-1">{emailError}</p>}
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
              {isSubmitting ? 'Sending reset link...' : 'Send reset link'}
            </Button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link href="/auth/login" className="font-medium text-primary hover:text-primary/90">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
