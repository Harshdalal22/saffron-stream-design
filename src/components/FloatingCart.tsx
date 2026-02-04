import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Minus, Plus, Send } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

export function FloatingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart();

    const handleWhatsAppOrder = () => {
        if (items.length === 0) return;

        // Format the order message
        let message = '*🛒 New Order from Siya Ram Sweets*\n\n';
        message += '*Order Details:*\n';
        message += '━━━━━━━━━━━━━━━━\n\n';

        items.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Weight: ${item.weight}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
        });

        message += '━━━━━━━━━━━━━━━━\n';
        message += `*Total Items:* ${getTotalItems()}\n`;
        message += `*Total Amount:* ₹${getTotalPrice().toLocaleString('en-IN')}\n\n`;
        message += '_Please confirm the order and delivery details._';

        // Encode the message for WhatsApp
        const encodedMessage = encodeURIComponent(message);

        // Replace with your WhatsApp business number (with country code, no + or spaces)
        const phoneNumber = '919509302669';

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Optionally clear cart after sending
        // clearCart();
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full shadow-2xl flex items-center justify-center"
            >
                <ShoppingCart size={24} />
                {getTotalItems() > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
                    >
                        {getTotalItems()}
                    </motion.span>
                )}
            </motion.button>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                        />

                        {/* Cart Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-4 border-b bg-gradient-to-r from-orange-600 to-red-600 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold">Your Cart</h2>
                                        <p className="text-sm text-white/80">{getTotalItems()} items</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-4">
                                {items.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <ShoppingCart size={64} className="text-gray-300 mb-4" />
                                        <p className="text-gray-500 text-lg font-medium">Your cart is empty</p>
                                        <p className="text-gray-400 text-sm mt-2">Add some delicious sweets!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <motion.div
                                                key={`${item.id}-${item.weight}`}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: 100 }}
                                                className="bg-amber-50 rounded-lg p-3 border border-orange-200"
                                            >
                                                <div className="flex gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 rounded-lg object-cover"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                                                        <p className="text-xs text-gray-600">{item.weight}</p>
                                                        <p className="text-sm font-bold text-orange-600 mt-1">
                                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.weight)}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                    >
                                                        <X size={18} />
                                                    </button>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border border-orange-300">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                                                            className="w-6 h-6 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                                                            className="w-6 h-6 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <span className="text-xs text-gray-500">
                                                        ₹{item.price} each
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="border-t p-4 bg-gray-50">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold text-gray-800">Total:</span>
                                        <span className="text-2xl font-bold text-orange-600">
                                            ₹{getTotalPrice().toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <Button
                                        onClick={handleWhatsAppOrder}
                                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 rounded-full text-lg font-bold shadow-lg"
                                    >
                                        <Send size={20} className="mr-2" />
                                        Order via WhatsApp
                                    </Button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full mt-2 text-sm text-red-600 hover:text-red-700 py-2"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
