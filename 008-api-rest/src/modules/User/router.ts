import { Router } from 'express';
import { userController } from './controller/user-controller';

const router = Router();
const baseUrl = '/user';

router.post(`${baseUrl}/read`, userController.create);
router.get(`${baseUrl}/read`, userController.read);

export const userRouter = router;
