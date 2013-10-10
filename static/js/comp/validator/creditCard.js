/*

Copyright (c) 2011, alexandre delattre
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
 * Neither the name of grafyweb.com nor the names of its contributors may
   be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

 */

pimcore.registerNS("Formbuilder.comp.validator.creditCard");
Formbuilder.comp.validator.creditCard = Class.create(Formbuilder.comp.validator.base,{

    type: "creditCard",
    errors:["creditcardChecksum","creditcardContent","creditcardInvalid","creditcardLength","creditcardPrefix","creditcardService","creditcardServiceFailure"],

    initialize: function (treeNode, initData, parent) {



        this.treeNode = treeNode;
        this.initData(initData);
    },

    getTypeName: function () {
        return t("creditCard");
    },   
    
    getIconClass: function () {
        return "Formbuilder_icon_validator";
    },

    getForm: function($super){
        $super();
        
        var cbStore = new Ext.data.ArrayStore({
            fields: ["value","label"],
            data : [["All","All"],["American_Express","American Express"],["Unionpay","Unionpay"],["Diners_Club","Diners Club"],["Diners_Club_US","Diners Club US"],["Discover","Discover"],["JCB","JCB"],["Laser","Laser"],["Maestro","Maestro"],["Mastercard","Mastercard"],["Solo","Solo"],["Visa","Visa"]]
        });

        
        var thisNode = new Ext.form.FieldSet({
            title: t("This node"),
            collapsible: true,
            defaultType: 'textfield',
            items:[{
                xtype: 'superboxselectspe',
                name: "type",
                allowBlank:true,
                queryDelay: 0,
                triggerAction: 'all',
                resizable: true,
                mode: 'local',
                anchor:'100%',
                minChars: 1,
                removeValuesFromStore:false,
                fieldLabel: t("CB type"),
                emptyText: t("Choose credit cards"),
                store: cbStore,
                displayField: "label",
                valueField: "value"
            }

        ]
        });
        this.form.add(thisNode);
        return this.form;
    }



});