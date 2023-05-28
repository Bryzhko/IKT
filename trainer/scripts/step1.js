var VStep1;// A variable for future validator
var n, h, e, a,b,y; 
var step1 = function () {
    var plot = null;
    this.preDispatch = function (callback) {
        var w = new WolframAlpha(); // Making a call to wolfram api to build a plot
        w.setQuery('3x^2+2x+5').plot(function (data) {
            plot = '<img src="' + data + '">';
            callback();
        });
        //Making a call to LateX to generate an image of formula
        step1_latex = null;
        step1_latex = new LateX();
        step1_latex.setFormula("G_{\\mu \\nu }=8\\pi G(T_{\\mu \\nu}+\\rho _{\\Lambda }g_{\\mu \\nu})");
    };

    this.postDispatch = function () {
        VStep1 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep1.addValidator($('div.droppable[name="step1-droppable1"]'), 'object')
        .addValidator($('div.droppable[name="step1-droppable2"]'), 'class')
        .addValidator($('div.droppable[name="step1-droppable3"]'), 'interface')
        .addValidator($('div.droppable[name="step1-droppable4"]'), 'collaboration')
        .addValidator($('div.droppable[name="step1-droppable5"]'), 'actor')
        .addValidator($('div.droppable[name="step1-droppable6"]'), 'component')
        .addValidator($('div.droppable[name="step1-droppable7"]'), 'artifact')
        .addValidator($('div.droppable[name="step1-droppable8"]'), 'node')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page1 button.check').click(function () {
            VStep1.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep1.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP1_SELECT: new Select('step1-select')
                .addOption('{{ELEMENTSTEST_OPTION_ONE}}', 0)
                .addOption('{{ELEMENTSTEST_OPTION_TWO}}', 1)
                .addOption('{{ELEMENTSTEST_OPTION_THREE}}', 2)
                //.randomize() -- You can randomize select choice elements
                .render(),
            STEP1_DROPPABLE1: new DroppableArea('step1-droppable1')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE2: new DroppableArea('step1-droppable2')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE3: new DroppableArea('step1-droppable3')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE4: new DroppableArea('step1-droppable4')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE5: new DroppableArea('step1-droppable5')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE6: new DroppableArea('step1-droppable6')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE7: new DroppableArea('step1-droppable7')
                .addClass('input')
                .render(),
            STEP1_DROPPABLE8: new DroppableArea('step1-droppable8')
                .addClass('input')
                .render(),
            STEP1_DRAGGABLE: new DraggableGroup('step1-draggable9')
                .addClass('value')
                .addOption('<img src="object.png" width=150>', 'object')
                .addOption('<img src="class.png" width=150>', 'class')
                .addOption('<img src="interface.png" width=150>', 'interface')
                .addOption('<img src="collaboration.png" width=150>', 'collaboration')
                .addOption('<img src="actor.png" width=150>', 'actor')
                .addOption('<img src="component.png" width=150>', 'component')
                .addOption('<img src="artifact.png" width=150>', 'artifact')
                .addOption('<img src="node.png" width=150>', 'node')
                //.randomize() // You can randomize draggable elements
                .render(),
            STEP1_INPUT1: new TextInput('step1-input1')
                .render(),
            STEP1_TEXTINPUT: new TextInput('step1-textinput')
                .render(),
            STEP1_RADIOS: new Radios('step1-radios')
                .addRadio('{{RADIO_TEXT_1}}', 'onee')
                .addRadio('{{RADIO_TEXT_2}}', 'twoo')
                .addRadio('{{RADIO_TEXT_3}}', 'threee')
                .addRadio('{{RADIO_TEXT_4}}', 'fourr')
                .randomize() // You can randomize radio elements
                .render(),
            STEP1_INPUT: new TextInput('step1-input')
                .render(),
            STEP1_INPUT2: new TextInput('step1-input2')
                .render(),
            STEP1_INPUT3: new TextInput('step1-input3')
                .render(),
            STEP1_INPUT4: new TextInput('step1-input4')
                .render(),
            STEP1_INPUT5: new TextInput('step1-input5')
                .render(),
            STEP1_INPUT6: new TextInput('step1-input6')
                .render(),
            STEP1_INPUT7: new TextInput('step1-input7')
                .render(),
            STEP1_INPUT8: new TextInput('step1-input8')
                .render(),
            STEP1_CHECKBOX1: new CheckBox('step1-checkbox1')
                .setValue("ch1")
                .setLabel('{{{CHECKBOX1}}}')
                .render(),
            STEP1_CHECKBOX2: new CheckBox('step1-checkbox2')
                .setValue("ch2")
                .setLabel('{{{CHECKBOX2}}}')
                .render(),
            PLOT: plot,
            STEP1_LATEX: step1_latex != null ? step1_latex.render() : ""
        }
    }
};