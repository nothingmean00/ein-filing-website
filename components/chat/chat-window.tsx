"use client"

import { useRef, useEffect } from "react"
import { Send, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ChatMessage from "./chat-message"
import { motion, AnimatePresence } from "framer-motion"
import { useChat } from "ai/react"

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Welcome! I'm your business consultant specializing in EIN filing. I help entrepreneurs like you get their businesses properly registered and compliant. What's your biggest question about getting your EIN? Are you looking to file today?",
      },
    ],
  })

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  // Suggested questions with sales psychology
  const suggestedQuestions = [
    "How fast can I get my EIN?",
    "What happens if I file incorrectly?",
    "Do I need professional help?",
    "Can I get same-day processing?",
  ]

  const handleSuggestedQuestion = (question: string) => {
    // Use the append function to programmatically send a message
    append({
      role: "user",
      content: question,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-0 right-0 z-50 w-full max-w-md md:bottom-24 md:right-6 md:rounded-lg md:w-full"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-[70vh] max-h-[90vh] flex-col overflow-hidden border border-gray-200 bg-white shadow-xl md:rounded-lg md:h-[500px] md:max-h-[80vh]">
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-primary p-3 text-white md:p-4">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white">Business Consultant</h3>
                <p className="text-xs text-white/90 md:text-sm">Same-Day Filing Available</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 rounded-full text-white hover:bg-primary-foreground/10"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Suggested questions */}
            {messages.length <= 2 && (
              <div className="border-t border-gray-200 bg-gray-50 p-2 md:p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-gray-500 md:text-sm">Quick questions:</p>
                  <div className="flex items-center text-xs text-green-600">
                    <div className="animate-pulse h-2 w-2 bg-green-500 rounded-full mr-1"></div>
                    <span className="font-medium">Online Now</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="rounded-full bg-white px-2 py-1 text-xs text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 hover:ring-blue-300 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer md:px-3"
                      disabled={isLoading}
                    >
                      {question}
                    </button>
                  ))}
                </div>

              </div>
            )}

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 md:p-4">
              <div className="flex items-center space-x-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 text-sm md:text-base"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
