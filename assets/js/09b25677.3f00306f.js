"use strict";(self.webpackChunkqb_docs=self.webpackChunkqb_docs||[]).push([[108],{9117:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],i={sidebar_position:1},d="Events",c={unversionedId:"tutorial-basics/events",id:"tutorial-basics/events",isDocsHomePage:!1,title:"Events",description:"QBCoreOnPlayerLoaded",source:"@site/docs/tutorial-basics/events.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/events",permalink:"/qb-docs/docs/tutorial-basics/events",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Player Data",permalink:"/qb-docs/docs/player"},next:{title:"Functions",permalink:"/qb-docs/docs/tutorial-basics/functions"}},s=[{value:"QBCore:Client:OnPlayerLoaded",id:"qbcoreclientonplayerloaded",children:[]},{value:"QBCore:Client:OnPlayerLoaded",id:"qbcoreclientonplayerloaded-1",children:[]},{value:"QBCore:Command:TeleportToPlayer",id:"qbcorecommandteleporttoplayer",children:[]},{value:"QBCore:Command:TeleportToCoords",id:"qbcorecommandteleporttocoords",children:[]},{value:"QBCore:Command:GoToMarker",id:"qbcorecommandgotomarker",children:[]},{value:"QBCore:Command:SpawnVehicle",id:"qbcorecommandspawnvehicle",children:[]},{value:"QBCore:Command:DeleteVehicle",id:"qbcorecommanddeletevehicle",children:[]},{value:"QBCore:Player:SetPlayerData",id:"qbcoreplayersetplayerdata",children:[]},{value:"QBCore:Player:UpdatePlayerData",id:"qbcoreplayerupdateplayerdata",children:[]},{value:"QBCore:Notify",id:"qbcorenotify",children:[]},{value:"QBCore:Client:TriggerCallback",id:"qbcoreclienttriggercallback",children:[]},{value:"QBCore:Client:UseItem",id:"qbcoreclientuseitem",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("h3",{id:"qbcoreclientonplayerloaded"},"QBCore:Client:OnPlayerLoaded"),(0,r.kt)("p",null,"Handles the player loading in after character selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()\n    ShutdownLoadingScreenNui()\n    LocalPlayer.state:set('isLoggedIn', true, false)\n    SetCanAttackFriendly(PlayerPedId(), true, false)\n    NetworkSetFriendlyFireOption(true)\nend)\n")),(0,r.kt)("h3",{id:"qbcoreclientonplayerloaded-1"},"QBCore:Client:OnPlayerLoaded"),(0,r.kt)("p",null,"Handles the player loggin out to character selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Client:OnPlayerUnload', function()\n    LocalPlayer.state:set('isLoggedIn', false, false)\nend)\n")),(0,r.kt)("h3",{id:"qbcorecommandteleporttoplayer"},"QBCore:Command:TeleportToPlayer"),(0,r.kt)("p",null,"Event used for the /tp id command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Command:TeleportToPlayer', function(coords)\n    local ped = PlayerPedId()\n    SetPedCoordsKeepVehicle(ped, coords.x, coords.y, coords.z)\nend)\n")),(0,r.kt)("h3",{id:"qbcorecommandteleporttocoords"},"QBCore:Command:TeleportToCoords"),(0,r.kt)("p",null,"Event used for the /tp x y z command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Command:TeleportToCoords', function(x, y, z)\n    local ped = PlayerPedId()\n    SetPedCoordsKeepVehicle(ped, x, y, z)\nend)\n")),(0,r.kt)("h3",{id:"qbcorecommandgotomarker"},"QBCore:Command:GoToMarker"),(0,r.kt)("p",null,"Event used for the /tpm command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Command:GoToMarker', function()\n    local ped = PlayerPedId()\n    local blip = GetFirstBlipInfoId(8)\n    if DoesBlipExist(blip) then\n        local blipCoords = GetBlipCoords(blip)\n        for height = 1, 1000 do\n            SetPedCoordsKeepVehicle(ped, blipCoords.x, blipCoords.y, height + 0.0)\n            local foundGround, zPos = GetGroundZFor_3dCoord(blipCoords.x, blipCoords.y, height + 0.0)\n            if foundGround then\n                SetPedCoordsKeepVehicle(ped, blipCoords.x, blipCoords.y, height + 0.0)\n                break\n            end\n            Wait(0)\n        end\n    end\nend)\n")),(0,r.kt)("h3",{id:"qbcorecommandspawnvehicle"},"QBCore:Command:SpawnVehicle"),(0,r.kt)("p",null,"Event for client-side vehicle spawning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Command:SpawnVehicle', function(vehName)\n    local ped = PlayerPedId()\n    local hash = GetHashKey(vehName)\n    if not IsModelInCdimage(hash) then return end\n    RequestModel(hash)\n    while not HasModelLoaded(hash) do Wait(10) end\n    local vehicle = CreateVehicle(hash, GetEntityCoords(ped), GetEntityHeading(ped), true, false)\n    TaskWarpPedIntoVehicle(ped, vehicle, -1)\n    SetModelAsNoLongerNeeded(vehicle)\n    TriggerEvent(\"vehiclekeys:client:SetOwner\", GetVehicleNumberPlateText(vehicle))\nend)\n")),(0,r.kt)("h3",{id:"qbcorecommanddeletevehicle"},"QBCore:Command:DeleteVehicle"),(0,r.kt)("p",null,"Event for client-side vehicle deletion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Command:DeleteVehicle', function()\n    local ped = PlayerPedId()\n    local veh = GetVehiclePedIsUsing(ped)\n    if veh ~= 0 then\n        SetEntityAsMissionEntity(veh, true, true)\n        DeleteVehicle(veh)\n    else\n        local pcoords = GetEntityCoords(ped)\n        local vehicles = GetGamePool('CVehicle')\n        for k, v in pairs(vehicles) do\n            if #(pcoords - GetEntityCoords(v)) <= 5.0 then\n                SetEntityAsMissionEntity(v, true, true)\n                DeleteVehicle(v)\n            end\n        end\n    end\nend)\n")),(0,r.kt)("h3",{id:"qbcoreplayersetplayerdata"},"QBCore:Player:SetPlayerData"),(0,r.kt)("p",null,"Event for assigning player data on character creation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Player:SetPlayerData', function(val)\n    QBCore.PlayerData = val\nend)\n")),(0,r.kt)("h3",{id:"qbcoreplayerupdateplayerdata"},"QBCore:Player:UpdatePlayerData"),(0,r.kt)("p",null,"Event for updating the player on logout/disconnect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Player:UpdatePlayerData', function()\n    TriggerServerEvent('QBCore:UpdatePlayer')\nend)\n")),(0,r.kt)("h3",{id:"qbcorenotify"},"QBCore:Notify"),(0,r.kt)("p",null,"Event for handling the core notification system when called from server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Notify', function(text, type, length)\n    QBCore.Functions.Notify(text, type, length)\nend)\n")),(0,r.kt)("h3",{id:"qbcoreclienttriggercallback"},"QBCore:Client:TriggerCallback"),(0,r.kt)("p",null,"Event for triggering a callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Client:TriggerCallback', function(name, ...)\n    if QBCore.ServerCallbacks[name] then\n        QBCore.ServerCallbacks[name](...)\n        QBCore.ServerCallbacks[name] = nil\n    end\nend)\n")),(0,r.kt)("h3",{id:"qbcoreclientuseitem"},"QBCore:Client:UseItem"),(0,r.kt)("p",null,"Event for using an item when called from server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('QBCore:Client:UseItem', function(item)\n    TriggerServerEvent('QBCore:Server:UseItem', item)\nend)\n")))}u.isMDXComponent=!0}}]);