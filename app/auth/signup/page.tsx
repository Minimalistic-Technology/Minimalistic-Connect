"use client"
import Link from 'next/link'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query' // <-- Import
import api from '@/lib/api' // <-- Import our Axios instance
import { AxiosError } from 'axios' // <-- Import for error handling

// Define the shape of the data the mutation will receive
interface SignUpData {
  name: string;
  email: string;
  password: string;
}

// Define the shape of a backend error
interface ApiError {
  message: string;
}

export default function SignUpPage() {
  const router = useRouter();
  
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  
  // State for frontend validation errors
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  // === TanStack Query Mutation ===
  const { mutate: signUp, isPending, error } = useMutation({
    mutationFn: (newUserData: SignUpData) => {
      // This function now handles the API call
      return api.post('/api/auth/signup', newUserData);
    },
    onSuccess: () => {
      // On success, redirect to the verify page
      router.push('/auth/verify');
    },
    onError: (err) => {
      // 'onError' is handled by 'error' state, but you can log it
      console.error('Signup mutation error:', err);
    }
  });
  // === End of Mutation ===

  // Get the API error message from the mutation state
  const apiError = error ? (error as AxiosError<ApiError>)?.response?.data?.message || "An unknown error occurred." : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Clear all errors
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setTermsError('');

    // --- Frontend Validation ---
    let hasError = false;
    if (!name) {
      setNameError('Full name is required');
      hasError = true;
    }
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      hasError = true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }
    if (!terms) {
      setTermsError('You must accept the terms and conditions');
      hasError = true;
    }
    if (hasError) {
      return;
    }
    // --- End of Frontend Validation ---

    // All good? Call the mutation!
    signUp({ name, email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo flex-shrink-0"
          aria-hidden
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Minimalistic Connect</h1>
      </div>
      <div className="max-w-md w-full space-y-8 p-8 card">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div>
          <h2 className="mt-6 text-3xl font-bold text-center text-foreground">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-primary hover:text-primary/90">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary focus:border-primary text-foreground bg-background ${nameError ? 'border-red-500' : ''}`}
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-error text-xs mt-1">{nameError}</p>}
            </div>
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
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary focus:border-primary text-foreground bg-background ${passwordError ? 'border-red-500' : ''}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-error text-xs mt-1">{passwordError}</p>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary focus:border-primary text-foreground bg-background ${confirmPasswordError ? 'border-red-500' : ''}`}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && <p className="text-error text-xs mt-1">{confirmPasswordError}</p>}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className={`h-4 w-4 text-primary focus:ring-primary border-border rounded bg-background ${termsError ? 'border-red-500' : ''}`}
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
              I agree to the{' '}
              <Link href="#" className="font-medium text-primary hover:text-primary/90">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="font-medium text-primary hover:text-primary/90">
                Privacy Policy
              </Link>
            </label>
            {termsError && <p className="text-error text-xs mt-1">{termsError}</p>}
          </div>

          {/* Display API Error from mutation */}
          {apiError && <p className="text-error text-sm text-center">{apiError}</p>}

          <div>
            <Button type="submit" className="w-full justify-center" disabled={isPending}>
              {isPending ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>
        
      </div>
    </div>
  )
}