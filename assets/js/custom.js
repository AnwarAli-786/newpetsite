//--------------Vertical tabs js---------------//
$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});

//--------------Vertical tabs js---------------//

//--------------dropdown select box js---------------//
$(document).ready(function() {

    if (typeof niceSelect !== 'undefined' && $.isFunction(niceSelect)) {
        $('select:not(.ignore)').niceSelect();
    }
});
//--------------dropdown select box js---------------//


function hide_showtoggle() {
    var x = document.getElementById("embed_div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


//--------------smooth scroll view js---------------//

$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".sub_navigation a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
//--------------smooth scroll view js---------------//

//--------------mobile menu toggle btn js---------------//
$(document).ready(function() {
    $(document).on('click', '.cta', function() {
        $(this).toggleClass('active')
    })
});
//--------------mobile menu toggle btn js---------------//

//--------------sticky top header js---------------//
var headerHeight = $('.top-banner').outerHeight();
var marNegSearch = parseInt($('.search-field').css('margin-top'));
var calc = headerHeight + marNegSearch;

$(window).on("scroll", function(e) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > calc) {
        $('.sticky_header').addClass("fix-search");
    } else {
        $('.sticky_header').removeClass("fix-search");
    }
});
//--------------sticky top header js---------------//


//--------------side menu responsive show hide js---------------//
function FunctionPreMenu() {
    var x = document.getElementById("side_menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//--------------side menu responsive show hide js---------------//

//--------------filter responsive show hide js---------------//
function FunctionFilter() {
    var x = document.getElementById("filter_bar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//--------------filter responsive show hide js---------------//

//--------------sorting responsive show hide js---------------//
function FunctionSorting() {
    var x = document.getElementById("sorting");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//--------------sorting responsive show hide js---------------//





//--------------patner slider js---------------//

$(document).ready(function() {
    //$('#inquiry_modal').modal('show');
    setTimeout(function() {
        $('#inquiry_modal').find('.item').first().addClass('active');
        $('#inquiry_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    }, 90000);

    if ($('.customer-logos').length > 0) {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    }
    $(document).on("keydown", ".numerictxtbx", function(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && (e.ctrlKey == true || e.metakey == true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftkey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $(document).on("keydown", ".onlyalphatxtbx", function(e) {
        var inputValue = event.charCode;
        if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
            event.preventDefault();
        }
    });
    jQuery(function($) {
        $(document).on("keydown", ".onlyphonetxtbx", function(evt) {
            //var charCode = (evt.which) ? evt.which : event.keyCode
            //if (charCode != 45 && charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57))
            //    return false;
            //return true;
        });
    });


});
//--------------patner slider js---------------//


$(function() {
    $('.btn-subscribe').click(function(e) {
        e.preventDefault();

        //$(this).closest('form')[0].submit();              
        var subscribe = $('.subscribe').val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "https://www.mrnmrspet.com/NotFound.asmx/lnkNewsLetterSubmit_Click",
            //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
            data: JSON.stringify({
                'email': subscribe
            }),
            dataType: "json",
            success: function(response) {
                console.log(response.d);
                if (response) {
                    if (response.d === "-1") {
                        alert('Email already in queue.');
                    } else if (response.d === "-2") {
                        alert('Email id should no be blank!');
                    } else {
                        alert('Thanks for your submission to Mr n Mrs Pet.');
                        window.location.reload();
                    }
                }
            }
        });
    });

});


$(function() {

    $('.btn-subscribe1').click(function(e) {
        e.preventDefault();

        //$(this).closest('form')[0].submit();              
        var subscribe1 = $('.subscribe1').val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "https://www.mrnmrspet.com/NotFound.asmx/lnkNewsLetterSubmit_Click",
            //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
            data: JSON.stringify({
                'email': subscribe1
            }),
            dataType: "json",
            success: function(response) {
                console.log(response.d);
                if (response) {
                    if (response.d === "-1") {
                        alert('Email already in queue.');
                    } else if (response.d === "-2") {
                        alert('Email should not be blank.');
                    } else {
                        alert('Thanks for your submission to Mr n Mrs Pet.');
                        window.location.reload();
                    }
                }
            }
        });
    });
    $('.finding-submit').click(function(e) {
        e.preventDefault();
        var usrid = $('#hdnpopupUserid').val();
        //$(this).closest('form')[0].submit();              
        var findingName = $('#txtFindingName').val();
        var findingEmail = $('#txtFindingEmail').val();
        var findingContact = $('#txtFindingContact').val();
        var findingMessage = $('#txtFindingMessage').val();
        var findingrequirment = $('#drpRequirement').val();
        var findingpettype = $('#findingPettype').val();
        var trackurl = $(this).attr("trkUrl");
        var trackaction = $(this).attr("trkaction");
        //if (findingrequirment == "1" || findingrequirment == "8") {

        //} else {
        //    findingpettype = 0;
        //}
        if (validate()) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "https://www.mrnmrspet.com/NotFound.asmx/enquiryFromPopup",
                //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
                data: JSON.stringify({
                    'email': findingEmail,
                    'name': findingName,
                    'contact': findingContact,
                    'remark': findingMessage,
                    'requirment': findingrequirment,
                    'pettype': findingpettype,
                    'userid': usrid
                }),
                dataType: "json",
                success: function(response) {
                    console.log(response.d);
                    if (response) {
                        if (response.d === "-2") {
                            alert("Our queue is full, please try after some time");
                            window.location.reload();

                        } else if (response.d === "2") {
                            trackPopup(usrid, trackurl, trackaction);
                            //$(".sucess-popup").html("");
                            //$(".sucess-popup").html("<h3 class='text-white'>Yayy!! We've got you!</h3><p class='text-white'>Already in a queue, our team shall get in touch with you soon!!</p>")
                            //$(".sucess-popup").removeClass("d-none")
                            //$('.finding-popup-body').removeClass('d-block').addClass('d-none')
                            alert('Already in a queue, our team shall get in touch with you soon!!');
                            window.location.reload();
                        } else {
                            /*trackPopup(usrid, trackurl, trackaction);*/
                            alert('Our Team shall get in touch with you soon!');
                            $("#slide2").removeClass("d-block").addClass("d-none");
                            $("#slide3").removeClass("d-none").addClass("d-block");
                            $(".modal-body-finding").removeClass("finding_new_pop").addClass("finding_new_pop_submitpar");
                            $(".finding-content").html("").html("Please select plan");
                            $("#hdnServiceID").val(response.d)
                            $(".track-popup").attr("trkaction", "Close3");
                            trackPopup(usrid, trackurl, trackaction);

                        }
                    }
                }
            });
        }

    });
    $(document).on('click', '.show-requirement-modal', function() {
        //$('.show-requirement-modal').click(function (e) {
        if (validatefirstpopup()) {
            //$("#inquiry_modal").hide();
            //$("#exampleModalToggle2").removeClass("fade");
            //("#exampleModalToggle2").show();
            $("#slide1").removeClass("d-block").addClass("d-none");
            $("#slide2").removeClass("d-none").addClass("d-block");
            $(".finding-content").html("").html("Please fill in the details to connect with our pet expert");
            var usrid = $('#hdnpopupUserid').val();
            var trackurl = $(this).attr("trkUrl");
            var trackaction = $(this).attr("trkaction");
            trackPopup(usrid, trackurl, trackaction);
        }

    });
    $('.finding-close').click(function(e) {
        var usrid = $('#hdnpopupUserid').val();
        var trackurl = $(this).attr("trkUrl");
        var trackaction = $(this).attr("trkaction");
        trackPopup(usrid, trackurl, trackaction);
        setCooki();
    })
    $('#drpRequirement').change(function() {
        var reqValue = $("#drpRequirement option:selected").val();
        if (reqValue == "3" || reqValue == "4") {
            $("#findingPettype option[value='3']").remove();
        } else if (reqValue == "9" || reqValue == "12") {
            $("#findingPettype option[value='2']").remove();
            $("#findingPettype option[value='3']").remove();
        } else {
            $('#findingPettype').find('option').remove()
            $('#findingPettype').append('<option value="0">Pet</option>');
            $('#findingPettype').append('<option value="1">Dog</option>');
            $('#findingPettype').append('<option value="2">Cat</option>');
            $('#findingPettype').append('<option value="3">Small Pet</option>');
        }
    });
    $('.checkEmpty').on('blur', function() {
        validateSubmitButton();
    });
    $("#lets").click(function() {
        txtPaidSCalendar.min = new Date().toISOString().split("T")[0];
        $("#slide1").hide();
        $("#slide2").show();
        $(".track-popup").attr("trkaction", "Close2");
        var usrid = $('#hdnpopupUserid').val();
        var trackurl = $(this).attr("trkUrl");
        var trackaction = $(this).attr("trkaction");
        trackPopup(usrid, trackurl, trackaction);
    });
    $("#btnSaveSlide2").click(function(e) {
        e.preventDefault();
        //validate();
        var iam = "";
        var callOn = "";
        var txtPaidSFullName = $('#txtPaidSCName').val();
        var txtPaidSContactNo = $('#txtPaidSPhone').val();
        var txtPaidSEmailId = $('#textPaidSEmail').val();
        var txtPaidSRequirements = $("#drpPaidSRequirement option:selected").val();
        var ddlPaidSState = $('#hdnPSStateID').val(); //$('#gsearch').val();
        var txtPaidSCity = $('#hdnPSCityID').val();
        var txtPaidSCalendar = ""; //$('#txtPaidSCalendar').val();
        var usrid = $('#hdnpopupUserid').val();
        var trackurl = $(this).attr("trkUrl");
        var trackaction = $(this).attr("trkaction");
        var findingpettype = $('#findingPettype').val();
        iam = ""; // $('input[name="PetParent"]:checked').val();
        callOn = ""; //$('input[name="slot"]:checked').val();

        //if (typeof iam == "undefined") {
        //    alert("Please select I am !");
        //} else
        if (typeof callOn == "undefined") {
            alert("Please select slot !");
        } else {
            if (validatePaidServicepopup()) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "https://www.mrnmrspet.com/NotFound.asmx/enquiryPaidService",
                    data: JSON.stringify({
                        'iam': iam,
                        'email': txtPaidSEmailId,
                        'name': txtPaidSFullName,
                        'contact': txtPaidSContactNo,
                        'state': ddlPaidSState,
                        'city': txtPaidSCity,
                        'requirment': txtPaidSRequirements,
                        'callon': callOn,
                        'servicedt': txtPaidSCalendar
                    }),
                    dataType: "json",
                    success: function(response) {
                        console.log(response.d);
                        if (response) {
                            if (response.d === "-2") {
                                alert('Validation failed');
                            } else {
                                //alert('Enquiry Submitted Successfully. We will connect with you soon.'); window.location = 'https://www.mrnmrspet.com';
                                $("#hdnServiceID").val(response.d)
                                $("#slide2").hide();
                                $("#slide3").show();
                                $(".track-popup").attr("trkaction", "Close3");
                                trackPopup(usrid, trackurl, trackaction);
                            }
                        }
                    }
                });
            }
        }

    });

    $('#fetchLocation').keyup(function(event) {
        SearchText();
    });
    $('.paymentprocess').click(function(e) {
        var amt = $(this).attr("payamt");
        var cplnid = $(this).attr("plnid");
        var cfn = $('#txtFindingName').val();
        var cph = $('#txtFindingContact').val();
        var cem = $('#txtFindingEmail').val();
        var csi = $('#hdnServiceID').val();
        PaymentProcess(amt, cfn, cem, cph, cplnid, csi);
    });
    $('#txtPaidSCalendar').keypress(function(event) {
        return false;
    });
    $("#txtPaidSCalendar").keydown(function(event) {
        return false;
    });

    function setCooki() {
        //if (1==0) {
        var date = new Date();
        var minutes = 4;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        $.cookie("showfindingpopup", date.getTime(), {
            expires: date
        });
        // }

    };
    $('.track-popup').click(function(e) {
        e.preventDefault();
        var usrid = $('#hdnpopupUserid').val();
        var trackurl = $(this).attr("trkUrl");
        var trackaction = $(this).attr("trkaction");
        trackPopup(usrid, trackurl, trackaction);
    });

    function validate() {
        if (document.getElementById("txtFindingName").value == "") {
            alert("Name Field can not be blank");
            document.getElementById("txtFindingName").focus();

            return false;
        }
        if (document.getElementById("txtFindingName").value == "") {
            alert("Name Field can not be blank");
            document.getElementById("txtFindingMessage").focus();
            return false;
        }
        if (document.getElementById("txtFindingContact").value.length != 10) {
            alert("Contact is not valid");
            document.getElementById("txtFindingContact").focus();
            return false;
        }
        if (document.getElementById("txtFindingContact").value == "") {
            alert("Contact Field can not be blank");
            document.getElementById("txtFindingContact").focus();
            return false;
        }
        if (document.getElementById("txtFindingName").value == "") {
            alert("Name Field can not be blank");
            document.getElementById("txtFindingName").focus();
            return false;
        }
        if (document.getElementById("txtFindingMessage").value == "") {
            alert("Message Field can not be blank");
            document.getElementById("txtFindingMessage").focus();
            return false;
        }
        if (document.getElementById("drpRequirement").value == "0") {
            alert("Please select Requirement");
            document.getElementById("drpRequirement").focus();
            return false;
        }
        if (document.getElementById("findingPettype").value == "0") {
            alert("Please select pet");
            document.getElementById("findingPettype").focus();
            return false;
        }
        var emailPat = /^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/;
        var emailid = document.getElementById("txtFindingEmail").value;
        var matchArray = emailid.match(emailPat);
        if (matchArray == null) {
            alert("Your email address seems incorrect. Please try again.");
            document.getElementById("txtFindingEmail").focus();
            return false;
        }
        //if (document.getElementById("drpRequirement").value == "1" || document.getElementById("drpRequirement").value == "8") {
        //    if (document.getElementById("findingPettype").value == "0") {
        //        alert("Please select pet");
        //        document.getElementById("findingPettype").focus();
        //        return false;
        //    }
        //}

        return true;
    }

    function validatefirstpopup() {
        if (document.getElementById("txtFindingName").value == "") {
            alert("Name Field can not be blank");
            document.getElementById("txtFindingMessage").focus();
            return false;
        }
        if (document.getElementById("txtFindingContact").value.length != 10) {
            alert("Contact is not valid");
            document.getElementById("txtFindingContact").focus();
            return false;
        }
        if (document.getElementById("txtFindingContact").value == "") {
            alert("Contact Field can not be blank");
            document.getElementById("txtFindingContact").focus();
            return false;
        }
        var emailPat = /^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/;
        var emailid = document.getElementById("txtFindingEmail").value;
        var matchArray = emailid.match(emailPat);
        if (matchArray == null) {
            alert("Your email address seems incorrect. Please try again.");
            document.getElementById("txtFindingEmail").focus();
            return false;
        }
        return true;
    }

    function validateSubmitButton() {
        if ($('#txtFindingName').val() != "" && $('#txtFindingEmail').val() != "" && $('#txtFindingContact').val() != "") {
            $(".finding-step-1").addClass("show-requirement-modal").css("cursor", "pointer").css("opacity", "1");
        } else {
            $(".finding-step-1").removeClass("show-requirement-modal").css("cursor", "not-allowed").css("opacity", ".65");
        }
    }

    function SearchText() {
        var ptxt = $('#fetchLocation').val();
        $(".autosuggest").autocomplete({
            source: function(request, response) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "https://www.mrnmrspet.com/pet-supplies/fetchitem.asmx/locationresult",
                    data: "{'prefixtext':'" + ptxt + "'}",
                    dataType: "json",
                    success: function(data) {
                        response($.map(data.d, function(item) {
                            return {
                                label: item.split('/')[0],
                                val: item.split('/')[1],
                                cval: item.split('/')[2]
                            }
                        }));
                    },
                    error: function(result) {
                        alert("Error");
                    }
                });
            },
            select: function(event, ui) {
                var vll = ui.item.val;
                var sts = ui.item.cval;
                $("#hdnPSStateID").val(vll);
                $("#hdnPSCityID").val(sts);
            },
            minLength: 3
        });
    }

    function PaymentProcess(amt, cname, cemail, contact, plnid, cServiceId) {
        /* alert(cServiceId);*/
        var options = {
            "key": "rzp_live_om6dLUokIF7CZr", //rzp_test_2CfOo5pVjQIpF8
            "amount": (amt * 100), // Example: 2000 paise = INR 20
            "name": "WANDERLUST PET SERVICES PRIVATE LIMITED",
            "description": "PET SERVICES",
            "image": "https://www.mrnmrspet.com/assets/image/new/white_logo_color.png", // COMPANY LOGO
            "handler": function(response) {

                UpdatePaymentProcess(response.razorpay_payment_id, contact, plnid, cServiceId)
                // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
            },
            "prefill": {
                "name": "" + cname + "", // pass customer name
                "email": '' + cemail + '', // customer email
                "contact": '' + contact + '' //customer phone no.
            },
            "notes": {
                "address": "address" //customer address 
            },
            "theme": {
                "color": "#15b8f3" // screen color
            }
        };
        console.log(options);
        var propay = new Razorpay(options);
        propay.open();
    }

    function UpdatePaymentProcess(payment_id, contact, plnid, cServiceId) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "https://www.mrnmrspet.com/NotFound.asmx/CheckPaymentSucessNew",
            data: JSON.stringify({
                'respon': payment_id,
                'contno': contact,
                'planId': plnid,
                'pserviceId': cServiceId
            }),
            dataType: "json",
            success: function(response) {
                console.log(response.d);
                if (response) {
                    if (response.d === "-2") {
                        alert('failed');
                    } else {
                        //alert('Enquiry Submitted Successfully. We will connect with you soon.'); window.location = 'https://www.mrnmrspet.com';
                        alert("Success")
                        window.location = 'https://www.mrnmrspet.com';
                    }
                    $("#hdnServiceID").val(0);
                }
            }
        });
    }

    function validatePaidServicepopup() {
        if (document.getElementById("txtPaidSCName").value == "") {
            alert("Name Field can not be blank");
            document.getElementById("txtPaidSCName").style.border = "1px solid red";
            document.getElementById("txtPaidSCName").focus();
            return false;
        } else {
            var element = document.getElementById('txtPaidSCName');
            element.style.border = null;
        }
        if (document.getElementById("txtPaidSPhone").value.length < 10) {
            alert("Contact is not valid");
            document.getElementById("txtPaidSPhone").style.border = "1px solid red";
            document.getElementById("txtPaidSPhone").focus();
            return false;
        } else {
            var element = document.getElementById('txtPaidSPhone');
            element.style.border = null;
        }
        if (document.getElementById("txtPaidSPhone").value == "") {
            alert("Contact Field can not be blank");
            document.getElementById("txtPaidSPhone").style.border = "1px solid red";
            document.getElementById("txtPaidSPhone").focus();
            return false;
        } else {
            var element = document.getElementById('txtPaidSPhone');
            element.style.border = null;
        }
        if (document.getElementById("drpPaidSRequirement").value == "0") {
            alert("Please select Requirement");
            document.getElementById("drpPaidSRequirement").style.border = "1px solid red";
            document.getElementById("drpPaidSRequirement").focus();
            return false;
        } else {
            var element = document.getElementById('drpPaidSRequirement');
            element.style.border = null;
        }
        //if (document.getElementById("hdnPSStateID").value == "0") {
        //    alert("Please select location");
        //    document.getElementById("fetchLocation").style.border = "1px solid red";
        //    document.getElementById("fetchLocation").focus();
        //    return false;
        //} else {
        //    var element = document.getElementById('fetchLocation');
        //    element.style.border = null;
        //}
        //if (document.getElementById("txtPaidSCalendar").value == "") {
        //    alert("Please select date");
        //    document.getElementById("txtPaidSCalendar").style.border = "1px solid red";
        //    document.getElementById("txtPaidSCalendar").focus();
        //    return false;
        //} else {
        //    var element = document.getElementById('txtPaidSCalendar');
        //    element.style.border = null;
        //}

        var emailPat = /^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/;
        var emailid = document.getElementById("textPaidSEmail").value;
        var matchArray = emailid.match(emailPat);
        if (emailid != "") {
            if (matchArray == null) {
                alert("Your email address seems incorrect. Please try again.");
                document.getElementById("textPaidSEmail").style.border = "1px solid red";
                document.getElementById("textPaidSEmail").focus();
                return false;
            } else {
                var element = document.getElementById('textPaidSEmail');
                element.style.border = null;
            }
        }

        return true;
    }

    function trackPopup(usrid, trackurl, trackaction) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "https://www.mrnmrspet.com/NotFound.asmx/trackPopup",
            data: JSON.stringify({
                'usrid': usrid,
                'trackurl': trackurl,
                'trackaction': trackaction
            }),
            dataType: "json",
            success: function(response) {

            }
        });
    }

});



