const initialData = {
  proposals: {
    'proposal-1': { id: 'proposal-1', content: 'Take our the garbage' },
    'proposal-2': { id: 'proposal-2', content: 'Watch my favorite show' },
    'proposal-3': { id: 'proposal-3', content: 'Charge my phone' },
    'proposal-4': { id: 'proposal-4', content: 'Feed cats' },
    'proposal-5': { id: 'proposal-5', content: 'Cook dinner' },
    'proposal-6': { id: 'proposal-6', content: 'Take our the garbage' },
    'proposal-7': { id: 'proposal-7', content: 'Watch my favorite show' },
    'proposal-8': { id: 'proposal-8', content: 'Charge my phone' },
    'proposal-9': { id: 'proposal-9', content: 'Feed cats' },
    'proposal-10': { id: 'proposal-10', content: 'Cook dinner' },
    'proposal-11': { id: 'proposal-11', content: 'Take our the garbage' },
    'proposal-12': { id: 'proposal-12', content: 'Watch my favorite show' },
    'proposal-13': { id: 'proposal-13', content: 'Charge my phone' },
    'proposal-14': { id: 'proposal-14', content: 'Feed cats' },
    'proposal-15': { id: 'proposal-15', content: 'Cook dinner' },
    'proposal-16': { id: 'proposal-16', content: 'Take our the garbage' },
    'proposal-17': { id: 'proposal-17', content: 'Watch my favorite show' },
    'proposal-18': { id: 'proposal-18', content: 'Charge my phone' },
    'proposal-19': { id: 'proposal-19', content: 'Feed cats' },
    'proposal-20': { id: 'proposal-20', content: 'Cook dinner' },
    'proposal-21': { id: 'proposal-21', content: 'Take our the garbage' },
    'proposal-22': { id: 'proposal-22', content: 'Watch my favorite show' },
    'proposal-23': { id: 'proposal-23', content: 'Charge my phone' },
    'proposal-24': { id: 'proposal-24', content: 'Feed cats' },
    'proposal-25': { id: 'proposal-25', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Monday February 14th',
      proposalIds: ['proposal-1', 'proposal-2', 'proposal-3', 'proposal-4', 'proposal-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Tuesday February 15th',
      proposalId: ['proposal-6', 'proposal-7', 'proposal-8', 'proposal-9', 'proposal-10'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Wednesday February 16th',
      proposalId: ['proposal-11', 'proposal-12', 'proposal-13', 'proposal-14', 'proposal-15'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Thursday February 17th',
      proposalId: ['proposal-16', 'proposal-17', 'proposal-18', 'proposal-19', 'proposal-20'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Friday February 18th',
      proposalId: ['proposal-21', 'proposal-22', 'proposal-23', 'proposal-24', 'proposal-25'],
    },
  },
  // Manage reordering of columns
  columnOrder: ['column-1'],
}

export default initialData
