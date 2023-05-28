var VStep2;// A variable for future validator
var step2 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep2 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep2.addValidator($('div.droppable[name="step2-droppable1"]'), 'state')
        .addValidator($('div.droppable[name="step2-droppable2"]'), 'activity')
        .addValidator($('div.droppable[name="step2-droppable3"]'), 'action')
        .addValidator($('div.droppable[name="step2-droppable4"]'), 'use-case')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page2 button.check').click(function () {
            VStep2.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep2.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP2_DROPPABLE1: new DroppableArea('step2-droppable1')
                .addClass('input')
                .render(),
            STEP2_DROPPABLE2: new DroppableArea('step2-droppable2')
                .addClass('input')
                .render(),
            STEP2_DROPPABLE3: new DroppableArea('step2-droppable3')
                .addClass('input')
                .render(),
            STEP2_DROPPABLE4: new DroppableArea('step2-droppable4')
                .addClass('input')
                .render(),
            STEP2_DRAGGABLE: new DraggableGroup('step2-draggable9')
                .addClass('value')
                .addOption('<img src="state.png" width=150>', 'state')
                .addOption('<img src="activity.png" width=150>', 'activity')
                .addOption('<img src="action.png" width=150>', 'action')
                .addOption('<img src="use-case.png" width=150>', 'use-case')
                //.randomize() // You can randomize draggable elements
                .render(),
        }
    }
};