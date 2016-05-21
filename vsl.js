var timeline = [];
    
var par_id = {
    type: 'survey-text',
    questions: ['Please enter your participant ID','target']
};
 
// function for string formating, helps with target selection 
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};


function target() {
    jsPsych.data.getLastTrialData();
    var exp_tar = 'images/Alien{}.png'.format(data.respones['Q1']);
    return exp_tar
};

var target_alien = {
    type: 'single-stim',
    stimulus: target(),
    choices['F'],
    response_ends_trial: true,
    timing_post_trial: 400
};

var welcome = {
    type: "text",
    text: "<p>Hi there, today you're going to see some aliens line up to enter a cool spaceship. " +
          "We need you to help us keep track of a very special alien as the aliens line up to enter their spaceship. " +
          "We'll show you the aline now.</p>",
    cont_key: ['F'],
    timing_post_trial: 400
};


var seq1 = [
    3,2,1,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,
];
    
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
timeline.push(welcome);
timeline.push(struct_block);
    
jsPsych.init({
    timeline: timeline,
    fullscreen: true,
    on_finish: function() {
        jsPsych.data.localSave('timing_test.csv', 'csv');
    }
});
