var xMove = 5;
var yMove = 1;
$(function(){

  $(document).mousemove(function(){
        $("#ball").offset(function(n, c){
            newPos = new Object();
            newPos.left = c.left + xMove;
            newPos.top = c.top + yMove;
            return newPos;
        });
        if(newPos.left+100 > screen.availWidth){
          xMove = xMove * (-1);
        }
        if(newPos.top +100 > screen.availHeight){
          yMove = yMove * (-1);
        }
        if(newPos.left < 0){
          xMove = xMove *(-1);
        }
        if(newPos.top < 0){
          yMove = yMove * (-1);
        }
  });

  $(document).click(function(e){
      console.log(screen.availHeight);
  });




//end of
});
//nothing else

// $('#img').css({ 'left': x + 'px', 'top': y + 'px' });