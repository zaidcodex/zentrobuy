const MutationPlugin = (slider) => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          slider.update();
        }
      }
    });
  
    const config = { childList: true, subtree: true };
  
    slider.on('created', () => {
      if (slider.container) {
        observer.observe(slider.container, config);
      }
    });
  
    slider.on('destroyed', () => {
      observer.disconnect();
    });
  };
  
  export default MutationPlugin;
  