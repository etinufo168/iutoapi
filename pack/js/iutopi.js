
/* Initialize */

jQuery(
  
  function ($) {

    $.Body = $('body');
    
    $.Window = $(window);
    
    $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
    
    $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))),
    
    $.Unsupported = $.Body.hasClass('unsupported-browser');
    
    $.Body
    .Keyboard()
   
    $('[data-controller]').Instantiate();

   
  } 
  
);

/* ---------------------------------- */

/* Events */

(function($) {

  $.Events = {

     SECTION_ENTER: 'sectionEnter',
     
     SCROLL_TO: 'scrollTo',
     
     SCROLL: 'windowScroll',
     SCROLL_ENTER: 'windowScrollEnter',
     SCROLL_LEAVE: 'windwScrollLeave',
     
     KEY_UP: 'keyUp',
     KEY_DOWN: 'keyDown',
     KEY_LEFT: 'keyLeft',
     KEY_RIGHT: 'keyRight',
     KEY_ESC: 'keyEsc',
     KEY_SPACE: 'keySpace',
     
     
     PROOF_POINT: 'proofPointMore'
    
  
  } // Events  
  
  $.Views = {
  
  
  } // Views 

   
  
})(jQuery);


/* ---------------------------------- */

/* Auto Instantiate */

(function($) {

  $.fn.Instantiate = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 

          var $self = $(this),
              $controller = $self.attr('data-controller');
                  
          if ($self[$controller])
            $self[$controller]();
              
      });
      
  }
    
  

})(jQuery);

/* ---------------------------------- */

/* Shell */

(function($) {

  $.fn.SHELL = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 

              
      });
      
      
      return this;
  }

})(jQuery); 

/* ---------------------------------- */

/* Scrollable */

