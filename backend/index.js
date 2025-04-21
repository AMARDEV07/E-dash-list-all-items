// Import required modules
const express = require("express");
const cors = require("cors"); // CORS middleware to allow cross-origin requests
require("./db/config");
const User = require("./db/user");
const Product=require("./db/product");


const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route: Register a new user
app.post("/register", async (req, resp) => {
  try {
    // Create a new user document using the request body
    let newUser = new User(req.body);
    // Save the user to the database
    let result = await newUser.save();
    // Convert Mongoose document to plain JavaScript object
    result = result.toObject();
    // Remove password field before sending the response (for security)
    delete result.password;
    // Send the response back to client (user data without password)
    resp.send(result);
  } catch (error) {
    // Log error and send generic error message to client
    console.error("Error registering user:", error);
  }
});






// API for user login
app.post("/login", async (req, resp) => {
  try {
    // Check if both email and password are provided
    if (req.body.email && req.body.password) {
      const user = await User.findOne(req.body) // Look for a user matching the provided email and password
        .select("-password"); // Exclude password from the result

      if (user) {
        resp.send(user); // If user exists, send user data back
      } else {
        resp.send({ result: "No user found" }); // If no user found with provided credentials
      }
    } else {
      resp.send({ result: "Please provide both email and password" }); // If either email or password is missing in the request
    }
  } catch (error) {
    console.error("Login error:", error); // Catch and log any unexpected errors
  }
});


//add product api 

app.post("/add-product", async (req, res) => {
  try {
    let newProduct = new Product(req.body); // req.body contains the data
    let result = await newProduct.save();
    res.send(result); // send the saved product back to the client
    
  } catch (error) {
    console.log("add-product error", error);

  }
});




//  get product listing api 
app.get("/products", async(req,res)=>{
  let products= await Product.find();
  if(products.length>0){
    res.send(products);
  }
  else{
    res.send({result:"No products found"});
  }

})


// Start the server on port 3000 and log a message
app.listen(3000);
