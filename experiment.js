var timeline = [];
    
var par_id = {
    type: 'survey-text',
    questions: ['Please enter your participant ID']
};
    
var instructions_block = {
    type: "text",
    text: "<p>In this experiment you will see images appear one at a time " +
         "your job is simply to watch the images as they appear and press any key " +
        "when you see a yellow circle appear on the screen.</p>",
    timing_post_trial: 2000
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
timeline.push(instructions_block);
timeline.push(struct_block);
    
jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.localSave('timing_test.csv', 'csv');
    }
});
