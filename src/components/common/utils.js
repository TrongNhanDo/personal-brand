export const handleScrollTop = () => {
   try {
      window.scrollTo(0, 0);
   } catch (error) {
      window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   }
};
