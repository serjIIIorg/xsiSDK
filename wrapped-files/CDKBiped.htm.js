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
      <meta name=\"topicid\" content=\"GUID-8D39166F-4013-4935-8D96-E3C3F617FA8A\" />\n\
      <meta name=\"indexterm\" content=\"Biped\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Biped</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8D39166F-4013-4935-8D96-E3C3F617FA8A\"></a></span><div class=\"head\">\n\
            <h1> Biped</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-00F2CF18-13D0-48C5-9AE3-89398F03378A\"></a></span>The <em class=\"strong\">Biped</em> object represents a character with the same proportions as a biped guide. It contains\n\
               many of the other character components, such as <span class=\"char_link\"><a href=\"#!/url=./files/CDKArm.htm\">Arm</a></span>s, <span class=\"char_link\"><a href=\"#!/url=./files/CDKTorso.htm\">Torso</a></span>s, <span class=\"char_link\"><a href=\"#!/url=./files/CDKHead.htm\">Head</a></span>s, etc.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0043\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7AB907F6-DBA1-488E-92CB-906E32C0815F\"></a></span>Command to create\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2AA1C36-A7BB-458C-B36D-C9E22882209D\"></a></span> <a href=\"#!/url=./si_cmds/MakeBiped.html\">MakeBiped</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0044\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5A9D8623-36C1-4180-9ED2-403E7CA21676\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B956D078-5D07-42AF-9B66-32EBDB08F7DE\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8FC2B3D5-7196-4BB4-9DD3-E7BCB8AABD40\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-48EB21C8-8478-48E2-BB26-D3A0B106650A\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0045\"></a></span><p class=\"table-body\"> UI</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C7686FA-3563-4E4D-B8A1-3C223BF3D1DD\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKUI.htm\">UI</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FA90733C-8D99-4844-BEE8-5F04A944EA68\"></a></span><p class=\"table-body\">dialog used to interactively create the Biped object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3456E1B-08FD-498B-A3AD-5FFD15979254\"></a></span><p class=\"table-body\">Model</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-65EB3701-1CA3-4067-B8EE-81570D8C8E4E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BBDFB790-DD25-4D70-BC8F-171AB5BFC40B\"></a></span><p class=\"table-body\">the biped\'s model object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C98D1B47-C7A2-466C-938E-FEF6B17CEFE1\"></a></span><p class=\"table-body\">GlobalSRT</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9EC72A25-FC6E-412A-85BA-FA4A57823B38\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-341F1D7E-428B-4CA6-8D8B-50DE76663236\"></a></span><p class=\"table-body\">the curvelist representing the biped\'s global transform object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9801978D-B203-4081-A6B9-E40A57352C38\"></a></span><p class=\"table-body\">Sliders</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F1092F3-5812-42BB-A15C-542175625FA6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-791BCEF6-90BD-4A60-9ED6-DBA2AA8F57DB\"></a></span><p class=\"table-body\">the custom property containing biped controls</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2167154-9F28-461A-AAAD-2FF52F7F5070\"></a></span><p class=\"table-body\">HiddenGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-173D4F87-0037-4F09-9F19-7189A33A4A65\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FCB08CC5-FAD9-434A-A70D-8D758EFC9919\"></a></span><p class=\"table-body\">a collection of objects that are hidden</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-129C74A4-45A1-4447-B87D-158664166B00\"></a></span><p class=\"table-body\">EnvGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2CB80AE8-0B8C-483E-AD8A-B8EF7BDC0C7C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1874FE0D-12D8-4EAE-A14A-85905F5C5929\"></a></span><p class=\"table-body\">a collection of objects to be enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0046\"></a></span><p class=\"table-body\"> Torso</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7EE81414-2C1D-49BE-A460-EF6C76107736\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKTorso.htm\">Torso</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7BA1FEAC-9CC9-46EB-AA18-60AD646A0546\"></a></span><p class=\"table-body\">the torso</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0047\"></a></span><p class=\"table-body\"> Tail</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28EB7FF5-0146-4C2D-B99C-70B195A100A5\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKTail.htm\">Tail</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E21B3115-DB28-4030-B011-3F4E46B6BD20\"></a></span><p class=\"table-body\">the tail</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0048\"></a></span><p class=\"table-body\"> Head</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1AAF23B1-7230-4CE6-B4D5-33D4FC8EB7B1\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKHead.htm\">Head</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB7EDE6B-D9A0-4E12-A32D-66B87A022BAF\"></a></span><p class=\"table-body\">the head</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0049\"></a></span><p class=\"table-body\"> Belly</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07179029-36D2-476E-8CA2-E60B243B6568\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBelly.htm\">Belly</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-245388F8-A1AF-44AD-9B7E-08D573EC421E\"></a></span><p class=\"table-body\">the belly</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D2724FD-D78C-4049-8C8D-F77AB5BF77A6\"></a></span><p class=\"table-body\">ChestBone</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FA9A97B4-8254-4451-A1B9-6EA69C4BD2A8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91F0EF35-2E56-408C-AE0A-5915A0930198\"></a></span><p class=\"table-body\">the chest bone</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A734E7A7-D301-4684-98B2-E44739ED72CF\"></a></span><p class=\"table-body\">UpperBody</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ACD01AEE-B6D6-4340-8CBA-BE2C1EE747FB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-37E3FB26-447A-436C-986A-3D63744EE6BD\"></a></span><p class=\"table-body\">the upper body</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004A\"></a></span><p class=\"table-body\"> SpineCurve</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59C0E845-7D1B-4126-B27C-CD36EE1C914F\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKSpine.htm\">Spine</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0389FD6F-AD36-4679-9756-5F8DA84D11D8\"></a></span><p class=\"table-body\">the spine</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0C4956F-C6DE-443B-8D50-01493D5C019B\"></a></span><p class=\"table-body\">HipBone</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-542FC3B6-F532-4930-BDA0-C7F356337FD0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-957F1A1B-151D-4F90-BDB9-2135282471DC\"></a></span><p class=\"table-body\">the hip bone</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B7F4749-2E28-4D67-9D8C-9F003A6E4F3B\"></a></span><p class=\"table-body\">RShoulderEff</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D52DC2E3-72BA-4D57-A6FF-5918FD385B70\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFE9B416-2C61-4573-BB69-DB5B457D7E74\"></a></span><p class=\"table-body\">the right shoulder effector</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004B\"></a></span><p class=\"table-body\"> RArm</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C88280BE-E6A8-4EDD-B35D-7F8F17D28A8F\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKArm.htm\">Arm</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E30AF9DE-B66A-4E48-8F3A-0A3B0768AF8A\"></a></span><p class=\"table-body\">the right arm</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004C\"></a></span><p class=\"table-body\"> RHand</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C377CE95-11E2-4F94-A207-130564BD13CB\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKHand.htm\">Hand</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EF95C74-C2CA-4F3A-BD9E-0C59C743E004\"></a></span><p class=\"table-body\">the right hand</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004D\"></a></span><p class=\"table-body\"> RLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9569342E-E430-4F44-8927-EC4DDDFE497A\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKLeg.htm\">Leg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D142AB5-8DE2-4BE6-97AD-8DE3075E822C\"></a></span><p class=\"table-body\">the right leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004E\"></a></span><p class=\"table-body\"> RFoot</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-118030B0-6611-4B87-8220-466BB40E07A1\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKFoot.htm\">Foot</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0CE5FE7A-401D-4769-9E77-850255E895EE\"></a></span><p class=\"table-body\">the right foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-004F\"></a></span><p class=\"table-body\"> RHip</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ECAFCDCE-5542-4B13-892A-40099AFB04BA\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E1CB228-F9D3-482A-B14A-E636145EEE52\"></a></span><p class=\"table-body\">the right hip (only if hip slide option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0050\"></a></span><p class=\"table-body\"> RThigh</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82887499-623F-4D5E-9D8D-B2F5786DD6E3\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/ThighSlide.htm\">ThighSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-566BA8B4-3C60-4D22-ADD4-34BE2A24EFF2\"></a></span><p class=\"table-body\">the right thigh (only if thigh slide option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0051\"></a></span><p class=\"table-body\"> RElbow</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB61BAC2-6752-4F10-957B-D6ACA02EA763\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKJoint.htm\">Joint</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1AA41309-9C60-4EBB-85CC-36AB27483484\"></a></span><p class=\"table-body\">the right elbow (only if joint compression option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0052\"></a></span><p class=\"table-body\"> RKnee</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F98055BC-B5A6-4016-8474-12E79BF34C50\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKJoint.htm\">Joint</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BC2BCE9-AAF3-4608-B6F7-02DF0E53DCEA\"></a></span><p class=\"table-body\">the right knee (only if joint compression option selected)</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-962DE694-3F35-4AE4-8957-7678C8C9B4A8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6EB0E0E-D7F4-4F46-B7B1-49FAA9822BBE\"></a></span>Not available for <em class=\"strong\">BipedDogLeg</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0053\"></a></span><p class=\"table-body\"> RBellySlide</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25100D32-E0EC-4C36-995B-C4E665F80E73\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-22346E0E-A2DF-49AC-BBD8-4BC819A10572\"></a></span><p class=\"table-body\">the two-point slide control between the right belly and right hip (only if belly slide\n\
                              option selected)\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6C360E0E-3333-4B4C-8D0B-BE785B3F6233\"></a></span><p class=\"table-body\">LShoulderEff</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-93727F87-2BB0-48F4-AC9F-FB48F6A35C43\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-886BE47D-E2DD-4645-8E14-4D95EB5DACFF\"></a></span><p class=\"table-body\">the left shoulder effector</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0054\"></a></span><p class=\"table-body\"> LArm</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BD375E1F-073A-4F34-AB02-399E62CD869E\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKArm.htm\">Arm</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-79EC010B-D8DC-4790-BB00-56CB6B2783A9\"></a></span><p class=\"table-body\">the left arm</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0055\"></a></span><p class=\"table-body\"> LHand</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C38340E-58E8-487E-9B01-F455495DA129\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKHand.htm\">Hand</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC6943AC-8283-4259-8CE6-A891A0CB6F15\"></a></span><p class=\"table-body\">the left hand</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0056\"></a></span><p class=\"table-body\"> LLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5DAC15B5-44D1-4604-A2C3-B3209AF2D13C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKLeg.htm\">Leg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B66A3035-314D-48C6-A70C-2139C3126886\"></a></span><p class=\"table-body\">the left leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0057\"></a></span><p class=\"table-body\"> LFoot</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-643D8377-A9BB-4D27-805E-CE2A9075FCBC\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKFoot.htm\">Foot</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-72A6A45D-2C31-481F-8D46-E4FEB81E93A4\"></a></span><p class=\"table-body\">the left foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0058\"></a></span><p class=\"table-body\"> LHip</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8C48B24-DDDE-45BA-BC49-83D5375A70A8\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C36F8A28-68F0-45BE-8A75-006F5F4C9A9F\"></a></span><p class=\"table-body\">the left hip (only if hip slide option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0059\"></a></span><p class=\"table-body\"> LThigh</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-591026AF-8DA5-4F35-A46D-7062D4F66FAD\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/ThighSlide.htm\">ThighSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FC1D3CD-5594-4BAB-88D6-70C6198A1AE1\"></a></span><p class=\"table-body\">the left thigh (only if thigh slide option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-005A\"></a></span><p class=\"table-body\"> LElbow</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C21B1D4-8946-4D73-9E3B-8539126B607F\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKJoint.htm\">Joint</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-100390A6-0E6E-4A9C-92B6-56E58C58E9D3\"></a></span><p class=\"table-body\">the left elbow (only if joint compression option selected)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-005B\"></a></span><p class=\"table-body\"> LKnee</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6CC63F84-EDD4-4EBA-821E-4D35CAD20FA0\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKJoint.htm\">Joint</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF8500A3-CF5B-488D-8E44-9D9A43414C8F\"></a></span><p class=\"table-body\">the left knee (only if joint compression option selected)</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-4DFAB8E5-F562-49C7-9F00-65586EF39D3F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A512C99-3396-4F65-BC2B-C57A7F37932D\"></a></span>Not available for <em class=\"strong\">BipedDogLeg</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-005C\"></a></span><p class=\"table-body\"> LBellySlide</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BDC162C-1277-4E8F-9DC2-70D9991B10AF\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B49FD78-DD9D-4090-8952-147AB1CE110F\"></a></span><p class=\"table-body\">the two-point slide control between the left belly and left hip (only if belly slide\n\
                              option selected)\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-343ACF27-3DD2-4AB4-BA4D-19302318975C\"></a></span><p class=\"table-body\">ShadowModel</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CC47606-838D-4DF7-8590-A4B38A35B730\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-983DCF6A-2A52-49A7-A3B1-C63476B3E39C\"></a></span><p class=\"table-body\">the model that the shadow chain or spine belongs to</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-549E9DBD-4D3B-43DC-BDFC-7CE1CFDFC481\"></a></span><p class=\"table-body\">ShadowHiddenGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-31692C0B-F40A-4322-A7E3-1DDCA38B63B9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-403AE831-FFF5-4974-9A23-AABF8F40F6D5\"></a></span><p class=\"table-body\">a collection of the dividing null objects for the shadow</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E486D2D-E424-43CA-AAFA-AA6F74120A0C\"></a></span><p class=\"table-body\">ShadowEnvGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B02364F4-A90C-40F4-BB8E-D8E2D9FA9F33\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0DE4936C-541F-4A21-8079-E25DA4A277DF\"></a></span><p class=\"table-body\">a collection of objects that should be enveloped for the shadow</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47EF9155-EC13-4318-822C-3A05427F6282\"></a></span><p class=\"table-body\">ShadowGlobalSRT</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0C77955-0A5F-4B47-8BC3-3CD8C2383839\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5835ABE4-BC7A-4F22-8FBD-B4B8184C9E4F\"></a></span><p class=\"table-body\">the curvelist representing the shadow\'s global transform object</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F59336F-39A4-47D2-A896-7A5311B486FD\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";