var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddAttributeToSetDataICENode</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>AddAttributeToSetDataICENode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddAttributeToSetDataICENode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a new attribute to a set data node (<a href=\"#!/url=./si_om/ICEDataModifierNode.html\">ICEDataModifierNode</a>). \n\
A set data node allows you to set attributes on each geometry component (a \n\
\"Velocity\" attribute on each point, for example).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AddAttributeToSetDataICENode( [SetDataNode], [AttributeName], [AttributeType], [AttributeContext], [AttributeStructure] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SetDataNode		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The <a href=\"#!/url=./si_om/ICEDataModifierNode.html\">ICEDataModifierNode</a> to add an attribute to.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the user is prompted to select a node.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AttributeName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the attribute to add.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AttributeType		</td>\n\
		<td><a href=\"#!/url=./si_om/siComponentDataType.html\">siComponentDataType</a>		</td>\n\
		<td>\n\
The data type of the new attribute.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siComponentDataType.html#siComponentDataTypeFloat\">siComponentDataTypeFloat</a>			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AttributeContext		</td>\n\
		<td><a href=\"#!/url=./si_om/siComponentDataContext.html\">siComponentDataContext</a>		</td>\n\
		<td>\n\
The type of component.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siComponentDataContext.html#siComponentDataContextComponent0D\">siComponentDataContextComponent0D</a>			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AttributeStructure		</td>\n\
		<td><a href=\"#!/url=./si_om/siComponentDataStructure.html\">siComponentDataStructure</a>		</td>\n\
		<td>\n\
Structure of the attribute in the set data node.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siComponentDataStructure.html#siComponentDataStructureSingle\">siComponentDataStructureSingle</a>			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddICECompoundNode.html\">AddICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddExposedParamToICECompoundNode.html\">AddExposedParamToICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddICENode.html\">AddICENode</a> <a href=\"#!/url=./si_cmds/AddNodeToICECompoundNode.html\">AddNodeToICECompoundNode</a> <a href=\"#!/url=./si_cmds/CleanDisconnectedICENodes.html\">CleanDisconnectedICENodes</a> <a href=\"#!/url=./si_cmds/ConnectICENodes.html\">ConnectICENodes</a> <a href=\"#!/url=./si_cmds/CreateICECompoundNode.html\">CreateICECompoundNode</a> <a href=\"#!/url=./si_cmds/DisconnectICENodePort.html\">DisconnectICENodePort</a> <a href=\"#!/url=./si_cmds/EditExposedParamInICECompoundNode.html\">EditExposedParamInICECompoundNode</a> <a href=\"#!/url=./si_cmds/EditICECompoundPPGLogic.html\">EditICECompoundPPGLogic</a> <a href=\"#!/url=./si_cmds/EditICECompoundProperties.html\">EditICECompoundProperties</a> <a href=\"#!/url=./si_cmds/ExplodeICECompoundNode.html\">ExplodeICECompoundNode</a> <a href=\"#!/url=./si_cmds/GetICECompoundPortProperties.html\">GetICECompoundPortProperties</a> <a href=\"#!/url=./si_cmds/GetICECompoundProperties.html\">GetICECompoundProperties</a> <a href=\"#!/url=./si_cmds/MoveICECompoundPort.html\">MoveICECompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveAttributeFromSetDataICENode.html\">RemoveAttributeFromSetDataICENode</a> <a href=\"#!/url=./si_cmds/RemoveExposedParamFromICECompoundNode.html\">RemoveExposedParamFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemoveNodeFromICECompoundNode.html\">RemoveNodeFromICECompoundNode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";