/* eslint-disable max-lines */
const express = require('express');

const router = express.Router();
const c = require('../controllers');
const m = require('../middleware');

/**
 * @swagger
 * tags:
 *   name: Product Management
 *   description: API for Product Management
 */

router.get('/role', c.role.index);
router.get('/activitylog', m.requireAdmin, c.activitylog.index);

router.get('/users', m.requireAdmin, c.user.index);
router.post('/user/:UserId', c.userUpdate.update);

router.get('/product', m.requireAdmin, c.product.index);

/**
 * @swagger
 * /api/product:
 *   post:
 *     tags: [product]
 *     summary: add a new product
 *     description: add a new product
 *     responses:
 *       200:
 *         description: static data.
 *       500:
 *         something when wrong.
 */
router.post('/product', m.requireAdmin, c.product.create);

/**
 * @swagger
 * /api/product/:id:
 *   get:
 *     tags: [product]
 *     summary: get a details of a product
 *     description: get a details of a product
 *     responses:
 *       200:
 *         description: static data.
 *       500:
 *         something when wrong.
 */
router.get('/product/:id', m.requireAdmin, c.product.show);

/**
 * @swagger
 * /api/product/:id:
 *   post:
 *     tags: [product]
 *     summary: update a product details
 *     description: update a product details
 *     responses:
 *       200:
 *         description: static data.
 *       500:
 *         something when wrong.
 */
router.post('/product/:id', m.requireAdmin, c.product.update);

/**
 * @swagger
 * /api/product/:id:
 *   delete:
 *     tags: [product]
 *     summary: delete a product details
 *     description: delete a product details
 *     responses:
 *       200:
 *         description: static data.
 *       500:
 *         something when wrong.
 */
router.delete('/product/:id', m.requireAdmin, c.product.destroy);

module.exports = router;
