export const demoPlayers = [
  { username: 'Netox', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000001', registeredAt: '2026-07-12', trend: 3, featured: true, ranks: { sword: ['HT1','HT1'], crystal: ['LT1','LT1'], uhc: ['HT2','HT3'], smp: ['HT3','HT3'] } },
  { username: 'PlayerA', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000002', registeredAt: '2026-07-16', trend: 1, featured: true, ranks: { sword: ['LT1','HT1'], crystal: ['HT2','HT2'], axe: ['LT1','LT1'] } },
  { username: 'CrystalGod', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000003', registeredAt: '2026-06-24', trend: 0, featured: true, ranks: { crystal: ['HT1','HT1'], sword: ['HT2','HT2'], uhc: ['LT2','LT2'] } },
  { username: 'SwordMain', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000004', registeredAt: '2026-08-02', trend: -1, ranks: { sword: ['HT1','HT1'], uhc: ['LT1','LT1'], sumo: ['HT3','HT3'] } },
  { username: 'PvPMaster', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000005', registeredAt: '2026-07-29', trend: 4, ranks: { 'netherite-pot': ['HT1','HT1'], 'diamond-pot': ['HT2','HT2'], mace: ['LT1','LT1'] } },
  { username: 'PlayerB', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000006', registeredAt: '2026-08-04', trend: -2, ranks: { sword: ['HT2','HT2'], crystal: ['LT2','LT2'], axe: ['HT3','HT3'], smp: ['HT4','HT4'] } },
  { username: 'AstraByte', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000007', registeredAt: '2026-08-05', trend: 2, ranks: { uhc: ['HT1','HT1'], sword: ['LT2','LT2'] } },
  { username: 'VoidRift', uuid: 'e2a1f0de-41b4-4d9d-a1a0-000000000008', registeredAt: '2026-08-07', trend: 0, ranks: { crystal: ['HT2','HT2'], mace: ['HT2','HT2'], smp: ['LT2','LT2'] } },
];

export const demoTesters = [
  { username: 'TesterABC', uuid: 'fa000001-0000-4000-8000-000000000001', modes: ['sword','crystal','uhc'], active: true },
  { username: 'ColdJudge', uuid: 'fa000002-0000-4000-8000-000000000002', modes: ['netherite-pot','diamond-pot','mace'], active: true },
  { username: 'NorthStar', uuid: 'fa000003-0000-4000-8000-000000000003', modes: ['axe','smp','sumo'], active: false },
];

export const demoTests = [
  { id: 't-001', player: 'Netox', mode: 'sword', from: 'LT3', to: 'HT3', tester: 'TesterABC', date: '2026-08-10' },
  { id: 't-002', player: 'Netox', mode: 'crystal', from: 'HT4', to: 'LT3', tester: 'TesterABC', date: '2026-08-05' },
  { id: 't-003', player: 'PlayerA', mode: 'sword', from: 'HT2', to: 'LT1', tester: 'TesterABC', date: '2026-08-12' },
  { id: 't-004', player: 'CrystalGod', mode: 'crystal', from: 'LT1', to: 'HT1', tester: 'TesterABC', date: '2026-08-11' },
  { id: 't-005', player: 'PvPMaster', mode: 'mace', from: 'HT3', to: 'LT1', tester: 'ColdJudge', date: '2026-08-09' },
];
