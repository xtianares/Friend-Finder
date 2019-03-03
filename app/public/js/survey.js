// personality Questions
let questions = [
    "You find it difficult to introduce yourself to other people.",
    "Your home and work environments are quite tidy.",
    "You do not mind being at the center of attention.",
    "You rarely get carried away by fantasies and ideas.",
    "You are a relatively reserved and quiet person.",
    "You frequently misplace your things.",
    "You worry too much about what other people think.",
    "If the room is full, you stay closer to the walls, avoiding the center.",
    "You feel very anxious in stressful situations.",
    "You often take initiative in social situations."
];

// setting global variables
let questionIndex = 0,
    answers = [],
    person = {};

const showQuestion = (index) => {
    // render the questions one by one from the quesrtions array
    if (answers.length < questions.length) {
        $(".questions").fadeIn("fast");
        $(".question").html(questions[index]); // display current question
    }
    else {
        person.scores = answers;
        // console.log(person);

        // handle api call here for comparison
        $.post("/api/friends", person).done(function(data) {
            console.log("response:" + JSON.stringify(data));

            // call modal box and show best match
            let friendHTML = `hello`;
            $('#fiend-match .modal-body').html(friendHTML);


            $('#fiend-match').modal('show');

            // clear person data and reinitialize the survey
            questionIndex = 0;
            answers = [];
            person = {};
            console.log("Reinitialized survey...")
            $("#name").val(""),
            $("#photo").val("");
            $(".personal-info").fadeIn("fast");
        });
    }
}

$(".personal-info").on("click", ".take-survey", function(e) {
    e.preventDefault();
    let name = $("#name").val(),
        photo = $("#photo").val();
    $(".personal-info").fadeOut("fast", function() {
        showQuestion(questionIndex);
    });

    // setting the person's info
    person.name = name;
    person.photo = photo;
    // console.log(person);
})

$(".answer").on("click", "a", function(e) {
    e.preventDefault();
    let answer = $(this).text();
    if (questionIndex < questions.length) {
        answers.push(parseInt(answer));
        questionIndex++;
        // console.log(answers);
        // console.log(questionIndex);
        $(".questions").fadeOut(400, function() {
            showQuestion(questionIndex);
        });
    }
})
