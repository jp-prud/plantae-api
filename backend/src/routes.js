const { Router } = require('express');

const ConsumerController = require('./app/controllers/ConsumerController');
const ProductController = require('./app/controllers/ProductController');
const ProductiveLocaleController = require('./app/controllers/ProductiveLocaleController');
const QualitySealController = require('./app/controllers/QualitySealController');
const AuthController = require('./app/controllers/AuthController');

// const authMiddleware = require('./app/middlewares/auth');

const router = Router();

router.post('/authenticate', AuthController.index);
router.post('/register', AuthController.store);

/**
 * Private route
 */
// router.use(authMiddleware);

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

module.exports = router;
