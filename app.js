$(document).ready(function(e){
    $(".txt").on("keyup",function(e){
        if (e.keyCode == 13 && $(".txt").val()!= "")
        {
            var task = $("<div class= "task"></div>").text(".txt").val());
            $("Not").append(task);
        }
    });
});