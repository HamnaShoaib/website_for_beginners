
  $("#show").hide();
  $("#msg").hide();
  $("#loader").hide();
        function func1(){
          var t='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3005749278400559" crossorigin="anonymous"></script> <!-- Top-Ris-Com --> <ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-3005749278400559" data-ad-slot="3263713735"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';
            // $('#first').html(t);
            $('#firstt').html(t);
            $('#second_mobilee').html(t);
            $('#four').html(t);
          var tm2='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><!-- 300-250-BB-Ris.Com --><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-3005749278400559"data-ad-slot="5704035431"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>';
           $('#four_mobile').html(tm2);
        }
    function func2(){
          var t1='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script> <!-- 336-280-Ris-Com-Ads --> <ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-3005749278400559" data-ad-slot="5705638152"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({}); <\/script>';
            $('#second').html(t1);
          var tm1='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><!-- 336-280-RIS.Com-Top --><ins class="adsbygoogle"style="display:inline-block;width:336px;height:280px"data-ad-client="ca-pub-3005749278400559"data-ad-slot="3461015474"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>';
            $('#second_mobile').html(tm1);
          var tm3='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><!-- 336-280-AB-RIS.Com --><ins class="adsbygoogle"style="display:inline-block;width:336px;height:280px"data-ad-client="ca-pub-3005749278400559"data-ad-slot="5947384491"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>';
          $('#six_mobile').html(tm3);
        }
    function func3(){
          var t2='<div id="a0189cf2-cb2d-49ec-98d6-d0a2bff7ffbe" class="_ap_apex_ad">'+
        '<script>'+
            'var adpushup = window.adpushup  = window.adpushup || {que:[]};'+
        'adpushup.que.push(function() {'+
        'adpushup.triggerAd("a0189cf2-cb2d-49ec-98d6-d0a2bff7ffbe");'+
        '});<\/script>';
            $('#third').html(t2);
          var t3='<script data-cfasync="false" type="text/javascript">(function(w, d) { var s = d.createElement(\'script\'); s.src = \'//cdn.adpushup.com/41904/adpushup.js\'; s.type = \'text/javascript\'; s.async = true; (d.getElementsByTagName(\'head\')[0] || d.getElementsByTagName(\'body\')[0]).appendChild(s); })(window, document);<\/script>'
             $('head').append(t3);
        }
       function func4()
        {
        //  var html___ = "<script src='https://www.google.com/recaptcha/api.js'><\/script>";
        //  $("head").append(html___);
        }

    function func5()
    {
        var html2___ = '<div class="container"><div class="row"><div class="col-md-2 col-sm-2 col-xs-12"></div><div class="col-md-8 col-sm-8 col-xs-12"><video class="pcvideo" width="650" playsinline="" controls="" poster="<?php echo base_url();?>assets/images/himg-4.png"><source src="<?php echo base_url();?>assets/images/reverse_img_search.mp4" type="video/mp4"></video></div><div class="col-md-2 col-sm-2 col-xs-12"></div></div></div>';
    $(".videosec").append(html2___);
        }

    function func6()
    {
        var html3___ = '';
    $("head").append(html3___);
        }
    function func7()
    {
        var html4___ = '<img src="<?php echo base_url();?>assets/images/screenshot 1.PNG" style="width:100%" alt="screenshot 1"/>';
    $(".custom_margin1.custom_margin2").append(html4___);
        }
  
    var afload='';
    afload = setInterval(loadTimer, 3000);
    function loadTimer(){
              func4();
              func5();
              func6();
              func7();
       clearInterval(afload);
    }
 var afload5='';
    afload5 = setInterval(loadTimer5, 500);
    function loadTimer5(){
        	  func1();
            func2();
            func3();
       clearInterval(afload5);
    }
    /*setTimeout(function(){
              func1();
              func2();
              func3();
              func4();
              func5();
              func6();
              func7();
              
            }, 3000);*/

    if($('div').hasClass('pages-title-sec')){$('div').removeClass('background');}
    //console.log($(".adBanner").height());
    if($(".adBanner").height() > "0") {
        //$(".add").show();  
         console.log("ads active");
      } else {
        $(".add").hide();  
        $(".background").css("min-height","436px");
      }
  function incheight() {
 var sampleDiv= document.getElementById("itspace");
      if (sampleDiv.style.display === 'none') {
        sampleDiv.style.display = 'block';
    }
    else if (sampleDiv.style.display === 'block') {
      sampleDiv.style.display = 'none';
    }
    else{
      sampleDiv.style.display = 'block';
    }
}
 function onSubmit(){
    $('.g-recaptcha').parents('form:first').submit();
  }
  function onSubmit3(){
    //$('#captcha_form').submit();
    //$(".reviewsubmit").click(function() {
      //e.preventDefault();
      $.ajax({
        type: "POST",
        url: "https://www.reverseimagesearch.com/Home/savedata",
        data: { 
            experience: $(".radio_experience:checked").val(), // < note use of 'this' here
            msg: $("#msgg").val(),
            save: $(".reviewsubmit").val() 
          },
          success: function(result) {
            //alert('ok');
            $('.webreview').hide();$('.modalfeedback').hide();$("#myOverlay").hide();
            $('.mobilereview').hide();
            $('#feedback_modal').show();
            //$('#feedback_modal').delay(3000).hide(0);
            $(".close").click(function(){
            document.getElementById("myModal34").style.display = "none";
            });

          },
          error: function(result) {
            alert('error');
          }
        });
    //});
  }
  function onSubmit2()
  {
    var html___ = "<script src='https://www.google.com/recaptcha/api.js'><\/script>";
    $("head").append(html___);
//$(".g-recaptcha").click(function(e) {

//e.preventDefault(); // avoid to execute the actual submit of the form.
//$('.g-recaptcha').parents('form:first').submit();
$("#loader").show();
var form = $('#reused_form');
console.log(form.serialize());
var fileSelect =$('#file_upload12').prop('files')[0];
var form_data = new FormData();

form_data.append('files',fileSelect);
form_data.append('email',$('#email2').val());
form_data.append('subject',$('#subject').val());
form_data.append('message',$('#message').val());
form_data.append('g-recaptcha-response',$('#g-recaptcha-response-1').val());
var email= $('#email2').val();
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var correct_email=regex.test(email);
if(correct_email==false){alert("Please enter correct email address");}
var subject = $('#subject').val();
var message = $('#message').val();
var file=$('#file_upload12').val();
if(correct_email==true && subject && message && file){
  $.ajax({
    type: "POST",
    url: "contact2",
    processData:false,
    contentType:false,
    dataType:'json',
    data: form_data,
    success: function(data)
    {
//alert("Bug report has been sent successfuly.") // show response from the php script.
//alert(data.done);
$('#email2').val('');
$('#message').val('');
$('#subject').val('');
$('#file_upload12').val('');
$('#img_namee').attr('placeholder',"");
$("#loader").hide();
$("#msg").show();
$("#closing_modal").click(function()
{
$('#msg').hide();
$('.close').hide();
});
},
/*error: function(){
alert(data.error);
alert('failure');
}*/
});

}
else{alert('input fields cannot be left empty');
$("#loader").hide();}
//});
}
function cancel_me()
{
$("#show1").hide();
//$('#unique_id').html("Upload File");
$('#img_m').text("Upload Image");
}
$('#imgFile').on('change',function(e){
  //$("#show1").show();
  var file_check=$('#imgFile').prop('files')[0];
  var img = URL.createObjectURL(e.target.files[0]);
  console.log(img);
  $('#show1').show();
  $('#show1 img').attr('src',img);
  var fileReader = new FileReader();
  
  fileReader.readAsArrayBuffer(this.files[0]);
  $('#img_m span').text(this.files[0].name);
  if($('#img_m span').text(this.files[0].name)){
  $('html, body').animate({scrollTop: '+=320px'}, 800);
  }
});
$('#imgFile2').on('change',function(e){
  $("#show1").show();
  var file_check=$('#imgFile').prop('files')[0];
  var img = URL.createObjectURL(e.target.files[0]);
  $('#show1 img').attr('src',img);
  $('html, body').animate({scrollTop: '+=320px'}, 800);
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// google drive code goes here

function cGdrive(){
var developerKey = "AIzaSyCn7Ve9sMAr4aXuxJb7jonCTQp6x_O5JJQ";
var clientId = "1036447526479-jbqseh017i736hca86odhl7eiorasu4b.apps.googleusercontent.com";
var appId = "1036447526479";
var scope = ['https://www.googleapis.com/auth/drive'];
var pickerApiLoaded = false;
var oauthToken;
loadPicker();
function loadPicker() {
  gapi.load('auth', {'callback': onAuthApiLoad});
  gapi.load('picker', {'callback': onPickerApiLoad});
}
function onAuthApiLoad() {
  window.gapi.auth.authorize(
  {
    'client_id': clientId,
    'scope': scope,
    'immediate': false
  },
  handleAuthResult);
}
function onPickerApiLoad() {
  pickerApiLoaded = true;
  createPicker();
}
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token;
    createPicker();
  }
}
function createPicker() {
  if (pickerApiLoaded && oauthToken) {
    var view = new google.picker.View(google.picker.ViewId.DOCS);
view.setMimeTypes("image/png,image/jpeg,image/jpg");
var picker = new google.picker.PickerBuilder()
.enableFeature(google.picker.Feature.NAV_HIDDEN)
.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
.setAppId(appId)
.setOAuthToken(oauthToken)
.addView(view)
.addView(new google.picker.DocsUploadView())
.setDeveloperKey(developerKey)
.setCallback(pickerCallback)
.build();
picker.setVisible(true);
}
}
function pickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    var fileId = data.docs[0].id;
    var filesize = data.docs[0].fileSize;
    console.log( data.docs[0].sizeBytes);
    if(data.docs[0].sizeBytes > 10000000){
      alert('Max allowed file size is 5MB');
      return false;
    }
    console.log(fileId);
    $("#loading").removeClass('d-none');
    var formData = new FormData();
    formData.append('act', 'doctopdf');
    formData.append('data_type', "googledrive");
    formData.append('_token', "NkxHIDZQ69kgN1lxNHa98LKfxRzyo08Hvcji2hmq");
    formData.append('file_id', fileId);
    formData.append('token', oauthToken);
    $.ajax({
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
///console.log(percentComplete);
$('.prgres').text(percentComplete+'%');
if (percentComplete === 100) {
  $('.span_100_prgres').text('Processing');
///$('#fileLoader').remove();
}
}
}, false);
        return xhr;
      },
      url: "upload_files",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,

      success: function(data){
        $("#loading").addClass('d-none');
        var data1 = $.parseJSON(data);
        if(data1.code == 200){
          // console.log(data1.FileUrl+999999999);
          $("#imginput").val(data1.FileUrl);
          $("#imginputpro").val(data1.FileUrl);
          $("#show").show();
          $('#show img').attr('src',data1.FileUrl);
          $('#sample_img').attr('src',data1.FileUrl);
          $('#sample_img').show();
          $("#show1").attr('style', 'display: block');;

          $('#my_camera').hide();

          $('html, body').animate({scrollTop: '+=320px'}, 800);
        }else{
          $('#fileLoader').remove();
          $('.file_html').append(ErorHTML);
        }


      }
    });
  }
}
}
options = {
success: function (files) {
var file=document.querySelector("#dropbox_img").value = files[0]; 
var size=file.bytes;
if(size>5e+6)
{
  alert("File size is greater than 5 MB");
  return false;
}
var file_link=file.link;
console.log(file);
name = "hira";
//let _token   = $('meta[name="csrf-token"]').attr('content');
//console.log(file_link);
$.ajax({
  url: "upload_files2", 
  type: "POST",            
  data: {file_link},                  
  success: function(data){
// alert(data);
$("#imginput").val(data);
$("#imginputpro").val(data);
$("#show1").show();
$("#my_camera").hide();
$('#show1 img').attr('src',data);
$("#show1").show();
$('html, body').animate({scrollTop: '+=320px'}, 800);


}
});

},
cancel: function () {

},
linkType: "direct", // or "direct"
multiselect: false, // or true
extensions: ['.jpg', '.jpeg', '.png', '.svg'],
};

