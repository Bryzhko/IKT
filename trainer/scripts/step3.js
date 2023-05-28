var VStep3;// A variable for future validator
var step3 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep3 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep3.addValidator($('div.droppable[name="step3-droppable1"]'), 'package')
        .addValidator($('div.droppable[name="step3-droppable2"]'), 'comment')
        .addValidator($('select[name="step3-select1"]'), 'option1')
        .addValidator($('select[name="step3-select2"]'), 'option2')
        .addValidator($('select[name="step3-select3"]'), 'option3')
        .addValidator($('select[name="step3-select4"]'), 'option4')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers
        $('.page3 button.check').click(function () {
            VStep3.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep3.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP3_DROPPABLE1: new DroppableArea('step3-droppable1')
                .addClass('input')
                .render(),
            STEP3_DROPPABLE2: new DroppableArea('step3-droppable2')
                .addClass('input')
                .render(),
            STEP3_DRAGGABLE: new DraggableGroup('step3-draggable9')
                .addClass('value')
                .addOption('<img src="package.png" width=150>', 'package')
                .addOption('<img src="comment.png" width=150>', 'comment')
                //.randomize() // You can randomize draggable elements
                .render(),
            STEP3_SELECT1: new Select('step3-select1')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP3_SELECT2: new Select('step3-select2')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP3_SELECT3: new Select('step3-select3')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP3_SELECT4: new Select('step3-select4')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP3_ELEMENTSTEST_OPTION4}}', 'option4')
                //.randomize() -- You can randomize select choice elements
                .render()
        }
    }
};