import type { Message } from "ai"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${isUser ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}
      >
        <div className="text-sm">{message.content}</div>
      </div>
    </div>
  )
}
