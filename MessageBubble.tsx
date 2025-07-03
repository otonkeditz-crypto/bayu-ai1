import React from 'react';
import { Message } from '../types/chat';
import { Sparkles, User, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { text, isUser, timestamp } = message;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`flex items-start space-x-4 ${isUser ? 'flex-row-reverse space-x-reverse' : ''} animate-fadeIn group`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
        isUser 
          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
          : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Sparkles className="w-5 h-5 text-white" />
        )}
      </div>
      
      <div className={`max-w-[75%] ${isUser ? 'text-right' : 'text-left'}`}>
        <div className={`relative inline-block p-4 rounded-3xl shadow-lg backdrop-blur-sm ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' 
            : 'bg-white/90 text-gray-800 border border-gray-200/50'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
          
          {/* Message Actions */}
          {!isUser && (
            <div className="absolute -bottom-2 right-4 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={copyToClipboard}
                className="p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                title="Copy message"
              >
                <Copy className="w-3 h-3 text-gray-600" />
              </button>
              <button
                className="p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                title="Like"
              >
                <ThumbsUp className="w-3 h-3 text-gray-600" />
              </button>
              <button
                className="p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                title="Dislike"
              >
                <ThumbsDown className="w-3 h-3 text-gray-600" />
              </button>
            </div>
          )}
        </div>
        
        <div className={`text-xs text-gray-500 mt-2 px-2 ${isUser ? 'text-right' : 'text-left'}`}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};