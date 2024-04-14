import express from 'express';
import multer from 'multer'
import { addPeriod, getPeriod } from '../controllers/period';

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb
    }
})


const router = express.Router();


router.post('/', upload.single('icon'), addPeriod)
router.get('/:era', getPeriod)

export default router;  