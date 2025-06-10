import React from 'react'
import { Home, Settings, Video, Heart, MessageCircle } from 'lucide-react'

function IconsSidebar() {
  return (
    <div className="space-y-6 mt-4">
      <div className="flex items-center p-4 rounded-lg space-x-3 cursor-pointer hover:text-white hover:bg-gray-900 text-gray-400 transition-colors">
        <Home className="w-5 h-5" />
        <span className="text-sm font-medium">Inicio</span>
      </div>

      <div className="flex items-center p-4 rounded-lg space-x-3 cursor-pointer hover:text-white hover:bg-gray-900 text-gray-400 transition-colors">
        <Video className="w-5 h-5" />
        <span className="text-sm font-medium">Reels</span>
      </div>

      <div className="flex items-center p-4 rounded-lg space-x-3 cursor-pointer hover:text-white hover:bg-gray-900 text-gray-400 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Mensajes</span>
      </div>

      <div className="flex items-center p-4 rounded-lg space-x-3 cursor-pointer hover:text-white hover:bg-gray-900 text-gray-400 transition-colors">
        <Heart className="w-5 h-5" />
        <span className="text-sm font-medium">Notificaciones</span>
      </div>

      <div className="flex items-center p-4 rounded-lg space-x-3 cursor-pointer hover:text-white hover:bg-gray-900 text-gray-400 transition-colors">
        <Settings className="w-5 h-5" />
        <span className="text-sm font-medium">Ajustes</span>
      </div>
    </div>
  )
}

export default IconsSidebar
