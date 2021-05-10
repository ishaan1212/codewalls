        function update(){
            $("iframe").contents().find("html").html("<html><head><style type=text/css>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>") ;
            document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

        }
        $(".toggleButton").hover(function(){
            $(this).addClass("highlightedButton");
        }, function(){
            $(this).removeClass("highlightedButton");
        });
        $(".toggleButton").click(function(){
            $(this).toggleClass("active");
            $(this).removeClass("highlightedButton");
            var getPanel = $(this).attr("id") + "Panel";
            $("#"+getPanel).toggleClass("hidden");
            var numberOfActivePanels = 4 - $('.hidden').length;
            $(".panel").width(($(window).width()/numberOfActivePanels)-10);
        });
        $(".panel").height($(window).height()-$("#header").height()-15);
        $(".panel").width(($(window).width()/2)-10);
        update();
        $("textarea").on('Change keyup paste',function(){
            update();
        });