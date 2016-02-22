// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.qtip.min
//= require rocky


$(document).ready(function(){
  $('a').on('click', function(e){
    var message=$(this).attr('href');
    if(message.indexOf("step_3")>-1){
      message="Options for Voting Page (2): National Mail Voter Form link";
    }
    if(message.indexOf("step_4")>-1){
      message="Natl Form Page (4): Eligibility/Next Step button";
    }
    ga('send', 'event', 'VoterRegTool','link clicked', message);
    window.location = $(this).attr('href');
  });


  $('form').submit(function(e){
    var pathArray = window.location.pathname.split( '/' );
    pathArray=pathArray[pathArray.length-1];
    switch(pathArray){
      case "new":
        pathArray="Entry Page (1): Register to Vote/Select State/Submit button";
        break;
      case "step_3":
        pathArray="Natl Form Page (3): Check Eligibility button";
        break;
      case "step_4":
        pathArray="Natl Form Page (5): Personal Info/Next Step button";
        break;
      case "step_5":
        pathArray="Review & Confirm Info Page (6): Generate Form button";
        break;
    }
    ga('send', 'event', 'VoterRegTool','form submitted', pathArray);
    return true;
  })
});
/**
 * Accordion
 *
 * An accordion component.
 *
 * @param {jQuery} $el A jQuery html element to turn into an accordion.
 */
function Accordion($el) {
  var self = this;
  this.$root = $el;
  this.$root.on('click', 'button', function(ev) {
    var expanded = JSON.parse($(this).attr('aria-expanded'));
    ev.preventDefault();
    self.hideAll();
    if (!expanded) {
      self.show($(this));
    }
  });
}

Accordion.prototype.$ = function(selector) {
  return this.$root.find(selector);
}

Accordion.prototype.hide = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);

  $button.attr('aria-expanded', false);
  $content.attr('aria-hidden', true);
};

Accordion.prototype.show = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);

  $button.attr('aria-expanded', true);
  $content.attr('aria-hidden', false);
};

Accordion.prototype.hideAll = function() {
  var self = this;
  this.$('button').each(function() {
    self.hide($(this));
  });
};

/**
 * accordion
 *
 * Initialize a new Accordion component.
 *
 * @param {jQuery} $el A jQuery html element to turn into an accordion.
 */
function accordion($el) {
  return new Accordion($el);
}
$(function() {
  $('[class^=usa-accordion]').each(function() {
    accordion($(this));
  });
});