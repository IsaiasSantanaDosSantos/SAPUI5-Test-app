sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
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

      onItemPress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        // Obtém o ID do item selecionado
        var oItem = oEvent.getSource();
        var sPath = oItem.getBindingContext("produtosModel").getPath();
        var sProductId = this.getView()
          .getModel("produtosModel")
          .getProperty(sPath + "/id");

        // Navega para a tela de detalhes passando o ID na URL
       oRouter.navTo("ProductDetail", { productId: sProductId });
      },

      onSearchById: function () {
        var sProductId = this.getView().byId("productInput").getValue();
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        if (sProductId) {
         oRouter.navTo("ProductDetail", { productId: sProductId });
        } else {
          sap.m.MessageToast.show("Digite um ID válido");
        }
      },
    });
  }
);