(function($) {

  
  $.fn.Scrollable = function(settings) {
   
     var config = { threshold: -100, offset_scroll: 6, offset_intertia: .15 };  /* LA POSTA CON EL SCROLL */
 
     if (settings) $.extend(config, settings);
    
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id');
            
        config.threshold = 0
        
        if ($.Mobile || $.Unsupported) {  
          $self.css({backgroundAttachment:'scroll'})
        }else{
        $.Window
          .bind('scroll',
            function(e){
            //console.log($self);
              if ( $.inview($self,{threshold:config.threshold}) ) {
                
                if (!$self.hasClass('_active')){
                
                  $self.addClass('_active');
                  
                  if (settings.is_nav)
                    $.Body.triggerHandler($.Events.SECTION_ENTER,$id);
                  
                  $self.triggerHandler($.Events.SCROLL_ENTER);
                  
                }
                  
                  _scroll_background();
                  
                $self.triggerHandler($.Events.SCROLL,$.distancefromfold($self,{threshold:config.threshold}) - config.threshold)
                
              }else{
                
                if ($self.hasClass('_active')){
                
                  $self.removeClass('_active');
                  
                  $self.triggerHandler($.Events.SCROLL_LEAVE);
                  
                }
              
              }
              
            
            })
            
            
        }
        
        function _scroll_background() {

          var _x = '50% '
          var _z = '40% '        
          var bpos = _x + (-($.distancefromfold($self,{threshold:config.threshold}) - config.threshold) * config.offset_intertia) + 'px';
		  var bpos2 = _z + (-($.distancefromfold($self,{threshold:config.threshold}) - config.threshold) * config.offset_intertia) + 'px';         
		  $self.css({'backgroundPosition':bpos})

        }
        
        /*if (config.auto_scroll)
          _scroll_background();*/
            
     });
     
    return this;
     
  } //Bloque
  
  $.fn.arriba = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '90% ' + (200+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '40% ' + (70+$.Window.height()/2-distance/4) + 'px';
			   bpos3 = '80% ' + (40+$.Window.height()/2-distance/5) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		    
        }
        
            
     });
     
    return this;
     
  } //arriba
  
   $.fn.abajo = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '90% ' + (200+$.Window.height()/2-distance/4) + 'px';
		       bpos2 = '40% ' + (70+$.Window.height()/2-distance/4) + 'px';
			   bpos3 = '80% ' + (40+$.Window.height()/2-distance/5) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		    
        }
        
            
     });
     
    return this;
     
  } //abajo
  
    $.fn.uno = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg4 = $self.find('.bg4'),
			$bg5 = $self.find('.bg5'),
			$bg6 = $self.find('.bg6'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '90% ' + (220+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '40% ' + (100+$.Window.height()/2-distance/4) + 'px';
			   bpos3 = '20% ' + (130+$.Window.height()/2-distance/2) + 'px'; //�hasta
			   bpos4 = '40% ' + (90+$.Window.height()/2-distance/3.5) + 'px';//donde
			   bpos5 = '56% ' + (60+$.Window.height()/2-distance/2) + 'px';  //queres
			   bpos6 = '80% ' + (5+$.Window.height()/2-distance/3.7) + 'px'; //llegar?
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg4.css({'backgroundPosition':bpos4});
		   $bg5.css({'backgroundPosition':bpos5});
		   $bg6.css({'backgroundPosition':bpos6});
		    
        }
        
            
     });
     
    return this;
     
  } //uno
  
  $.fn.dos = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '95% ' + (200+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (-40+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (430+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //dos
  
  $.fn.tres = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg4 = $self.find('.bg4'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '22% ' + (230+$.Window.height()/2-distance/4) + 'px';
		       bpos2 = '80% ' + (150+$.Window.height()/3-distance/6) + 'px';
			   bpos3 = '80% ' + (300+$.Window.height()/3-distance/3) + 'px';
			   bpos4 = '80% ' + (600+$.Window.height()/3-distance/1.5) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg4.css({'backgroundPosition':bpos4});
		    
        }
        
            
     });
     
    return this;
     
  } //tres
  
 
   
  $.fn.cuatro = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '95% ' + (130+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (0+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (470+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //cuatro
  
  
  $.fn.cinco = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg4 = $self.find('.bg4'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '85% ' + (0+$.Window.height()/2-distance/2) + 'px';
		       bpos2 = '95% ' + (250+$.Window.height()/2-distance/4) + 'px';
			   bpos3 = '72% ' + (340+$.Window.height()/2-distance/4.2) + 'px';
			   bpos4 = '72% ' + (340+$.Window.height()/2-distance/4.2) + 'px';
			   bpos5 = '72% ' + (340+$.Window.height()/2-distance/4.2) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg4.css({'backgroundPosition':bpos4});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //cinco
  
  
  $.fn.seis = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '95% ' + (130+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (0+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (470+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //seis

   
  $.fn.siete = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '90% ' + (165+$.Window.height()/2-distance/4) + 'px';
		       bpos2 = '65% ' + (260+$.Window.height()/2-distance/2) + 'px';
			   bpos3 = '60% ' + (40+$.Window.height()/2-distance/5) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		    
        }
        
            
     });
     
    return this;
     
  } //siete
  
   $.fn.ocho = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '95% ' + (130+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (0+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (470+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //ocho
   
  
  
  $.fn.nueve = function() {
   this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg4 = $self.find('.bg4'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '96% ' + (20+$.Window.height()/2-distance/2.5) + 'px';
		       bpos2 = '20% ' + (340+$.Window.height()/2-distance/2) + 'px';
			   bpos3 = '96% ' + (-150+$.Window.height()/2-distance/5) + 'px';
			   bpos4 = '96% ' + (-150+$.Window.height()/2-distance/4) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg4.css({'backgroundPosition':bpos4});

		    
        }
        
            
     });
     
    return this;
     
  } //nueve
  
    $.fn.diez = function() {
   this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '95% ' + (130+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (0+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (470+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //diez
  
     $.fn.footer = function() {
   this.each(function() { 
      
        var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
			$bg2 = $self.find('.bg2'),
			$bg3 = $self.find('.bg3'),
			$bg5 = $self.find('.bg5'),
			_threshold = -200;
        
        $self
          .Scrollable({threshold: _threshold,is_nav:true})
          .bind($.Events.SCROLL,on_scroll)
               
        function on_scroll(e,distance) {
          
           var bpos = '50% ' + (130+$.Window.height()/2-distance/3) + 'px';
		       bpos2 = '50% ' + (0+$.Window.height()/2-distance/3) + 'px';
			   bpos3 = '50% ' + (470+$.Window.height()/2-distance/3) + 'px';
			   bpos5 = '10% ' + (80+$.Window.height()/2-distance/3) + 'px';
		                         
           $bg.css({'backgroundPosition':bpos});
		   $bg2.css({'backgroundPosition':bpos2});
		   $bg3.css({'backgroundPosition':bpos3});
		   $bg5.css({'backgroundPosition':bpos5});
		    
        }
        
            
     });
     
    return this;
     
  } //footer
       
})(jQuery);


/* ---------------------------------- */

/* MainNav */

(function($) {

  
   $.fn.MainNav = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $ul = $('<ul/>').appendTo($self),
            $sections = $('[data-nav]'),
            _sections = new Array(),
            $navs = new Array(),
            _active = 0;
            
            
       if (!$.Mobile && !$.Unsupported) { 
        $sections.each(
          function(i){
            _sections.push($(this))
            $('<li/>').appendTo($ul).DotNav({id:$(this).attr('id'),name:$(this).attr('data-nav')});
        
          })
          
        $self.css({marginTop:-$self.height()/2})
        
        }
        
        $.Body
          .bind($.Events.SECTION_ENTER,
            function(e,id){
              
              $sections.each(
                function(i){
                  if ($(this).attr('id')==id)
                    _active = i;
              
                })
            
            })
          .bind($.Events.KEY_RIGHT,
            function(e){
              _active++;
              if (_active>$sections.length-1)
                _active=$sections.length-1;
              _seek();
          })
          .bind($.Events.KEY_LEFT,
            function(e){
              _active--;
              if (_active<0)
                _active=0;
              _seek()
              
          })
          
          
          function _seek() {
            //$.Body.triggerHandler($.Events.SCROLL_TO,_sections[_active].attr('id'))
			$("html,body").animate({"scrollTop":$("#"+_sections[_active].attr('id')).offset().top});

			if(_sections[_active].attr('id') == "wrapper"){$("nav#main li:eq(0) a").css("background-position","0 0");}
			else{$("nav#main li:eq(0) a").css("background-position","");}
				
          }
        
            
     });
     
    return this;
     
  } // Main Nav
  
  $.fn.DotNav = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
   
     this.each(function() { 
      
        var $self = $(this),
            $a = $('<a/>'),
            $h1 = $('<h1/>').appendTo($self),
            $span = $('<span/>').html(config.name).appendTo($h1),
            $id = config.id;

            $a
              .attr('href',"#/"+config.name.split(' ').join('_'))
              .html($id)
              .appendTo($self)
              .bind('click',
                function(e){
                  
                  //$.Body.triggerHandler($.Events.SCROLL_TO,$id)
                  $("html,body").animate({"scrollTop":$("#"+$id).offset().top})
				  if($id == "wrapper"){$("nav#main li:eq(0) a").css("background-position","0 0");}
				  else{$("nav#main li:eq(0) a").css("background-position","");}
			
                  e.preventDefault();
                  
                })
            
            $self
              .attr('data-id',$id);
              
        $a
          .bind('mouseenter',
            function(e) {
              if ($('._playing').length==0)
              if ($.browser.msie)
                $h1.stop().css({display:'block',right: 30})
              else
                $h1.stop().css({display:'block'}).animate({right:30,opacity:1},0,'easeOutQuart')
            })
          .bind('mouseleave',
            function(e) {
              if ($.browser.msie)
                $h1.stop().css({display:'none',right: 30})
              else
                $h1.stop().animate({right:15,opacity:0},0,'easeOutQuart',function(){$h1.stop().css({display:'none'})})
            });
            
            
        $.Body
          .bind($.Events.SECTION_ENTER,
            function(e,id){
            
              if (id==$id)
                $self.addClass('active')
              else
                $self.removeClass('active')
              
              
              
            
            });
        
            
     });
     
    return this;
     
  } // DotNav

    
   
    
})(jQuery);


/* ---------------------------------- */

/* Counter */

(function($) {

  
   $.fn.Counter = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $mark = $self.find('mark'),
            _total = 0;
            
        
        $.Window
          .bind('scroll',
            function(e){
            
            
              var scrolled = $(window).scrollTop();
              
              if (scrolled>999) {
              
                scrolled = _comma(scrolled.toString());
              
              }
              
              $mark.html(scrolled)
              
              
            
            });
      
        function _comma(nStr){
          nStr += '';
          x = nStr.split('.');
          x1 = x[0];
          x2 = x.length > 1 ? '.' + x[1] : '';
		  var rgx = /(\d+)(\d{2})/;
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
          }
          return x1 + x2;
        }
        
            
     });
     
    return this;
     
  }
    
   
    
})(jQuery);

