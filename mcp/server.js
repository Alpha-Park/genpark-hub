import readline from 'readline';
import { AgentWalletGuard, CrossStoreBasketOptimizer, ProductTruthGuard, CircleTrendRadar } from '../src/index.js';

const walletGuard = new AgentWalletGuard();
const basketOptimizer = new CrossStoreBasketOptimizer();
const truthGuard = new ProductTruthGuard();
const circleRadar = new CircleTrendRadar();

const TOOLS = [
  {
    name: 'genpark_wallet_checkout',
    description: 'Safely execute or evaluate an autonomous purchase with budget cap policy and receipt generation.',
    inputSchema: {
      type: 'object',
      properties: {
        amount: { type: 'number', description: 'Order cost in USD' },
        merchant: { type: 'string', description: 'Merchant identifier or store name' },
        category: { type: 'string', description: 'Product category' }
      },
      required: ['amount', 'merchant']
    }
  },
  {
    name: 'genpark_optimize_basket',
    description: 'Find the mathematically optimal store combination for multi-item cart to minimize total cost & shipping fees.',
    inputSchema: {
      type: 'object',
      properties: {
        items: { type: 'array', items: { type: 'string' }, description: 'List of product identifiers' }
      },
      required: ['items']
    }
  },
  {
    name: 'genpark_audit_reviews',
    description: 'Analyze product reviews for synthetic bot spam, fake ratings, and real-world defect clusters.',
    inputSchema: {
      type: 'object',
      properties: {
        productId: { type: 'string' },
        reviews: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              rating: { type: 'number' },
              text: { type: 'string' },
              verifiedPurchase: { type: 'boolean' }
            }
          }
        }
      },
      required: ['productId', 'reviews']
    }
  },
  {
    name: 'genpark_circle_trend_radar',
    description: 'Synthesize community trend momentum and draft Circle Insight posts.',
    inputSchema: {
      type: 'object',
      properties: {
        posts: { type: 'array', description: 'List of community discussions' }
      },
      required: ['posts']
    }
  }
];

function handleToolCall(name, args) {
  switch (name) {
    case 'genpark_wallet_checkout': {
      return walletGuard.processCheckout({
        id: `ord_${Date.now()}`,
        merchant: args.merchant,
        amount: args.amount,
        category: args.category || 'general'
      });
    }
    case 'genpark_optimize_basket': {
      return basketOptimizer.optimize(args.items);
    }
    case 'genpark_audit_reviews': {
      return truthGuard.auditProductReviews(args.productId, args.reviews);
    }
    case 'genpark_circle_trend_radar': {
      return circleRadar.detectAndSynthesize(args.posts);
    }
    default:
      throw new Error(`Tool '${name}' not recognized.`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const req = JSON.parse(line);
    if (req.method === 'tools/list') {
      console.log(JSON.stringify({ jsonrpc: '2.0', id: req.id, result: { tools: TOOLS } }));
    } else if (req.method === 'tools/call') {
      const res = handleToolCall(req.params.name, req.params.arguments || {});
      console.log(JSON.stringify({
        jsonrpc: '2.0',
        id: req.id,
        result: {
          content: [{ type: 'text', text: JSON.stringify(res, null, 2) }]
        }
      }));
    } else {
      console.log(JSON.stringify({ jsonrpc: '2.0', id: req.id, result: {} }));
    }
  } catch (err) {
    console.error('Error handling JSON-RPC message:', err.message);
  }
});
