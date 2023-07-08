var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.Resample</title>\n\
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
            <h1>FCurve.Resample</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.Resample</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Resamples the fcurve, adding keys from startframe to endframe at the \n\
interval defined by the step.<br /><br />\n\
A valid range is defined as: <br /><br />\n\
	startframe < endframe=\"\" and=\"\" step=\"\" />< 0.25=\"\" *=\"\" (=\"\" endframe=\"\" -=\"\" startframe=\"\" /><br /><br />\n\
Key locks can be overridden using the OverrideKeyLock argument.<br /><br />\n\
Calling this method may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.Resample( Object in_StartFrame, Object in_EndFrame, Double in_Step, Boolean in_KeepExistingKeys, Boolean in_OverrideKeyLock );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.Resample( [StartFrame], [EndFrame], [Step], [KeepExistingKeys], [OverrideKeyLock] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The time in frames at which to start resampling.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The first key frame on the fcurve or, if there are no keys, the playcontrol In frame value.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The time in frames at which to end resampling.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The last key frame or, if there are no keys, the playcontrol Out frame value.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Step		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The interval in frames between each key.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KeepExistingKeys		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Do not remove keys in resampled range.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OverrideKeyLock		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Override the <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a> value for \n\
		existing keys in range and remove these keys if the KeepExistingKeys \n\
		argument is set to false.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This JScript examples illustrates how to the FCurve.Resample method\n\
	to add a predetermined number of keys to an fcurve.\n\
*/\n\
// Create a null\n\
Application.NewScene(\"\", false);\n\
var nullobj = ActiveSceneRoot.AddNull();\n\
// Create an fcurve on the posx parameter from the null\n\
var fc = nullobj.posx.AddFCurve();\n\
// Define a number of keys\n\
var nbkeys = 100;\n\
var arraysize = nbkeys * 2;\n\
var keys = new Array( 2 * nbkeys );\n\
var i = 0, offset = -50;\n\
// Generate some key data with a random distribution\n\
for ( i=0; i&lt;arraysize; i+=2 )\n\
{\n\
	v = Math.round( offset + Math.random() * 100 );\n\
	keys[i] = v;\n\
	keys[i+1] = v;\n\
}\n\
keys.sort();\n\
for ( i=0; i&lt;arraysize; i+=2 )\n\
{\n\
	keys[i+1] = Math.cos( (i+1) / 10 ) * 100;\n\
}\n\
// Set the keys onto the fcurve\n\
fc.SetKeys( keys );\n\
// Add the same keys to posy for comparision\n\
nullobj.posy.AddFCurve().SetKeys( keys );\n\
var empty;\n\
// Resample the entire fcurve on posx and disregard the\n\
// existing keys\n\
fc.Resample( empty, empty, 5 );\n\
LogMessage( \"original curve : \" + nullobj.posy.Source.GetNumKeys() \n\
	+ \" resampled curve : \" + nullobj.posx.Source.GetNumKeys() );\n\
// The resampling method can also be used to add keys \n\
// to a empty fcurve\n\
nullobj.posz.AddFCurve().Resample( -50,50 );\n\
// Outputs:\n\
//INFO : original curve : 64 resampled curve : 21</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.AddKey.html\">FCurve.AddKey</a> <a href=\"#!/url=./si_om/FCurve.RemoveKeys.html\">FCurve.RemoveKeys</a> <a href=\"#!/url=./si_om/FCurve.GetNumKeys.html\">FCurve.GetNumKeys</a> <a href=\"#!/url=./si_om/FCurve.Smooth.html\">FCurve.Smooth</a> <a href=\"#!/url=./si_om/FCurve.Fit.html\">FCurve.Fit</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";