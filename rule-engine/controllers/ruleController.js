let rules = []; // In-memory rule storage for simplicity

// Create a rule and store it in memory (or later in a DB)
exports.createRule = (req, res) => {
  const { rule_string } = req.body;
  const rule = { id: rules.length + 1, rule_string };
  rules.push(rule);
  res.json({ message: "Rule created successfully", rule });
};

// Combine multiple rules into a single AST
exports.combineRules = (req, res) => {
  const { rule_strings, operator } = req.body;

  // Helper function to create an AST node from a rule string (simplified)
  function parseRuleToAST(ruleString) {
    return {
      type: 'operand',
      value: ruleString, // Simplified AST node structure
    };
  }

  // Combine rules into a single AST
  function combineRulesAST(ruleStrings, operator = 'AND') {
    if (ruleStrings.length === 0) {
      throw new Error('No rules to combine');
    }

    const asts = ruleStrings.map(parseRuleToAST);

    if (asts.length === 1) {
      return asts[0];
    }

    let combinedAST = asts[0];

    for (let i = 1; i < asts.length; i++) {
      combinedAST = {
        type: 'operator',
        value: operator,
        left: combinedAST,
        right: asts[i],
      };
    }

    return combinedAST;
  }

  const combinedAST = combineRulesAST(rule_strings, operator);
  res.json({ message: "Rules combined successfully", combinedAST });
};

// Evaluate a combined rule against provided data
exports.evaluateRule = (req, res) => {
  const { attributes, ast } = req.body;

  // Evaluate the AST against the provided data
  function evaluateAST(node, data) {
    if (node.type === 'operand') {
      // Simple condition evaluation (you can expand this for more complex rules)
      const [attribute, operator, value] = node.value.split(' ');
      switch (operator) {
        case '>':
          return data[attribute] > parseInt(value);
        case '<':
          return data[attribute] < parseInt(value);
        case '=':
          return data[attribute] === value.replace(/'/g, '');
        default:
          return false;
      }
    }

    if (node.type === 'operator') {
      if (node.value === 'AND') {
        return evaluateAST(node.left, data) && evaluateAST(node.right, data);
      } else if (node.value === 'OR') {
        return evaluateAST(node.left, data) || evaluateAST(node.right, data);
      }
    }

    return false;
  }

  const result = evaluateAST(ast, attributes);
  res.json({ result });
};
