import { animations } from "@/styles/animations";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatorProps {
  children: ReactNode
}

export default function Animator({ children }: AnimatorProps) {
  return (
    <motion.div {...animations.fade} style={{ height: '100%' }}>
      {children}
    </motion.div>
  )
}