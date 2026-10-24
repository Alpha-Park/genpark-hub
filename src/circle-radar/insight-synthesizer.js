export class InsightSynthesizer {
  /**
   * Synthesize a structured GenPark Circle Insight (洞见) article from trend data
   */
  synthesizeArticle(trendItem) {
    const { product, momentumScore, status, samplePosts } = trendItem;

    const title = `【圈子洞见】${product} 为何在 GenPark 爆火？真实玩家讨论与深度避坑`;
    const tldr = `根据 GenPark Circle 圈子过去 24 小时的社区声量，${product} 热度激增（动量分值: ${momentumScore}，状态: ${status}）。本洞见整合了核心玩家的实测反馈。`;

    const quotes = samplePosts.map(p => `> "${p.text}" —— @${p.author}`).join('\n\n');

    const markdownContent = `
# ${title}

**发布平台:** GenPark Circle (洞见专栏)  
**趋势评级:** ${status} (社区动量指数: ${momentumScore})  
**关联单品:** [${product}](https://genpark.ai/item/${encodeURIComponent(product)})

---

### 💡 核心摘要 (TL;DR)
${tldr}

### 🗣️ 社区原声摘录
${quotes || '_暂无更多引述_'}

### ⚖️ 综合决策建议
- **适合人群:** 追求极客质感、对细节品质有要求且预算匹配的消费者。
- **潜在避坑:** 请留意不同批次的固件兼容性，购买前建议先在 GenPark 查看 [TruthGuard 验真评级]。

---
*由 GenPark Circle Trend Radar 自动聚类生成并经由 OpenClaw Agent 审核*
`.trim();

    return {
      title,
      product,
      status,
      momentumScore,
      markdownContent,
      suggestedTags: ['GenPark洞见', '好物推荐', product, 'Circle热榜', '购物决策']
    };
  }
}
