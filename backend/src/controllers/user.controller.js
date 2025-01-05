import { User } from "../models/user.model.js";
import bcryp from 'bcrypt';
import nodemailer from 'nodemailer'
import crypto from 'crypto';



//update user
export const updatePassword = async (req, res) => {
    const { currentPassword , newPassword } = req.body;

    try {

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: "all field are required" });
          }

        const user = await User.findById(req.user.id).select('+password');
        if(!user) {
            return res.status(404).json({success: false, messaage : 'user not found'})
        }


        const isMatch = await bcryp.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "youre current password is incorrct" });
          }


        const hashedPassword = await bcryp.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({success : true , messaage: 'password updated successfully'})

    }catch(err) {
        console.error(err);
        res.status(500).json({ message: "intenal server error" });
    }
}

//forgotpassword

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {

        const user = await User.findOne({email});
        if(!email) {
            return res.status(400).json({success: false, message: 'invalid user'})
        }

        const resetToken = crypto.randomBytes(20).toString('hex');
        console.log('Generated Token:', resetToken);;

        user.passwrodResetToken = resetToken;
        user.passwrodResetExpires = Date.now() + 3600000; //1h
        await user.save();

        const resetURL = `${req.protocol}://${req.get(
            'host'
          )}/api/v1/users/resetPassword/${resetToken}`;

        //send email 

        const transporter = nodemailer.createTransport({
            service : 'Gmail',
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from : process.env.EMAIL_USER,
            to : email,
            subject: 'Password Reset Request',
        html: `<p>You requested a password reset. Click <a href="${resetURL}">here</a> to reset your password. This link will expire in 1 hour.</p>`,
        }

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Password reset link sent to your email' });

    } catch(err) {
        console.error('Error in forgotPassword:', err);
        res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
    }
}

//reset password

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {

        const user = await User.findOne({
            passwrodResetToken : token,
            passwrodResetExpires : { $gt : Date.now() }
        });

        if(!user) {
            return res.status(404).json({success : false, messaage : 'user not found'})
        };

        const salt = await bcryp.genSalt(10);
        const hashedPassword = await bcryp.hash(password, salt);

        user.password = hashedPassword;
        user.passwrodResetToken = undefined;
        user.passwrodResetExpires = undefined;

        await user.save();

        res.status(200).json({ success: true, message: 'Password updated successfully' });

    }catch(err) {
        console.error('Error in resetPassword:', err);
        res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
    }
}




export const uploadProfilePicture = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const user = await User.findById(req.user.id); 

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        
        user.profilePic = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Profile picture updated successfully',
            data: { profilePic: user.profilePic },
        });
    } catch (err) {
        console.error('Error uploading profile picture:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
