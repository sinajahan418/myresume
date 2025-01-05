

export const  isAdmin = async (req, res, next) => {

    try {

        const user = req.user;
        if(user.role !== 'Admin') {
            return res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
        }

        next();

    }catch(err) {
        console.error('Error in isAdmin middleware:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}