//$(function () {
//    $('.web-clk-a').click(function (e) {
//        e.preventDefault();
//        var el = $(this);
//        console.log("click called for "+el.prop("name"));
//        //$(this).closest('form')[0].submit();              
//        var url = $('.web_url').text();
//        var item_name = el.prop("name");
//        var ip_adr = $('.web_ip').text();
//        var cuntry = $('.web_cnt_name').text();
//        var ct_name = $('.web_ct_name').text();
//        var rg_name = $('.web_rg_name').text();
//        $.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "https://www.mrnmrspet.com/NotFound.asmx/WebsiteClicks",
//            //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
//            data: JSON.stringify({ 'Url': url, 'ItemName': item_name, 'IPAddress': ip_adr, 'CountryName': cuntry, 'CityName': ct_name, 'RegionName': rg_name }),
//            dataType: "json",
//            success: function (response) {
//                console.log(response.d);
//                if (response) {
//                    if (response.d === "-1") {
//                        alert('Please Enter Your Email Id');
//                    }
//                    else if (response.d === "-2") {
//                        alert('Validation failed');
//                    }
//                    else {
//                        //alert('Thanks for your submission to Mr n Mrs Pet.'); window.location.reload();
//                        window.location.href=el.prop("href");
//                    }
//                }
//            },
//            error: function (jqXHR, exception) {
//                window.location.href = el.prop("href");
//            }
//        });
//    });
//});