file = {
id: "id:...",
name: "filename.jpg",
link: "https://...",
bytes: 464,
icon: "https://...",
thumbnailLink: "https://...?bounding_box=75&mode=fit",
isDir: false,
};
  $("#show2").hide();
  function cancel_me2()
  {
    Webcam.reset();
    $("#show2").hide(); 
    $("#show1").hide(); 
    $("#sample_img").show();
    $(".my_webcam").addClass("dp-none");
    $("#my_camera2").addClass("dp-none");
    $("#my_camera").removeClass("dp-none");
    $(".cancel").removeClass("dp-none");
  }
  function take_photo(){
    $("#my_camera").show();
    $(".cancel").addClass("dp-none");
    Webcam.set({
      width: 185,
      height: 185,
      image_format: 'jpeg',
      jpeg_quality: 90
    });
    //$("#show1").hide();
    //  $("#show1 img").addClass("dp-none");
     $("#sample_img").hide();
     $("#my_camera").removeClass("dp-none");
    //  $("#my_camera").addClass("dp-none");
     $(".my_webcam").removeClass("dp-none");
    $("#show1").show(Webcam.attach( '#my_camera' ));

  }

function take_snapshot() {
    $("#sample_img").removeClass("dp-none");
    let test='';
    Webcam.snap( function(data_uri) {
      test=data_uri;
      $(".image-tag").val(data_uri);
      // console.log(data_uri);
      $("#sample_img").show();
      $("#show1").show('<img src="'+data_uri+'"/>');
      $("#my_camera").addClass("dp-none");
      $("#my_camera2").addClass("dp-none");
      $(".my_webcam").addClass("dp-none");
      $("#loading").removeClass('d-none');
      $(".cancel").removeClass("dp-none");
//document.getElementById('show').innerHTML = '<img src="'+data_uri+'"/>';
} );
    Webcam.reset();

    $.ajax({
      url: "upload_files3", 
      type: "POST",            
      data: {'img':test},                  
      success: function(data){
        $("#loading").addClass('d-none');
// let img_path="https://www.reverseimagesearch.com/tempimgs/";
// $("#imginput").val(img_path+data);
$("#imginput").val(data);
$("#imginputpro").val(data);
$("#show1").show();
// $('#show1 img').attr('src',img_path+data);
$('#show1 img').attr('src',data);
$('html, body').animate({scrollTop: '+=320px'}, 800);


}
});
  }
