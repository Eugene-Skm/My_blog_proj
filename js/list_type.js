function change_check() {
	var type = document.getElementsByName("list_type_radio");
	var articles = document.getElementById("articles_list");
	var article = document.getElementsByClassName("article");
	var articlethumb = document.getElementsByClassName("article_thumb_p");
    for (var i = 0; i < type.length; i++) {
        if (type[i].checked) {
            if (type[i].value == "GRID") {
                
				
				articles.style.gridTemplateColumns = "50% 50%";
				
               for (var i = 0; i < article.length; i++) {
                    article[i].style.gridTemplateColumns = "100%";
					article[i].style.height = "300px";
					article[i].style.margin = "5px";
					articlethumb[i].style.height="150px";
                }
            }else if (type[i].value == "COLUMN") {
				articles.style.gridTemplateColumns = "100%";

				for (var i = 0; i < article.length; i++) {
                    article[i].style.gridTemplateColumns = "25% 75%";
					article[i].style.margin = "0px";
					article[i].style.height = "120px";
					articlethumb[i].style.height="100%";
                }

			}
        }
    }
}