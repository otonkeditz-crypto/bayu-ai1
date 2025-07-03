import React from 'react';
import { LogOut, Trash2, Sparkles, User, Settings } from 'lucide-react';
import { User as UserType } from '../types/auth';

interface ChatHeaderProps {
  onClearChat: () => void;
  onLogout: () => void;
  messageCount: number;
  user: UserType;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  onClearChat, 
  onLogout, 
  messageCount, 
  user 
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Bayu AES 265
            </h1>
            <p className="text-sm text-gray-300">Asisten AI yang dibuat oleh Bayu Dev</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-white/10 rounded-2xl px-4 py-2 backdrop-blur-sm">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full border-2 border-white/20"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-gray-300">{user.email}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {messageCount > 0 && (
              <button
                onClick={onClearChat}
                className="p-2.5 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 group"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            )}
            
            <button
              onClick={onLogout}
              className="p-2.5 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all duration-200 group"
              title="Logout"
            >
              <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};