$('#next-1').click(function() {
  $('#user-dates').css('left', '0')
})

$('#back-1').click(function() {
  $('#user-dates').css('left', '-100%')
})

$('#next-2').click(function() {
  $('#domain').css('left', '0')
})

$('#back-2').click(function() {
  $('#domain').css('left', '-100%')
})

$('#next-3').click(function() {
  $('#plan').css('left', '0')
})

$('#back-3').click(function() {
  $('#plan').css('left', '-100%')
})

$('.card').click(function(){
  $(this).find('i').toggleClass('rotate')
})

$('#yes').click(function() {
  $('#no').prop('checked', false);
  $('#have-domain').css('display', 'block')
  $('#search-domain').css('display', 'none')
})

$('#no').click(function() {
  $('#yes').prop('checked', false);
  $('#have-domain').css('display', 'none')
  $('#search-domain').css('display', 'block')
})

$('#sidebar-trigger').click(function(event) {
  $('#sidebar').css('right', '0')
});

$('#close-sidebar').click(function(event) {
  $('#sidebar').css('right', '-100%')
});

$('#sidebar').find('a').click(function() {
  $('#sidebar').css('right', '-100%')
})

// social

$('#next-social-1').click(function() {
  $('#social-media').css('left', '0')
})

$('#back-social-1').click(function() {
  $('#social-media').css('left', '-100%')
})

$('.social-card').click(function() {
  $(this).find('.toggle').toggleClass('item-hidden')
  var color = $(this).attr('data-color')

  // $(this).css({
  //   'background': color,
  //   'color': '#fff'
  // })
})

$('#next-social-2').click(function() {
  $('#plan-social').css('left', '0')
})

$('#next-social-2').click(function() {
  $('#plan-social').css('left', '0')
})

$('#back-social-2').click(function() {
  $('#plan-social').css('left', '-100%')
})


//////

$('#starter').click(function() {
  $('.bordered-starter').toggleClass('hidden')
  $('#enterprise').prop('checked', false);
  $('.bordered-enterprise').addClass('hidden')
  $('#corporative').prop('checked', false);
  $('.bordered-corporative').addClass('hidden')
})

$('#enterprise').click(function() {
  $('.bordered-enterprise').toggleClass('hidden')
  $('#starter').prop('checked', false);
  $('.bordered-starter').addClass('hidden')
  $('#corporative').prop('checked', false);
  $('.bordered-corporative').addClass('hidden')
})

$('#corporative').click(function() {
  $('.bordered-corporative').toggleClass('hidden')
  $('#starter').prop('checked', false);
  $('.bordered-starter').addClass('hidden')
  $('#enterprise').prop('checked', false);
  $('.bordered-enterprise').addClass('hidden')
})
