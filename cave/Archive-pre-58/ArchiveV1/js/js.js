var menuBtn = $("#menu-button"),
  menu = $("#sommairefixe");

/* Fonction d'impression de l'article en cours */
function printArticle(articleName) {
  var printContents = document.getElementById(articleName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

// Cacher le menu
function hideMenu() {
    menuBtn.removeClass("active");
    menu.attr('aria-hidden', 'true');
    menuBtn.attr('aria-expanded', 'false');
  }
  // Afficher le menu
function showMenu() {
  menuBtn.addClass("active");
  menu.attr('aria-hidden', 'false');
  menuBtn.attr('aria-expanded', 'true');
}


$(document).ready(function () {

  // Contrast
  $("#contrast").on("click", function (e) {
    var that = $(this),
      body = $("body");

    if (that.hasClass("active")) {
      that.removeClass("active").attr("title", "Activer le mode contraste");
      body.removeClass("contrast-active");
    } else {
      that.addClass("active").attr("title", "Désactiver le mode contraste");
      body.addClass("contrast-active");
    }

    return e.preventDefault();
  });

  // Anciens magazines
  $("#sous-titre").on("change", function (e) {
    var mag = $(this).val(),
      url = "";

    if (mag == "last") {
      url = "index.html";
    } else {
      url = "numero-" + mag + "/index.html";
    }

    window.location.href = window.location.href.replace(/(numero-[0-9A-Z]+\/)?index\.html(#[a-zA-Z0-9]+)?/, url);
  });

  // Menu
  menuBtn.on("click", function (e) {

    if (menuBtn.hasClass("active")) {
      hideMenu();
    } else {
      showMenu();
    }

    return e.preventDefault();

  });
});

if("matchMedia" in window) { 
  
  // Sur un petit écran on cache le menu
  if (window.matchMedia("(max-width: 640px)").matches) {
    hideMenu();
  }
  else if (window.matchMedia("(min-width: 960px)").matches) {
    /* Fonction de menu flottant */
    /*jslint browser: true*/
    /*global $, jQuery, alert*/
    $(function () {
      var $sidebar = $("#sommaire"),
        $window = $(window),
        offset = $("#page").offset(),
        topPadding = 0;
      $window.scroll(function () {
        if ($window.scrollTop() > offset.top) {
          $sidebar.addClass("fixed");
        } else {
          $sidebar.removeClass("fixed");
        }
      });
    });

    /* Fonction de changement de classe pour le lien vers l'article affiché à l'écran*/
    /*jslint browser: true*/
    /*global $, jQuery, alert*/

    $(document).ready(function () {
      $(document).on("scroll", onScroll);

      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').removeClass('active');
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
    });

    function onScroll(event) {
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
          var currentLink = $(this);
          var refElement = $(currentLink.attr("href"));
          if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
          } else {
            currentLink.removeClass("active");
          }
        });
      }
      /* Fonction de changement de CSS à l'activation du lien de menu */
  }
}


/* Fonction de détection mobile. Si mobile, aucune autre fonction n'est active */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // aucune fonction déclenchée

} else {
  /* Fonction de refraichisseemnt lors d'un resize d'écran pour vérifier l'applicabilité des fonctions suivantes */

  $(window).bind('resize', function (e) {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function () {
      this.location.reload(false); /* false to get page from cache */
    }, 100);
  });

}