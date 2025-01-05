import multer from 'multer';
import path from 'path';

// تنظیم ذخیره‌سازی فایل‌ها
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // مسیر ذخیره عکس‌های آپلود‌شده
        cb(null, 'uploads/profile-pics');
    },
    filename: (req, file, cb) => {
        // نام یکتای فایل (با زمان و پسوند اصلی)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

// فیلتر کردن نوع فایل‌ها
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/; // فرمت‌های مجاز
    const extName = allowedFileTypes.test(path.extname(file.originalname).toLowerCase()); // بررسی پسوند فایل
    const mimeType = allowedFileTypes.test(file.mimetype); // بررسی نوع فایل

    if (extName && mimeType) {
        cb(null, true); // فایل معتبر است
    } else {
        cb(new Error('Only .jpeg, .jpg, or .png files are allowed!')); // فایل نامعتبر
    }
};

// تنظیمات Multer
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // حداکثر اندازه فایل: ۲ مگابایت
    fileFilter,
});

export default upload;

