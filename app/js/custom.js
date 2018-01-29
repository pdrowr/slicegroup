$('#sidebar-trigger').click(function(event) {
  $('#sidebar').css('right', '0')
});

$('#close-sidebar').click(function(event) {
  $('#sidebar').css('right', '-100%')
});

$('#sidebar').find('a').click(function() {
  $('#sidebar').css('right', '-100%')
})

var starter = $('#starter')
    borderStarter = $('.bordered-starter')
    enterprise = $('#enterprise')
    borderEnterprise = $('.bordered-enterprise')
    corporative = $('#corporative')
    borderCorporative = $('.bordered-corporative');

starter.click(function() {
  borderStarter.toggleClass('hidden')
  enterprise.prop('checked', false);
  borderEnterprise.addClass('hidden')
  corporative.prop('checked', false);
  borderCorporative.addClass('hidden')
})

enterprise.click(function() {
  borderEnterprise.toggleClass('hidden')
  starter.prop('checked', false);
  borderStarter.addClass('hidden')
  corporative.prop('checked', false);
  borderCorporative.addClass('hidden')
})

corporative.click(function() {
  borderCorporative.toggleClass('hidden')
  starter.prop('checked', false);
  borderStarter.addClass('hidden')
  enterprise.prop('checked', false);
  borderEnterprise.addClass('hidden')
})

var sStarter = $('#social-starter')
    borderSStarter = $('.bordered-social-starter')
    conversion = $('#conversion')
    borderConversion = $('.bordered-conversion')
    sCorporative = $('#corporative-social')
    borderSCorporative = $('.bordered-social-corporative')
    platinum = $('#platinum')
    borderPlatinum = $('.bordered-platinum');

sStarter.click(function() {
  borderSStarter.toggleClass('hidden')
  conversion.prop('checked', false);
  borderConversion.addClass('hidden')
  sCorporative.prop('checked', false);
  borderSCorporative.addClass('hidden')
  platinum.prop('checked', false);
  borderPlatinum.addClass('hidden')
})

conversion.click(function() {
  borderConversion.toggleClass('hidden')
  sStarter.prop('checked', false);
  borderSStarter.addClass('hidden')
  sCorporative.prop('checked', false);
  borderSCorporative.addClass('hidden')
  platinum.prop('checked', false);
  borderPlatinum.addClass('hidden')
})

sCorporative.click(function() {
  borderSCorporative.toggleClass('hidden')
  sStarter.prop('checked', false);
  borderSStarter.addClass('hidden')
  conversion.prop('checked', false);
  borderConversion.addClass('hidden')
  platinum.prop('checked', false);
  borderPlatinum.addClass('hidden')
})


platinum.click(function() {
  borderPlatinum.toggleClass('hidden')
  sStarter.prop('checked', false);
  borderSStarter.addClass('hidden')
  conversion.prop('checked', false);
  borderConversion.addClass('hidden')
  sCorporative.prop('checked', false);
  borderSCorporative.addClass('hidden')
})


$(window).scroll(function() {
  scroll = $(window).scrollTop()

  $('.scroll-baneer').css({
    'background-position-y': -(scroll * .5)+ 'px'
  })

  if (scroll <= 900) {
    $('#description-card').css({
      'top': -7+(scroll * 0.0125)+ 'em'
    })
  }
})


// /////
$('#domain-trigger').click(function() {
  $('#search-domain').addClass('animated fadeOutDown')
  $('#search-domain').css('display', 'none')
  $('#have-domain').css('display', 'block')
  $('#have-domain').addClass('animated fadeInUp')
})
