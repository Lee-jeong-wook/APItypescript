"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.post('/item', ctrl.process.item)

module.exports= router;