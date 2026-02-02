import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useToast } from '@/components/ui/use-toast';

// This context has been stripped of Supabase integration as requested.
// It remains as a shell to prevent import errors in the rest of the application.

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();

  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dummy implementations
  const signUp = useCallback(async (email, password, options) => {
    console.log("Supabase Auth removed: signUp called");
    return { error: { message: "Authentication is currently disabled." } };
  }, []);

  const signIn = useCallback(async (email, password) => {
    console.log("Supabase Auth removed: signIn called");
    return { error: { message: "Authentication is currently disabled." } };
  }, []);

  const signOut = useCallback(async () => {
    console.log("Supabase Auth removed: signOut called");
    return { error: null };
  }, []);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  }), [user, session, loading, signUp, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};