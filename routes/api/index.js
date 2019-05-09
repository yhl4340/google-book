const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
// makes this route path /api/books/ not /api/booksAPI/
router.use("/books", bookRoutes);

module.exports = router;