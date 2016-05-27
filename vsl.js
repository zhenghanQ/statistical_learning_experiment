var timeline = [];

// get participant information, and task condition    
var par_id = {
    type: 'survey-text',
    questions: ['Enter number specification Number','Enter your participant number'],
    timing_post_trial: 1000
};


// helper function for defining task condition
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};


// display target alien along with intial instructions
var target_alien = {
    type: 'single-stim',
    stimulus: function() {
        var num = jsPsych.data.getLastTrialData();
        return 'images/Alien{}.png'.format(num.responses[7]);
    },
    prompt:  "<p>Hi there, today you are going to see some aliens line up to enter a cool spaceship. " +
             "We need you to help us keep track of a very special alien as the aliens line up to enter their spaceship. " +
             "The special alien is shown above.</p>",
    choices: ['F'],
    response_ends_trial: true,
    timing_post_trial: 400
};


// array containing the pictures for the next set of instructins
var spaceship_ladder = ['images/Spaceship1.bmp', 'images/Spaceship2.bmp', 'images/Spaceship3.bmp', 'images/Ladder1.bmp', 'images/Ladder2.bmp', 'images/Ladder3.bmp'];


// adding the above array of images/instructions to the timeline
var start_instructions = {
     type: 'single-stim',
     choices: ['F'],
     timeline: spaceship_ladder,
     timing_response: 800,
     timing_post_trial: 200,
     response_ends_trial: false
};


var target_alien_reminder = {
    type: 'single-stim',
    stimulus: 'images/Alien1.png',
    choices: ['F'],
    response_ends_trial: true,
    timing_response: 100,
    timing_post_trial:400
};


/*
var seq1 = [
    3,1,2,3,2,2,1,2,3,2,1,2,3,2,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,2,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
    3,1,2,3,2,2,1,2,3,2,1,2,3,3,1,1,1,2,2,2,3,3,3,2,1,1,2,3,2,1,2,3,2,1,1,2,3,2,1,1,2,2,3,3,2,3,2,1,
];
*/

var seq1 = [3];

var pics = [];
pics['1'] = 'images/circle.png';
pics['2'] = 'images/triangle.png';
pics['3'] = 'images/trapezoid.png';
    
var img_block_1 = [];
for (i=0; i<seq1.length; i++) {
    img_block_1.push({'stimulus': pics[seq1[i]]});  
}

var struct_block = {
     type: 'single-stim',
     choices: ['F'],
     timeline: img_block_1,
     timing_response: 800,
     timing_post_trial: 200,
     response_ends_trial: false
};

timeline.push(par_id);  
timeline.push(target_alien);
timeline.push(start_instructions);
timeline.push(target_alien_reminder);
timeline.push(struct_block);
 


jsPsych.init({
    timeline: timeline,
    fullscreen: true,
    on_finish: function() {
        jsPsych.data.displayData();
        //jsPsych.data.localSave('timing_test.csv', 'csv');
     }
});

