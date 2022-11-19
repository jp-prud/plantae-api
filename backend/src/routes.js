import { Router } from 'express';

import ConsumerController from './app/controllers/ConsumerController';
import ProductController from './app/controllers/ProductController';
import ProductiveLocaleController from './app/controllers/ProductiveLocaleController';
import QualitySealController from './app/controllers/QualitySealController';

const router = Router();

/* Consumer */
router.get('/consumer', ConsumerController.index);
router.get('/consumer/:id', ConsumerController.show);
router.post('/consumer', ConsumerController.store);
router.put('/consumer/:id', ConsumerController.update);
router.delete('/consumer/:id', ConsumerController.delete);

/* Product */
router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.post('/product', ProductController.store);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);

/* Productive Locale */
router.get('/productive-locale', ProductiveLocaleController.index);
router.get('/productive-locale/:id', ProductiveLocaleController.show);
router.post('/productive-locale', ProductiveLocaleController.store);
router.put('/productive-locale/:id', ProductiveLocaleController.update);
router.delete('/productive-locale/:id', ProductiveLocaleController.delete);

/* Quality Seal */
router.get('/quality-seal', QualitySealController.index);
router.get('/quality-seal/:id', QualitySealController.show);
router.post('/quality-seal', QualitySealController.store);
router.put('/quality-seal/:id', QualitySealController.update);
router.delete('/quality-seal/:id', QualitySealController.delete);

export default router;
