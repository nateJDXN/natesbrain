window.onload = function() {    //ensures that elements are loaded first

    var left = document.getElementById('left');
    var right = document.getElementById('right');

   left.addEventListener('mouseover', function() {
        left.style.width = '60%';
        right.style.width = '40%';
    });
    
   left.addEventListener('mouseout', function() {
        left.style.width = '50%';
        right.style.width = '50%';
    });
    
   right.addEventListener('mouseover', function() {
        right.style.width = '60%';
        left.style.width = '40%';
    });
    
    right.addEventListener('mouseout', function() {
        left.style.width = '50%';
        right.style.width = '50%';
    });
    
}