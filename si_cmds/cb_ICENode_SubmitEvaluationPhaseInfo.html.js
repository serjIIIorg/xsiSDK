var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SubmitEvaluationPhaseInfo (ICE Nodes)</title>\n\
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
            <h1>SubmitEvaluationPhaseInfo (ICE Nodes)</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SubmitEvaluationPhaseInfo (ICE Nodes)</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				This callback is required in the multi-phase evaluation mode for specifying the ports to be pulled for the current \n\
				evaluation phase. It is called by Softimage until you declare the last phase with the \n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html#SetLastEvaluationPhase\">ICENodeContext::SetLastEvaluationPhase</a> \n\
				function. See <a href=\"#!/url=./files/cus_icenodes_MultiPhaseCustomICENode.htm\">Multi-Phase Custom ICENode</a> \n\
				for more information.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_render.htm\">Custom ICENodes</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;icenode_name&gt;_SubmitEvaluationPhaseInfo( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;icenode_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterICENode\">PluginRegistrar::RegisterICENode</a>, \n\
				with any spaces converted to underscores.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Language</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td class=\"name\">C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&</td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> object. \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetSource\">Context::GetSource</a> \n\
					is not avaliable for this callback and returns empty <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a>.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init (ICE Nodes)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">ICE Node Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";