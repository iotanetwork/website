$("#enter-id").slideUp();
$('#last').hide();

//Single date range pickers
$(function() {
    // $('input[name="hours"]').daterangepicker({
    //     singleDatePicker: true,
    //     showDropdowns: true,
    //     minYear: 2018,
    //     maxYear: parseInt(moment().format('YYYY'),2)
    // });
    $('input[name="hours"]').datetimepicker({format: 'DD/MM/YYYY'});
});

$("#submit-id-button").click(function() {
    $(this).hide();
    /*$( "#submit-id" ).slideUp( "fast", function() {
  // Animation complete.
});*/
    $("#enter-id").slideDown("fast", function() {
        // Animation complete.
    });
    $("#enter-id-button").removeAttr('disabled');

});

$('.next').click(function() {
    if(this.id == 'first-btn') {
        if($('#discord__handle').val().length < 2) {
            return false;
        }
    }
    if(this.id == 'second-btn') {
        if($('#linkedin').val().length < 2) {
            return false;
        }
    }
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#' + nextId + ']').tab('show');
    return false;
})

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 4) * 100;

    $('.progress-bar').css({
        width: percent + '%'
    });
    //$('.progress-bar').text("Step " + step + " of 5");
    e.relatedTarget // previous tab
})

$('.first').click(function() {
    $('#myWizard a:first').tab('show')
})

$("#acknowledgement").on('change keyup paste input', function() {
    if ($("#acknowledgement").val().length > 0) {
        $('#last').show();
    } else {
        $('#last').hide();
    }
});

$('#last').click(function() {
    let checkArea1 = document.getElementById("area1");
    let checkArea2 = document.getElementById("area2");
    let checkArea3 = document.getElementById("area3");
    let checkOther = document.getElementById("areaOther");
    let interestCheckedData = "";
    if (checkArea1.checked == true) {
        interestCheckedData = $('#label-area1').text();
    }
    if (checkArea2.checked == true) {
        if (interestCheckedData.length == 0) {
            interestCheckedData = $('#label-area2').text();
        } else {
            interestCheckedData = interestCheckedData + ', ' + $('#label-area2').text();
        }
    }
    if (checkArea3.checked == true) {
        if (interestCheckedData.length == 0) {
            interestCheckedData = $('#label-area3').text();
        } else {
            interestCheckedData = interestCheckedData + ', ' + $('#label-area3').text();
        }
    }
    if (checkOther.value.length > 0) {
        if (interestCheckedData.length == 0) {
            interestCheckedData = checkOther.value;
        } else {
            interestCheckedData = interestCheckedData + ', ' + checkOther.value;
        }
    }
    interestCheckedData = interestCheckedData.replace(/\s\s+/g, ' ');
    interestCheckedData = interestCheckedData.replace(/\s*,/g, ",");
    interestCheckedData = $.trim(interestCheckedData)
    // Verticals
    let verticals = "";
    let vertical1 = document.getElementById("vertical1");
    let vertical2 = document.getElementById("vertical2");
    let vertical3 = document.getElementById("vertical3");
    let vertical4 = document.getElementById("vertical4");
    let vertical5 = document.getElementById("vertical5");
    let vertical6 = document.getElementById("vertical6");
    let vertical7 = document.getElementById("vertical7");
    let vertical8 = document.getElementById("vertical8");
    let vertical9 = document.getElementById("vertical9");
    let vertical10 = document.getElementById("vertical10");
    let verticalOther = document.getElementById("verticalOther");
    if (vertical1.checked == true) {
        verticals = $('#label-vertical1').text();
    }
    for (var i = 2; i < 11; i++) {
        let tmp_field = 'vertical' + i;
        let label_vertical = '#label-' + tmp_field;
        if (document.getElementById(tmp_field)['checked'] == true) {
            if (verticals.length == 0) {
                verticals = $(label_vertical).text();
                console.log('verticals 1:', verticals);
            } else {
                verticals = verticals + ', ' + $(label_vertical).text();
                console.log('verticals 2:', verticals);
            }
        }
    }
    if (verticalOther.value.length > 0) {
        if (verticals.length == 0) {
            verticals = verticalOther.value;
        } else {
            verticals = verticals + ', ' + verticalOther.value;
        }
    }
    verticals = verticals.replace(/\s\s+/g, ' ');
    verticals = verticals.replace(/\s*,/g, ",");
    verticals = $.trim(verticals)
    // console.log('verticals:', verticals);
    // //////////
    let applyData = {
        'email': $('#email').val(),
        'firstName': $('#name__first').val(),
        'lastName': $('#name__last').val(),
        'country': $("#country :selected").text(),
        'city': $('#info--city').val(),
        'socialAccounts': {
            'discord': $('#discord__handle').val(),
            'telegram': $('#telegram__handle').val(),
            'linkedin': $('#linkedin').val()
        },
        'profession': $('#profession').val(),
        'personalWebsite': $('#personal__website').val(),
        'resume': $('#resume').val(),
        'generalDlt': $('#generalDlt').val(),
        'generalIota': $('#generalIota').val(),
        'rateIota': $('#rateIota').val(),
        'interestedAreasIn': interestCheckedData,
        'whyIEN': $('#whyIEN').val(),
        'hours': $('#hours').val(),
        'perWeek': $('#perWeek').val(),
        'acknowledgement': $('#acknowledgement').val(),
        'verticals': verticals
    }
    // console.log('applyData:', new Date().toString(), applyData);
    var values = [
        new Date().toISOString(),
        applyData['firstName'],
        applyData['country'],
        applyData['city'],
        applyData['interestedAreasIn'],
        applyData['socialAccounts']['discord'],
        applyData['profession'],
        applyData['email'],
        applyData['socialAccounts']['linkedin'],
        applyData['personalWebsite'],
        applyData['whyIEN'],
        applyData['lastName'],
        applyData['resume'],
        applyData['acknowledgement'],
        applyData['socialAccounts']['telegram'],
        applyData['generalIota'],
        applyData['generalDlt'],
        applyData['perWeek'],
        applyData['verticals'],
        '',
        applyData['hours'],
        applyData['rateIota']
    ];

    $.ajax({
        type: 'POST',
        url: '/apply',
        dataType: 'json',
        data: {
            values: values
        },
        cache: false,
        success: function(result) {
            if (result.status == 200) {
                $('#lastli').addClass('success');
            } else {
                console.log(result.message);
            }
        }
    });

});
