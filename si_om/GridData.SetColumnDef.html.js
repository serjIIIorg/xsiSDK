var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GridData.SetColumnDef</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>GridData.SetColumnDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/GridData.html\">GridData</a>.SetColumnDef</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v12.0 (2014)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets a column definition\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>GridData.SetColumnDef( Int32 in_ColumnIndex, siGridWidgetColumnType in_Type, Object in_pvInDef );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>GridData.SetColumnDef( Index, Type, [Definition] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Index of the Column to change. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siGridWidgetColumnType.html\">siGridWidgetColumnType</a>		</td>\n\
		<td>\n\
 The new type for the column. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Definition		</td>\n\
		<td>Array of <a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Array describing the definition of the new column. When a column definition gets \n\
		changed using SetColumnDef, default values are applied, unless the plug-in passes \n\
		an array of values for the definition. The array can be empty (use defaults) or \n\
		contain up to the maximum number of arguments that are available for a given column \n\
		type. Here are the default definition values for supported column types:\n\
		<br /><br />\n\
		siColumnCombo: \"name\" / value pairs. For example: [ \"First\", 0, \"Second\", 2, \"Tenth\", 10 ]\n\
		<br /><br />\n\
		siColumnInt: [ Min, Max, Increment ]. Default values: [ -2147483648, 2147483647, 1 ]\n\
		<br /><br />\n\
		siColumnFloat: [ Min, Max, Increment, NbDecimals ]. Default values: [ 2.2250738585072014e-308, 1.7976931348623158e+308, 1.0, 2 ]\n\
		<br /><br />\n\
		siColumnImageClip and siColumnShaderBall: [ ThumbnailSize (from 28 to 128 pixels)]. Default values: [ 28 ]\n\
		<br /><br />\n\
		siColumnVector: [ VectorSize (2,3 or 4), Min, Max, Increment, NbDecimals  ]. Default values: [ 2, 2.2250738585072014e-308, 1.7976931348623158e+308, 1.0, 2 ]\n\
		<br /><br />\n\
		siColumnFile: [ BrowserType (\"File\" or \"Folder\"), StartupPath, Filter ]. [ \"File\", \"/\", \".*\" ]\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">import win32com.client\n\
from win32com.client import constants as C\n\
propName = \"TheProperty\"\n\
gridDataName = \"TheGrid\"\n\
siProperty = Application.ActiveSceneRoot.AddProperty( \"CustomProperty\", False, propName )\n\
gridData = siProperty.AddGridParameter( gridDataName ).Value ;\n\
gridData.ColumnCount = 8\n\
gridData.RowCount = 2\n\
for row in range( 2 ):\n\
	gridData.SetRowLabel( row, \"Row %d\"%row )\n\
# siColumnCombo\n\
gridData.SetColumnLabel( 0, \"siColumnCombo\" )\n\
gridData.SetColumnDef( 0, C.siColumnCombo, [ \"First\", 1, \"Second\", 2, \"Tenth\", 10 ] )\n\
# siColumnInt\n\
gridData.SetColumnLabel( 1, \"siColumnInt\" )\n\
gridData.SetColumnDef( 1, C.siColumnInt, [ -10, 10, 1 ] )\n\
# siColumnFloat\n\
gridData.SetColumnLabel( 2, \"siColumnFloat\" )\n\
gridData.SetColumnDef( 2, C.siColumnFloat, [ -10, 10, 1, 2 ] )\n\
# siColumnImageClip\n\
gridData.SetColumnLabel( 3, \"siColumnImageClip\" )\n\
gridData.SetColumnDef( 3, C.siColumnImageClip, [ 64 ] )\n\
# siColumnVector\n\
gridData.SetColumnLabel( 4, \"siColumnVector\" )\n\
gridData.SetColumnDef( 4, C.siColumnVector, [ 3, -10, 10, 1, 2 ] )\n\
# siColumnFile\n\
gridData.SetColumnLabel( 5, \"siColumnFile\" )\n\
gridData.SetColumnDef( 5, C.siColumnFile, [ \"File\", \"C:\\\\\", \".exe\" ] )\n\
# siColumnShaderBall\n\
gridData.SetColumnLabel( 6, \"siColumnShaderBall\" )\n\
gridData.SetColumnDef( 6, C.siColumnShaderBall, [ 64 ] )\n\
# siColumnMultiLine\n\
gridData.SetColumnLabel( 7, \"siColumnMultiLine\" )\n\
gridData.SetColumnDef( 7, C.siColumnMultiLine, [  ] )\n\
Application.InspectObj( siProperty )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siGridWidgetColumnType.html\">siGridWidgetColumnType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";