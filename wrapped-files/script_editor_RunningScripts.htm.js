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
      <meta name=\"topicid\" content=\"GUID-AC4D2E40-805F-408D-A74F-CDCEF4067DEB\" />\n\
      <meta name=\"indexterm\" content=\"scripts: running\" />\n\
      <meta name=\"indexterm\" content=\"script editor: running scripts\" />\n\
      <meta name=\"indexterm\" content=\"scripts: running parts of\" />\n\
      <meta name=\"indexterm\" content=\"commands: running automatically\" />\n\
      <meta name=\"indexterm\" content=\"scripts: running automatically\" />\n\
      <meta name=\"indexterm\" content=\"selecting: running commands when the selection changes\" />\n\
      <meta name=\"indexterm\" content=\"frames: running scripts automatically on frame change\" />\n\
      <meta name=\"indexterm\" content=\"playback: running scripts automatically on frame change\" />\n\
      <meta name=\"indexterm\" content=\"scripts: terminating\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Running Scripts</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AC4D2E40-805F-408D-A74F-CDCEF4067DEB\"></a></span><div class=\"head\">\n\
            <h1>Running Scripts</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFD20A65-7928-4A97-A46D-978FD069D0FB\"></a></span>There are several ways to run scripts in Softimage: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_DBA2DFA1CB014529ABEB58E20BFB5962\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1776135-3D4E-4F98-8452-4B6E7D27926A\"></a></span>You can run scripts in the script editor. See <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_RunningScripts.htm#GUID-E862C78E-C69E-4103-965D-555117703067\">Running Scripts in the Script Editor.</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A5823AF-1709-40C2-9B06-1E374618D272\"></a></span>You can create a custom command to run a script from a button on a custom toolbar.\n\
                     \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-381BFD4E-0BEC-47BC-B097-F10699DA4EED\"></a></span>You can run a custom command automatically whenever the frame or selection changes.\n\
                     See <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_RunningScripts.htm#WS7764D933E362064489C22357B4B7178F-004F\">Running Commands Automatically</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9119D901-B32E-4677-A97F-FBBDC78852C4\"></a></span>You can run scripts in the synoptic view or net view. For more information about running\n\
                     scripts in the synoptic view or net view, refer to the Softimage User\'s Guide. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4FBB0901-AFA5-4A00-A557-D619EF4A533F\"></a></span>You can bind scripts and commands to events so that they are triggered automatically\n\
                     in response to specific actions and states. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a></span>. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-88528466-50BA-4A48-AE92-8DDE12A095DE\"></a></span>You can turn off command logging in the history pane while your scripts are running\n\
               to speed up the execution of your scripts. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A6162490-9BEA-493A-8715-ABF292D1E692\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Scripts can no longer change the number of undo levels permanently. This prevents\n\
                  problems that occur when scripts set the number of undo levels to 0 to increase performance,\n\
                  and then fail to set it back or terminate abnormally. \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-004B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E862C78E-C69E-4103-965D-555117703067\"></a></span>Running Scripts in the Script Editor\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-633134B5-183E-41D8-868B-D3082A49C857\"></a></span>Running a script in the script editor is particularly useful while you are testing\n\
                  and debugging your script before creating a custom command. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-38958FD7-FCD8-4A5E-96B2-DDFDD9BD5194\"></a></span>When run in the script editor, only the global code (script fragments that appear\n\
                  outside of a discrete function or subroutine) is executed. The procedures are still\n\
                  executed if they are called from the global code. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B352C2C-46CC-4372-B377-A537C96AE497\"></a></span>If you select one or more lines before running a script in the script editor, only\n\
                  these lines are executed. If nothing is selected, the entire content in the editing\n\
                  pane is executed. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-61018306-ECF7-4DEB-98F7-A933498766BC\"></a></span> <em class=\"strong\">To run a script in the script editor:</em> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8915FD67-2152-416E-AAAB-935D188FDC0F\"></a></span>Do one of the following: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_2790B34D10A345E1B3A772E5B567F697\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F820940-F0D1-41DB-BE0A-B6BCE6D0F21F\"></a></span>Click the run icon on the command bar. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-74CDEE40-00DB-482E-9F82-5D420AAF7B2E\"></a></span>Press <span class=\"MenuCascade\" id=\"GUID-81BA8762-526D-43E7-8E33-F0D822CD991E\">F5</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1968D3AA-2010-442C-BA9E-89A2F58FB787\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-CE33F497-4702-412C-93DB-1E62EDADC61F\">Edit <img src=\"../images/ac.menuaro.gif\" /> Run</span> from the command bar. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3ADDC8E3-6A84-4DBA-839E-CE6A986179B7\"></a></span>Right-click in the editing pane and select <span class=\"MenuCascade\" id=\"GUID-FF1ADE0C-FD5B-4C6F-8E41-9FD51328A94E\">Run</span> from the pop-up menu. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-004C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-59EE3C39-840F-49B8-8DB3-BB014A906F61\"></a></span></h3> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-004D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0D242B5D-2628-433A-B1AB-4A9C24818FD3\"></a></span>Running Parts of Scripts\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-02A97E3F-D634-4EB9-981B-A27B6B24DCCC\"></a></span>You can choose to run only a part of a script. This lets you concentrate on a particular\n\
                     part of your script. There are two ways of doing this: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_BA0E7A4DC59E4D7BBBDB5D9DB6E5F822\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-08DD1651-D3F0-4E2B-A598-475B0D77BD22\"></a></span>Comment out the lines that you do not want to run. For example, to do this in VBScript,\n\
                           add an apostrophe (\') at the beginning of a line. When you want to run the line again,\n\
                           remove the apostrophe. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4DD5367-6E9C-4323-BDB6-82A8A736D39D\"></a></span>To run a contiguous block of lines, select them in the editing pane before running\n\
                           the script. Make sure to select complete lines. \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-004E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F5FE0A64-4F8A-4740-9069-A0FC5D522A1A\"></a></span>Property Editor Automatic Inspection\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B198FF25-E192-4DD4-BA1D-91F020C85556\"></a></span>Usually commands that create objects like <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> and <a href=\"#!/url=./si_cmds/CreateLayer.html\">CreateLayer</a> trigger automatic inspection of the new object\'s property editor. When you run these\n\
                     commands, the property editor for the newly created object opens. When you run scripts\n\
                     that use these commands in the script editor, automatic inspection is always disabled.\n\
                     \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D802FE68-44EF-4193-93F4-E63E1E36DF22\"></a></span>However, if these commands are used in scripts that are run outside of the script\n\
                     editor (for example, a self-installing plug-in invoked from a menu item or button),\n\
                     automatic inspection is only disabled in these cases: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_6E470CEAA00A4249845067236EF1E8B6\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B184B5A5-9679-43A9-9185-8934F2EE0C15\"></a></span>If you set the <span class=\"code\" translate=\"no\">AutoInspect</span> preference to false for the current session (Softimage always resets it back to true\n\
                           each time it is launched). \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB73F10A-955E-4F0C-99C9-BD48DFD678E8\"></a></span>The self-installing plug-in explicitly sets <span class=\"code\" translate=\"no\">AutoInspect</span> preference to false for the duration of the plug-in. You can do this either with\n\
                           the <a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> command or the <a href=\"#!/url=./si_om/Preferences.html\">Preferences</a> object: \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Using SetUserPref command\n\
SetUserPref(siAutoInspect, false);\n\
SetUserPref(\"AutoInspectEnabled\", false);\n\
\n\
// Using Preferences object\n\
var oPrefs = Application.Preferences;\n\
var oAutoInspect = oPrefs.SetPreferenceValue(\"Interaction.autoinspect\", false);</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-43D36C8D-96A5-4D49-9814-68825AAEDB8F\"></a></span>Disabling automatic inspection is recommended because it improves the performance\n\
                     of your plug-in. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-004F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D38EB3FC-90D4-4DF8-BAF8-CB30C5C2015A\"></a></span>Running Commands Automatically\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB13B61B-97C5-4FD7-94AE-CBBA6175E959\"></a></span>You can run custom commands or native Softimage commands automatically in the following\n\
                  ways: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_9F48A30194B9434DA83AB042BA159828\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-706A015D-4C7B-418A-AFE9-E1C3AB592C51\"></a></span>Whenever an object is selected. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1F484A7-12CC-4115-A507-CED2976803EE\"></a></span>Whenever you change frames. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC03E160-A2FA-4535-95E7-8A03FA118E81\"></a></span>You can also bind scripts and commands to events so that they are triggered automatically\n\
                        in response to specific actions and states. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a></span>. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-000B6242-A6DD-46F4-8865-A63EE5DFEE85\"></a></span>To run a script, you must first create a custom command. For more information about\n\
                  custom commands, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-65705608-BDA6-4C56-83F1-40010B8BA9C3\"></a></span> <em class=\"strong\">To run scripts automatically when an object is selected in a geometry view:</em> \n\
               </p>  <span class=\"anchor_wrapper\"><a name=\"GUID-37F4BFFF-12C9-446F-9E74-AAF50C7E675A\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C94FDE9B-E139-4A7C-95BD-635384B649ED\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-FA4B746F-9E94-4FA4-A45D-7C0ECF654977\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the application menu bar. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E3E0EEB-9151-4E60-B017-5B24F29E2E79\"></a></span>The Preferences dialog appears. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-721796A4-253A-4FB1-87C4-48C8CE335BEC\"></a></span>Expand the <span class=\"MenuCascade\" id=\"GUID-91BF7F37-4721-49FD-A0B5-759E35A7078A\">Tools</span> node and click <span class=\"MenuCascade\" id=\"GUID-B4C9FB96-4222-400D-BA76-287F1F478619\">Selection</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-20A1EAEB-749F-48A6-89D0-BFE418649BEF\"></a></span>Type the command name and any parameters in the <span class=\"MenuCascade\" id=\"GUID-214E4D7A-3543-467F-AC5B-00D36F735261\">Selection Change Command</span> box. For example, in VBScript syntax: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">LogMessage GetValue(\"SelectionList\")</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC2F3EA9-56F5-4FA8-A6F3-61D30E9D504C\"></a></span>This setting is stored with your user preferences and is used in all scenes. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-509EEB5D-667A-440E-BE40-5E7AE24D6A42\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>The selection change command is run only when you select something in a 3D view. It\n\
                     is not run when selecting elements in the explorer or schematic views. \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FD6F595-F12B-48A3-894D-6CF2BF2C2C23\"></a></span> <em class=\"strong\">To run scripts automatically when the current frame changes</em> \n\
               </p>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C96EFA08-784B-4C6E-985B-9B75A785018E\"></a></span>You can select a script or native Softimage command to run automatically after the\n\
                  current frame is changed and the scene is updated. This lets you use scripts to simulate\n\
                  persistent effects. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-0B304D88-6C4F-4D86-976E-A648F72BDF29\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-758B065C-B341-49EB-8FFF-01018EB30ACA\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-6E6C86C0-31CA-43F5-8301-FCA7B30B081B\">Playback <img src=\"../images/ac.menuaro.gif\" /> Playback Options</span> from the Playback panel under the timeline. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-175EC971-9CCD-448A-996B-4A8B696BB6DF\"></a></span>The Play Control property editor appears. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FAECC5C7-7C60-4964-858D-906B08771A48\"></a></span>Select the <span class=\"MenuCascade\" id=\"GUID-42496993-F274-4365-8DDC-2A8A8BAA39D3\">Update</span> tab. In the <span class=\"MenuCascade\" id=\"GUID-CFFD4982-19C7-4AA4-9119-CC8B8198DA8B\">On-Frame-Change Script Command</span> box, enter the command name and any parameters. This setting is stored with the scene.\n\
                        \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-1B022641-84A2-4BEA-8267-02BA119F0873\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span>The <span class=\"MenuCascade\" id=\"GUID-FCE92163-8608-4B97-81F6-6750382D72F2\">On-Frame-Change Script Command</span> setting is saved with the scene. If you set it to a custom command, make sure that\n\
                     the custom command is available on all systems used for opening the scene. \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0052\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6137B218-AB2F-4694-9C1A-0D35E3DA26B9\"></a></span>Disabling Command Logging Temporarily\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC3651A7-C7F0-4520-8385-B947E1CE866D\"></a></span>You can disable command logging temporarily while your scripts are running. This speeds\n\
                  up the execution of scripts because each command is not logged in the script editor\'s\n\
                  history pane. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-532C1558-7E44-46B3-AABA-EC55C5951EAC\"></a></span>Alternatively, you can disable command logging permanently from the Preferences dialog\n\
                  box. See <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_UsingtheCommandHistory.htm#WS7764D933E362064489C22357B4B7178F-0037\">Disabling and Enabling Command and Message Logging</a></span>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-174E20B2-BA80-40B3-8C98-A2DD3530822B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Disabling the logging of commands does not affect the ability to undo commands individually.\n\
                     It only affects the logging of commands in the history pane. \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A44AA15E-12F5-4C3B-B6B9-A04242E0122C\"></a></span> <em class=\"strong\">To disable command logging temporarily:</em> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8A14969-AF0F-4CB4-9821-A1947C134B1B\"></a></span>The following snippet shows how to get the current preference for command logging,\n\
                  turn logging off, and then restore the preference after running the script. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get current state \n\
var prefs = Application.Preferences;\n\
var originalsetting = prefs.GetPreferenceValue(\"scripting.cmdlog\");\n\
\n\
// Disable command logging\n\
if (!originalsetting) { \n\
	prefs.SetPreferenceValue(\"scripting.cmdlog\", false); \n\
}\n\
\n\
//\n\
// Perform actions\n\
//\n\
\n\
// Restore logging setting\n\
prefs.SetPreferenceValue(\"scripting.cmdlog\", originalsetting);</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-872A5288-4D2E-455F-B225-9E0BE0C990AD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DBAD294-9F6D-4BC6-9B57-40EB17B7F87B\"></a></span>You can also: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_F4A0C7EEDDE9427B862CBB02453F4EBB\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF9048B9-C361-493C-9B1C-E39DC68375AB\"></a></span>Disable message logging temporarily using <span class=\"code\" translate=\"no\">scripting.msglog</span> in place of <span class=\"code\" translate=\"no\">scripting.cmdlog</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACC6AFC4-D957-4E9B-8BDA-D53D6BF494F7\"></a></span>Disable the automatic opening of property editors using <span class=\"code\" translate=\"no\">Interaction.autoinspect</span>. See <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_RunningScripts.htm#WS7764D933E362064489C22357B4B7178F-004E\">Property Editor Automatic Inspection</a></span>. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0054\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D82DC650-D801-447E-A5FB-50E0293C8455\"></a></span>Terminating Scripts\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FD7A6E6-4E8C-4E3B-A7C6-814F45087064\"></a></span>To stop execution of a script while it is running, press Ctrl+Break (Ctrl+Pause on\n\
                  some keyboards). You might need to press this key combination a few times because\n\
                  the keyboard is checked only before executing each native Softimage command. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";