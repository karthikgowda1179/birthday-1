$(document).ready(function check() {
        $('#main_content').headsmart()
		var elements = document.getElementsByTagName("INPUT");
		for (var i = 0; i < elements.length; i++) {
			elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Man, who are you?");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
       if(elements != "19851007")
		{
		elements[1].oninvalid = function(e) {
            e.target.setCustomValidity("");
			e.target.setCustomValidity("Man, who are you?");
            }
		}
		else
		{
		document.birthday.submit();
		}
	   
      }
	  
	  )