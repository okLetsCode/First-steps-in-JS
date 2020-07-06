function solve() {
   let data = Array.from(document.querySelectorAll("body > table > tbody > tr"));
   let searchField = document.getElementById('searchField')
   let searchBtn = document.getElementById('searchBtn')

   searchBtn.addEventListener('click', searchFunc);

   function searchFunc() {
      let regEx = new RegExp(searchField.value, 'gmi');

      data.map(e => {
         e.classList.remove('select');
         if (e.innerHTML.match(regEx) !== null) {
            e.classList = 'select'
         }
      })
      searchField.value = '';
   }

}