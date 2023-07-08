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
      <meta name=\"topicid\" content=\"GUID-D30EEB58-7DA2-4A9F-8ED4-F468CEEB3FFE\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating C# Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D30EEB58-7DA2-4A9F-8ED4-F468CEEB3FFE\"></a></span><div class=\"head\">\n\
            <h1>Creating C# Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA4A97FB-B575-45AC-B9BA-CA8AC4C82C8E\"></a></span>The best way to get started with developing a self-installing plug-in is to use one\n\
               of the Softimage SDK wizards to generate the initial code. The development environment\n\
               is set up correctly if you use the wizard. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-49A4029E-7621-4732-B14C-630C9AC852C0\"></a></span>It is a good practice to use Add-on directories to store both the source code and\n\
               compiled plug-in. For example, in the SDK example workgroup, each example is stored\n\
               in a separate Add-on directory. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"FIG_387B75F33AB54A49A16C06BB4BF4ACAE\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-5475C7F9-1CD7-4691-A999-03499BD9018F-low.png\" /></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D44A0751-2166-49BE-A258-4297A1D19140\"></a></span>The C# examples put their source code in a <span class=\"filePath\" translate=\"no\">cssrc</span> folder. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C445C8A3-A0E6-45C6-B7D9-D5F322AF4AA3\"></a></span>To generate the C# code for the plug-in\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-F226AE1E-4CA8-4A90-A15F-2655A073668A\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F1B4418-3893-483B-B3AD-6C1D1C545B2B\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-C2591B9F-DFA9-43A3-A54B-3ED9E46445E6\">File <img src=\"../images/ac.menuaro.gif\" /> Plug-in Manager</span>. The Plug-in Manager dialog appears. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-CF5EF246-A829-46E5-BC6E-EC4F3DC397A4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>In the Tools Development Environment layout, you can click the <span class=\"MenuCascade\" id=\"GUID-98CF4BDC-0E66-4BCC-8685-19B27D24D94F\">Plug-ins</span> tab to switch to the Plug-in Manager view. \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CEF0409D-3C8A-4D07-875B-21363ACBB137\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-A4F3CCDA-8EB6-48E5-B92F-BC51E52FD070\">File <img src=\"../images/ac.menuaro.gif\" /> New</span>, and then choose a type of plug-in. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A01B38B1-1970-49B3-9FB0-2B1D24807F3F\"></a></span>The Plug-in Wizard appears. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-521CFB51-1CCC-421D-B85C-4A61DE105DF3\"></a></span>Specify the plug-in details such as plug-in name, author, and others. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A64F8AB5-40A6-4453-9837-7026BC2A89D0\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-9117D415-C1A2-4BED-A4D9-519575E62F1F\">Coding Language</span> drop-down list, select <span class=\"MenuCascade\" id=\"GUID-C82DD01F-F1F3-4FED-8997-57331A7C8271\">C#</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-830088D7-5842-4E41-B8FF-A919E758353D\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-570D6968-9675-4F88-85C0-C2B2F63B6FED\">Output Directory</span> box, select or type the location to create the plug-in. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B21CF8EF-46A0-46C5-8799-1F2BD243787B\"></a></span>Generate the code. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-15E95A8D-87A1-4B4A-8CBB-C838FF9262A2\"></a></span>The wizard generates a C# project file (<span class=\"filePath\" translate=\"no\">.csproj</span>) and a C# source file (<span class=\"filePath\" translate=\"no\">.cs</span>) that contains the code to register and create C# objects. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-D5F94E0F-866E-4E69-893E-D701D4611A73\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>The wizard outputs the source and project files to the folder specified in the <span class=\"MenuCascade\" id=\"GUID-C015B603-3A2A-485D-9CD6-69B6E3E58DE4\">Output Directory</span> box, but Visual Studio compiles the <span class=\"filePath\" translate=\"no\">.dll</span> in the <span class=\"filePath\" translate=\"no\">obj/Debug</span> subfolder which Softimage finds automatically. \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0108BAC4-27A9-4967-ACB6-95DE3DBE7851\"></a></span>Edit and <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm\">compile</a></span> the code. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";