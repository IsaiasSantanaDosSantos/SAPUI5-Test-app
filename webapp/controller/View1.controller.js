sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("zov.controller.View1", {
    onInit: function () {
      this.loadProducts();
    },

    loadProducts: function () {
      const url = "../../data.json"; 
      const oModel = new JSONModel();

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          oModel.setData(data); // Define os dados no modelo JSON
          this.getView().setModel(oModel, "produtosModel"); // Define o modelo na View
        })
        .catch((error) => console.log("Erro ao carregar o JSON:", error));
    },
  });
});
