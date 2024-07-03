"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21],{34579:e=>{e.exports=JSON.parse('{"functions":[{"name":"saveinstance","desc":"Saves instances with specified options. Example:\\n```lua\\nlocal Params = {\\n\\tRepoURL = \\"https://raw.githubusercontent.com/luau/SynSaveInstance/main/\\",\\n\\tSSI = \\"saveinstance\\",\\n}\\n\\nlocal synsaveinstance = loadstring(game:HttpGet(Params.RepoURL .. Params.SSI .. \\".luau\\", true), Params.SSI)()\\n\\nlocal CustomOptions = { SafeMode = true, timeout = 15, SaveBytecode = true }\\n\\nsynsaveinstance(CustomOptions)\\n```","params":[{"name":"Parameter_1","desc":"Can either be [SynSaveInstance.CustomOptions table] or a filled with instances ({Instance}), (then it will be treated as ExtraInstances with an invalid mode and IsModel will be true).","lua_type":"variant<table, table<Instance>>"},{"name":"Parameter_2","desc":"[OPTIONAL] If present, then Parameter_2 will be assumed to be [SynSaveInstance.CustomOptions table]. And then if the Parameter_1 is an Instance, then it will be assumed to be [SynSaveInstance.CustomOptions table].Object. If Parameter_1 is a table filled with instances ({Instance}), then it will be assumed to be [SynSaveInstance.CustomOptions table].ExtraInstances and IsModel will be true). This exists for sake compatibility with `saveinstance(game, {})`","lua_type":"table"}],"returns":[],"function_type":"static","yields":true,"source":{"line":975,"path":"saveinstance.luau"}}],"properties":[],"types":[{"name":"CustomOptions table","desc":"* Structure of the main CustomOptions table.\\n* Note: Aliases take priority over parent option name.","fields":[{"name":"__DEBUG_MODE","lua_type":"boolean","desc":"Recommended to enable if you wish to help us improve our products and find bugs / issues with it! ___Default:___ false"},{"name":"ReadMe","lua_type":"boolean","desc":"___Default:___ true"},{"name":"SafeMode","lua_type":"boolean","desc":"Kicks you before Saving, which prevents you from being detected in certain games. ___Default:___ false"},{"name":"ShowStatus","lua_type":"boolean","desc":"___Default:___ true"},{"name":"mode","lua_type":"string","desc":"Change this to invalid mode like \\"invalid\\" if you only want ExtraInstances. \\"optimized\\" mode is **NOT** supported with *@Object* option. ___Default:___ `\\"optimized\\"`"},{"name":"noscripts","lua_type":"boolean","desc":"___Aliases:___ `Decompile`. ___Default:___ false"},{"name":"scriptcache","lua_type":"boolean","desc":"___Default:___ true"},{"name":"decomptype","lua_type":"string","desc":"* \\"custom\\" - for built-in custom decompiler. ___Default:___ Your executor\'s decompiler, if available. Otherwise uses \\"custom\\" if not."},{"name":"timeout","lua_type":"number","desc":"If the decompilation run time exceeds this value it gets cancelled. Set to -1 to disable timeout (unreliable). ***Aliases***: `DecompileTimeout`. ___Default:___ 10"},{"name":"DecompileJobless","lua_type":"boolean","desc":"Includes already decompiled code in the output. No new scripts are decompiled. ___Default:___ false"},{"name":"SaveBytecode","lua_type":"boolean","desc":"Includes bytecode in the output. Useful if you wish to be able to decompile it yourself later. ___Default:___ false"},{"name":"DecompileIgnore","lua_type":"{Instance | Instance.ClassName | [Instance.ClassName] = {Instance.Name}}","desc":"* Ignores match & it\'s descendants by default. To Ignore only the instance itself set the value to `= false`. Examples: \\"Chat\\", - Matches any instance with \\"Chat\\" ClassName, Players = {\\"MyPlayerName\\"} - Matches \\"Players\\" Class AND \\"MyPlayerName\\" Name ONLY, `workspace` - matches Instance by reference, `[workspace] = false` - matches Instance by reference and only ignores the instance itself and not it\'s descendants. ___Default:___ {Chat, TextChatService}"},{"name":"IgnoreList","lua_type":"{Instance | Instance.ClassName | [Instance.ClassName] = {Instance.Name}}","desc":"Structure is similar to **@DecompileIgnore** except `= false` meaning if you ignore one instance it will automatically ignore it\'s descendants. ___Default:___ {CoreGui, CorePackages}"},{"name":"ExtraInstances","lua_type":"{Instance}","desc":"If used with any invalid mode (like \\"invalidmode\\") it will only save these instances. ___Default:___ {}"},{"name":"IgnoreProperties","lua_type":"table","desc":"Ignores properties by Name. ___Default:___ {}"},{"name":"SaveCacheInterval","lua_type":"number","desc":"The less the value the more often it saves, but that would mean less performance due to constantly saving. ___Default:___ 0x1600 * 10"},{"name":"FilePath","lua_type":"string","desc":"Must only contain the name of the file, no file extension. ___Default:___ false"},{"name":"Object","lua_type":"Instance","desc":"* If provided, saves as .rbxmx (Model file) instead. If Object is game, it will be saved as a .rbxl file. **MUST BE AN INSTANCE REFERENCE, FOR EXAMPLE - *game.Workspace***. `\\"optimized\\"` mode is **NOT** supported with this option. If IsModel is set to false then Object specified here will be saved as a place file. ___Default:___ false"},{"name":"IsModel","lua_type":"boolean","desc":"If Object is specified then sets to true automatically, unless you set it to false. ___Default:___ false"},{"name":"NilInstances","lua_type":"boolean","desc":"Save instances that aren\'t Parented (Parented to nil). ___Default:___ false"},{"name":"NilInstancesFixes","lua_type":"{[Instance.ClassName] = function}","desc":"* This can cause some Classes to be fixed even though they might not need the fix (better be safe than sorry though). For example, Bones inherit from Attachment if we dont define them in the NilInstancesFixes then this will catch them anyways. **TO AVOID THIS BEHAVIOR USE THIS EXAMPLE:** {ClassName_That_Doesnt_Need_Fix = false}. ___Default:___ {Animator = function, AdPortal = function, BaseWrap = function, Attachment = function}"},{"name":"NotScriptableFixes","lua_type":"{[Instance.ClassName] = {<string>PropertyToFix = <string>PropertyFix, _Inheritors = {[Instance.ClassName] = {<string>PropertyToFix_Name = <string>PropertyFix_Name}}}}","desc":"* Structure is similar to **@NilInstancesFixes**. This is useful for execs that lack gethiddenproperty. ___Default:___ *too much to list*"},{"name":"IgnoreDefaultProperties","lua_type":"boolean","desc":"Ignores default properties during saving.  ___Default:___ true"},{"name":"IgnoreNotArchivable","lua_type":"boolean","desc":"Ignores the Archivable property and saves Non-Archivable instances. ___Default:___ true"},{"name":"IgnorePropertiesOfNotScriptsOnScriptsMode","lua_type":"boolean","desc":"Ignores property of every instance that is not a script in \\"scripts\\" mode. ___Default:___ false"},{"name":"IgnoreSpecialProperties","lua_type":"boolean","desc":"Ignores hidden/secret properties that are only accessible through `gethiddenproperty`. If your file is corrupted after saving, you can try turning this on. ___Default:___ false"},{"name":"IsolateLocalPlayer","lua_type":"boolean","desc":"Saves Children of LocalPlayer as separate folder and prevents any instance of ClassName Player with .Name identical to LocalPlayer.Name from saving. ___Default:___ false"},{"name":"IsolateStarterPlayer","lua_type":"boolean","desc":"If enabled, StarterPlayer will be cleared and the saved starter player will be placed into folders. ___Default:___ false"},{"name":"IsolateLocalPlayerCharacter","lua_type":"boolean","desc":"Saves Children of LocalPlayer.Character as separate folder and prevents any instance of ClassName Player with .Name identical to LocalPlayer.Name from saving. ___Default:___ false"},{"name":"RemovePlayerCharacters","lua_type":"boolean","desc":"Ignore player characters while saving. (Enables SaveNonCreatable automatically). ___Default:___ true"},{"name":"SaveNonCreatable","lua_type":"boolean","desc":"* Includes non-serializable instances as Folder objects (Name is misleading as this is mostly a fix for certain NilInstances and isn\'t always related to NotCreatable). ___Default:___ false"},{"name":"NotCreatableFixes","lua_type":"table<Instance.ClassName>","desc":"* {\\"Player\\"} is the same as {Player = \\"Folder\\"}; Format like {SpawnLocation = \\"Part\\"} is only to be used when SpawnLocation inherits from \\"Part\\" AND \\"Part\\" is Creatable. ___Default:___ { \\"Player\\", \\"PlayerScripts\\", \\"PlayerGui\\" }"},{"name":"IsolatePlayers","lua_type":"boolean","desc":"* This option does save players, it\'s just they won\'t show up in Studio and can only be viewed through the place file code (in text editor). More info at https://github.com/luau/UniversalSynSaveInstance/issues/2. ___Default:___ false"},{"name":"IgnoreSharedStrings","lua_type":"boolean","desc":"* **RISKY: FIXES CRASHES (TEMPORARY, TESTED ON ROEXEC ONLY). FEEL FREE TO DISABLE THIS TO SEE IF IT WORKS FOR YOU**. ___Default:___ true"},{"name":"SharedStringOverwrite","lua_type":"boolean","desc":"* **RISKY:** if the process is not finished aka crashed then none of the affected values will be available. SharedStrings can also be used for ValueTypes that aren\'t `SharedString`, this behavior is not documented anywhere but makes sense (Could create issues though, due to _potential_ ValueType mix-up, only works on certain types which are all base64 encoded so far). Reason: Allows for potential smaller file size (can also be bigger in some cases). ___Default:___ false"}],"source":{"line":942,"path":"saveinstance.luau"}},{"name":"OptionsAliases","desc":"Aliases for the [SynSaveInstance.CustomOptions table].","fields":[{"name":"FilePath","lua_type":"string","desc":"FileName"},{"name":"IgnoreDefaultProperties","lua_type":"string","desc":"IgnoreDefaultProps"},{"name":"SaveNonCreatable","lua_type":"string","desc":"SaveNotCreatable"},{"name":"IsolatePlayers","lua_type":"string","desc":"SavePlayers"},{"name":"scriptcache","lua_type":"string","desc":"DecompileJobless"},{"name":"timeout","lua_type":"string","desc":"DecompileTimeout"},{"name":"IgnoreNotArchivable","lua_type":"string","desc":"INVERSE IgnoreArchivable"},{"name":"RemovePlayerCharacters","lua_type":"string","desc":"INVERSE SavePlayerCharacters"}],"source":{"line":954,"path":"saveinstance.luau"}}],"name":"SynSaveInstance","desc":"Represents the options for saving instances with custom settings using the synsaveinstance function.","source":{"line":902,"path":"saveinstance.luau"}}')}}]);