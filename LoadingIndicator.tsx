import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-3 py-6">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center animate-pulse">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl animate-ping opacity-20"></div>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="flex space-x-1 mb-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-sm text-gray-600 font-medium">Bayu AES 265 is thinking...</span>
        <span className="text-xs text-gray-400">Generating intelligent response</span>
      </div>
    </div>
  );
};