var VStep4;// A variable for future validator
var step4 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep4 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep4
        .addValidator($('select[name="step4-select1"]'), 'option1')
        .addValidator($('select[name="step4-select2"]'), 'option2')
        .addValidator($('select[name="step4-select3"]'), 'option3')
        .addValidator($('select[name="step4-select4"]'), 'option4')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers
        $('.page4 button.check').click(function () {
            VStep4.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep4.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP4_SELECT1: new Select('step4-select1')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP4_SELECT2: new Select('step4-select2')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP4_SELECT3: new Select('step4-select3')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION4}}', 'option4').render(),
            STEP4_SELECT4: new Select('step4-select4')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION1}}', 'option1')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION2}}', 'option2')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION3}}', 'option3')
                .addOption('{{STEP4_ELEMENTSTEST_OPTION4}}', 'option4')
                //.randomize() -- You can randomize select choice elements
                .render()
        }
    }
};