import React from 'react';
import { MessageCircle, Zap, Brain, Lightbulb, Sparkles, Code, BookOpen } from 'lucide-react';

const suggestions = [
  {
    icon: Brain,
    title: "Ask me anything",
    subtitle: "I can help with questions, explanations, and discussions",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Code assistance",
    subtitle: "Get help with programming, debugging, and best practices",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Creative ideas",
    subtitle: "Brainstorm solutions, stories, or creative projects",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: BookOpen,
    title: "Learning support",
    subtitle: "Explanations, tutorials, and educational content",
    gradient: "from-green-500 to-emerald-500"
  }
];

export const EmptyState: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Main Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3">
          Welcome to Bayu AES 265
        </h2>
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          Your intelligent assistant powered by advanced AI technology. 
          <br />Start a conversation and discover what we can accomplish together.
        </p>
        
        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-left hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${suggestion.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <suggestion.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-2 group-hover:text-gray-900">
                    {suggestion.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {suggestion.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Always Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Fast Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </div>
  );
};