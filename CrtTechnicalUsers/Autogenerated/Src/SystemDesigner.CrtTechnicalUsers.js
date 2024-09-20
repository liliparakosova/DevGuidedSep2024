  define("SystemDesigner", ["SystemDesignerResources"], function (resources) {
	return {
		attributes: {
			/**
			 * Flag that indicates feature "EnableTechnicalUser" enabled.
			 */
			"IsTechnicalUsersEnabled": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: false
			}
		},
		methods: {
			/**
			 * @inheritodoc SystemDesigner#getOperationRightsDecoupling
			 * @overridden
			 */
			getOperationRightsDecoupling: function() {
				var operationRights = this.callParent(arguments);
				operationRights.navigateToTechnicalUserSection = "CanManageTechnicalUsers";
				return operationRights;
			},
			/**
			 * @inheritodoc SystemDesigner#setDefaultParameters
			 * @overridden
			 */
			setDefaultParameters: function() {
				this.callParent(arguments);
				var isEnabled = this.getIsFeatureEnabled("EnableTechnicalUser");
				this.$IsTechnicalUsersEnabled = isEnabled;
			},
			/**
			 * Navigate to the Technical Users section.
			 * @private
			 */
			_navigateToTechnicalUsersSection: function() {
				if (this.get("CanManageTechnicalUsers") === true) {
					var url = Terrasoft.workspaceBaseUrl + "/Shell/#Page/TechnicalUsers_ListPage";
					window.open(url, "_self");
				} else {
					this.showPermissionsErrorMessage("CanManageTechnicalUsers");
				}
			}

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "IntegrationTile",
				"name": "TechnicalUserSection",
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": { "bindTo": "Resources.Strings.TechnicalUsersSectionLinkCaption" },
					"tag": "_navigateToTechnicalUsersSection",
					"click": "$invokeOperation",
					"visible": "$IsTechnicalUsersEnabled",
                    "isNew": true
				}
			}
		]
	};
});