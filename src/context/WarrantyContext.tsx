import React, { createContext, useState } from 'react';
import axios from 'axios';

interface WarrantyClaim {
  email: string;
  name: string;
  phoneNumber: string;
  orderNumber: string;
  returnAddress: string;
  brand: string;
  problem: string;
}

interface WarrantyContextType {
  submitClaim: (claim: WarrantyClaim) => Promise<string>;
  getBrandNotice: (brand: string) => string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const WarrantyContext = createContext<WarrantyContextType>({
  submitClaim: async () => '',
  getBrandNotice: () => '',
});

export const WarrantyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const submitClaim = async (claim: WarrantyClaim): Promise<string> => {
    try {
      const response = await axios.post(`${API_URL}/api/claims`, claim);
      return response.data.claimNumber;
    } catch (error) {
      console.error('Error submitting claim:', error);
      throw new Error('Failed to submit claim');
    }
  };

  // ... rest of the code remains the same
};