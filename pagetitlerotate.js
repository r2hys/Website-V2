function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var str = 'R2hys';
  document.title = '';
  
  async function typewriteTitle() {
    while (true) {
      for (let i = 0; i < str.length; i++) {
        document.title += str.charAt(i);
        console.log(document.title); 
        await sleep(300);
      }
  
      
      for (let j = str.length; j >= 0; j--) {
        document.title = document.title.slice(0, j);
        console.log(document.title); 
        await sleep(300);
      }
    }
  }
  
  typewriteTitle();