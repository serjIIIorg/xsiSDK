var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Material Shader Presets</title>\n\
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
            <h1>Material Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Material Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Material <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Material phenomena are predefined combinations of shaders, usually designed to create complex rendering effects, that are packaged as single shader nodes. Connecting a material phenomenon to an object\'s material prevents the material from accepting any other shaders directly, though you can extend the phenomenon\'s effect by driving its parameters with other shaders. The Fast Subsurface Scattering and Fast Skin shaders are examples of material phenomena. \n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> for a list of different shader preset types. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllShaderPresets.html\">Alphabetical Listing of All Shader Presets</a> for a complete list of available shaders.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Shaders</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Anisotropic.Preset</td>\n\
		<td><a name=\"MaterialAnisotropic\"></a>Anisotropic mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialward_1_0.html\">Softimage.material-ward.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Blinn.Preset</td>\n\
		<td><a name=\"MaterialBlinn\"></a>Blinn mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialblinn_1_0.html\">Softimage.material-blinn.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Constant.Preset</td>\n\
		<td><a name=\"MaterialConstant\"></a>Constant mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialconstant_1_0.html\">Softimage.material-constant.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Cooktorrance.Preset</td>\n\
		<td><a name=\"MaterialCooktorrance\"></a>Cook-Torrance mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialcooktorr_1_0.html\">Softimage.material-cooktorr.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Flat_light.Preset</td>\n\
		<td><a name=\"MaterialFlat_light\"></a>Flat Shading mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialmoviescreen_1_0.html\">Softimage.material-moviescreen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Glossy_Reflection.Preset</td>\n\
		<td><a name=\"MaterialGlossy_Reflection\"></a>mib Glossy Reflection mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_glossy_reflection_1_0.html\">Softimage.mib_glossy_reflection.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Hair_Geo_Shading.Preset</td>\n\
		<td><a name=\"MaterialHair_Geo_Shading\"></a>sib_geo_hair_illum output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_geo_hair_illum_1_0.html\">Softimage.sib_geo_hair_illum.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Hair_Renderer.Preset</td>\n\
		<td><a name=\"MaterialHair_Renderer\"></a>Hair Shading mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_rh_renderer_1_0.html\">Softimage.rh_renderer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Anisotropic_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationAnisotropic_shading\"></a>Ward Anisotropic Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_simple_aniward_1_0.html\">Softimage.simple_aniward.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Anisotropic_uv_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationAnisotropic_uv_shading\"></a>mib Illum Ward mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_illum_ward_1_0.html\">Softimage.mib_illum_ward.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Blinn_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationBlinn_shading\"></a>Blinn Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_simple_blinn_1_0.html\">Softimage.simple_blinn.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Cooktorrance_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationCooktorrance_shading\"></a>Cook-Torrance Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_simple_cooktorr_1_0.html\">Softimage.simple_cooktorr.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Flat_light_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationFlat_light_shading\"></a>Flat Light Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_illum_moviescreen_1_0.html\">Softimage.sib_illum_moviescreen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Lambert_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationLambert_shading\"></a>Lambert<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_illum_lambert_1_0.html\">Softimage.sib_illum_lambert.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Phong_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationPhong_shading\"></a>Phong Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_simple_phong_1_0.html\">Softimage.simple_phong.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Simple_Shadow.Preset</td>\n\
		<td><a name=\"MaterialIlluminationSimple_Shadow\"></a>Shadow Basic<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_shadow_basic_1_0.html\">Softimage.sib_shadow_basic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Strauss_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationStrauss_shading\"></a>Strauss Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_simple_strauss_1_0.html\">Softimage.simple_strauss.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Illumination\\Translucent_shading.Preset</td>\n\
		<td><a name=\"MaterialIlluminationTranslucent_shading\"></a>Transluscent Shading<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_illum_translucent_1_0.html\">Softimage.sib_illum_translucent.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Lambert.Preset</td>\n\
		<td><a name=\"MaterialLambert\"></a>Lambert mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materiallambert_1_0.html\">Softimage.material-lambert.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_ExplosionV2.Preset</td>\n\
		<td><a name=\"MaterialParticle_ExplosionV2\"></a>Explosion V2 by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_ExplosionV2mat_1_0.html\">Softimage.ExplosionV2-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_FluidV2.Preset</td>\n\
		<td><a name=\"MaterialParticle_FluidV2\"></a>Fluid V2 by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_FluidV2mat_1_0.html\">Softimage.FluidV2-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_FluidV2Obs.Preset</td>\n\
		<td><a name=\"MaterialParticle_FluidV2Obs\"></a>Fluid V2 by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_FluidV2Obsmat_1_0.html\">Softimage.FluidV2Obs-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_Renderer.Preset</td>\n\
		<td><a name=\"MaterialParticle_Renderer\"></a>Particle Metashader mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_metashader_1_0.html\">Softimage.pt_metashader.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_blob.Preset</td>\n\
		<td><a name=\"MaterialParticle_blob\"></a>Blob - by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_blobmat_1_0.html\">Softimage.blob-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_blowup.Preset</td>\n\
		<td><a name=\"MaterialParticle_blowup\"></a>Blow Up - by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_blowupmat_1_0.html\">Softimage.blowup-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_hyperflow.Preset</td>\n\
		<td><a name=\"MaterialParticle_hyperflow\"></a>HyperFlow - by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_hyperflowmat_1_0.html\">Softimage.hyperflow-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Particle_sparks.Preset</td>\n\
		<td><a name=\"MaterialParticle_sparks\"></a>Sparks - by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sparksmat_1_0.html\">Softimage.sparks-mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Phong.Preset</td>\n\
		<td><a name=\"MaterialPhong\"></a>Phong mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialphong_1_0.html\">Softimage.material-phong.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Raytracing\\Dielectric.Preset</td>\n\
		<td><a name=\"MaterialRaytracingDielectric\"></a>Dielectric<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_dielectric_ior_1_0.html\">Softimage.sib_dielectric_ior.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Raytracing\\Refraction_diffuse.Preset</td>\n\
		<td><a name=\"MaterialRaytracingRefraction_diffuse\"></a>Diffuse Refraction<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_diffuse_refraction_phen_1_0.html\">Softimage.sib_diffuse_refraction_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Shadow.Preset</td>\n\
		<td><a name=\"MaterialShadow\"></a>Shadow Material mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_illum_shadowmaterial_1_0.html\">Softimage.sib_illum_shadowmaterial.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Sprite.Preset</td>\n\
		<td><a name=\"MaterialSprite\"></a>sprite v2 output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_sprite_1_0.html\">Softimage.sib_sprite.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Strauss.Preset</td>\n\
		<td><a name=\"MaterialStrauss\"></a>Strauss mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_materialstrauss_1_0.html\">Softimage.material-strauss.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Host.Preset</td>\n\
		<td><a name=\"MaterialToon_Host\"></a>sitoon_host output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_host_1_0.html\">Softimage.sitoon_host.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint\"></a>sitoon_paint output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_1_0.html\">Softimage.sitoon_paint.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint_Ambient.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint_Ambient\"></a>sitoon_paint_ambient output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_ambient_1_0.html\">Softimage.sitoon_paint_ambient.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint_Highlight.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint_Highlight\"></a>sitoon_paint_highlight output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_highlight_1_0.html\">Softimage.sitoon_paint_highlight.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint_Rimlight.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint_Rimlight\"></a>sitoon_paint_rimlight output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_rimlight_1_0.html\">Softimage.sitoon_paint_rimlight.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint_Rounded.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint_Rounded\"></a>sitoon_paint_rounded output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_rounded_1_0.html\">Softimage.sitoon_paint_rounded.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\Toon_Paint_and_Host.Preset</td>\n\
		<td><a name=\"MaterialToon_Paint_and_Host\"></a>sitoon_paint_and_host output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_paint_and_host_1_0.html\">Softimage.sitoon_paint_and_host.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\XSIAmbientOcclusion.Preset</td>\n\
		<td><a name=\"MaterialXSIAmbientOcclusion\"></a>XSIAmbientOcclusion output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSIAmbientOcclusion_1_0.html\">Softimage.XSIAmbientOcclusion.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\XSIMaterialColor.Preset</td>\n\
		<td><a name=\"MaterialXSIMaterialColor\"></a>Material Colorizer mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSIMaterialColor_1_0.html\">Softimage.XSIMaterialColor.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Car_Paint.Preset</td>\n\
		<td><a name=\"Materialmental imagesCar_Paint\"></a>mi Car Paint mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mi_car_paint_phen_1_0.html\">Softimage.mi_car_paint_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Lume_Edge.Preset</td>\n\
		<td><a name=\"Materialmental imagesLume_Edge\"></a>Lume Edge mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Edge_1_0.html\">Softimage.Lume_Edge.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Lume_EdgeShadow.Preset</td>\n\
		<td><a name=\"Materialmental imagesLume_EdgeShadow\"></a>Lume EdgeShadow mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_EdgeShadow_1_0.html\">Softimage.Lume_EdgeShadow.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Lume_Metal.Preset</td>\n\
		<td><a name=\"Materialmental imagesLume_Metal\"></a>Lume Metal mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Metal_1_0.html\">Softimage.Lume_Metal.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Subsurface\\Jade.Preset</td>\n\
		<td><a name=\"Materialmental imagesSubsurfaceJade\"></a>misss Physical mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_physical_1_0.html\">Softimage.misss_physical.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\Subsurface\\Skim_Milk.Preset</td>\n\
		<td><a name=\"Materialmental imagesSubsurfaceSkim_Milk\"></a>misss Physical mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_physical_1_0.html\">Softimage.misss_physical.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\mia_Material.Preset</td>\n\
		<td><a name=\"Materialmental imagesmia_Material\"></a>Architectural<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_material_phen_1_0.html\">Softimage.mia_material_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\mip_Card_Opacity.Preset</td>\n\
		<td><a name=\"Materialmental imagesmip_Card_Opacity\"></a>mip Card Opacity mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_card_opacity_1_0.html\">Softimage.mip_card_opacity.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\misss_Fast_Simple.Preset</td>\n\
		<td><a name=\"Materialmental imagesmisss_Fast_Simple\"></a>misss Fast Simple mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_fast_simple_phen_1_0.html\">Softimage.misss_fast_simple_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\misss_Fast_Skin.Preset</td>\n\
		<td><a name=\"Materialmental imagesmisss_Fast_Skin\"></a>misss Fast Skin mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_fast_skin_phen_1_0.html\">Softimage.misss_fast_skin_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\misss_Lambert_Gamma.Preset</td>\n\
		<td><a name=\"Materialmental imagesmisss_Lambert_Gamma\"></a>misss Lambert Gamma mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_lambert_gamma_1_0.html\">Softimage.misss_lambert_gamma.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\mental images\\misss_Skin_Specular.Preset</td>\n\
		<td><a name=\"Materialmental imagesmisss_Skin_Specular\"></a>misss Skin Specular mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_skin_specular_1_0.html\">Softimage.misss_skin_specular.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Dusty.Preset</td>\n\
		<td><a name=\"Materialsoft3dDusty\"></a>dusty mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DUSTY_MAT_1_0.html\">Softimage.DUSTY_MAT.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Easy_Atmosphere.Preset</td>\n\
		<td><a name=\"Materialsoft3dEasy_Atmosphere\"></a>ozlib_env_ez_atm mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_EZ_Atmosphere_mat_1_0.html\">Softimage.EZ_Atmosphere_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_atmosphere.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_atmosphere\"></a>ozlib_env_g_atm mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Atmosphere_mat_1_0.html\">Softimage.Env_Atmosphere_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_ball.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_ball\"></a>oz_env_g_ball mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_ENV_BALL_MAT_1_0.html\">Softimage.ENV_BALL_MAT.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_cubic.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_cubic\"></a>oz_env_g_cubic mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Cubic_mat_1_0.html\">Softimage.Env_Cubic_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_horizon_day.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_horizon_day\"></a>oz_env_g_horizon_day mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Day_mat_1_0.html\">Softimage.Env_Horizon_Day_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_horizon_map.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_horizon_map\"></a>oz_env_g_horizon_map mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Map_mat_1_0.html\">Softimage.Env_Horizon_Map_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_horizon_night.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_horizon_night\"></a>oz_env_g_horizon_night mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Night_mat_1_0.html\">Softimage.Env_Horizon_Night_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Env_sphere.Preset</td>\n\
		<td><a name=\"Materialsoft3dEnv_sphere\"></a>oz_env_g_sphere mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Sphere_mat_1_0.html\">Softimage.Env_Sphere_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Fire.Preset</td>\n\
		<td><a name=\"Materialsoft3dFire\"></a>Hot_Stuff mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Hot_Stuff_mat_1_0.html\">Softimage.Hot_Stuff_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Material\\soft3d\\Velvet.Preset</td>\n\
		<td><a name=\"Materialsoft3dVelvet\"></a>ari_velvet mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_velvet_mat_1_0.html\">Softimage.velvet_mat.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectTextureShader Example</h3>\n\
<div><p><a name=\"ConnectTextureShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectTextureShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
	CreateProjection( obj, siTxtUV, siTxtDefaultPlanarXY, \"\", \"Texture_Projection\" );\n\
	Application.Selection.SetAsText(obj);\n\
	var oShader = CreateShaderFromPreset(in_preset, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
	SIConnectShaderToCnxPoint(oShader.FullName+\".out\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.surface\", false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectTextureShader2 Example</h3>\n\
<div><p><a name=\"ConnectTextureShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectTextureShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
	CreateProjection( obj, siTxtUV, siTxtDefaultPlanarXY, \"\", \"Texture_Projection\" );\n\
	obj.AddMaterial( in_preset, true, \"MyTestNode\" ); \n\
	var oShader = Dictionary.GetObject(\"Sources.Materials.DefaultLib.Material.MyTestNode\");\n\
	return oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";