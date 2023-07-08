var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Execute (Command)</title>\n\
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
            <h1>Execute (Command)</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Execute (Command)</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				This callback is fired every time you invoke the command. \n\
			</p>\n\
	<p>\n\
				Use this callback to implement a command. This is where you process the arguments, peform some actions, and \n\
				then return the result (if any). In other words, this callback is roughly equivalent to the \n\
				<span style=\"font-family: courier, monospace;\">XSIOnCommand</span> and <span style=\"font-family: courier, monospace;\">XSIOnCommandCPP</span> legacy callbacks. \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;command_name&gt;\n\
{\n\
	public bool Execute( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;command_name&gt;_Execute( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;command_name&gt;_Execute( in_arg0, in_arg1, in_arg2, ... )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;command_name&gt;_Execute( in_arg0, in_arg1, in_arg2, ... ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;command_name&gt;_Execute( in_arg0, in_arg1, in_arg2, ... )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;command_name&gt;_Execute \n\
{ \n\
	my (@in_args) = @; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;command_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">PluginRegistrar.RegisterCommand</a>, with any spaces converted to underscores.\n\
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
		<tr>			<td class=\"name\">in_args</td>\n\
			<td>Scripting</td>\n\
			<td>Depends on the argument</td>\n\
			<td>The list of arguments matches the arguments added to the command in the \n\
					<a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> callback. The actual type \n\
					of an argument depends on the argument handler (if any) and the value passed in by \n\
					the caller.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>C#</td>\n\
			<td><a href=\"#!/url=./si_om/Context.html\">Context</a></td>\n\
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/Command.html\">Command</a>.<br /><br />\n\
					The command arguments and return value are stored as context attributes.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object. The command \n\
					arguments and return value are stored as context attributes.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a>	<p>\n\
				C++ and C# custom commands use context attributes to get the command arguments and to return values.  \n\
			</p>\n\
	<table>		<tr>			<th>Attribute</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td>Arguments</td>\n\
			<td><b>C#</b><br /><br />\n\
						An array of type System.Object. You must cast each element of the array to its proper \n\
						type before being able to use it.<br /><br /><b>C++</b><br /><br />\n\
						A CValueArray. Each element of this array is a <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> \n\
						object that stores an argument, which could be a boolean, numeric, or string value, a single \n\
						Softimage object, or a collection of objects. \n\
						See <a href=\"#!/url=./files/cus_cmds_WorkingwithArguments.htm\">Working with Arguments</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td>ReturnValue</td>\n\
			<td>Stores the return value of the command. \n\
					See <a href=\"#!/url=./files/cus_cmds_ReturningValues.htm\">Returning Values</a>.</td>\n\
</tr>\n\
		<tr>			<td>UndoRequired</td>\n\
			<td><b>C++ API only</b><br /><br />\n\
						Determines whether or not an undo stack must be maintained. \n\
						See <a href=\"#!/url=./files/cus_cmds_UndoingAndRedoingCustomCommands.htm\">Undoing and Redoing Custom Commands</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td>UndoRedoData</td>\n\
			<td><b>C++ API only</b><br /><br />\n\
						Stores the current activity in the undo stack, which can later be retrieved in the <a href=\"#!/url=./si_cmds/cb_Command_Undo.html\">Undo</a> callback\n\
						See <a href=\"#!/url=./files/cus_cmds_UndoingAndRedoingCustomCommands.htm\">Undoing and Redoing Custom Commands</a>.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Examples</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript code generated by the Command Wizard\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"sblair\";\n\
	in_reg.Name = \"NewCommand12Plugin\";\n\
	in_reg.Email = \"\";\n\
	in_reg.URL = \"\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	in_reg.RegisterCommand(\"NewCommand12\",\"NewCommand12\");\n\
	//RegistrationInsertionPoint - do not remove this line\n\
\n\
	return true;\n\
}\n\
\n\
function XSIUnloadPlugin( in_reg )\n\
{\n\
	strPluginName = in_reg.Name;\n\
	Application.LogMessage(strPluginName + \" has been unloaded.\");\n\
	return true;\n\
}\n\
\n\
function NewCommand12_Init( ctxt )\n\
{\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
	oCmd.Description = \"\";\n\
	oCmd.ReturnValue = true;\n\
\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
	oArgs.AddWithHandler(\"Arg0\",\"AnimatableParameters\");\n\
	oArgs.AddWithHandler(\"Arg1\",\"Collection\");\n\
	oArgs.AddWithHandler(\"Arg2\",\"SingleObj\");\n\
	oArgs.AddWithHandler(\"Arg3\",\"Frame\");\n\
	oArgs.AddWithHandler(\"Arg4\",\"MarkedParameters\");\n\
	oArgs.Add(\"Arg5\",siArgumentInput);\n\
	return true;\n\
}\n\
\n\
function NewCommand12_Execute( Arg0,Arg1,Arg2,Arg3,Arg4,Arg5 )\n\
{\n\
\n\
	Application.LogMessage(\"NewCommand12_Execute called\");\n\
	\n\
	// \n\
	// TODO: Put your command implementation here.\n\
	// \n\
	return true;\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">// C++ code generated by the Command Wizard\n\
#include &lt;xsi_application.h&gt;\n\
#include &lt;xsi_context.h&gt;\n\
#include &lt;xsi_pluginregistrar.h&gt;\n\
#include &lt;xsi_status.h&gt;\n\
#include &lt;xsi_argument.h&gt;\n\
#include &lt;xsi_command.h&gt;\n\
using namespace XSI; \n\
\n\
SICALLBACK XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"sblair\");\n\
	in_reg.PutName(L\"CmdCppExamplePlugin\");\n\
	in_reg.PutEmail(L\"\");\n\
	in_reg.PutURL(L\"\");\n\
	in_reg.PutVersion(1,0);\n\
	in_reg.RegisterCommand(L\"CmdCppExample\",L\"CmdCppExample\");\n\
	//RegistrationInsertionPoint - do not remove this line\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
SICALLBACK XSIUnloadPlugin( const PluginRegistrar&amp; in_reg )\n\
{\n\
	CString strPluginName = in_reg.GetName();\n\
	Application().LogMessage(strPluginName + L\" has been unloaded.\");\n\
	return CStatus::OK;\n\
}\n\
\n\
SICALLBACK CmdCppExample_Init( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	Command oCmd;\n\
	oCmd = ctxt.GetSource();\n\
	oCmd.PutDescription(L\"\");\n\
	oCmd.EnableReturnValue(true);\n\
\n\
	ArgumentArray oArgs;\n\
	oArgs = oCmd.GetArguments();\n\
	oArgs.AddWithHandler(L\"Arg0\",L\"AnimatableParameters\");\n\
	oArgs.AddWithHandler(L\"Arg1\",L\"Collection\");\n\
	oArgs.AddWithHandler(L\"Arg2\",L\"SingleObj\");\n\
	oArgs.AddWithHandler(L\"Arg3\",L\"Frame\");\n\
	oArgs.AddWithHandler(L\"Arg4\",L\"MarkedParameters\");\n\
	oArgs.Add(L\"Arg5\");\n\
	return CStatus::OK;\n\
}\n\
\n\
SICALLBACK CmdCppExample_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
	CValue Arg0 = args[0];\n\
	CValue Arg1 = args[1];\n\
	CValue Arg2 = args[2];\n\
	CValue Arg3 = args[3];\n\
	CValue Arg4 = args[4];\n\
	CValue Arg5 = args[5];\n\
\n\
	Application().LogMessage(L\"CmdCppExample_Execute called\");\n\
	// \n\
	// TODO: Put your command implementation here.\n\
	// \n\
	// Return a value by setting this attribute:\n\
	ctxt.PutAttribute( L\"ReturnValue\", true );\n\
\n\
	// Return CStatus::Fail if you want to raise a script error\n\
	return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Command Callbacks</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init (Command)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Command_Undo.html\">Undo</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Command_Redo.html\">Redo</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a></li>\n\
	<li><a href=\"#!/url=./examples/Addons/SimpleCommand/netview_SimpleCommand.htm\">Custom Command Examples</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";