//$(function () {
//    $('.web-clk-btn').click(function (e) {
//        e.preventDefault();
//        var el = $(this);
//        console.log("click called for " + el.prop("name"));
//        var url = $('.web_url').text();
//        var item_name = el.prop("name");
//        var ip_adr = $('.web_ip').text();
//        var cuntry = $('.web_cnt_name').text();
//        var ct_name = $('.web_ct_name').text();
//        var rg_name = $('.web_rg_name').text();
//        $.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "https://www.mrnmrspet.com/NotFound.asmx/WebsiteClicks",
//            data: JSON.stringify({ 'Url': url, 'ItemName': item_name, 'IPAddress': ip_adr, 'CountryName': cuntry, 'CityName': ct_name, 'RegionName': rg_name }),
//            dataType: "json",
//            success: function (response) {
//                console.log(response.d);
//                if (response) {
//                    if (response.d === "-1") {
//                        alert('Please Enter Your Email Id');
//                    }
//                    else if (response.d === "-2") {
//                        alert('Validation failed');
//                    }
//                    else {
//                        //alert('Thanks for your submission to Mr n Mrs Pet.'); window.location.reload();
//                        //window.location.href = el.prop("href");


//                    }
//                }
//                __doPostBack(el.prop("id"),'');
//            },
//            error: function (jqXHR, exception) {
//                __doPostBack(el.prop("id"), '');
//            }           
//        });
//    });
//});


