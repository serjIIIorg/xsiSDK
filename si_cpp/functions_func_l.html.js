var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><meta name=\"robots\" content=\"noindex, follow\"><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Functions</title>\n\
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
      initNavTree(\'functions_func_l.html\', prefix);\n\
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
            <h1>Class Members - Functions</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/functions_func.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_~.html#index_~\"><span>~</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_l\"></a>- l -</h3><ul>\n\
<li>Layer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Layer.html#aab9ca9398cadd459608d0d7cdad9a607\">Layer</a>\n\
</li>\n\
<li>Layout()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Layout.html#abdf623d8100dc609bf89d0425ca6933c\">Layout</a>\n\
</li>\n\
<li>LeftMul()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotationf.html#ace6adedc36ea8d925387bb93fd5c87a1\">CRotationf</a>\n\
</li>\n\
<li>Length()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html#a8c3b193c06f950b092b7d1ca4db05e57\">CString</a>\n\
</li>\n\
<li>Library()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Library.html#a2da5d9c91a7985f18f06874f12baa770\">Library</a>\n\
</li>\n\
<li>Light()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Light.html#a7f8a7be05225f470c200f7e4ff914a3c\">Light</a>\n\
</li>\n\
<li>LightRig()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1LightRig.html#ac0ffeb2aa4b891df3d3544874dfe7246\">LightRig</a>\n\
</li>\n\
<li>LinearlyInterpolate()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html#a7c741d09ef39c3fa6006ae5928efc529\">CVector3</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3f.html#a1ba3b8541e26b31190e70e22e36c9f9d\">CVector3f</a>\n\
</li>\n\
<li>Load()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Delta.html#a8888f1867c09d16cd5297fe1e9ae12fb\">Delta</a>\n\
</li>\n\
<li>LoadImageFromFile()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ToolContext.html#a5bf043c7d75506a7fbce80ab0f458e4b\">ToolContext</a>\n\
</li>\n\
<li>LoadPlugin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a292dbaedbcf4324642d92ad8ece8152e\">Application</a>\n\
</li>\n\
<li>LockSceneData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Renderer.html#ac21d8176f4474085c44b0a0560f16e6e\">Renderer</a>\n\
</li>\n\
<li>LogMessage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a9b269de260f6a9fca710d9b9003bd1a3\">Application</a>\n\
</li>\n\
<li>Lower()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html#a2916657630de9105936250904d7611a7\">CString</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";