/* ---------------------------------- */

/* Counter2 */

(function($) {

  
   $.fn.Counter2 = function() {
   
     this.each(function() { 
      
        var $self = $(this),
            $mark = $self.find('mark'),
            _total = 0;
            
        
        $.Window
          .bind('scroll',
            function(e){
            
            
              var scrolled = $(window).scrollTop();
              
              if (scrolled>999) {
              
                scrolled = _comma(scrolled.toString()-11100+'.00');
              
              }
              
              $mark.html(scrolled)
              
              
            
            });
      
        function _comma(nStr){
          nStr += '';
          x = nStr.split('.');
          x1 = x[0];
          x2 = x.length > 1 ? '.' + x[1] : '';
		  var rgx = /(\d+)(\d{5})/;
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
          }
          return x1 + x2 ;
        }
        
            
     });
     
    return this;
     
  }
    
   
    
})(jQuery);

        
/* ---------------------------------- */

/* SiteScroll */

(function($) {

  
   $.fn.SiteScroll = function() {
   
     this.each(function() { 
      
        var $self = $(this);
            
        $.Body
          .bind($.Events.SCROLL_TO,
            function(e,id){
            
              var $element = $('#'+id),
                  $header = $element.find('header'),
                  _align = $element.attr('data-align'),
                  _offset = $element.attr('data-scrolloffset') ? parseInt($element.attr('data-scrolloffset')) : 50,
                  _top = $element.offset().top;
              
              
              if ($header.length>0 && _align!="top") { 
                  
                  _top = $header.offset().top  + $header.height()/2 - $.Window.height()/2;
              
              
                  if (_top > $header.offset().top)
                    _top = $header.offset().top - 50
                
              }
              
              if (_align=="center" && $element.height()>$.Window.height()) {
              
                _top = $element.offset().top + ($element.height()-$.Window.height())/2
              
              }
              
            
              
              $.Scroll
                .stop()
                .animate(
                  { 'scrollTop': _top },
                  800,
                  'easeInOutQuart'
                )
                
              
              
            })
        
            
     });
     
    return this;
     
  }
    
   
    
})(jQuery);

