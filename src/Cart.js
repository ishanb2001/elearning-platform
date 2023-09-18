import React from 'react';
import { getAuth } from '@firebase/auth';
import { useCart } from './CartContext';

function Cart() {
    const auth = getAuth();
    const { cartItems } = useCart();

    if (!auth.currentUser) {
        return <div>Please log in</div>;
    }

    return (
        <div>
            {cartItems.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                <ul>
                    {cartItems.map((course, index) => (
                        <li key={index}>
                            {course.SubHeaderText}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
