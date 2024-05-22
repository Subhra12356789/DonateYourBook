
function popup(){


    
    var popup,opti,animation;
    popup = document.getElementById("popup");
    opti = document.getElementById("button");
    animation = document.getElementById("animation");
    popup.style.display="block";
    opti.style.visibility="hidden";
    animation.style.visibility="hidden";
    


    

    
    
    }

    function   cancel(){
        var cancel = document.getElementById("popup");
        var button = document.getElementById("button");
        var animation = document.getElementById("animation");
        cancel.style.display="none";
        button.style.visibility="visible";
        animation.style.visibility="visible";
    }
    
   

   function one_fun(){
    var cwd = document.getElementById("cwd");
    var facebook = document.getElementById("facebook");
    var whatsapp = document.getElementById("whatsapp");
   
    cwd.style.visibility="hidden";
    facebook.style.display="inline-block";
    whatsapp.style.display="inline-block";
    

   }
   
   function two_fun(){
    var cwd = document.getElementById("cwd");
    //var facebook = document.getElementById("facebook");
    //var whatsapp = document.getElementById("whatsapp");
   
    cwd.style.visibility="visible";
    facebook.style.display="none";
    whatsapp.style.display="none";
    alert("Donate Your Book এই Websiteটি পুরোনো ব‌ই প্রদানকারী ও গ্রহণকারীর মধ্যে যোগসূত্র গড়ে তোলার, একটি মাধ্যম হিসেবে বানানোহয়েছে। আরো বিস্তারিত জানতে আমার সাথে যোগাযোগ করুন। আমি আপনাকে বিস্তারিত ভাবে বোঝাবার চেষ্টা করবো।");
    

   }
   