const express = require('express');
const router = express.Router();
const { createRule, combineRules, evaluateRule } = require('../controllers/ruleController');

// Route to create a rule
router.post('/create', createRule);

// Route to combine rules
router.post('/combine', combineRules);

// Route to evaluate a rule
router.post('/evaluate', evaluateRule);

module.exports = router;