//$(function () {
//    $(document).on('change', '.web-clk-ddl',function (e) {
//        e.preventDefault();
//        var selectedText = $(this).find("option:selected").text();
//        var selectedValue = $(this).val();
//        var el = $(this);
//        console.log("click called for " + selectedValue + " " + selectedText);
//        //$(this).closest('form')[0].submit();              
//        var url = $('.web_url').text();
//        var item_name = "Looking For " + selectedText;
//        var ip_adr = $('.web_ip').text();
//        var cuntry = $('.web_cnt_name').text();
//        var ct_name = $('.web_ct_name').text();
//        var rg_name = $('.web_rg_name').text();
//        $.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "https://www.mrnmrspet.com/NotFound.asmx/WebsiteClicks",
//            //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
//            data: JSON.stringify({ 'Url': url, 'ItemName': item_name, 'IPAddress': ip_adr, 'CountryName': cuntry, 'CityName': ct_name, 'RegionName': rg_name }),
//            dataType: "json",
//            success: function (response) {
//                console.log(response.d);
//                if (response) {
//                    if (response.d === "-1") {
//                        alert('Please Enter Your Email Id');
//                    }
//                    else if (response.d === "-2") {
//                        alert('Validation failed');
//                    }
//                    else {
//                        //alert('Thanks for your submission to Mr n Mrs Pet.'); window.location.reload();
//                        //window.location.href = el.prop("href");
//                    }
//                }
//            }
//        });
//    });
//});