if($('div').hasClass('sec2')){$('html, body').animate({scrollTop: $('.sec2').offset().top}, 800);}
//if($(".sec2")){$('body').scrollTo('.sec2');}
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var element = document.getElementById('text');
  var elementdanger = $('#finderror');
  if (isMobile) {
//alert("mobile");
$('.cam_button').click(function() {
  $('#imgFile2').click();
});
if(elementdanger.length > 0){
$('html, body').animate({
    scrollTop: elementdanger.offset().top
}, 800);
}
// 

} else {
//alert("desktop");
$('.cam_button').click(function(e) {

  take_photo();
});
}


// ------------------------- Voice Search --------------------------------------- //

var start_timestamp;
var recognizing = false;
var final_transcript = '';
var ignore_onend;
function startDictation(event){
  if (recognizing) {
    recognition.stop();
    return;
  }
  recognition.lang = 'English';
  recognition.start();
  ignore_onend = false;
  start_timestamp = event.timeStamp;
}
if(!('webkitSpeechRecognition' in window)){
// upgrade();
}else{
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function(){
    recognizing = true;
    updatemsg('speak_now');
  };
  recognition.onerror = function(event){
    if (event.error == 'no-speech'){
      ignore_onend = true;
    }
    if(event.error == 'audio-capture'){
      ignore_onend = true;
    }
    if(event.error == 'not-allowed'){
      ignore_onend = true;
    }
  };
  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    updatemsg('end_search');
  };
  recognition.onresult = function(event) {
    var final_transcript = '';
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        final_transcript = capitalize(final_transcript);
        $('#top_search,#blog_search,#searchbar').val('');
        $('#top_search,#blog_search,#searchbar').val(linebreak(final_transcript));
        $("#top_search,#blog_search,#searchbar").trigger('keyup');
      } else {
        $('#top_search,#blog_search,#searchbar').val('');
        interim_transcript += event.results[i][0].transcript;
        $('#top_search,#blog_search,#searchbar').attr('placeholder',linebreak(interim_transcript));
      }
    }
  };
}
var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
function updatemsg(msg){
  if(msg=='speak_now'){
    $('#voice_search').attr('src','img/mic.svg');
    $('#top_search,#blog_search,#searchbar').attr('placeholder','Speak Now');
  }else if('end_search'){
    $('#voice_search').attr('src','img/mic.svg');
    $('#top_search,#blog_search').attr('placeholder','Search by Keyword Or Use Microphone');
    $('#searchbar').attr('placeholder','Search from seo tools');
  }
}
$(function() {
  // Set
  var main = $('div.mm-dropdown .textfirst')
  var main2 = $('div.mm-dropdown');
  var li = $('div.mm-dropdown > ul > li.input-option')
  var inputoption = $("div.mm-dropdown .option")
  var default_text = '<img src="assets/images/all.svg" class=" all pr-1">All <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png" width="10" height="10" class="down" />';

  // Animation
  //main.click(function() {
    //main.html(default_text);
 //   li.toggle('fast');
  //});
  main2.click(function() {

    //main.html(default_text);
    main2.addClass('textfirst');
    li.toggle('fast');
    incheight();
  });
  


  // Insert Data
  li.click(function() {
    // hide
    //li.toggle('fast');
    var livalue = $(this).data('value');
    var lihtml = $(this).html();
    main.html(lihtml);
    inputoption.val(livalue);
  });
});
 $('.mm-dropdown').click(false);
