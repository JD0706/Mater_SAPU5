sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function onValidate(oEvent){
           
            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();
            if (valueEmployee.length === 6){
                   inputEmployee.setDescription("Ok");
                  
                }else{
                   inputEmployee.setDescription("Not Ok")
                  
            }
        }
        return Controller.extend("logaligroup.employees.controller.View1", {
            onInit: function () {

            },
            onValidate:onValidate
        });
    });
