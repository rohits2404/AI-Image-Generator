import React from 'react';
import { motion } from 'framer-motion';

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) => (
    <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    >
        <div className="flex items-center justify-between mb-2">
            <label htmlFor={name} className="block text-sm font-medium text-gray-800">
                {labelName}
            </label>
            {isSurpriseMe && (
                <motion.button
                type="button"
                onClick={handleSurpriseMe}
                className="font-semibold text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    Surprise Me
                </motion.button>
            )}
        </div>
        <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none block w-full p-3 shadow-inner hover:shadow-lg transition-all duration-300"
        />
    </motion.div>
);

export default FormField;