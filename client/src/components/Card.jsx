import React from 'react';
import { motion } from 'framer-motion';
import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
    
    <motion.div
    className="rounded-2xl group relative shadow-lg hover:shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 transition-all duration-300"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02 }}
    >
        <img
        className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
        src={photo}
        alt={prompt}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent m-2 p-4 rounded-xl transition-all duration-300">
            <p className="text-white text-sm overflow-y-auto prompt leading-relaxed">
                {prompt}
            </p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex justify-center items-center text-white text-xs font-bold shadow-md">
                        {name[0]}
                    </div>
                    <p className="text-white text-sm font-medium drop-shadow-md">{name}</p>
                </div>
                <motion.button
                type="button"
                onClick={() => downloadImage(_id, photo)}
                className="outline-none bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-md transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                    <img src={download} alt="download" className="w-5 h-5 object-contain invert" />
                </motion.button>
            </div>
        </div>
    </motion.div>
);

export default Card;