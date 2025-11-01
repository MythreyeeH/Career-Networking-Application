// src/components/common/ProtectedRoute.jsx (CONCEPTUAL FIX)
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute() {
    // Crucial: Fetching both isAuthenticated and loading state
    const { isAuthenticated, loading } = useAuth(); 

    // 1. If auth state is still loading, render nothing/a spinner
    if (loading) {
        return <div style={{padding: '20px'}}>Loading application...</div>;
    }

    // 2. If NOT authenticated, redirect to the login page
    // This is where your default path ("/") is correctly intercepted.
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // <-- Forces redirection
    }

    // 3. If authenticated, render the protected child route (FeedPage, ProfilePage, etc.)
    return <Outlet />;
}

export default ProtectedRoute;