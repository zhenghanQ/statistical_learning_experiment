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
var spaceship_ladder = [{'stimulus': 'images/Spaceship1.bmp'}, 
{'stimulus': 'images/Spaceship2.bmp'}, {'stimulus': 'images/Spaceship3.bmp'}, 
{'stimulus':'images/Ladder1.bmp'}, {'stimulus': 'images/Ladder2.bmp'}, 
{'stimulus': 'images/Ladder3.bmp'}];


// adding the above array of images/instructions to the timeline
var start_instructions = {
     type: 'single-stim',
     timeline: spaceship_ladder,
     choices: ['F'],
     timing_post_trial: 400,
     response_ends_trial: true
};


// displaying task instructions and target alien again
var target_alien_reminder = {
    type: 'single-stim',
    stimulus: function() {
        var num = jsPsych.data.getDataByTrialIndex(1);
        return num.stimulus;
    },
    prompt:  "<p>Remember, this is the special alien to keep track of. The aliens will appear " +
             "one at a time on the screen as they line up. To keep track of our special alien press " +
             "the spacebar whenever you see it.</p>",
    choices: ['F'],
    response_ends_trial: true,
    timing_post_trial: 400
};


// the sequence of images to show
var seq1 = [3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,
            3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,
            3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3];


// creates a javascript object that will be used in the for loop below
// this helps with defining the familiarizaiton block
var pics = [];
pics['1'] = 'images/circle.png';
pics['2'] = 'images/triangle.png';
pics['3'] = 'images/trapezoid.png';


// creates the familiarization block sequence to be fed into struct_block
// remember, the structure must be {'stimulus': 'path/to/image.png'}
var img_block_1 = [];
for (i=0; i<seq1.length; i++) {
    img_block_1.push({'stimulus': pics[seq1[i]]});  
}


// this is the strucutred block
var struct_block = {
     type: 'single-stim',
     choices: ['F'],
     timeline: img_block_1,
     timing_response: 800,
     timing_post_trial: 200,
     response_ends_trial: false
};

// test phase instructions begin
var end_struck_block = {
  type: 'text',
  text: 'Great job! We are now going to give you another set of instructions please pay attention!',
  cont_key: ['F']
};

var seq2 = [3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,
            3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,
            3,1,2,1,2,3,2,1,2,1,2,3,1,2,3,3,1,2,1,2,3,2,1,2,1,2,3,1,2,3];
            


var img_block_2 = [];
for (i=0; i<seq2.length; i++) {
    if (i % 7 === 0 && i !== 0) {
        img_block_2.push({'stimulus': '',
                          'prompt': 'Did the first 3 belong to a group or did the last 3 ? Press 1 for the first or 2 for the last',
                          'choices': ['1','2'], 
                          'timing_response': 160000,
                          'timing_post_trial': 200,
                          'response_ends_trial': true});
    } else {
        img_block_2.push({'stimulus': pics[seq2[i]],
                          'response_ends_trial': false,
                          'timing_response': 800,
                          'timing_post_trial': 200});
    }
}

// create the forced choice block
var forced_choice_block = {
     type: 'single-stim',
     timeline: img_block_2,
     timing_response: 800,
     timing_post_trial: 200,
     response_ends_trial: false
};

// add everything to the timeline. 
// in javascript object.push() is equivalent to what you get in python for object.append()
timeline.push(par_id);  
timeline.push(target_alien);
timeline.push(start_instructions);
timeline.push(target_alien_reminder);
timeline.push(struct_block);
timeline.push(end_struck_block);
timeline.push(forced_choice_block);

// run the experiment, full screen, and tell it what to do once it's done
jsPsych.init({
    timeline: timeline,
    fullscreen: true,
    on_finish: function() {
        jsPsych.data.displayData();
        //jsPsych.data.localSave('timing_test.csv', 'csv');
     }
});

