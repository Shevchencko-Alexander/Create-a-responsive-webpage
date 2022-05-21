const menuLinks = document.querySelectorAll('.footer__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      const long = 20;

      if (
         menuLink.dataset.goto &&
         document.querySelector(menuLink.dataset.goto)
      ) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top + scrollY - long;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
         });
         e.preventDefault();
      }
   }
}
