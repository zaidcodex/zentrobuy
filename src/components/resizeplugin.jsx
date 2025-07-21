import ResizeObserver from 'resize-observer-polyfill';

const ResizePlugin = (slider) => {
  const observer = new (window.ResizeObserver || ResizeObserver)((entries) => {
    for (const entry of entries) {
      if (entry.contentRect) {
        slider.update();
      }
    }
  });

  slider.on('created', () => {
    if (slider.container) {
      observer.observe(slider.container);
    }
  });

  slider.on('destroyed', () => {
    if (slider.container) {
      observer.unobserve(slider.container);
    }
  });
};

export default ResizePlugin;
