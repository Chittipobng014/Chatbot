

var me = {};
me.avatar = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2015/11/bald-head-transparent-background.png?fit=300%2C300";

var you = {};
you.avatar = "http://s.jeban.com/userfiles/product_cat/2.png";



function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        
        control = '<li style="width:50%;font-size: 20;padding-bottom: 8px;">' +
                        '<div class="msj macro" style="height:120px;">' +
                        '<div class="avatar"><img class="img-circle" style="width:55%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p style="text-align:left;color: black;">'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:50%;font-size: 20;padding-bottom: 8px">' +
                        '<div class="msj-rta macro" style="height:120px;"">' +
                            '<div class="text text-r">' +
                                '<p style="text-align:right;color: black;";>'+text+'</p>' +
                                '<p style="text-align:left"><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:55%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});


//-- Clear Chat
resetChat();

//-- Print Messages
/*insertChat("me", "Hello Tom...", 0);  
insertChat("you", "Hi, Pablo", 1500);
insertChat("me", "What would you like to talk about today?", 3500);
insertChat("you", "Tell me a joke",7000);
insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
insertChat("you", "LOL", 12000);*/


//-- NOTE: No use time on insertChat.