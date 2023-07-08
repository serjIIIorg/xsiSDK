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
      <meta name=\"topicid\" content=\"GUID-3C16EF09-B690-425F-ADB2-9ECDFF58107C\" />\n\
      <meta name=\"indexterm\" content=\"mixer: accessing\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Animation Mixer</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"ClipRelation\", \"si_cpp/classXSI_1_1ClipRelation.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3C16EF09-B690-425F-ADB2-9ECDFF58107C\"></a></span><div class=\"head\">\n\
            <h1>Animation Mixer</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-59DFDBEB-6C20-4A34-BA0F-0F3D75C50BC2\"></a></span>The Animation Mixer is a tool that allows users to layer and mix sequences in a nonlinear\n\
               and non-destructive way. A user can insert clips onto the mixer\'s tracks and then\n\
               create relations and transitions between clips, change the timing of the sequence,\n\
               and apply other kinds of effects.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-9639B049-CFB5-4A96-8ED3-92CD48980233\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E691513-7FBF-4055-9B2A-1391F1F5310A\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/SourcesAndClips.htm\">Sources and Clips</a></span> for an explanation of how data is loaded into the mixer from the perspective of the\n\
                     SDK. For more information on the mixer in general, see the <em class=\"mild\">Nonlinear Animation</em> (user) guide.\n\
                  </p> \n\
               </div>\n\
            </div><img src=\"../images/GUID-248AFB17-3C9B-475F-A394-A7FFAC7BBCFA-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-32589DCB-EA67-4CC3-A00B-50B005C58D6C\"></a></span>This diagram illustrates what you can expect when writing scripts or programs that\n\
               read mixer data. There is only one mixer per model, which means that animation in\n\
               a scene can be organized by model (character). In the diagram above, the SceneRoot\n\
               is at the top, but any model could be at the top.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0061\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-00FDD6F6-DF7B-4722-8AD5-7A7B3BDD2BAA\"></a></span> Accessing the Mixer and its Components\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D36A1520-21E4-4BEA-9C06-0D6BEA4ED3FE\"></a></span>The Mixer class itself is really a special kind of ClipContainer, which is in turn\n\
                  a kind of Clip on steroids: the ClipContainer class represents compound clips (of\n\
                  which the Mixer is the ϋber-container). Here is a quick breakdown of the common classes\n\
                  you will work with while working with the Mixer and high-level animation. The table\n\
                  presents the following information:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FAC2502D-572F-47E4-A3BB-0484193AC88D\"></a></span> <em class=\"strong\">Class/Object</em>: Provides links to the OM object and C++ class in question.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-046CFEC3-241D-4482-AE77-BCBD203FB182\"></a></span> <em class=\"strong\">Accessed via...</em>: Gives a link to the OM property and C++ function which you can use to access each\n\
                        object.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D773BD0-6C80-49E5-AAD3-5F4C948FD170\"></a></span> <em class=\"strong\">Synopsis</em>: Provides a brief overview of the object or class. The reference page will provide\n\
                        more details.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-10A1531B-964F-4E54-A0A9-523F42DDBD86\"></a></span> <em class=\"strong\">Type</em>: Lists the possible return values if you test the object\'s type using the <a href=\"#!/url=./si_om/SIObject_Type.html\">SIObject.Type</a> or <a href=\"#!/url=./si_cpp/SIObject.html#GetType\">SIObject::GetType</a> property.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4FF53D67-0BB5-4690-BB5F-99AF31677A4F\"></a></span> <em class=\"strong\">siClassID</em>: Gives the class id (as one of the <a href=\"#!/url=./si_om/siClassID.html\">siClassID</a> enum values) that you can use to test with the <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a> method in the object model or against the return value from any of the <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#GetClassID\">GetClassID</a> functions implemented on each class in the C++ API.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7ECC7039-D669-4E83-AE57-D8D8483465C4\"></a></span> <em class=\"strong\">What to Look Out for</em>: Any tricks, restrictions or limitations are presented here.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E99ECBF0-A2CD-4A8D-978C-AF18F819B1D8\"></a></span><p class=\"table-heading\">Class/Object</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-81B35AEB-E837-4573-A089-B6F30819C8C1\"></a></span><p class=\"table-heading\">Accessed via...</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8AF4BE8D-EDBC-465C-A292-EE7F88FBAE82\"></a></span><p class=\"table-heading\">Synopsis</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F317239-F895-4024-9B12-65A258CB9D92\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EE55606-B616-4297-846E-527895337028\"></a></span><p class=\"table-heading\"> <a href=\"#!/url=./si_om/siClassID.html\">siClassID</a> \n\
                           </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E9EF1EAB-8D10-4A99-862B-3B9B9D378B3E\"></a></span><p class=\"table-heading\">What to Look Out for</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D9E7B4C6-C6F1-4391-9D9A-75F007F3A237\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_mixer.html\">Mixer</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-216E093C-4777-4B3C-AC09-01E61EF19005\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Model_Mixer.html\">Model.Mixer</a> or <a href=\"#!/url=./si_cpp/Model.html#GetMixer\">Model::GetMixer</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A27A865-54E8-41B0-96F2-A31052ACAF0E\"></a></span><p class=\"table-body\">Specialization of ClipContainer</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8762F712-109E-4F29-8E46-6890035679F1\"></a></span> <a href=\"#!/url=./si_om/siClipType.html\">siClipMixerType</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-83249DE4-E043-41E0-9645-6EEB84C0E02A\"></a></span> <a href=\"#!/url=./si_om/siClassID.html\">siMixerID</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-26D3AD63-EF1A-41D2-9413-320E0CF9A24B\"></a></span>It\'s really a clip at heart.\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-46CF02C3-BABC-4ECA-BBD6-B9BD76DDA747\"></a></span>You can test to see whether a mixer exists under a model with <a href=\"#!/url=./si_om/Model_HasMixer.html\">Model.HasMixer</a> or <a href=\"#!/url=./si_cpp/Model.html#HasMixer\">Model::HasMixer</a></p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08FDD1F7-820B-4EB3-80B5-B27C04997788\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip_container.html\">ClipContainer</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6CBF4D5-F3EC-4B88-BBA2-E0211B85230A\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Model_Mixer.html\">Model.Mixer</a> or <a href=\"#!/url=./si_cpp/Model.html#GetMixer\">Model::GetMixer</a></p> <span class=\"anchor_wrapper\"><a name=\"GUID-9419B210-F095-46D0-93FE-494F62F28BBE\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipContainer_Clips.html\">ClipContainer.Clips</a> or <a href=\"#!/url=./si_cpp/ClipContainer.html#GetClips\">ClipContainer::GetClips</a></p> <span class=\"anchor_wrapper\"><a name=\"GUID-A9ED3FE7-5C34-45A5-908B-4FEE3B116EBD\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Track_Clips.html\">Track.Clips</a> or <a href=\"#!/url=./si_cpp/Track.html#GetClips\">Track::GetClips</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D49D7035-0009-402D-A9D8-35993A4D077E\"></a></span><p class=\"table-body\">Gives access to the basic elements of the mixer: clips, tracks, transitions, and clip\n\
                              relations.\n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-12297ED3-DD4C-4301-B61E-BDD7A3EC6132\"></a></span><p class=\"table-body\">Mostly used for compound clips, but can also represent the Mixer. Both can contain\n\
                              other clips, tracks and transitions.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBD9077C-3FD8-4ACE-A9F2-FC64574506D7\"></a></span> <a href=\"#!/url=./si_om/siClipType.html\">siClipMixerType</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D42C16B-FE9F-41D6-A82B-32AAFE959CE8\"></a></span> <a href=\"#!/url=./si_om/siClipType.html\">siClipAnimCompoundType</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-49FF818C-1C8D-488B-8A98-FECA375A0CCD\"></a></span> <a href=\"#!/url=./si_om/siClipType.html\">siClipShapeCompoundType</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBE662D1-924B-4989-A969-73AC08B367EA\"></a></span> <a href=\"#!/url=./si_om/siClassID.html\">siClipContainerID</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D8E9867-5B2E-49C8-8092-6C5912DE7236\"></a></span>The (Get)Clips members return only the highest level (ie., the compound clip). You\n\
                                    need to re-query to get the clips nested under each compound clip.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40DC3C81-7349-4F7C-9B3C-F4F372432D43\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip.html\">Clip</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip.html\">Clip</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23687E00-DA07-40A7-BB26-6ABEA6003EC0\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipContainer_Clips.html\">ClipContainer.Clips</a> or <a href=\"#!/url=./si_cpp/ClipContainer.html#GetClips\">ClipContainer::GetClips</a></p> <span class=\"anchor_wrapper\"><a name=\"GUID-B1414112-DFCE-499E-9F19-A7F73389EACC\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Track_Clips.html\">Track.Clips</a> or <a href=\"#!/url=./si_cpp/Track.html#GetClips\">Track::GetClips</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C212F362-86C8-45AD-B712-77B9AC7A5A1A\"></a></span><p class=\"table-body\">Basic building block in the mixer which gives you access to the bulk of data: tracks,\n\
                              transitions, clip relations, sources, clipeffects, mapped items and the time control\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3776724D-901E-4777-98E3-209AEB65024E\"></a></span><p class=\"table-body\">any of the values in the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> enum\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E5792C7-ED68-425A-9CD3-3E9291C156C2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siClipID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D16DA34-3FEE-4CA9-B3DD-5440DD9F5C47\"></a></span>It\'s good practice to test the clip to see whether it contains nested clips using\n\
                                    <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a>(siClassID) or <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html#GetClassID\">SIObject::GetClassID</a> because some of the members of the Clip class are not available for compound clips.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F666A7E3-D2F0-4450-AEAA-D8600352E2C6\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip_relation.html\">ClipRelation</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0859CA42-3621-44BD-8980-B4852198C421\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip.Relations.html\">Clip.Relations</a> (OM only) <a href=\"#!/url=./si_om/ClipContainer_NestedRelations.html\">ClipContainer.NestedRelations</a> or <a href=\"#!/url=./si_cpp/ClipContainer.html#GetNestedRelations\">ClipContainer::GetNestedRelations</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-05704FA7-4ADC-4A20-8BDE-EB71CBA7375A\"></a></span><p class=\"table-body\">Find out which is master/slave and swap (\'bout what you\'d expect)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8569C085-C958-4530-83F4-3AEDE2BD586D\"></a></span><p class=\"table-body\">\"<span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"ClipRelation\" class=\"a_multireflink\">ClipRelation</a></span>\" (not a value in any enum)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D087A91-8C43-4AB5-AE25-A05869AB0B70\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siClipRelationID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-05E85D78-2F8A-4F88-8C2E-CF4B395AE4E0\"></a></span>There is no equivalent to <a href=\"#!/url=./si_om/Clip.Relations.html\">Clip.Relations</a> in the C++ API\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7ADC719E-8E7F-48E4-907C-35E9B34BA5B3\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Track.html\">Track</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_track.html\">Track</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-77275280-58CB-4499-A09E-867D914F001C\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipContainer_Tracks.html\">ClipContainer.Tracks</a> or <a href=\"#!/url=./si_cpp/ClipContainer.html#GetTracks\">ClipContainer::GetTracks</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A2956DE-7AF8-4CE2-A291-C5F103B27684\"></a></span><p class=\"table-body\">Just a conduit to clips</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E49B067A-4143-46C4-AE81-70830F772453\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a> will match up with <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> on the track\'s clip collection\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF7270F5-D8F0-4E71-8674-19C3BA2E0ACC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siTrackID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-344684E3-816A-4D7F-8543-BF5EB4685248\"></a></span>You can only explicitly add a track with the <a href=\"#!/url=./si_cmds/AddTrack.html\">AddTrack</a> command, but tracks are automatically added when using the <a href=\"#!/url=./si_cmds/AddClip.html\">AddClip</a> command.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CFB99663-6AA9-42BE-AA67-D00AC31AAC51\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Transition.html\">Transition</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_transition.html\">Transition</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CDC0582A-1F9B-40FD-8E57-603DCAF96709\"></a></span><p class=\"table-body\">Gives access to start and end clips.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A64DE52-5CC7-4653-9618-729CAC704612\"></a></span><p class=\"table-body\">any of the values in the <a href=\"#!/url=./si_om/siTransitionType.html\">siTransitionType</a> enum\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC04BD7F-C935-44CB-9839-D20C885CD36E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siTransitionID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C6F9FDEE-7087-4B1D-B2D4-D163A02C6364\"></a></span><p class=\"table-body\">--</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7604FFD5-167A-4807-9CF1-C7F662A79E33\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Source.html\">Source</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_source.html\">Source</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA04F391-91F2-407C-8D10-FD3840CD0A4E\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip_Source.html\">Clip.Source</a> or <a href=\"#!/url=./si_cpp/Clip.html#GetSource\">Clip::GetSource</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02B34C5D-543E-43CA-941E-C15E0DBCBF22\"></a></span><p class=\"table-body\">Generic source for action, audio, and images. Gives access to properties.</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-D8288147-615E-4DB3-9A2B-7CC21CD7D94D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFF21483-FED0-4B6C-B355-4DAC186D2131\"></a></span>Most of the real functionality for animation is provided via the ActionSource instead.\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7824382C-4913-4CA1-A8DA-C14CF24102B4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">siImageSourceType</span> (from <a href=\"#!/url=./si_om/siType.html\">siType</a>)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82C7BEA5-6292-41E0-9BF6-95861A8C8DBB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siSourceID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA9CC741-9E68-46DB-A8AF-96C977D4A7C4\"></a></span><p class=\"table-body\">--</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59531C81-088D-41C3-B15A-A0EDF67F256A\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_action_source.html\">ActionSource</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA083D2A-3F9B-4016-A44A-744CF6C76B68\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip_Source.html\">Clip.Source</a> or <a href=\"#!/url=./si_cpp/Clip.html#GetSource\">Clip::GetSource</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-20B86626-40C7-40AD-B8C7-35D381D263B2\"></a></span><p class=\"table-body\">Allows you to offload and reload sources but mostly gives access to underlying animation\n\
                              source items.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8DDE1277-1766-49B8-8E49-1F14D58C7E5D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">siActionType</span> (from <a href=\"#!/url=./si_om/siType.html\">siType</a>)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8BD9BBC-83F0-4FEB-BB19-75509A4DC7BC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siActionSourceID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E47A3B9D-5407-4B47-B64C-1CA52E527C78\"></a></span>ActionSource objects may contain actions based on <span class=\"char_link\"><a href=\"#!/url=./files/DataSource.htm\">DataSource</a></span> objects or other ActionSources\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B939A0C-DD1E-44BE-BFA3-13364A741B5E\"></a></span>ActionSources store parameter paths as <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm\">Relative Name</a></span>s\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D64D6D2-A703-49E8-9A4A-2D0682460993\"></a></span>Some functionality changed at v4.0 (see reference for details).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF35C8CA-B804-4958-BD88-75A53DD19617\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_animation_source_item.html\">AnimationSourceItem</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B3DCAD4-8CAD-40ED-BBAE-7C725ED163FE\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ActionSource_SourceItems.html\">ActionSource.SourceItems</a> or <a href=\"#!/url=./si_cpp/ActionSource.html#GetItems\">ActionSource::GetItems</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6730DF5F-B2D9-455D-8CA8-1D9C3DF6ABB0\"></a></span><p class=\"table-body\">Gives access to the animation <span class=\"char_link\"><a href=\"#!/url=./files/DataSource.htm\">DataSource</a></span> (for example, an FCurve) and its target (the parameter which the animation source\n\
                              drives).\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E4AC9A22-5CB7-4DAA-99D2-46527A70A8F2\"></a></span><p class=\"table-body\">any value from the <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a> enum\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82F6E8F5-7B5A-4D5B-81AE-B0C928925E56\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siAnimationSourceItemID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBD74765-288B-4E91-B17B-98A9B3724716\"></a></span>There is no equivalent to the <a href=\"#!/url=./si_om/AnimationSourceItem.SetAsFCurve.html\">AnimationSourceItem.SetAsFCurve</a> function iin the C++ API\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6F15FB3-D98F-4792-902A-B0FE6A24483B\"></a></span>Some functionality changed at v4.0 (see reference for details).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-356D5102-0AAC-4F92-AE42-416948BA74C5\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/AnimationSource.html\">AnimationSource</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_animation_source.html\">AnimationSource</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B870218-8527-4ECB-A623-966CBF54407E\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/AnimationSourceItem_Source.html\">AnimationSourceItem.Source</a> or <a href=\"#!/url=./si_cpp/AnimationSourceItem.html#GetSource\">AnimationSourceItem::GetSource</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A713771-A3B3-4D00-97D6-4DEB491572DB\"></a></span><p class=\"table-body\">Not a true interface: basically an alias for fcurves, expressions, constraints, shape\n\
                              keys, etc.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3A691433-CA50-4D25-A3C4-A24FAB3119CB\"></a></span><p class=\"table-body\">whatever the animation source\'s data type is (eg., an FCurve will return one of the\n\
                              <a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a> values)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD904E60-5F4C-4F91-AFB5-5494AAA73122\"></a></span><p class=\"table-body\">does NOT match <a href=\"#!/url=./si_om/siClassID.html\">siAnimationSourceID</a> but rather any source\'s class ID (eg., an FCurve will return true when tested with\n\
                              <a href=\"#!/url=./si_om/siClassID.html\">siFCurveID</a> and false with <a href=\"#!/url=./si_om/siClassID.html\">siAnimationSourceID</a>)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB22EE1A-1F36-4C45-B0EC-4E9DBE1355CF\"></a></span>Valid types of AnimationSources are listed in the <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a> enum\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EB0F4B9-19F7-4CD3-B1D7-312C0EF8511D\"></a></span>Trying to get the AnimationSource from a compound animation source item will fail\n\
                                    (see <a href=\"#!/url=./si_om/AnimationSourceItem.Source.html\">AnimationSourceItem.Source</a>).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8ACB5092-EC5C-42DD-9F10-97AEE0664AC1\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_mapped_item.html\">MappedItem</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A7CDC137-4A7F-43C5-BE7C-A2D202F2C51B\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip_MappedItems.html\">Clip.MappedItems</a> or <a href=\"#!/url=./si_cpp/Clip.html#GetMappedItems\">Clip::GetMappedItems</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0FDA7899-2515-4642-9516-B156C4158F6D\"></a></span><p class=\"table-body\">Gives access to the related source, the parameter which is driven by the related source,\n\
                              and any clip effect items applied to the clip\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-31842900-C5C6-4E4B-8346-0710422EA9BF\"></a></span><p class=\"table-body\">any value from the <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a> enum\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-68580CC0-6E6C-40D0-A2F3-949A507D53F7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siMappedItemID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-664E9ED4-D0A2-47AB-8605-EEF79A60B395\"></a></span>Only available from clips instantiated from either action or shape animation ActionSources\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C15D693-AB37-49F7-89DF-5444E73EA0C9\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipEffect.html\">ClipEffect</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip_effect.html\">ClipEffect</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7AF1189-8BB0-40E3-BAA8-CFAEDD70350F\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip_Effect.html\">Clip.Effect</a> or <a href=\"#!/url=./si_cpp/Clip.html#GetEffect\">Clip::GetEffect</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8231C7E4-B05F-4335-827F-D0F11ABB48DA\"></a></span><p class=\"table-body\">Gives access to ClipEffectItems.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30A5969B-D8E4-4370-BAF3-35570664A2EC\"></a></span><p class=\"table-body\">\"\" (empty string)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1654CC60-0AEC-4670-8E83-B60983879930\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siClipEffectID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-FABB1936-6C73-4DD0-9ECC-82C7549DD380\"></a></span>Each ClipEffect contains one ClipEffectItem for every mapped item on the clip\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5CB934AB-7821-4F20-A587-AF638B8245A4\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipEffectItem.html\">ClipEffectItem</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip_effect_item.html\">ClipEffectItem</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A50568B7-7CA4-4F1E-A3D1-A15FCA2693EC\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MappedItem_ClipEffectItem.html\">MappedItem.ClipEffectItem</a> or <a href=\"#!/url=./si_cpp/MappedItem.html#GetClipEffectItem\">MappedItem::GetClipEffectItem</a></p> <span class=\"anchor_wrapper\"><a name=\"GUID-8C3EF662-E514-4F70-950C-45DA1B58C3E3\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClipEffect_Items.html\">ClipEffect.Items</a> or <a href=\"#!/url=./si_cpp/ClipEffect.html#GetItems\">ClipEffect::GetItems</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-776D8880-25D0-42EB-9331-F6C637819ACE\"></a></span><p class=\"table-body\">Contains expressions that control the clip without affecting the Source on which the\n\
                              clip was instantiated.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-275A4E4E-9B5D-480B-A5B1-A1EB27CEE637\"></a></span><p class=\"table-body\">\"\" (empty string)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-119FE6FB-4374-4E2A-A07B-FA9CD509144C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siClipEffectItemID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDADCCC8-CD13-43D1-BA0A-A6B1E8B1B8B1\"></a></span>Each expression is bound to a <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_mapped_item.html\">MappedItem</a> of a <a href=\"#!/url=./si_om/Clip.html\">Clip</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_clip.html\">Clip</a></p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62A74723-D352-4E44-A883-4042EF2B1B59\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a> or <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_time_control.html\">TimeControl</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-19FB3AB2-3804-49C4-8705-AA8ECA3BED4B\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Clip_TimeControl.html\">Clip.TimeControl</a> or <a href=\"#!/url=./si_cpp/Clip.html#GetTimeControl\">Clip::GetTimeControl</a></p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C6059B8-7418-48FC-B172-DAA5C6DAF567\"></a></span><p class=\"table-body\">Gives access to the clip\'s Time Control property, which may be used to add extra clip\n\
                              effects like cycling, bouncing, or holding for fractions of the clip length.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7ECB0AA-D56F-45FB-9DDE-F810CFB32F8D\"></a></span><p class=\"table-body\">\"timectrl\" (scripting name of the Time Control property)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-710E179C-40EC-4DC4-8AEA-0450296EC18B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siClassID.html\">siTimeControlID</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-07807FCB-0A0C-470C-A51B-2206D6F902FD\"></a></span>Time control effects applied to a specific clip do not alter the original source,\n\
                                    nor any other clip instantiated on that source\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF128D97-3B7C-43C1-B9CB-45C7FFF9BB29\"></a></span>Access to Time Control\'s parameters is read-only\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-F4541F8F-2378-403B-94B0-3A508759E94E\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F15B70D3-76B1-4CFA-BBF5-02DC47F769C0\"></a></span>Don\'t mix global and local sources (that is, action based on animation defined in\n\
                        global vs. local mode) in the mixer. The results will be unpredictable. And remember,\n\
                        constraints are always defined in global space.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";