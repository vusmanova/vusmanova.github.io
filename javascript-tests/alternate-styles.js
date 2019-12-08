window.onload = () => {
    appearanceButton.onclick = () => {
    const defaults = document.getElementById('default');
    const basic = document.getElementById('basic');
  const appearanceButton = document.getElementById('appearanceAction');
  myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('input[name="switch"]:checked').value;
    if (value.toLowerCase() === 'Default Stylesheet') {
      disableStylesheet(defaults)
    } else {
      enableStylesheet(basic);
        }
  });
}
  
      function disableStylesheet(node) {
        node.rel = 'alternate stylesheet';


        function enableStylesheet(node) 
        node.rel = 'stylesheet';

      }
    }


