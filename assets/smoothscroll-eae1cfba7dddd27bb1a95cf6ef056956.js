$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);if(target=target.length?target:$("[name="+this.hash.slice(1)+"]"),target.length)return $("html,body").animate({scrollTop:target.offset().top},500),!1}})});