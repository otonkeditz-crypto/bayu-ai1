import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Smile } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  return (
    <div className="border-t border-gray-200/50 bg-white/90 backdrop-blur-xl p-6">
      <form onSubmit={handleSubmit} className="flex items-end space-x-4">
        {/* Additional Actions */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2.5 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2.5 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200"
            title="Add emoji"
          >
            <Smile className="w-5 h-5" />
          </button>
        </div>

        {/* Input Field */}
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message to Bayu AES 265..."
            disabled={disabled}
            className="w-full px-6 py-4 bg-gray-50/80 border border-gray-200/50 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-sm max-h-[120px] placeholder-gray-500"
            rows={1}
          />
          
          {/* Character count */}
          {message.length > 0 && (
            <div className="absolute bottom-2 right-4 text-xs text-gray-400">
              {message.length}
            </div>
          )}
        </div>

        {/* Voice Input */}
        <button
          type="button"
          className="p-3 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-2xl transition-all duration-200"
          title="Voice input"
        >
          <Mic className="w-5 h-5" />
        </button>
        
        {/* Send Button */}
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Quick Actions */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors">
          Explain this concept
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors">
          Write code
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors">
          Brainstorm ideas
        </button>
      </div>
    </div>
  );
};