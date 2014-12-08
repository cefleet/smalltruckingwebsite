var SC = {
  start : function(){
    $('#main').on('click', SC.goto_main);
    $('.goback').on('click', SC.goto_main);
    $('#goto_drivers').on('click', SC.goto_drivers);
    $('#goto_companies').on('click', SC.goto_companies);
  },

  goto_drivers : function(){
    var fadeIn = function(){
      $('#drivers').fadeIn();
    };
    $('#title').fadeOut(100,fadeIn);
  },

  goto_companies : function(){
    var fadeIn = function(){
      $('#companies').fadeIn();
    };
    $('#title').fadeOut(100,fadeIn);
  },

  goto_main : function(){
    var fadeIn = function(){
      $('#title').fadeIn();
    };

    if($('#companies').is(':visible')){
      $('#companies').fadeOut(100,fadeIn);
    }
    if($('#drivers').is(":visible")){
      $('#drivers').fadeOut(100,fadeIn);
    }
  }
};

$(document).ready(SC.start);
