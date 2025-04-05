const postQuote = ()=>{
    if(confirm("Would like to submit quote?")){
        //Get user input    
        const quoteElement = document.getElementById("recommendation_quote");
        const quote = quoteElement.value;
        const userNameElement = document.getElementById("userName");
        let userName = userNameElement.value.trim();
        if(userName !== ""){
            userName = " \u2015 " + userName;
            userNameElement.value = "";
        }

        //Create and prepare HTML containers for user input
        const recommendations = document.getElementById("recommendation_container");    
        const recommendation_item = document.createElement("div");
        recommendations.appendChild(recommendation_item);
        recommendation_item.setAttribute("class","recommendation_item");

        //Create and prepare HTML elements to hold user input
        const post_quote = document.createElement("p");
        const quote_node = document.createTextNode("\u201C"+ quote +"\u201D" + userName);
        recommendation_item.appendChild(post_quote);
        post_quote.appendChild(quote_node);

        //Upon completion, clear user input from Input field
        quoteElement.value = "";
    }
    //Return false to prevent page refresh
    return false;
};