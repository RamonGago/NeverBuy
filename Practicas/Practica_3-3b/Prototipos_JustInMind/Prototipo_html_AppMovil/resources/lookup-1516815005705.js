(function(window, undefined) {
  var dictionary = {
    "c3ba4e27-8fc8-4081-94b2-cf107a438c11": "My_account",
    "c1d42da9-86ae-44b2-97a7-8644643f7816": "My_articles_no_login",
    "e47e35d8-6ac4-4281-87d5-0c271835180e": "Add_article",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "8f58b28d-838a-449a-89e4-3b02e0781db6": "Searcher",
    "9ef2ef74-2289-4e01-8550-43ddebce1dfd": "Login",
    "b10a90d5-18c5-4198-9507-470d6396ad58": "My_articles",
    "a2dcd0dc-5bc5-44de-b8a6-aceca3857388": "Register",
    "2a5a56f3-435a-4d19-a765-09d88a63b1c5": "Chat_conversation",
    "dcd6a40d-be70-4c45-8072-bf3c7a06c4b9": "Article_requested",
    "4c3c4bf3-0f73-4285-8f36-38a9002b28d1": "Results_searcher",
    "a9f9c90b-dd3a-4fc5-b66e-fc6684848b73": "Chats",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);