/* ---------------------------------- */

/* TargetBlank */

(function($) {

  
   $.fn.TargetBlank = function() {
   
     this.each(function() { 
      
        var $self = $(this);
            
        
        $self
        .attr('target','_blank')
        .bind('click',on_click);
        
        function on_click(e){
        
        }
        
            
     });
     
    return this;
     
  }
    
   
    
})(jQuery);
    

/* ---------------------------------- */

/* Keyboard */

(function($) {


   $.fn.Keyboard = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 
      
        var $self = $(this);
      
        $(document)
        .bind('keydown',on_keydown);
        
        function on_keydown(e) {
          
          var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
          
          switch(key) {

             
             case 27: //escape

              $.Body.triggerHandler($.Events.KEY_ESC);
                        
             break;
             
             case 32: //space

              $.Body.triggerHandler($.Events.KEY_SPACE);
                        
             break;
             
             case 38: //top
              
              $.Body.triggerHandler($.Events.KEY_UP);
                        
             break;
           
             case 39: //right

              $.Body.triggerHandler($.Events.KEY_RIGHT);
              e.preventDefault();
              
             break;
             
             case 40: ///bottom
            
              $.Body.triggerHandler($.Events.KEY_DOWN);
                        
             break;
              
             case 37: //left
             
              $.Body.triggerHandler($.Events.KEY_LEFT);
                        
             break;
             
             
          }//switch
          
        }//keydown
  
      }); 
      
      return this;
    
  } 
  

})(jQuery);


/* ---------------------------------- */

/* Worker */

(function($) {


    $.distancefromfold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return (fold + settings.threshold) - $element.offset().top ;
    };
    
    $.belowthefold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $element.offset().top - settings.threshold;
    };
    
    $.rightoffold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $element.offset().left - settings.threshold;
    };
        
    $.abovethetop = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $element.offset().top + settings.threshold  + $element.height();
    };
    
    $.leftofbegin = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $element.offset().left + settings.threshold + $element.width();
    };
    
    $.inview = function($element, settings) {
        return ($.abovethetop($element,settings)!=true && $.belowthefold($element,settings)!=true)
    };


    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    });
    
})(jQuery);    