//$(function () {
//    $('.pet-click').click(function (e) {
//        e.preventDefault();
//        var el = $(this);
//        console.log("click called for " + el.prop("name"));
//        //$(this).closest('form')[0].submit();              
//        //var pet_id = $('.p-id').text();
//        //var pet_type = $('.pt-id').text();
//        //var brd = $('.brd-id').text();

//        var pet_id = $(this).closest('.pet_list_details').find('[id*=lblPetId]').text();
//        var pet_type = $(this).closest('.pet_list_details').find('[id*=lblPetTypeId]').text();
//        var brd = $(this).closest('.pet_list_details').find('[id*=lblBreedId]').text();

//        $.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "https://www.mrnmrspet.com/NotFound.asmx/PetClicks",
//            //url: "/NotFound.asmx/lnkNewsLetterSubmit_Click",
//            data: JSON.stringify({ 'PetId': pet_id, 'PetTypeId': pet_type, 'BreedId': brd }),
//            dataType: "json",
//            success: function (response) {
//                console.log(response.d);
//                if (response) {
//                    if (response.d === "-1") {
//                        alert('Please Enter Your Email Id');
//                    }
//                    else if (response.d === "-2") {
//                        alert('Validation failed');
//                    }
//                    else {
//                        //alert('Thanks for your submission to Mr n Mrs Pet.'); window.location.reload();
//                        window.location.href = el.prop("href");
//                    }
//                }
//            },
//            error: function (jqXHR, exception) {
//                window.location.href = el.prop("href");
//            }
//        });
//    });
//});