$("body").click(function(event) {
var li = $('div.mm-dropdown > ul > li.input-option');
li.slideUp("fast");
});

$(".baidu").click(function(e) {
  $(".baidu_box").addClass("dp-none");

  });
$(".google").click(function(e) {
  $(".google_box").addClass("dp-none");

  });
$(".yandex").click(function(e) {
  $(".yandex_box").addClass("dp-none");

  });
$(".bing").click(function(e) {
  $(".bing_box").addClass("dp-none");

  });

  
    // $(".selectFilebtn").click(function(){ $("#imgFile").click(); });

    $( document ).ready(function() {if($('section').hasClass('result-area')){var elemOff = $(".result-area").offset().top; elemOff = elemOff-100; $("html, body").animate({ scrollTop: elemOff }, 1000); } });
    function lazy_load(){
        
       $('.lazy').each(function(img){
           
           var scrollTop = window.pageYOffset;
           var this_offset=$(this).offset().top + $(this).outerHeight();
           var window_offset=$(window).scrollTop()+ $(window).height();
           if($(this).offset().top + $(this).outerHeight() <= ($(window).scrollTop()+ $(window).height())){
               var path_src=$(this).attr('data-name');
               var split_data=path_src.split('|');
               var img_html='<picture>'+
               '<source srcset="'+split_data[0]+'.webp" type="image/webp">'+
               '<source srcset="'+split_data[0]+split_data[1]+'" type="image/'+split_data[1].replace('.','')+'">'+
               '<img src="'+split_data[0]+split_data[1]+'" alt="'+split_data[2]+'" class="'+split_data[3]+'">'+
               '</picture>';
               $(this).html(img_html);
               $(this).show(1000);
               $(this).removeClass('lazy');
           }
       });
    }
    $(window).on('resize scroll', function(){
       lazy_load();
    }); 

    $('#imgFile').bind('change', function() {
      if(this.files[0].size/1024/1024 >5.01){
        alert('Your file size is greater than 5MB,Max upload size 5MB!');
        $("#show1").hide();$('#imgFile').val('');$('#img_m span').text("Upload Image");$('html, body').animate({scrollTop: '+=0px'}, 0);
      }
        
    });

     $("#searchForm").on("submit", function(){
         $("#loading").removeClass('d-none');
     });

    $('.esc').click(function(e) {
         $('.popup').hide();
    });
    $(document).keydown(function(e) {
          $('.popup').hide();
      if (e.keyCode == 27) {
            $('.popup').hide();
      } 
    });
   
  $('.click_logout').click(function(){
    $('.loggout').trigger('click');
  });
  $(".reviewcancel").click(function(){
    $('.webreview,.modal,.overlay,.mobilereview').hide();
  });
  $(function () {$('[data-toggle="tooltip"]').tooltip()});

