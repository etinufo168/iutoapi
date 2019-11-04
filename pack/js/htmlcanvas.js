/* ---------------------------------- */

/* htmll5 */

(function($) {

   $.html5 = {};
   
   var $self = $.html5;
   
   $.html5.canvas = {
   
    /* ---------------------------------- */
    /* create */
  
    create: function(id,container) {

      var $canvas;
      
      if ($.browser.msie) {

         
         $canvas = $('canvas')
      }else{

        $canvas = $('<canvas/>');
        $canvas.appendTo(container);
        
      }
      
    
      $canvas.attr({id:id}).css({position: 'absolute',left:0,top:0})
      return $canvas;
        

        
      
    }
    
    ,
    
    /* ---------------------------------- */
    /* draw */
    /*
       
    utils:
    translateShape
    rotateShape
    rotatePoint
        
    
    */
     
    draw: {
  
      
      /* ---------------------------------- */
      /* utilities */
      
      utils: {


        translateShape: function(shape,x,y) {
          var rv = [];
          for(p in shape)
            rv.push([ shape[p][0] + x, shape[p][1] + y ]);
          return rv;
        } //translateShape
        
        ,

        rotateShape: function(shape,ang) {
          var rv = [];
          for(p in shape)
            rv.push($self.canvas.draw.utils.rotatePoint(ang,shape[p][0],shape[p][1]));
          return rv;
        } //rotateShape
        
        ,

        rotatePoint: function(ang,x,y) {
          return [
            (x * Math.cos(ang)) - (y * Math.sin(ang)),
            (x * Math.sin(ang)) + (y * Math.cos(ang))
        ];
        
        } //rotatePoint
    
      
      } //utilities
    

    }//draw
   
   
   }//html5.canvas

  
   
})(jQuery);