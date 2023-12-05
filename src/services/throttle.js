export function throttle(callback, delay) {
    let lastCallTime = 0;
  
    return function (...args) {
      const now = new Date().getTime();
  
      if (now - lastCallTime >= delay) {
        callback(...args);
        lastCallTime = now;
      }
    };
  }