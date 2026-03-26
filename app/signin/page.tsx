"use client"

import { useState } from 'react';
import { Info, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AtlassianLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!isLogin) {
      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      localStorage.setItem('user', JSON.stringify({ name, email, password }));
      alert("Sign up successful! Please log in.");
      setIsLogin(true);
      setPassword('');
      setConfirmPassword('');
    } else {
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
        if (email === storedEmail && password === storedPassword) {
          router.push('/');
        } else {
          alert('Invalid email or password.');
        }
      } else {
        alert('No user found for this email. Please create an account.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Back Link */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity no-underline">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo shadow-lg shadow-brand-gradientFrom/20" />
            <span className="text-2xl font-bold tracking-tight text-neutral-900">Minimalistic Connect</span>
          </Link>
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-2 text-neutral-500">
            {isLogin ? "Enter your credentials to access your dashboard" : "Join our simplified monitoring platform today"}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-neutral-900"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-neutral-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                {isLogin ? "Password" : "Create Password"}
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-neutral-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-neutral-900"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-brand-primary border-neutral-300 rounded focus:ring-brand-primary"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-neutral-600">Remember me</label>
                </div>
                <a href="#" className="text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3 px-4 rounded-xl font-semibold hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-200 transition-all"
            >
              {isLogin ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-sm">
            <span className="text-neutral-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              type="button" 
              onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); }} 
              className="ml-1.5 font-bold text-brand-primary hover:text-brand-primary/80 transition-colors"
            >
              {isLogin ? "Sign up for free" : "Log in now"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-neutral-400 text-xs">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-neutral-600">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-600">Terms of Service</a>
            <a href="#" className="hover:text-neutral-600">Support</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Minimalistic Connect. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}