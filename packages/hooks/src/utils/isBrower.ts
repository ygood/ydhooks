const isBrower = () => {
  return typeof window !== 'undefined' && window.document && window.document.createElement;
};

export default isBrower;
