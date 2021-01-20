$(document).ready(function(){
 
    // SmartWizard initialize
    $('#smartwizard').smartWizard({
        // theme: 'dots',
        // transitionEffect: 'slide',
        // transitionSpeed: '400',
        toolbarSettings: {
            toolbarPosition: 'bottom', // none, top, bottom, both
            toolbarButtonPosition: 'right', // left, right, center
            showNextButton: true, // show/hide a Next button
            showPreviousButton: true, // show/hide a Previous button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
    });
   
  });