$('document').ready(function() {
    $(".vat-not-applicable-modal").modal({backdrop: 'static'});
});

$('input[type=radio][name=vat-applicancy]').change(function() {
    if (this.value == 'applicable') {
        showVatDiv();
    }
    else if (this.value == 'non-applicable') {
        showVatModal();
    }
    else if (this.value == 'update-later') {
        hideVatDiv();
    }
});

function vatNonApplicabilityConfirmation(){
    hideVatModal();
    hideVatDiv();
}

function vatNonApplicabilityDecline(){
    hideVatModal();
    $('#applicable').prop('checked',true);
    showVatDiv();
}

function showVatDiv(){
    $('.vat-div').show();
}

function hideVatDiv(){
    $('.vat-div').hide();
}

function showVatModal(){
    $('.vat-not-applicable-modal').modal('show');
}

function hideVatModal(){
    $('.vat-not-applicable-modal').modal('hide');
}

function sectionSlider(){
    $('#company-details-section .signup-form-item-slider').toggleClass('signup-form-item-slider-ON');
    $('#account-details-section .signup-form-item-slider').toggleClass('signup-form-item-slider-ON');
}

function formNextHandler(){
    $('#form-part-1-company-details').hide();
    $('#form-part-2-account-details').show();
    sectionSlider();
}

function formPreviousHandler(){
    $('#form-part-1-company-details').show();
    $('#form-part-2-account-details').hide();
    sectionSlider();
}

function formSubmitHandler(){
    console.log('Form Submitted');
}
