"use client"
import Link from 'next/link'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query' 
import api from '@/lib/api' 
import { AxiosError } from 'axios'

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  tokens: {
    access: { token: string };
    refresh: { token: string };
  };
}

interface ApiError {
  message: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { mutate: login, isPending, error } = useMutation<LoginResponse, AxiosError<ApiError>, LoginData>({
    mutationFn: (credentials: LoginData) => {
      return api.post('/api/auth/login', credentials).then(res => res.data);
    },
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.tokens.access.token);
      localStorage.setItem('refreshToken', data.tokens.refresh.token);
        
      router.push('/');
    },
    onError: (err) => {
      console.error('Login mutation error:', err);
    }
  });

  const apiError = error ? error.response?.data?.message || "Invalid email or password." : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    let hasError = false;
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
    if (hasError) {
      return;
    }

    login({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-4">
      <div className="absolute top-5 right-7">
      
      </div>
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo flex-shrink-0"
          aria-hidden
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Minimalistic Connect</h1>
      </div>
      <div className="max-w-md w-full space-y-8 p-8 card">
        <div className="flex justify-end">
          <ThemeToggle/>
        </div>
        <div>
          <h2 className="mt-6 text-3xl font-bold text-center text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Or{' '}
            <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
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
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary focus:border-primary text-foreground bg-background ${passwordError ? 'border-red-500' : ''}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-error text-xs mt-1">{passwordError}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded bg-background"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/forgot-password" className="font-medium text-primary hover:text-primary/90">
                Forgot your password?
              </Link>
            </div>
          </div>

          {apiError && <p className="text-error text-sm text-center">{apiError}</p>}

          <div>
            <Button type="submit" className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white" disabled={isPending}>
              {isPending ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>

        </form>
      </div>
    </div>
  )
}