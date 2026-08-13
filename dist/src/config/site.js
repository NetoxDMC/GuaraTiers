export const site = {
  name: '[NOMBRE DEL PROYECTO]',
  tagline: 'Minecraft PvP Competitive Rankings',
  scoreSource: 'peak', // change to "current" to calculate global points from current tiers
  demoLabel: 'DEMO DATA — fictional rankings for product preview only',
};

export const tiers = [
  ['LT5', 0, '#475569'], ['HT5', 1, '#94a3b8'], ['LT4', 2, '#166534'], ['HT4', 4, '#4ade80'],
  ['LT3', 6, '#1d4ed8'], ['HT3', 10, '#60a5fa'], ['LT2', 20, '#6d28d9'], ['HT2', 30, '#a78bfa'],
  ['LT1', 45, '#eab308'], ['HT1', 60, '#fb7185'],
].map(([id, points, color], order) => ({ id, points, color, order }));

export const getTier = (id) => tiers.find((tier) => tier.id === id) || tiers[0];
export const getTierPoints = (id) => getTier(id).points;
export const isHigherTier = (next, previous) => getTier(next).order > getTier(previous).order;

export const gamemodes = [
  ['sword', 'Sword', 'Cross-blade fundamentals', '⚔'], ['uhc', 'UHC', 'Survival combat and resource control', '◈'],
  ['crystal', 'Crystal', 'Explosive positioning and timing', '✦'], ['netherite-pot', 'Netherite Pot', 'Modern pot duels', '⬡'],
  ['diamond-pot', 'Diamond Pot', 'Classic pot consistency', '◇'], ['smp', 'SMP', 'Open-world combat', '⌁'],
  ['axe', 'Axe', 'Shield breaks and criticals', '⟠'], ['mace', 'Mace', 'Vertical combat mastery', '↟'], ['sumo', 'Sumo', 'Movement and knockback', '◎'],
].map(([slug, name, description, icon], index) => ({ slug, name, description, icon, active: true, accent: index % 2 ? '#7c3aed' : '#3b82f6' }));

export const tieBreakOrder = ['HT1', 'LT1', 'HT2', 'LT2'];
