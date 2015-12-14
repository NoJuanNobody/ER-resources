$(document).ready(function () {

  "use strict";

  // phone
  var APL_callsource = "703-835-9650";
  var CCV_callsource = "973-542-2059";
  var CWF_callsource = "1-800-CALLSOURCE";
  var ETH_callsource = "281-653-8102";
  var GSV_callsource = "703-852-1554";
  var HSD_callsource = "972-200-1214";
  var OCV_callsource = "410-849-0029";
  var RWV_callsource = "301-358-3375";
  var TCK_callsource = "913-752-9304";
  var WCD_callsource = "303-309-0401";
  // FACEBOOK CALLSOURCE
  var FB_HSD_callsource = "1-800-926-4914";
  // EMAIL CALLSOURCE NUMBERS
  var APL_EMAIL_callsource = "703-872-7598";
  var CCV_EMAIL_callsource = "973-607-4751";
  var CWF_EMAIL_callsource = "561-422-4140";
  var ETH_EMAIL_callsource = "281-456-3120";
  var HSD_EMAIL_callsource = "972-200-0599";
  var OCV_EMAIL_callsource = "410-881-0291";
  var RWV_EMAIL_callsource = "301-637-2607";
  var TCK_EMAIL_callsource = "913-534-8862";
  var WCD_EMAIL_callsource = "303-357-1926";
  // Level of Care
  var APL_care = "memory care or long-term care.";
  var CCV_care = "assisted living, memory care, or skilled nursing.";
  var CWF_care = "assisted living, memory care, or skilled nursing.";
  var ETH_care = "memory care or nursing care.";
  var GSV_care = "nursing care.";
  var HSD_care = "continuing care.";
  var OCV_care = "assisted living or skilled nursing care.";
  var RWV_care = "assisted living or skilled nursing care.";
  var TCK_care = "memory care or nursing care.";
  var WCD_care = "memory care or skilled nursing.";
  var FB_HSD_care = HSD_care;
  // holistic care variable
  var personal = "personalized";
  var communityName;
  // disclaimer
  var CWF_fl_skilled_nursing = "FL Skilled Nursing Facility Licence #SNF130471003";
  var CWF_fl_assisted = "FL Assisted Living Facility Licence #AL9586";
  var ETH_AL_facility_ID = "AL Facility_ID: 105451";
  var HSD_AL_facility_ID = "AL Facility ID: 105429";
  var WCD_disclaimer = "Wind Crest, Inc, a non-profit organization is soley responsible for fullfilling financial responsibilities to residents under the contract. Wind crest is within the network of communities developed and managed by Erickson Living";

  // The Big If Statement
  if (window.location.search.indexOf('from=APL') > -1) {
    if (window.location.search.indexOf('from=APL-EMAIL') > -1) {
      $(".phone").text(APL_EMAIL_callsource);
      $(".LOC").text(APL_care);
      communityName = 'ashby-ponds';
    } else{
      $(".phone").text(APL_callsource);
      $(".LOC").text(APL_care);
      communityName = 'ashby-ponds';
    }
  } else if (window.location.search.indexOf('from=CCV') > -1) {
    if (window.location.search.indexOf('from=CCV-EMAIL') > -1) {
      $(".phone").text(CCV_EMAIL_callsource);
      $(".LOC").text(CCV_care);
      $('.personal').text(personal);
      communityName = 'cedar-crest';
    } else{
      $(".phone").text(CCV_callsource);
      $(".LOC").text(CCV_care);
      $('.personal').text(personal);
      communityName = 'cedar-crest';
    }
  } else if (window.location.search.indexOf('from=CWF') > -1) {
    if (window.location.search.indexOf('from=CWF-EMAIL') > -1) {
      $(".phone").text(CWF_EMAIL_callsource);
      $(".LOC").text(CWF_care);
      $('.personal').text(personal);
      var CWF_disclaimer = CWF_fl_assisted +", " +CWF_fl_skilled_nursing;
      $(".disclaimer").text(CWF_disclaimer);
      communityName = 'chatsworth';
    } else{
      $(".phone").text(CWF_callsource);
      $(".LOC").text(CWF_care);
      $('.personal').text(personal);
      var CWF_disclaimer = CWF_fl_assisted +", "+ CWF_fl_skilled_nursing;
      $(".disclaimer").text(CWF_disclaimer);
      communityName = 'chatsworth';
    }
  } else if (window.location.search.indexOf('from=ETH') > -1) {
    if (window.location.search.indexOf('from=ETH-EMAIL') > -1) {
      $(".phone").text(ETH_EMAIL_callsource);
      $(".LOC").text(ETH_care);
      $(".disclaimer").text(ETH_AL_facility_ID);
      communityName = 'eagles-trace';
    } else{
      $(".phone").text(ETH_callsource);
      $(".LOC").text(ETH_care);
      $(".disclaimer").text(ETH_AL_facility_ID);
    }
    communityName = 'eagles-trace';
  } else if (window.location.search.indexOf('from=GSV') > -1) {
    if (window.location.search.indexOf('from=GSV-EMAIL') > -1) {
      $(".phone").text(GSV_EMAIL_callsource);
      $(".LOC").text(GSV_care);
      $('.personal').text(personal);
      communityName = 'greenspring';
    } else{
      $(".phone").text(GSV_callsource);
      $(".LOC").text(GSV_care);
      $('.personal').text(personal);
      communityName = 'greenspring';
    }
  } else if (window.location.search.indexOf('from=HSD') > -1) {
    if (window.location.search.indexOf('from=HSD-EMAIL') > -1) {
      $(".phone").text(HSD_EMAIL_callsource);
      $(".LOC").text(HSD_care);
      $('.disclaimer').text(HSD_AL_facility_ID);
      communityName = 'highland-springs';
    } else{
      $(".phone").text(HSD_callsource);
      $(".LOC").text(HSD_care);
      $('.disclaimer').text(HSD_AL_facility_ID);
      communityName = 'highland-springs';
    }
  } else if (window.location.search.indexOf('from=FB-HSD') > -1) {
    $(".phone").text(FB_HSD_callsource);
    $(".LOC").text(FB_HSD_care);
    $('.disclaimer').text(HSD_AL_facility_ID);
    communityName = 'highland-springs';
  } else if (window.location.search.indexOf('from=OCV') > -1) {
    if (window.location.search.indexOf('from=OCV-EMAIL') > -1) {
      $(".phone").text(OCV_EMAIL_callsource);
      $(".LOC").text(OCV_care);
      $('.personal').text(personal);
      communityName = 'oak-crest';
    } else{
      $(".phone").text(OCV_callsource);
      $(".LOC").text(OCV_care);
      $('.personal').text(personal);
      communityName = 'oak-crest';
    }
  } else if (window.location.search.indexOf('from=RWV') > -1) {
    if (window.location.search.indexOf('from=RWV-EMAIL') > -1) {
      $(".phone").text(RWV_EMAIL_callsource);
      $(".LOC").text(RWV_care);
      $('.personal').text(personal);
      communityName = 'riderwood';
    }else{
      $(".phone").text(RWV_callsource);
      $(".LOC").text(RWV_care);
      $('.personal').text(personal);
      communityName = 'riderwood';
    }
  } else if (window.location.search.indexOf('from=TCK') > -1) {
    if (window.location.search.indexOf('from=TCK-EMAIL') > -1) {
      $(".phone").text(TCK_EMAIL_callsource);
      $(".LOC").text(TCK_care);
      communityName = 'tallgrass-creek';
    } else{
      $(".phone").text(TCK_callsource);
      $(".LOC").text(TCK_care);
      communityName = 'tallgrass-creek';
    }
  } else if (window.location.search.indexOf('from=WCD') > -1) {
    if (window.location.search.indexOf('from=WCD-EMAIL') > -1) {
      $(".phone").text(WCD_EMAIL_callsource);
      $(".LOC").text(WCD_care);
      $('.disclaimer').text(WCD_disclaimer);
      communityName = 'wind-crest';
    } else{
      $(".phone").text(WCD_callsource);
      $(".LOC").text(WCD_care);
      $('.disclaimer').text(WCD_disclaimer);
      communityName = 'wind-crest';
    }
  }

  if (communityName === 'ashby-ponds') {
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'cedar-crest') {
    var newOptionALF = $('<option value="ALF">Assisted Living</option>');
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionALF);
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'chatsworth') {
    var newOptionALF = $('<option value="ALF">Assisted Living</option>');
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionALF);
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'eagles-trace') {
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'greenspring') {
	var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
	$('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'highland-springs') {
    // no options
  }
  
  else if (communityName === 'oak-crest') {
    var newOptionALF = $('<option value="ALF">Assisted Living</option>');
	var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
 	$('#field18').append(newOptionALF);
	$('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'riderwood') {
    var newOptionALF = $('<option value="ALF">Assisted Living</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionALF);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'tallgrass-creek') {
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
  else if (communityName === 'wind-crest') {
    var newOptionMC = $('<option value="MC">Memory Care</option>');
    var newOptionSNF = $('<option value="SNF">Long Term Care</option>');
    $('#field18').append(newOptionMC);
    $('#field18').append(newOptionSNF);
  }
  
}); //the end