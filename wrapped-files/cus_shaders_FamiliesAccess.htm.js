var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-F06FE440-4BE2-44E7-80B4-488F0DD95E0B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Detecting Shader Families</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F06FE440-4BE2-44E7-80B4-488F0DD95E0B\"></a></span><div class=\"head\">\n\
            <h1>Detecting Shader Families</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F4A32674-4205-4BFF-8358-A656A2B15663\"></a></span>To find what shader families are defined on an existing shader definition\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-31028BAC-5691-4386-AFA3-710A7123054C\"></a></span>Use <a href=\"#!/url=./si_om/ShaderDef.ShaderFamilies.html\">ShaderDef.ShaderFamilies</a> or ShaderDef::GetShaderFamilies to retrieve a safearray of strings:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
for sFamily in oShaderDef.ShaderFamilies :\n\
	Application.LogMessage(sFamily)\n\
	# ...</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-001B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-23C6ED39-8735-48AC-A69F-584FEFACF490\"></a></span>To find out the primary family defined on an existing shader definition\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F803E7C8-C133-42F5-A4DB-711BB0344BE9\"></a></span>Use <a href=\"#!/url=./si_om/ShaderDef.PrimaryShaderFamily.html\">ShaderDef.PrimaryShaderFamily</a> or ShaderDef::GetPrimaryShaderFamily to return the shader family ID as a string:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.LogMessage(oShaderDef.PrimaryShaderFamily)</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-38B98DE8-3A9B-4B16-AB79-7BC8E4FB86D4\"></a></span>To find out whether the specified family is defined as one of the shader families\n\
                  for an existing shader definition\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A579B42-F91C-4347-B746-3AA2934B1C39\"></a></span>Use <a href=\"#!/url=./si_om/ShaderDef.IsShaderFamily.html\">ShaderDef.IsShaderFamily</a> or ShaderDef::IsShaderFamily with one of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesNative.htm\">native Softimage</a></span> shader families or a <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesCustom.htm\">custom shader family</a></span> you defined:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if (oShaderDef.IsShaderFamily(\"mrLight\")) :\n\
	# do something with light shaders\n\
else :\n\
	# do something with non-light shaders</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FC17F94C-B820-4728-B9F0-EB0719223892\"></a></span>To assign registered shader families to a custom shader definitions\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7247C8D0-19F8-4C5A-BE20-56D93D91492F\"></a></span>Use <a href=\"#!/url=./si_om/ShaderDef.AddShaderFamily.html\">ShaderDef.AddShaderFamily</a> or ShaderDef::AddShaderFamily, passing the shader family name for each shader family\n\
                        you want to add; however, the second parameter determines whether that family will\n\
                        be primary or not. So if you don\'t pass a value for that parameter, the last family\n\
                        added will be considered the primary family:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Adds the lens shader family only\n\
oShaderDef.AddShaderFamily(siShaderFamilyLens)\n\
\n\
# Adds the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> blob and texture families with texture as primary (because it\'s \n\
# the most versatile shader family--it has the fewest connection restrictions of anything)\n\
oShaderDef.AddShaderFamily(siShaderFamilyTexture, True)\n\
oShaderDef.AddShaderFamily(siShaderFamilyData, False)\n\
\n\
# Same thing but without specifying second parameter\n\
oShaderDef.AddShaderFamily(siShaderFamilyData)\n\
oShaderDef.AddShaderFamily(siShaderFamilyTexture)</pre></div> \n\
                  </li>\n\
               </ul>\n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-B9B36D2E-4233-47D4-BF1E-F63656C5D0A3\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB914995-A59D-4708-89A5-28C5EA5710EC\"></a></span>To register a custom shader family in Softimage, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesCustom.htm\">Creating Custom Shader Families</a></span>. To use one of the native Softimage shader families, consult <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesNative.htm\">Native Softimage Shader Families</a></span> for a list of supported families.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";