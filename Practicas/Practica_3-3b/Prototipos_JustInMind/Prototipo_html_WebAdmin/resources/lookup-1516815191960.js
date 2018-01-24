(function(window, undefined) {
  var dictionary = {
    "225ffeed-98a9-4337-82be-40c4ebd0f86f": "inicia",
    "434f886c-33f3-4241-84e0-e871dbb267d6": "About",
    "6c54151f-32c1-4a81-945c-808d126438ae": "Usuarios",
    "caab404a-f763-4d81-9b6d-e295a9eef7e2": "Reclamaciones",
    "aba4f9aa-eb5a-424a-95ec-04e157512a2e": "Contact",
    "d0cc333b-7a9f-4ec5-bd17-42966634a5d1": "Errores",
    "f3ad9f42-ce92-4fd3-a35e-9c1afc0dec4e": "Valoraciones",
    "d3141ede-b217-49e0-a2d3-8eaacb6762cf": "Email",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "4cac952d-a767-49be-a406-f35e0dc56c4e": "inicio1",
    "f97b4dd9-b481-4ea5-b72c-d24c204c92cc": "Usuarios2",
    "8f965ce2-e45b-4b5f-88ac-2aa33f235cb1": "Anuncios",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
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