// var showPopUp = getCookie('showPopUp');
// if(showPopUp == null){
//     // only show the popup in desktop browsers
//     var screenWidth = window.matchMedia("(max-width: 768px)");
//     if(!screenWidth.matches){
//       setTimeout(function() {
//         $('.popup').show();
//         setCookie('showPopUp',"true",1);
//     }, 30000); //show popup after 5 sec
      
//     }
// }

var showfeedback = getCookie('showfeedback');
if(showfeedback == null){
    // only show the popup in desktop browsers
    var screenWidth = window.matchMedia("(max-width: 768px)");
    if(!screenWidth.matches && $('.results').length > 0){
      var modal = document.getElementById("myModalfeed");
      var overlay = document.getElementById("myOverlay");
        setTimeout(function() {
        //modal.style.display = "block";
        if (modal.style.display === "block") {
              // The modal is currently displayed
            overlay.style.display = "block";
            //setCookie('showfeedback',"true",1);
          }
        }, 5000); 
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                overlay.style.display = "none";
            }
        };
    }
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}   

function onSubmitProfile() {
  console.log("onSubmitProfile");
  document.getElementById("first").submit();
}

$(document).ready(function() {
  var itemsPerPage = 6;
  var $pagination = $('#pagination');
  var $paginationDemo = $('#pagination-demo .col-md-6');
  var numPages = Math.ceil($paginationDemo.length / itemsPerPage);
  
  // Create pagination links
  for (var i = 1; i <= numPages; i++) {
    $pagination.append('<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
  }

  showPage(1); // Show the first page by default

  // Handle pagination click event
  $pagination.on('click', 'a.page-link', function(e) {
    e.preventDefault();
    var page = $(this).data('page');
    showPage(page);
  });

  // Function to show items for a specific page
  function showPage(page) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;

    // Hide all elements and show only those in the current page range
    $paginationDemo.hide().slice(start, end).show();

    // Highlight the active page
    $pagination.find('li').removeClass('active');
    $pagination.find('a[data-page="' + page + '"]').parent().addClass('active');
  }
});

