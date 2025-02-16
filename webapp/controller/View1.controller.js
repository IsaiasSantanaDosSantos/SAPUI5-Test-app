sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("zov.controller.View1", {
    onInit() {
      this.onShowValue();
    },
    onPress: function () {
      alert("Hello Wold!");
    },

    // Função para carregar o arquivo JSON
    onShowValue: function () {
      const url = "../../data.json";
      // Aqui você pode adicionar o código para buscar o JSON usando o modelo JSON
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("Erro ao carregar o JSON:", error));
    },
  });
});

/*
 Agora preciso ajustar  aarquivo que renderiza (View1.view.xml), para renderizar as informações do JSON, conforme a função "onShowValue()"*/
