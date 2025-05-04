// frontend.js  
if ('IntersectionObserver' in window) {  
    const observer = new IntersectionObserver((entries) => {  
      entries.forEach(entry => {  
        if (entry.isIntersecting) {  
          import('./heavy-block.js');  
          observer.unobserve(entry.target);  
        }  
      });  
    });  
    document.querySelectorAll('.lazy-block').forEach(block => observer.observe(block));  
  }  