import { useState } from 'react';

function AddProduct() {
    // State variables to store input values
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false); // To track form validation

    // Function to handle product submission
    const addProduct = async () => {
        // Basic input validation
        if (!name || !price || !category || !company) {
            setError(true); // Show validation messages
            return; // Stop execution if any field is empty
        }

        // Get logged-in user's ID from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;
        console.log("User ID is:", userId);

        // Send POST request to backend with product data
        const result = await fetch("http://localhost:3000/add-product", {
            method: "POST",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await result.json();
        console.log("Product added:", data);

        // Clear all inputs after submission
        setName("");
        setPrice("");
        setCategory("");
        setCompany("");
        setError(false); // Reset error state
    };

    return (
        <div className='add-product-main'>
            <div className='add-product-header'>
                <h1>Add Product</h1>
            </div>

            <div className='add-product-inp-div'>
                {/* Input: Product Name */}
                <input
                    type="text"
                    placeholder="Enter product name"
                    className='InputBox'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && !name && <span className='invalid-input'>Enter valid name...</span>}

                {/* Input: Product Price */}
                <input
                    type="text"
                    placeholder="Enter product price"
                    className='InputBox'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {error && !price && <span className='invalid-input'>Enter valid price...</span>}

                {/* Input: Product Category */}
                <input
                    type="text"
                    placeholder="Enter product category"
                    className='InputBox'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                {error && !category && <span className='invalid-input'>Enter valid category...</span>}

                {/* Input: Company Name */}
                <input
                    type="text"
                    placeholder="Enter company name"
                    className='InputBox'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                {error && !company && <span className='invalid-input'>Enter valid company...</span>}
            </div>

            <div className='add-product-btn-div'>
                {/* Button to trigger addProduct */}
                <button className='addbtn' onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}

export default AddProduct;
