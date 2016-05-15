<script>
(function() { var rotate = document.getElementById('rotate'); var iDir =
'../images/square.png'; var idx = 0; var imag = ['square.png','circle.png','triangle.png',
'trapezoid.png'];
var imagPres = 0; var
lengthInMilliseconds = 1000; var len = imag.length; var chImg = function
() { imagPres = 0.2; if (idx % 2 == 0) { imagPres = 0.8;}
idx = idx === len - 1 ? 0 : ++idx; rotate.src = iDir +
imag[idx]; setTimeout(chImg, imagPres * lengthInMilliseconds);
};
setTimeout(chImg, imagPres * lengthInMilliseconds);
})();
</script> 
