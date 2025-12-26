export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  sentAt: string
  read: boolean
}

export interface Conversation {
  id: string
  participantId: string
  participantName: string
  lastMessage: string
  lastMessageAt: string
  unreadCount: number
}
