var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIAddImageClip</title>\n\
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
            <h1>SIAddImageClip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIAddImageClip</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and adds a new image clip to the Clips container from an image source. To perform this command you need an \n\
image source in the Sources container. You can create an image with the <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> command. \n\
This command is similar in syntax and behavior to the <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> command, except that it \n\
returns a value through a parameter, instead of from the function directly.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIAddImageClip( Source, [Name], [Clip] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Source to use to create the clip. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name to use for the new clip. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Clip		</td>\n\
		<td><a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>		</td>\n\
		<td>\n\
 Returns the new clip 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to add an image clip from an image source.\n\
\'\n\
option explicit\n\
\' First, add an image source.\n\
Dim oSourceObj, ImageFile\n\
ImageFile = XSIUtils.BuildPath( _\n\
	Application.InstallationPath( siProjectPath ), _\n\
	\"Pictures\", \"xsilogo.jpg\" _\n\
)\n\
SIAddImageSource ImageFile, \"XSIlogo\", oSourceObj\n\
\' Now create an image clip from the image source.\n\
Dim oClipObj \n\
SIAddImageClip oSourceObj, \"XSIlogo_Clip\", oClipObj\n\
\' Now output some information about the clip, and its source.\n\
Dim SourceName, SourceFile, XRes, YRes\n\
SourceName = GetValue( oClipObj &amp; \".Source.Name\" )\n\
Application.LogMessage oClipObj &amp; \" Source       : \" &amp; CStr(SourceName)\n\
SourceFile = GetValue( oClipObj &amp; \".SourceFileName\" )\n\
Application.LogMessage oClipObj &amp; \" Source File  : \" &amp; CStr(SourceFile)\n\
XRes = GetValue( \"Sources.\" &amp; SourceName &amp; \".XRes\" )\n\
Application.LogMessage oClipObj &amp; \" X Resolution : \" &amp; CInt(XRes)\n\
YRes = GetValue( \"Sources.\" &amp; SourceName &amp; \".YRes\" )\n\
Application.LogMessage oClipObj &amp; \" Y Resolution : \" &amp; CInt(YRes)\n\
\' Expected results:\n\
\'INFO : \"Clips.XSIlogo_Clip Source       : XSIlogo\"\n\
\'INFO : \"Clips.XSIlogo_Clip Source File  : &lt;ProjectPath&gt;\\Pictures\\xsilogo.jpg\"\n\
\'INFO : \"Clips.XSIlogo_Clip X Resolution : 500\"\n\
\'INFO : \"Clips.XSIlogo_Clip Y Resolution : 513\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to create an image source. The user \n\
\' will be prompted to select an image source.  Select the directory \n\
\' &lt;$XSI_HOME\\Data\\XSI_SAMPLES\\Pictures\\sprites&gt;, and select\n\
\' the sequence &lt;seq.[0..9;1].tga&gt;.  Then, click OK.\n\
\'\n\
NewScene , false\n\
dim oSrc\n\
set oSrc = AddImageSource( , \"SourceImageExample\" )\n\
\' Create and add a image clip, using the previous image source\n\
SIAddImageClip oSrc, \"ImgClipExample\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/SIAddImageSource.html\">SIAddImageSource</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";