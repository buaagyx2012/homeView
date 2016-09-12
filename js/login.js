/**
 * Created by yzz on 2016/9/12.
 */
$(function(){
    function signIn(){

    }


    function signUp(){
        var formData =new FormData($(".form-signup")[0]);
        if(formData.get("password")==formData.get("check-password")){
            alert("123");
        }
    }


    $("#to-signin").click(function(){
        $(".form-signin").css("display","block");
        $(".form-signup").css("display","none");
    });


    $("#to-signup").click(function(){
        $(".form-signup").css("display","block");
        $(".form-signin").css("display","none");
    });

    $("#signup").click(function(){
        signUp();
    })
});