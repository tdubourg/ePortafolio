  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/
DOM_BUTTON_ELEM = document.createElement("img");
DOM_BUTTON_ELEM.src = "https://cdn4.iconfinder.com/data/icons/brightmix/128/monotone_arrow_next_right.png";
DOM_BUTTON_ELEM.width = 20;
DOM_BUTTON_ELEM.height = 20;
MARGIN_RIGHT = 5;

appAPI.ready(function($) {

    var openGUI = function (evt) {
        var o = $(evt.currentTarget).offset()
        GUI_CONTAINER.css({
            position: 'absolute',
            top: o.top + evt.currentTarget.width,
            left: o.left +  + evt.currentTarget.height,
            display: 'block',
            backgroundColor: 'red',
            width: '500px',
            height: '350px'
        })
    }

    GUI_CONTAINER = $(document.createElement("div"))
    GUI_CONTAINER.attr({id: 'GUIContainer'})
    GUI_CONTAINER.css({display: 'none', backgroundColor: 'red', width: '100px', height: '100px'})

    // Place your code here (you can also define new functions above this scope)
    // The $ object is the extension's jQuery object
    //alert("HI HA HO");
    
    //$("form").each(function (i, e) {
        var fields = $("input[type=\"text\"]")
        var form_focused_field = $("input[type=\"text\"]:focus")
        console.log($("input[type=\"text\"]:focus").length)
        var form_pos = null
        if (form_focused_field.length) {
            console.log("Bl000rg")
            form_pos = form_focused_field;
        }
      
        var newInstance = DOM_BUTTON_ELEM.cloneNode();
        var nI = $(newInstance);
        if (form_focused_field.length) {
            console.log("Blorg")
            var o = form_pos.offset()
            nI.css(
                {
                    "position": "absolute",
                    "left": o.left + form_pos.width() - newInstance.width,
                    "top": o.top,
                });
        } else {
            console.log("Pouet")
            nI.css({'position': 'absolute', 'left': -100, 'top': -100});
        }
        nI.hover(function () {
                $(this).css({"opacity": "1.0"});
            },
            function () {
                $(this).css({"opacity": "0.1"});
            }); 

        nI.css({
                    "zIndex": "1000",
                    "opacity": "0.1"
        });
        
        nI.click(openGUI);
        
        //$(e).css({"margin": "20px solid green", "backgroundColor": "red"});
        $("body").append(nI);
        $("body").append(GUI_CONTAINER);
        
        fields.focusin(function (e) {
            console.log("The focusin() has been launched on this element:")
            console.log(e.currentTarget)
            var form_pos = $(e.currentTarget)
            var o = form_pos.offset()
            nI.css({
                "left": o.left + form_pos.width() - newInstance.width,
                "top": o.top
            })
        });
        fields.focusout(function (e) {
            console.log("The focusout() has been launched on this element:")
        });
        
    //});

});

