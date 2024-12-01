"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'
import { Avatar } from "@nextui-org/react"

interface Post {
  id: number
  image: string
  caption: string
  likes: number
}

const posts: Post[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6707692/pexels-photo-6707692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "La clave no es comer menos, es comer mejor",
    likes: 124,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6072381/pexels-photo-6072381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Transformarse es posible cuando sabes cómo",
    likes: 89,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6544496/pexels-photo-6544496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Escucha a tu cuerpo, déjanos ayudarte a entenderlo",
    likes: 156,
  },
]

const SocialPost = ({ post }: { post: Post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 max-w-md mx-auto"
    >
      {/* Header */}
      <div className="flex items-center p-4">
        <Avatar
            src="/logo.png"
            alt="TrinUp Logo"
            size="md"
            className="mr-2"
        />
        <span className="ml-3 font-semibold">TrinUp_Oficial</span>
        <button className="ml-auto">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            •••
          </motion.div>
        </button>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
          <p className="text-white text-xl font-bold">{post.caption}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#25d367] hover:text-[#25d367]/80"
            >
              <Heart className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#25d367] hover:text-[#25d367]/80"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#25d367] hover:text-[#25d367]/80"
            >
              <Share2 className="h-6 w-6" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#25d367] hover:text-[#25d367]/80"
          >
            <Bookmark className="h-6 w-6" />
          </motion.button>
        </div>
        <p className="font-semibold">{post.likes} likes</p>
      </div>
    </motion.div>
  )
}

export default function SocialFeed() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-8 overflow-x-auto"
      >
        {posts.map((post) => (
          <SocialPost key={post.id} post={post} />
        ))}
      </motion.div>
    </div>
  )
}