if (!isMobile) {
  $('.navmaintabs a').on('click', function (e) {
    // Check if the clicked tab has an id of "tab2"
    $('.navmoretabs li.active').removeClass('active');
    if ($(this).attr('href') === '#tab2') {
          var itemsPerPage = 6;
          var $pagination = $('#pagination2');
          var $paginationContent = $('#pagination-content .d-flex');
          var numPages = Math.ceil($paginationContent.length / itemsPerPage);
          $pagination.empty();
          // Create pagination links
          for (var i = 1; i <= numPages; i++) {
              $pagination.append('<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
          }

          showPage(1); // Show the first page by default

          // Handle pagination click event
          $pagination.on('click', 'a.page-link', function (e) {
              e.preventDefault();
              var page = $(this).data('page');
              showPage(page);
          });

          // Function to show items for a specific page
          function showPage(page) {
              var start = (page - 1) * itemsPerPage;
              var end = start + itemsPerPage;

              // Hide all elements and show only those in the current page range
              $paginationContent.hide().slice(start, end).show();

              // Highlight the active page
              $pagination.find('li').removeClass('active');
              $pagination.find('a[data-page="' + page + '"]').parent().addClass('active');
          }
    }
  });
}

if (isMobile) {
  $('.cusmenu li a').on('click', function (e) {
    // Check if the clicked tab has an id of "tab2"
    $('.navmoretabs li.active').removeClass('active');
    if ($(this).attr('href') === '#tab2') {
          var itemsPerPage = 6;
          var $pagination = $('#pagination2');
          var $paginationContent = $('#pagination-content .d-flex');
          var numPages = Math.ceil($paginationContent.length / itemsPerPage);
          $pagination.empty();
          // Create pagination links
          for (var i = 1; i <= numPages; i++) {
              $pagination.append('<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
          }

          showPage(1); // Show the first page by default

          // Handle pagination click event
          $pagination.on('click', 'a.page-link', function (e) {
              e.preventDefault();
              var page = $(this).data('page');
              showPage(page);
          });

          // Function to show items for a specific page
          function showPage(page) {
              var start = (page - 1) * itemsPerPage;
              var end = start + itemsPerPage;

              // Hide all elements and show only those in the current page range
              $paginationContent.hide().slice(start, end).show();

              // Highlight the active page
              $pagination.find('li').removeClass('active');
              $pagination.find('a[data-page="' + page + '"]').parent().addClass('active');
          }
    }
  });
}

var tab6AjaxSent = false;
var tab9AjaxSent = false;
$('.navmoretabs a').on('click', function (e) {
    e.preventDefault();
    $('.navmaintabs li.active').removeClass('active');
    var tabHref = $(this).attr('href');
    
    if (tabHref === '#tab6' && !tab6AjaxSent) {
       $("#loading").removeClass('d-none');
        var postData = {
            url: $('.imgpreviewfree img').attr('src'),
            tab_name: "labels",
            history_id: "111",
        };

        var ajaxRequest = $.ajax({
            url: 'ris_pro_img_free',
            type: 'POST',
            data: postData,
            dataType: 'json',
            success: function(response) {
              $("#loading").addClass('d-none');
                if (response && response.response && response.response.result) {
                    $.each(response.response.result, function(index, item) {
                        var name = item.name;
                        var score = Math.floor(item.score * 100);
                        $('.labelview').append('<div class="col-md-6 pl-0" style="margin-bottom:10px;"><div class="labelbox"><div class="d-flex"><span style="width:75%;"><strong style="max-width:50%;display:inline-block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' + name + '</strong><a href="https://www.google.com/search?hl=EN&amp;tbm=isch&amp;q='+name+'" target="_blank"><img class="ml-2" src="assets/images/openlink.svg"></a></span><span class="percent">' + score + '%</span></div></div></div>');
                    });

                    // Set the flag to true after the AJAX request is successful
                    tab6AjaxSent = true;
                } else {
                    console.error('Unexpected response structure:', response);
                }
            }
        });
    } 
    
    if (tabHref === '#tab9' && !tab9AjaxSent) {
      $("#loading").removeClass('d-none');
         var postData = {
            url: $('.imgpreviewfree img').attr('src'),
            tab_name: "safe_search",
            history_id: "111",
        };

        var ajaxRequest = $.ajax({
            url: 'ris_pro_img_free',
            type: 'POST',
            data: postData,
            dataType: 'json',
            success: function(response) {
              $("#loading").addClass('d-none');
              var firstResponse = response.response.responses[0];
                if (response && firstResponse.safeSearchAnnotation) {
                    var safeSearchAnnotation = firstResponse.safeSearchAnnotation;
                    $.each(safeSearchAnnotation, function(key, value) {
                      console.log(key + ": " + value);
                      var bgColorClass = '';
                      var key= key.charAt(0).toUpperCase() + key.slice(1)
                      // Map the likelihood values to corresponding class names (convert to uppercase)
                      switch (value.toUpperCase()) {
                          case 'VERY_UNLIKELY':
                              bgColorClass = 'activee1';
                              value = 'VERY UNLIKELY';
                              break;
                          case 'UNLIKELY':
                              bgColorClass = 'activee2';
                              break;
                          case 'POSSIBLE':
                              bgColorClass = 'activee3';
                              break;
                          case 'LIKELY':
                              bgColorClass = 'activee4';
                              break;
                          case 'VERY_LIKELY':
                              bgColorClass = 'activee5';
                              value = 'VERY LIKELY';
                              break;
                          default:
                              bgColorClass = ''; 
                              break;
                      }

                      var divHtml = '<div class="col-md-6 pl-0" style="margin-bottom:10px;"><div class="safebox"><div class="d-flex"><span><strong>' + key + '</strong></span><span class="percent">' + value + '</span></div><div class="rating">';
                      if (bgColorClass === 'activee1') {
                          divHtml += '<div class="div1 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div2"></div><div class="div3"></div><div class="div4"></div><div class="div5"></div></div></div></div>';
                      }
                      else if(bgColorClass === 'activee2'){
                          divHtml += '<div class="div1 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div2 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div3"></div><div class="div4"></div><div class="div5"></div></div></div></div>';
                      }
                      else if(bgColorClass === 'activee3'){
                          divHtml += '<div class="div1 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div2 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div3 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div4"></div><div class="div5"></div></div></div></div>';
                      }
                      else if(bgColorClass === 'activee4'){
                          divHtml += '<div class="div1 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div2 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div3 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div4 ' + bgColorClass + '"></div>';
                          divHtml += '<div class="div5"></div></div></div></div>';
                      }
                      else{
                         divHtml += '<div class="div1"></div><div class="div2"></div><div class="div3"></div><div class="div4"></div><div class="div5"></div></div></div></div>';
                      }
                      //divHtml += '<div class="div2"></div><div class="div3"></div><div class="div4"></div><div class="div5"></div></div></div></div>';
                      $('.safeview').append(divHtml);
                    });
                    // Set the flag to true after the AJAX request is successful
                    tab9AjaxSent = true;
                } else {
                    console.error('Unexpected response structure:', response);
                }
            }
        });
    }

});

 $('.gridview').on('click', function () {
      $(".listview").attr("src", "https://www.reverseimagesearch.com/dev/assets/images/Light Mode/list_view_unactive.svg");
      $(".gridview").attr("src", "https://www.reverseimagesearch.com/dev/assets/images/Light Mode/grid_view_active.svg");
      $('#pagination-demo').show();
      $('#pagination-demo-list').hide();
  });

  $('.listview').on('click', function () {
      $(".listview").attr("src", "https://www.reverseimagesearch.com/dev/assets/images/Light Mode/list_view_active.svg");
      $(".gridview").attr("src", "https://www.reverseimagesearch.com/dev/assets/images/Light Mode/grid_view_unactive.svg");
      $('#pagination-demo').hide();
      $('#pagination-demo-list').show();
      var itemsPerPage = 6;
      var $pagination = $('#pagination3');
      var $paginationDemo = $('#pagination-demo-list .col-md-12');
      var numPages = Math.ceil($paginationDemo.length / itemsPerPage);
      $pagination.empty();
      // Create pagination links
      for (var i = 1; i <= numPages; i++) {
        $pagination.append('<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
      }

      showPage(1); // Show the first page by default

      // Handle pagination click event
      $pagination.on('click', 'a.page-link', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        showPage(page);
      });

      // Function to show items for a specific page
      function showPage(page) {
        var start = (page - 1) * itemsPerPage;
        var end = start + itemsPerPage;

        // Hide all elements and show only those in the current page range
        $paginationDemo.hide().slice(start, end).show();

        // Highlight the active page
        $pagination.find('li').removeClass('active');
        $pagination.find('a[data-page="' + page + '"]').parent().addClass('active');
      }
  });
var showPro = getCookie('showPro');
var geturl = getCookie('tempcookie');
var propop = getCookie('propop');
var showPro2 = getCookie('showPro2');
enginelink = getCookie('enginelink');

if(showPro === 'true' && propop !== 'true' && geturl !== null && showPro2 !== 'true'){
  $('.bgouter').show();
  if ($('.bgouter').length > 0) {
     var screenWidth = window.matchMedia("(max-width: 768px)");
    if(!screenWidth.matches){
      setTimeout(function() {
      $('html, body').animate({scrollTop: '+=1210'}, 800);
      }, 2000);
    }
    else{
      setTimeout(function() {
      $('html, body').animate({scrollTop: '+=3010'}, 800);
      }, 2000);
    }
  }
  
  setTimeout(function() {
    setCookie('tempcookie', '', -1);
    setCookie('enginename', '', -1);
    // setCookie('enginelink', '', -1);
  }, 10000);
}

if(showPro === 'true' && propop === 'true' && geturl !== 'true' && showPro2 !== 'true'){
  $('.bgouter').show();
   if ($('.bgouter').length > 0) {
     var screenWidth = window.matchMedia("(max-width: 768px)");
    if(!screenWidth.matches){
      setTimeout(function() {
      $('html, body').animate({scrollTop: '+=1210'}, 800);
      }, 2000);
    }
    else{
      setTimeout(function() {
      $('html, body').animate({scrollTop: '+=3010'}, 800);
      }, 2000);
    }
  }
  setCookie('showPro2',"true",1);
}
var sessionVariable = $('.checkimgsbtn').data('session-variable');
//alert(sessionVariable);
if(sessionVariable !== ""){
if(showPro == null){
    if ($('.results').length > 0) {
           var screenWidth = window.matchMedia("(max-width: 768px)");
          // if(!screenWidth.matches){
          setCookie('showPro',"true",1);
          setCookie('tempcookie',$('#tempcookie').text(),1);
          //}
    }
    $('.checkimgsbtn').click(function () {
      event.preventDefault();
      var enginelink = $(this).closest('a').attr('href');
      if (enginelink.includes('google.com')) {
        var enginename = 'google';
      } else if (enginelink.includes('bing.com')) {
        var enginename = 'bing';
      } else if (enginelink.includes('yandex.com')) {
        var enginename = 'yandex';
      } else if (enginelink.includes('baidu.com')) {
        var enginename = 'baidu';
      } else {
        var enginename = 'null';
      }
      setCookie('enginelink',enginelink,1);
      setCookie('enginename',enginename,1);
      window.location.href = "";
      var screenWidth = window.matchMedia("(max-width: 768px)");
      if(!screenWidth.matches){
        setTimeout(function() {
          //$('.bgouter').show();
          if ($('.results').length > 0) {
          setCookie('showPro',"true",1);
          }
        }, 50); 
        
      }
    });
}
else{
  $('.checkimgsbtn').click(function () {
          clickme=$(this).closest('a').attr(('href'));
          setCookie('enginelink',clickme,1);
          if(propop === null && geturl === null){
            event.preventDefault();
            // $('#myOverlay').show();
            // $('#myModalpropop').show();
            setCookie('propop',"true",1);
            window.location.href = "";
            //setCookie('propop',"true",1);
          }
          else if(showPro2 !== 'true'){
            // clickme.click();
            // $('#myOverlay').hide();
            // $('#myModalpropop').hide();
            window.location.href = "";
          }
          else{
             clickme.click();
            // $('#myOverlay').hide();
            // $('#myModalpropop').hide();
          }
  });
}
}

$('.btnboxpro2').click(function () {
event.preventDefault();
setCookie('enginelink', '', -1);
window.open(enginelink, '_blank');
// if(propop === 'true'){
//  window.location.href = '<?=base_url()?>';
// }
});

$('.closepop').on('click', function () {
  $('#myOverlay').hide();$('#myModalpropop').hide();$('#myModalpropop2').hide();
});

$('.hitpro').click(function () {
            $('#myOverlay').show();
            $('#myModalpropop2').show();
});

function showTab(tabId) {
    // Manually trigger the tab change
    $('.navmaintabs a[href="#' + tabId + '"]').tab('show');
    updateDropdownButtonText(tabId);
  }

 function updateDropdownButtonText(tabId, buttonText) {
        // Set the button text based on the selected tab
        var button = $('#about-us');
        var textToSet = $('.navmaintabs a[href="#' + tabId + '"]').text();
        var caretSpan = '<span class="caret" style="margin-left:5px;"></span>';
        button.html(textToSet + caretSpan);
        $('#tab1 .text').hide();$('#tab2 .text').hide();
  }

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*8*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}   