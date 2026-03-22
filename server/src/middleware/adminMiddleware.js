const adminOnly = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }

    next();
  } catch (error) {
    console.error("Admin middleware error:", error.message);
    return res.status(500).json({
      message: "Server error in admin check",
    });
  }
};

export default adminOnly;