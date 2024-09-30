define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "00e8ca9b-990e-4a7d-8fab-4f92dd0bd74c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_o334mx9_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_pkost4s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_pkost4s_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "calculator-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_2u4nkwn_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_b0e6b3b",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyId"
						}
					},
					"icon": "calculator-icon",
					"items": []
				},
				"parentName": "Button_pkost4s",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_js3d6of",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_js3d6of"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_z9c6921",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_z9c6921",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_sz1y3v6",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_sz1y3v6",
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_cfddu2z",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_cfddu2z",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_tl1mucz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tl1mucz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "RealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_8mckvia",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_zzo0cir",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_zzo0cir",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fldgngt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fldgngt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8mckvia",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_ma4aa9z",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_ma4aa9z",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_vqqzahq",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_7ozi5gg",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_7ozi5gg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_5yd4ndm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5yd4ndm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vqqzahq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_iqgzirl",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_86pp74w",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_86pp74w",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_6f4e1jr",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_i3lfc0k",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_i3lfc0k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_pfu4jo6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pfu4jo6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_of8g85n",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_of8g85n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_41j4r57",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_41j4r57_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_1jyinmq",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_1jyinmq_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_o1ci04v",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_1jyinmq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p6rzk84",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_o1ci04v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_xdzhg21",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_xdzhg21_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_p6rzk84",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_2av5fu0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_2av5fu0_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_w0xb6kbDS"
						}
					}
				},
				"parentName": "FlexContainer_p6rzk84",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_0lz33es",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_0lz33es_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_p6rzk84",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_wi4g9nw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wi4g9nw_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0lz33es",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_wvtjoej",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_wvtjoej_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0lz33es",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_xbcegju",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_xbcegju_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_xbcegju_GridDetail_w0xb6kb",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_w0xb6kb"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_xbcegju_SearchValue",
							"GridDetailSearchFilter_xbcegju_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_p6rzk84",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_czvvjqj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_1jyinmq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_w0xb6kb",
					"activeRow": "$GridDetail_w0xb6kb_ActiveRow",
					"selectionState": "$GridDetail_w0xb6kb_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_w0xb6kb_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_w0xb6kbDS_Id",
					"columns": [
						{
							"id": "682ae4d2-c9a8-f955-961c-391406aacddb",
							"code": "GridDetail_w0xb6kbDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 147
						},
						{
							"id": "72c56028-17e0-ab35-e90b-ee436966ab27",
							"code": "GridDetail_w0xb6kbDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "354ae6b9-c48f-7647-ecce-633a91030134",
							"code": "GridDetail_w0xb6kbDS_UsrResponsibleEmployee",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrResponsibleEmployee)#",
							"dataValueType": 10
						},
						{
							"id": "4f4f48e6-17f7-0bc8-bf72-58e0f508deef",
							"code": "GridDetail_w0xb6kbDS_UsrComments",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrComments)#",
							"dataValueType": 28
						},
						{
							"id": "23634168-aada-d6bb-e50b-97766c4c8044",
							"code": "GridDetail_w0xb6kbDS_UsrComments",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrComments)#",
							"dataValueType": 28
						},
						{
							"id": "2604934b-90ef-e3d2-c232-8806f814f9ab",
							"code": "GridDetail_w0xb6kbDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_w0xb6kbDS_UsrVisitDateTime)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_czvvjqj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_w0xb6kb_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_w0xb6kbDS",
							"filters": "$GridDetail_w0xb6kb | crt.ToCollectionFilters : 'GridDetail_w0xb6kb' : $GridDetail_w0xb6kb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_w0xb6kb_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_w0xb6kb_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_w0xb6kbDS",
							"filters": "$GridDetail_w0xb6kb | crt.ToCollectionFilters : 'GridDetail_w0xb6kb' : $GridDetail_w0xb6kb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_w0xb6kb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_w0xb6kb_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_w0xb6kb_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail",
							"filters": "$GridDetail_w0xb6kb | crt.ToCollectionFilters : 'GridDetail_w0xb6kb' : $GridDetail_w0xb6kb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_w0xb6kb_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_w0xb6kb_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_w0xb6kbDS",
							"filters": "$GridDetail_w0xb6kb | crt.ToCollectionFilters : 'GridDetail_w0xb6kb' : $GridDetail_w0xb6kb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_w0xb6kb_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_js3d6of": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_z9c6921": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_cfddu2z": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_zzo0cir": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_ma4aa9z": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_7ozi5gg": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_86pp74w": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCommissionUSD_sz1y3v6": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrCountry_i3lfc0k": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_of8g85n": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_w0xb6kb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_w0xb6kbDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_xbcegju_GridDetail_w0xb6kb",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComments"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_w0xb6kbDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.UsrParentRealty"
									}
								},
								"GridDetail_w0xb6kbDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_w0xb6kbDS_UsrResponsibleEmployee": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.UsrResponsibleEmployee"
									}
								},
								"GridDetail_w0xb6kbDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.UsrComments"
									}
								},
								"GridDetail_w0xb6kbDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.UsrVisitDateTime"
									}
								},
								"GridDetail_w0xb6kbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_w0xb6kbDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_w0xb6kbDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_w0xb6kbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrResponsibleEmployee": {
									"path": "UsrResponsibleEmployee"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          			{
	
                      request: "usr.PushButtonRequest",
                      /* Implementation of the custom query handler. */
	
                      handler: async (request, next) => {
	
                        console.log("Button works...");
		
                        Terrasoft.showInformation("My button was pressed.");
                        var price = await request.$context.PDS_UsrPriceUSD_js3d6of;
	
                        console.log("Price = " + price);
                        request.$context.PDS_UsrPriceUSD_js3d6of = price * 0.2;
                        /* Call the next handler if it exists and return its result. */
	
                        return next?.handle(request);
	
                      }
		
                    },
             	{
			
                  request: "crt.HandleViewModelAttributeChangeRequest",
	
                 /* The custom implementation of the system query handler. */
	
                 handler: async (request, next) => {
	
                 if (request.attributeName === 'PDS_UsrPriceUSD_js3d6of' || 				// if price changed
	
                   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
		           
                   var price = await request.$context.PDS_UsrPriceUSD_js3d6of;
                   var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
	
                   var commission = price * percent / 100;
		
                   request.$context.PDS_UsrCommissionUSD_sz1y3v6 = commission;
		 
                 }
               /* Call the next handler if it exists and return its result. */
		
               return next?.handle(request);
		
             }
		
            }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix.
	
          Format the validator type in PascalCase. */
		
                    "usr.DGValidator": {
	
                       validator: function (config) {
	
                         return function (control) {
                          let value = control.value;
                          let minValue = config.minValue;
                          let valueIsCorrect = value >= minValue;
	
                          var result;
                           if (valueIsCorrect) {
	
                             result = null;
	
                            } else {
                             result = {
	"usr.DGValidator": { 
	
                               message: config.message
	
                             }
	
                         };
	
                      }
	
                           return result;
		
                };
				
              },
                      params: [
                        {
                          name: "minValue"
                        },
                        {
                          name: "message"
                        }
                      ],
                      async: false
  }
        }/**SCHEMA_VALIDATORS*/
	};
});