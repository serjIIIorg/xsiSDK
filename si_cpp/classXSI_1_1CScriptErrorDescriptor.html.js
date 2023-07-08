var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CScriptErrorDescriptor Class Reference</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/yepnope.1.5.4-min.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var weAreIn21 = $(\"div#main.view-active\").length;\n\
var prefix = \"\";\n\
if (weAreIn21)\n\
{ prefix = \"si_cpp/\"; }\n\
yepnope([{\n\
load:[prefix + \"jquery.js\", prefix + \"navtree.js\", prefix + \"resize.js\", prefix + \"dynsections.js\"],\n\
complete: function() {\n\
  dQuery = jQuery.noConflict(\'true\');\n\
  dQuery(window).load(resizeHeight);\n\
  dQuery(document).ready( function () {\n\
    setTimeout( function () {\n\
      initResizable();\n\
      initNavTree(\'classXSI_1_1CScriptErrorDescriptor.html\', prefix);\n\
      dQuery(window).trigger(\"load\");\n\
      }, 100);\n\
    }\n\
  );\n\
}\n\
}]\n\
)\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>CScriptErrorDescriptor Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.6 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/files.html\"><span>Files</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"summary\">\n\
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CScriptErrorDescriptor Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__status_8h_source.html\">xsi_status.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This class extends the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\">CStatus</a> object with additional error details if a Script Error has occured. </p>\n\
<dl class=\"section since\"><dt>Since</dt><dd>v5.0 </dd></dl>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a9a80eed4db5113db2c31b94d6de2104f\">Application::ExecuteScriptCode</a> </dd></dl>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"closed.png\" alt=\"+\"> Inheritance diagram for CScriptErrorDescriptor:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"classXSI_1_1CScriptErrorDescriptor.png\" usemap=\"#CScriptErrorDescriptor_map\" alt=\"\">\n\
  <map id=\"CScriptErrorDescriptor_map\" name=\"CScriptErrorDescriptor_map\">\n\
<area href=\"classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\" alt=\"CStatus\" shape=\"rect\" coords=\"0,0,143,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a637f8023074e71d24e9819af59ce34a1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html#a637f8023074e71d24e9819af59ce34a1\">CScriptErrorDescriptor</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">CStatus::Code</a> in_code=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a>)</td></tr>\n\
<tr class=\"separator:a637f8023074e71d24e9819af59ce34a1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a47e4063120842f77c9649b29f5f3b706\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html#a47e4063120842f77c9649b29f5f3b706\">CScriptErrorDescriptor</a> (LONG in_code)</td></tr>\n\
<tr class=\"separator:a47e4063120842f77c9649b29f5f3b706\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a10ac8d4d25f03a926818b8a06b80e1ba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html#a10ac8d4d25f03a926818b8a06b80e1ba\">GetDescription</a> () const </td></tr>\n\
<tr class=\"separator:a10ac8d4d25f03a926818b8a06b80e1ba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2d44590b6184c2da9cdddebf43dba3d6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">ULONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html#a2d44590b6184c2da9cdddebf43dba3d6\">GetErrorLineNumber</a> () const </td></tr>\n\
<tr class=\"separator:a2d44590b6184c2da9cdddebf43dba3d6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classXSI_1_1CStatus\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classXSI_1_1CStatus\')\"><img src=\"closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a></td></tr>\n\
<tr class=\"memitem:abaab88b582e9b5b1b803700acb953c23 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#abaab88b582e9b5b1b803700acb953c23\">CStatus</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a>)</td></tr>\n\
<tr class=\"separator:abaab88b582e9b5b1b803700acb953c23 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a54706f68752bcc5a502f3cb176088c9e inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a54706f68752bcc5a502f3cb176088c9e\">GetCode</a> () const </td></tr>\n\
<tr class=\"separator:a54706f68752bcc5a502f3cb176088c9e inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a429605c947acd521ec0d6cfc18d58943 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a429605c947acd521ec0d6cfc18d58943\">Succeeded</a> () const </td></tr>\n\
<tr class=\"separator:a429605c947acd521ec0d6cfc18d58943 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aef4797e10edc4d870bcdf04c7b72e82a inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#aef4797e10edc4d870bcdf04c7b72e82a\">PutCode</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code)</td></tr>\n\
<tr class=\"separator:aef4797e10edc4d870bcdf04c7b72e82a inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a10ac8d4d25f03a926818b8a06b80e1ba inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a10ac8d4d25f03a926818b8a06b80e1ba\">GetDescription</a> () const </td></tr>\n\
<tr class=\"separator:a10ac8d4d25f03a926818b8a06b80e1ba inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab33161928c0918ddbfe7febde1cf9867 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#ab33161928c0918ddbfe7febde1cf9867\">operator=</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code)</td></tr>\n\
<tr class=\"separator:ab33161928c0918ddbfe7febde1cf9867 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2105fb136b18efffc7eaba50a0bb6802 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a2105fb136b18efffc7eaba50a0bb6802\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;rhs) const </td></tr>\n\
<tr class=\"separator:a2105fb136b18efffc7eaba50a0bb6802 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7\">operator==</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> rhs) const </td></tr>\n\
<tr class=\"separator:a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af57fcac1a5d736046f3ffa0551d4ca13 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af57fcac1a5d736046f3ffa0551d4ca13\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;rhs) const </td></tr>\n\
<tr class=\"separator:af57fcac1a5d736046f3ffa0551d4ca13 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9254241fe8b86d785352274d6caf21ff inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a9254241fe8b86d785352274d6caf21ff\">operator!=</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> rhs) const </td></tr>\n\
<tr class=\"separator:a9254241fe8b86d785352274d6caf21ff inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7c8d4b33259ce6f185eac669b2befd81 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a7c8d4b33259ce6f185eac669b2befd81\">AssertSucceeded</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> &amp;in_strText=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>()) const </td></tr>\n\
<tr class=\"separator:a7c8d4b33259ce6f185eac669b2befd81 inherit pub_methods_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_types_classXSI_1_1CStatus\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_types_classXSI_1_1CStatus\')\"><img src=\"closed.png\" alt=\"-\">&#160;Public Types inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a></td></tr>\n\
<tr class=\"memitem:af31477bc48f67856bedb0fa8e5b5281d inherit pub_types_classXSI_1_1CStatus\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da18f893264a00711081b62de694f99db4\">Undefined</a> = 0xFFFFFFFF, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281daf9d46b7804d93a4fcde88489a1b68c24\">False</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2c88d6b09611bebcfd079df624ae3bfe\">Fail</a> = 0x80004005L, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">InvalidArgument</a> = 0x80070057L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da693a56048c1e1863c980d58364247f7a\">OutOfMemory</a> = 0x8007000EL, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da60a075acd0b5e992180ec8ad7d794ea4\">AccessDenied</a> = 0x80070005L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da60705d33ccd09cb1942945c2a8526bbe\">Unexpected</a> = 0x8000FFFFL, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dacb8869b8a5ba913370cbb2ace9a5acf5\">NotImpl</a> = 0x80004001L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da5867f85171267d9072de24ed18683bad\">MemberNotFound</a> = 0x80020003L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da596ba78c00d5ebb3b20ef2865efd74ed\">Abort</a> = 0x80004004L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da0685e3ac66c3e2a666f330707aa05c38\">BadVarType</a> = 0x80020008L\n\
<br>\n\
 }</td></tr>\n\
<tr class=\"memdesc:af31477bc48f67856bedb0fa8e5b5281d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Error code enumerator.  <a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">More...</a><br></td></tr>\n\
<tr class=\"separator:af31477bc48f67856bedb0fa8e5b5281d inherit pub_types_classXSI_1_1CStatus\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a637f8023074e71d24e9819af59ce34a1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html\">CScriptErrorDescriptor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">CStatus::Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>in_code</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a></code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructs a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html\" title=\"This class extends the CStatus object with additional error details if a Script Error has occured...\">CScriptErrorDescriptor</a> based on one of the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\" title=\"Error code enumerator. \">CStatus::Code</a> values. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_code</td><td>Error code to set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a47e4063120842f77c9649b29f5f3b706\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html\">CScriptErrorDescriptor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">LONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_code</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructs a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CScriptErrorDescriptor.html\" title=\"This class extends the CStatus object with additional error details if a Script Error has occured...\">CScriptErrorDescriptor</a> </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_code</td><td>Error number to set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a10ac8d4d25f03a926818b8a06b80e1ba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetDescription </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Return an string containing the error message that describes the script error. It will return an empty string if no script error occurred. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\" title=\"Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...\">CString</a> An error string </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2d44590b6184c2da9cdddebf43dba3d6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">ULONG GetErrorLineNumber </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Get the line number within the script that caused the script error. It will return 0 if no script error occurred. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>ULONG Line number, where the first line of a script is line zero </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__status_8h_source.html\">xsi_status.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";