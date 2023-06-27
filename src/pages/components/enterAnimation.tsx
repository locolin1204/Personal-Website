import React from "react";
import { motion } from "framer-motion";

export default EnterAnimation = ({ children, index = 0, delay = 0, duration = 1, isDiv = true, offsetY = 50 }) => {
    if (isDiv) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: duration,
                    delay: delay ? delay * index : 0,
                }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: offsetY },
                }}
            >
                {children}
            </motion.div>
        )   
    } else {
       return (<motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: duration,
                    delay: delay ? delay * index : 0,
                }}
                variants={{
                    visible: { opacity: 1 , y: 0},
                    hidden: { opacity: 0, y: offsetY },
                }}
            >
                {children}
            </motion.span>)
    }
};
