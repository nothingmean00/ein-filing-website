"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ChatWindow from "./chat-window"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        

        <div className="relative">
          {/* Pulsing ring for attention */}
          {!isOpen && (
            <div className="absolute inset-0 h-14 w-14 rounded-full bg-primary/30 animate-ping"></div>
          )}
          
          {/* Notification badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}

          <Button
            onClick={toggleChat}
            className={`relative h-14 w-14 rounded-full shadow-lg transition-all duration-200 ${
              isOpen 
                ? "bg-gray-600 hover:bg-gray-700" 
                : "bg-primary hover:bg-primary/90 hover:scale-105"
            }`}
            aria-label={isOpen ? "Close chat" : "Get EIN filing help"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
