var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetAttributeList</title>\n\
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
            <h1>GetAttributeList</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetAttributeList</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Enables a shader to tell Softimage which attribute it needs in order to perform rendering. \n\
				The attributes are returned in a <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttributeArray.html\">CHardwareAttributeArray</a>.\n\
			</p>\n\
	<p>\n\
				The <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html\">CHardwareAttribute</a> class implements a set of helper functions \n\
				to enable shaders to request any type of data on the mesh or point cloud to be used in rendering. \n\
				Each attribute is defined by a <span style=\"font-family: courier, monospace;\">CHardwareAttribute</span> object allows access to the\n\
				attribute data and the hardware registers that will hold the data. Each shader must export this \n\
				callback which notifies Softimage which attributes the shader needs.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_shaders_hwrenderers.htm\">Custom Realtime Shaders</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">bool &lt;shader_name&gt;_&lt;renderer_name&gt;_GetAttributeList (\n\
	CRef 				in_pCtx, \n\
	CHardwareAttributeArray&amp; 	out_array, \n\
	void 				**io_pInstanceData\n\
)\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;shader_name&gt;</span> is the class name registered for this shader, with any spaces converted \n\
				to underscores. In the case of a shader definition plug-in, the name is specified in the call to \n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterShader\">PluginRegistrar::RegisterShader</a>. In the \n\
				case of a shader definition created with a parser, the name is set in the \n\
				<a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback via the \n\
				<a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html#ContextAttributes_ShaderParseInfo\">ClassName</a> attribute.\n\
			</p>\n\
	<p><span style=\"font-family: courier, monospace;\">&lt;renderer_name&gt;</span> is the name of the rendering engine. For example, an \n\
				<span style=\"font-family: courier, monospace;\">OpenGL</span> shader with a class name of <span style=\"font-family: courier, monospace;\">Sunset</span> will use \n\
				<span style=\"font-family: courier, monospace;\">Sunset_OpenGL_GetAttributeList</span>, whereas the version parsed from a <span style=\"font-family: courier, monospace;\">.cgfx</span> file will \n\
				use <span style=\"font-family: courier, monospace;\">Sunset_CgFx_GetAttributeList</span>.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_pCtx</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1HardwareShaderContext.html\">HardwareShaderContext</a> object.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\">out_array</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttributeArray.html\">CHardwareAttributeArray</a></td>\n\
			<td>List of <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html\">CHardwareAttribute</a>s defined on this shader</td>\n\
</tr>\n\
		<tr>			<td class=\"name\">io_pInstanceData</td>\n\
			<td>void </td>\n\
			<td>A pointer to the shader instance user data </td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Realtime Shader Callbacks</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_RTShaders_Execute.html\">Execute (Realtime Shaders)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_RTShaders_Init.html\">Init (Realtime Shaders)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_RTShaders_GetVersion.html\">RTS_GetVersion</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_RTShaders_Term.html\">Term (Realtime Shaders)</a></li>\n\
	<li><a href=\"#!/url=./examples/Addons/RealtimeShaders/netview_RealtimeShaders.htm\">Real-Time Effect Shader Examples</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";