// Mock database using localStorage as a fallback
const mockDatabase = {
  getCount: () => {
    // In a real app, this would fetch from an actual API
    const storedCount = localStorage.getItem('visitorCount');
    return Promise.resolve({
      count: storedCount ? parseInt(storedCount) : 0,
      lastUpdated: new Date().toISOString()
    });
  },
  
  incrementCount: () => {
    // Get current count
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
    const newCount = currentCount + 1;
    
    // "Save" to mock database (localStorage)
    localStorage.setItem('visitorCount', newCount.toString());
    localStorage.setItem('lastUpdated', new Date().toISOString());
    
    return Promise.resolve({
      count: newCount,
      lastUpdated: new Date().toISOString()
    });
  }
};

export default mockDatabase;