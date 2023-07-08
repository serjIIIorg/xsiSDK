var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.ConnectFromProgID2</title>\n\
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
            <h1>Parameter.ConnectFromProgID2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.ConnectFromProgID2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> object from a ProgID string and connects it to the parameter. \n\
This method can be used to connect a <a href=\"#!/url=./si_om/Shader.html\">Shader</a> to a parameter from a ProgID string. \n\
It can also be used to connect a multi output shader or shader compound to a parameter, in which \n\
case the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object representing the connected source is returned.\n\
<br /><br />\n\
Note: This method uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. Normally \n\
for scripting you can get the output arguments via the \n\
<a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a>, but this method already returns \n\
a value (C# cannot use this workaround because it does not have access to the ISIVTCollection). \n\
<br /><br />\n\
The only available workaround in this case is to create a VBScript custom command which returns both the output\n\
arguments and the return value in one array. For details, see \n\
<a href=\"#!/url=./files/RtnValProblem.htm\">What Happens when the Function Already Returns a Value?</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DataSource Parameter.ConnectFromProgID2( String in_ProgID, String in_SourceName, Object& out_pvPrevDataSource );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oDataSource = Parameter.ConnectFromProgID2( ProgID, [SourceName], [PrevDataSource] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Newly created <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> object, such as a <a href=\"#!/url=./si_om/Shader.html\">Shader</a> or an <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProgID		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 \n\
		The ProgID is a string name that can be used to look up a data source \n\
		type. Data sources that support ProgIDs implement a ProgID property \n\
		(for example, <a href=\"#!/url=./si_om/Shader.ProgID.html\">Shader.ProgID</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name of the source (or output port) on the shader we want to create. Leave empty to connect to default output or for single-output shaders.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PrevDataSource		</td>\n\
		<td><a href=\"#!/url=./files/DataSource.htm\">DataSource</a> object (for example, <a href=\"#!/url=./si_om/Shader.html\">Shader</a>, <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>)		</td>\n\
		<td>\n\
 \n\
		The previously connected data source if any. The method returns \"Nothing\" \n\
		if there is no previously connected data source.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Shader.ProgID.html\">Shader.ProgID</a> <a href=\"#!/url=./si_om/Parameter.Connect.html\">Parameter.Connect</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">Parameter.ConnectFromProgID</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromPreset2.html\">Parameter.ConnectFromPreset2</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromFile2.html\">Parameter.ConnectFromFile2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";