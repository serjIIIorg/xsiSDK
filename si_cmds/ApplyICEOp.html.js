var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyICEOp</title>\n\
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
            <h1>ApplyICEOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyICEOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies an <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> as an <a href=\"#!/url=./si_om/ICETree.html\">ICETree</a>. This command \n\
manages connecting the ICE Tree operator to the correct construction stack in the Softimage scene \n\
(based on the contruction mode specified in the compound file) and setting the ICE Tree\n\
operator to autoinspect the compound, etc.\n\
<br /><br />\n\
You can also specify a <a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a> \n\
containing the list of elements to connect to the input ports via the Input parameter. If\n\
any of the input ports need to be picked by the user (of type reference), Softimage automatically\n\
starts a picking session, creating GetData nodes associated with the picked object or component.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyICEOp( File, [Target], Input, ConnectType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICETree.html\">ICETree</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">File		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Path to the compound file		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">SelectionList</a> or <a href=\"#!/url=./si_om/Selection.html\">Selection</a>		</td>\n\
		<td>\n\
Object on which to apply the terminal node			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no argument is specified, the current selection is used.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Input		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a> describing the \n\
		elements to be connected to the input ports of the compound node.\n\
		<br /><br />\n\
		For example, if the first port is a geometry port that supports multiple instances, \n\
		you could use \"cone,cube,cube2\". If there was an additional port for a list of \n\
		obstacles, you could use \"cone,cube,cube2;myobstacle,myobstacle2\". \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectType		</td>\n\
		<td><a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a>		</td>\n\
		<td>\n\
Whether the connection will be in node or branch mode			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siBranchFlag.html#siUnspecified\">siUnspecified</a>			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to use the ApplyICEOp command \n\
# to set up a 3D Point Grid on an empty Point Cloud\n\
#\n\
app = Application\n\
app.NewScene(\"\", 0)\n\
app.GetPrim(\"PointCloud\")\n\
app.ApplyICEOp(\"Generate 3D Point Grid\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyICETemplate.html\">ApplyICETemplate</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";