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
      <meta name=\"topicid\" content=\"GUID-1B3D2C1B-6254-4744-988B-1FD1F8A40B65\" />\n\
      <meta name=\"indexterm\" content=\"command line\" />\n\
      <meta name=\"indexterm\" content=\"install: shaders: via the command line\" />\n\
      <meta name=\"indexterm\" content=\"install: add-ons: via the command line\" />\n\
      <meta name=\"indexterm\" content=\"command line: installing shaders\" />\n\
      <meta name=\"indexterm\" content=\"install: command line\" />\n\
      <meta name=\"indexterm\" content=\"command line: installing add-ons\" />\n\
      <meta name=\"indexterm\" content=\"install: shaders\" />\n\
      <meta name=\"indexterm\" content=\"shaders: installing\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: shaders\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: shaders\" />\n\
      <meta name=\"indexterm\" content=\"registering plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"plug-ins: registering\" />\n\
      <meta name=\"indexterm\" content=\"xsi -i\" />\n\
      <meta name=\"indexterm\" content=\"Examples: installing: an add-on package\" />\n\
      <meta name=\"indexterm\" content=\"network installation\" />\n\
      <meta name=\"indexterm\" content=\"install: network\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: on a network\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: network installation\" />\n\
      <meta name=\"indexterm\" content=\"install: individual items\" />\n\
      <meta name=\"indexterm\" content=\"-dest option (command-line installation)\" />\n\
      <meta name=\"indexterm\" content=\"command line: installation destinations\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: shaders: via the command line\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: add-ons: via the command line\" />\n\
      <meta name=\"indexterm\" content=\"command line: uninstalling add-ons\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: shaders\" />\n\
      <meta name=\"indexterm\" content=\"shaders: uninstalling\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: uninstalling: shaders\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: shaders\" />\n\
      <meta name=\"indexterm\" content=\"xsi -u\" />\n\
      <meta name=\"indexterm\" content=\"Examples: uninstalling: an add-on package\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: setting: from the command line\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: setting: while launching Softimage\" />\n\
      <meta name=\"indexterm\" content=\"command line: setting the workgroup\" />\n\
      <meta name=\"indexterm\" content=\"launching Softimage: from the command prompt\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: setting the workgroup\" />\n\
      <meta name=\"indexterm\" content=\"Examples: setting the workgroup path from the command line\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Command Line for Installing Files and More</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Application\", \"si_cpp/classXSI_1_1Application.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI\", \"si_cpp/namespaceXSI.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1B3D2C1B-6254-4744-988B-1FD1F8A40B65\"></a></span><div class=\"head\">\n\
            <h1>Using the Command Line for Installing Files and More</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-97F6C720-B2D6-4AA7-85C2-85B0237AE6FE\"></a></span>Autodesk Softimage supports command line options for installing and uninstalling shader\n\
            plug-ins. In addition, you can also specify one or more workgroups. All tasks that\n\
            you can perform from the command line follow this syntax:\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-B213C061-6ADF-431E-854C-7299475F84F9\"></a></span> <span class=\"code\" translate=\"no\">XSI.exe -[option letter] &lt;add-on install options&gt;</span> \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1E6F620-F69A-4FF1-9169-A3148293ACDA\"></a></span>This section provides information about the following tasks:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-199837D8-D9BC-4118-A7C2-12B3F6AC5420\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0090\">Command Line Installation</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9E4CA60-4FCA-4662-A236-94D19AB7A3E0\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0094\">Command Line Removal</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE205132-A735-48D7-BB06-34C0A200B4CB\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0096\">Setting Your Workgroup from the Command Line</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-8B5C5334-8087-4E21-AFEC-B9750B717A9D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B0B4C9B-B4F6-48E9-A5C2-F3ABEB9B0B06\"></a></span>For a complete list of options that can be used with the calling Softimage from the\n\
                  command line, see Softimage Startup Options in the user guide.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0090\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5B5F0695-70E8-4022-B781-A4AD595A3FBC\"></a></span> Command Line Installation\n\
            </h2>             \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A330AFD-E14C-4408-B31F-A9C9BA942C77\"></a></span>The following command line statement installs an add-on file (.xsiaddon) or a shader\n\
               descriptor file (.env, .len, .lit, .mat, .out, .sha, .tex, .tx3, .vol):\n\
            </p> <span class=\"code\" translate=\"no\">XSI.exe -i &lt;file to install&gt;</span> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5FFB243A-881D-4DA6-8611-6B77336CF4FC\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BB200D2-5974-4A4B-832C-C78E13F68234\"></a></span>Wildcards are not supported for installing and uninstalling through the command line.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-9630C870-71DF-4948-A69E-D34C0664C4F7\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F812044-D40E-41FE-ABFA-8B244A6B898E\"></a></span>If the install feature cannot find the DLL in the current directory, it begins a recursive\n\
                     search (looks in the subdirectories of the current directory), which may lead to undesirable\n\
                     results.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D906CD7-B9D6-4E98-B34A-04411CEE3A49\"></a></span>For example, if the Ship and Debug directories both contain copies of this DLL, the\n\
                     install feature takes the one in the Debug directory.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-7EDCFECC-1A2C-4F3C-A216-4A60604E5A5F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A671B410-DF01-409B-BBF0-84104BB97FE7\"></a></span> Since the workgroup path can actually contain several paths separated by semicolons\n\
                     (for example <span class=\"filePath\" translate=\"no\">\\bob\\wkg1;\\jill\\wkg2;\\lucie\\wkg3</span>), installing an add-on to the workgroup location installs it in the first available\n\
                     workgroup location (in this example, <span class=\"filePath\" translate=\"no\">\\bob\\wkg1</span>).\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0091\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B2C498DE-D2F4-46EC-BDB9-7278D4DF877D\"></a></span> Example: installing an add-on package\n\
               </h3>  <span class=\"code\" translate=\"no\">xsi -i phong_xyx.xsiaddon</span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-8CB605F9-1004-44FB-826C-3CCE40AEFB2F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D107586-7966-4287-BCFA-695BE04E13BE\"></a></span> You can also use the command-line through telnet to access all machines one at a\n\
                        time to do the installation. To make life even easier, you could also write a script\n\
                        that accesses each machine in succession and performs the installation for you.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0092\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-13B0CFF4-1A47-4615-A6B5-33158DA90CF8\"></a></span>Picking Shaders To Install\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E44FA0D4-7539-4C12-91E0-157B26266670\"></a></span>This installs a shader material file:\n\
               </p> <span class=\"code\" translate=\"no\">xsi -i myMaterial.mat</span> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0093\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-84000919-8D02-4CE5-8E89-92B7E4438D03\"></a></span> Specifying Where To Install the Add-on\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-614B5F47-8ADF-4204-BB05-AC2B00E59734\"></a></span>When you use the installation switch on the command line, you can also change the\n\
                  destination folder where the add-on manager will install the add-on:\n\
               </p> <span class=\"code\" translate=\"no\">xsi -i abc.xsiaddon -dest factory</span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9C53E87-7270-469D-8CD9-CADA487F6181\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88475AE9-FB46-43CF-9479-7A0C846BDE32\"></a></span>By default, add-ons are installed in the $user location, so the above string would\n\
                        change the destination directory to $factory.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0094\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1427CD3A-0199-484D-B92B-6F84B91D46F3\"></a></span> Command Line Removal\n\
            </h2>         \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F42AD71B-7D2B-4DA2-9836-692EF13C2856\"></a></span>The following command line statement reverses the installation of an add-on file (.xsiaddon):\n\
            </p> <span class=\"code\" translate=\"no\">xsi -u &lt;file to uninstall&gt;</span> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FD43E4A3-6B7F-4815-97FD-6094830C87A4\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1072E9F1-B22C-40DC-8B68-BA44E7D641B4\"></a></span>Wildcards are not supported for installing and uninstalling through the command line.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9D3D8BD-20F2-46DC-8B40-44EE2A71A966\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-02F4463C-8C10-44B6-AFA1-3B2AC29912E6\"></a></span>You cannot select pieces of your add-on file to uninstall. Only entire .xsiaddon files\n\
                     can be uninstalled.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-C5B7A003-C105-4BE4-A03C-D309D634431B\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1CE94E0-CCA8-4A73-B074-EB2FBC4BC4B6\"></a></span>If you uninstall an add-on containing a shader that was applied in the current scene,\n\
                     you must restart Softimage before continuing to avoid unpredictable behavior. You\n\
                     do not need to restart Softimage if the add-on you are uninstalling does not contain\n\
                     a shader plug-in.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0095\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DD17A9F9-0291-40A4-8311-352CC16627AD\"></a></span> Example: uninstalling an add-on package\n\
               </h3>  <span class=\"code\" translate=\"no\">xsi -u phong_xyz.xsiaddon</span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-DB375F92-A220-4DB0-BC82-EAB7B0E9CFEC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0CFDC9C-4AE1-4C5A-8BE1-A93EEC5986DB\"></a></span>All extra switches available when you install your add-on file are also available\n\
                        when you uninstall it, where appropriate. For more information on these switches,\n\
                        see: <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0093\">Specifying Where To Install the Add-on</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0096\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E71DA6F5-05AF-4842-AF19-B7B05B697D77\"></a></span>Setting Your Workgroup from the Command Line\n\
            </h2>      \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-847D40B8-94DA-466E-B251-307278899B9D\"></a></span>The following command line statement sets the workgroup for the application:\n\
            </p> <span class=\"code\" translate=\"no\">xsi -w &lt;path or keyword&gt;</span> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-632AA34F-DCD8-4AAA-9E1A-7557FD16213D\"></a></span>You can also specify multiple workgroups using the -<span class=\"code\" translate=\"no\">w</span> option followed by a semicolon-delimited string:\n\
            </p> <span class=\"code\" translate=\"no\">xsi -w \"&lt;path1;path2;...;pathN&gt;\"</span> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0097\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-093838A5-D2AE-47C9-BA9A-8546DFA6CB17\"></a></span> Example: setting the workgroup path from the command line\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED17EE24-C4CC-419A-853D-3990A4F8A9A2\"></a></span>In this example, the Softimage administrator would log on to machine A as user B and\n\
                  install the shaders.xsiInfo file. Then the administrator would set the workgroup for\n\
                  user B under <span class=\"filePath\" translate=\"no\">%XSI_HOME%\\Addons\\XYZ</span>:\n\
               </p> <span class=\"code\" translate=\"no\">xsi -w \\XYZServer\\<a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>\\<a href=\"javascript:void(0)\" data=\"XSI\" class=\"a_multireflink\">XSI</a></span> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0098\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BB45ABA5-C969-42E2-A5D9-5E28FAE99CC8\"></a></span>Example: setting multiple workgroup paths while launching Softimage from the command\n\
                  line\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-765F62C4-FC8E-4537-A45C-B5DBA8027144\"></a></span>This example demonstrates how to set up specific workgroups while launching Softimage:\n\
               </p> <span class=\"code\" translate=\"no\">xsi -w \"C:\\Softimage\\LocalWorkgroup;R:\\RemoteWorkgroup\" -run</span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-7231994D-8825-4E8F-B65C-77BABA437D63\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7D91831-62EF-4F6E-96D6-BC859B586775\"></a></span>For more information about workgroups in general, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingWorkgroups.htm\">Using Workgroups</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_ManagingWorkgroups.htm\">Managing Workgroups</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";