sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("zov.controller.ProductDetail", {
    // 🚀 Use o namespace correto
    onInit: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter
        .getRoute("ProductDetail")
        .attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      var sProductId = oEvent.getParameter("arguments").productId;
      var oModel = this.getView().getModel("produtosModel");

      if (!oModel) {
        sap.m.MessageToast.show("Erro: Modelo de produtos não encontrado.");
        return;
      }

      var aProducts = oModel.getProperty("/produtos");

      if (!Array.isArray(aProducts)) {
        sap.m.MessageToast.show("Erro: Dados de produtos não carregados.");
        return;
      }

      var oProduct = aProducts.find((product) => product.id == sProductId);

      if (oProduct) {
        oModel.setProperty("/selectedProduct", oProduct);
        this.getView().bindElement("produtosModel>/selectedProduct");
      } else {
        sap.m.MessageToast.show("Produto não encontrado");
      }
    },
  });
});
