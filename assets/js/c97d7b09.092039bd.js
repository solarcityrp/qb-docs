"use strict";(self.webpackChunkqb_docs=self.webpackChunkqb_docs||[]).push([[466],{1460:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=r(7462),t=r(3366),s=(r(7294),r(3905)),o=["components"],a={sidebar_position:2},c="Functions",l={unversionedId:"tutorial-extras/functions",id:"tutorial-extras/functions",isDocsHomePage:!1,title:"Functions",description:"QBCore.Functions.GetCoords",source:"@site/docs/tutorial-extras/functions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/functions",permalink:"/qb-docs/docs/tutorial-extras/functions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-extras/functions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/qb-docs/docs/tutorial-extras/events"},next:{title:"Frequently Asked Questions",permalink:"/qb-docs/docs/faq"}},u=[{value:"QBCore.Functions.GetCoords",id:"qbcorefunctionsgetcoords",children:[]},{value:"QBCore.Functions.GetIdentifier",id:"qbcorefunctionsgetidentifier",children:[]},{value:"QBCore.Functions.GetSource",id:"qbcorefunctionsgetsource",children:[]},{value:"QBCore.Functions.GetPlayer",id:"qbcorefunctionsgetplayer",children:[]},{value:"QBCore.Functions.GetPlayerByCitizenId",id:"qbcorefunctionsgetplayerbycitizenid",children:[]},{value:"QBCore.Functions.GetPlayerByPhone",id:"qbcorefunctionsgetplayerbyphone",children:[]},{value:"QBCore.Functions.GetPlayers",id:"qbcorefunctionsgetplayers",children:[]},{value:"QBCore.Functions.GetQBPlayers",id:"qbcorefunctionsgetqbplayers",children:[]},{value:"QBCore.Functions.CreateCallback",id:"qbcorefunctionscreatecallback",children:[]},{value:"QBCore.Functions.TriggerCallback",id:"qbcorefunctionstriggercallback",children:[]},{value:"QBCore.Functions.CreateUseableItem",id:"qbcorefunctionscreateuseableitem",children:[]},{value:"QBCore.Functions.CanUseItem",id:"qbcorefunctionscanuseitem",children:[]},{value:"QBCore.Functions.UseItem",id:"qbcorefunctionsuseitem",children:[]},{value:"QBCore.Functions.Kick",id:"qbcorefunctionskick",children:[]},{value:"QBCore.Functions.AddPermission",id:"qbcorefunctionsaddpermission",children:[]},{value:"QBCore.Functions.RemovePermission",id:"qbcorefunctionsremovepermission",children:[]},{value:"QBCore.Functions.HasPermission",id:"qbcorefunctionshaspermission",children:[]},{value:"QBCore.Functions.GetPermission",id:"qbcorefunctionsgetpermission",children:[]},{value:"QBCore.Functions.IsPlayerBanned",id:"qbcorefunctionsisplayerbanned",children:[]},{value:"QBCore.Functions.IsLicenseInUse",id:"qbcorefunctionsislicenseinuse",children:[]}],d={toc:u};function p(e){var n=e.components,r=(0,t.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"qbcorefunctionsgetcoords"},"QBCore.Functions.GetCoords"),(0,s.kt)("p",null,"Get the coords of a passed entity"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetCoords(entity)\n    local coords = GetEntityCoords(entity, false)\n    local heading = GetEntityHeading(entity)\n    return vector4(coords.x, coords.y, coords.z, heading)\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetidentifier"},"QBCore.Functions.GetIdentifier"),(0,s.kt)("p",null,"Get a specific identifier of a player"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetIdentifier(source, idtype)\n    local src = source\n    local idtype = idtype or QBConfig.IdentifierType\n    for _, identifier in pairs(GetPlayerIdentifiers(src)) do\n        if string.find(identifier, idtype) then\n            return identifier\n        end\n    end\n    return nil\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetsource"},"QBCore.Functions.GetSource"),(0,s.kt)("p",null,"Get a players source by identifer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetSource(identifier)\n    for src, player in pairs(QBCore.Players) do\n        local idens = GetPlayerIdentifiers(src)\n        for _, id in pairs(idens) do\n            if identifier == id then\n                return src\n            end\n        end\n    end\n    return 0\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetplayer"},"QBCore.Functions.GetPlayer"),(0,s.kt)("p",null,"Get a player by their source and access their data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetPlayer(source)\n    local src = source\n    if type(src) == 'number' then\n        return QBCore.Players[src]\n    else\n        return QBCore.Players[QBCore.Functions.GetSource(src)]\n    end\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetplayerbycitizenid"},"QBCore.Functions.GetPlayerByCitizenId"),(0,s.kt)("p",null,"Get a player by their citizen id and access their data (must be online)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetPlayerByCitizenId(citizenid)\n    for src, player in pairs(QBCore.Players) do\n        local cid = citizenid\n        if QBCore.Players[src].PlayerData.citizenid == cid then\n            return QBCore.Players[src]\n        end\n    end\n    return nil\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetplayerbyphone"},"QBCore.Functions.GetPlayerByPhone"),(0,s.kt)("p",null,"Get a player by their phone number (must be online)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetPlayerByPhone(number)\n    for src, player in pairs(QBCore.Players) do\n        local cid = citizenid\n        if QBCore.Players[src].PlayerData.charinfo.phone == number then\n            return QBCore.Players[src]\n        end\n    end\n    return nil\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetplayers"},"QBCore.Functions.GetPlayers"),(0,s.kt)("p",null,"Get all player IDs in the server (deprecated method)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetPlayers()\n    local sources = {}\n    for k, v in pairs(QBCore.Players) do\n        table.insert(sources, k)\n    end\n    return sources\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetqbplayers"},"QBCore.Functions.GetQBPlayers"),(0,s.kt)("p",null,"Access the table of all active players on the server (preferred to above)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetQBPlayers()\n    return QBCore.Players\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionscreatecallback"},"QBCore.Functions.CreateCallback"),(0,s.kt)("p",null,"Creates a callback which can be triggered"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.CreateCallback(name, cb)\n    QBCore.ServerCallbacks[name] = cb\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionstriggercallback"},"QBCore.Functions.TriggerCallback"),(0,s.kt)("p",null,"Trigger a callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.TriggerCallback(name, source, cb, ...)\n    local src = source\n    if QBCore.ServerCallbacks[name] then\n        QBCore.ServerCallbacks[name](src, cb, ...)\n    end\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionscreateuseableitem"},"QBCore.Functions.CreateUseableItem"),(0,s.kt)("p",null,"Register an item as usable"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.CreateUseableItem(item, cb)\n    QBCore.UseableItems[item] = cb\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionscanuseitem"},"QBCore.Functions.CanUseItem"),(0,s.kt)("p",null,"Check if an item is registered as usable before attempting use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.CanUseItem(item)\n    return QBCore.UseableItems[item]\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsuseitem"},"QBCore.Functions.UseItem"),(0,s.kt)("p",null,"Trigger an item to be used on the player"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.UseItem(source, item)\n    local src = source\n    QBCore.UseableItems[item.name](src, item)\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionskick"},"QBCore.Functions.Kick"),(0,s.kt)("p",null,"Kick a player from the server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.Kick(source, reason, setKickReason, deferrals)\n    local src = source\n    reason = '\\n'..reason..'\\n\ud83d\udd38 Check our Discord for further information: '..QBCore.Config.Server.discord\n    if setKickReason then\n        setKickReason(reason)\n    end\n    CreateThread(function()\n        if deferrals then\n            deferrals.update(reason)\n            Wait(2500)\n        end\n        if src then\n            DropPlayer(src, reason)\n        end\n        local i = 0\n        while (i <= 4) do\n            i = i + 1\n            while true do\n                if src then\n                    if(GetPlayerPing(src) >= 0) then\n                        break\n                    end\n                    Wait(100)\n                    CreateThread(function() \n                        DropPlayer(src, reason)\n                    end)\n                end\n            end\n            Wait(5000)\n        end\n    end)\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsaddpermission"},"QBCore.Functions.AddPermission"),(0,s.kt)("p",null,"Give a player a specific permission level"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.AddPermission(source, permission)\n    local src = source\n    local Player = QBCore.Functions.GetPlayer(src)\n    local plicense = Player.PlayerData.license\n    if Player then\n        QBCore.Config.Server.PermissionList[plicense] = {\n            license = plicense,\n            permission = permission:lower(),\n        }\n        exports.oxmysql:execute('DELETE FROM permissions WHERE license = ?', {plicense})\n\n        exports.oxmysql:insert('INSERT INTO permissions (name, license, permission) VALUES (?, ?, ?)', {\n            GetPlayerName(src),\n            plicense,\n            permission:lower()\n        })\n\n        Player.Functions.UpdatePlayerData()\n        TriggerClientEvent('QBCore:Client:OnPermissionUpdate', src, permission)\n    end\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsremovepermission"},"QBCore.Functions.RemovePermission"),(0,s.kt)("p",null,"Remove all of the players permissions on the server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.RemovePermission(source)\n    local src = source\n    local Player = QBCore.Functions.GetPlayer(src)\n    local license = Player.PlayerData.license\n    if Player then\n        QBCore.Config.Server.PermissionList[license] = nil\n        exports.oxmysql:execute('DELETE FROM permissions WHERE license = ?', {license})\n        Player.Functions.UpdatePlayerData()\n    end\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionshaspermission"},"QBCore.Functions.HasPermission"),(0,s.kt)("p",null,"Check if a player has the permission level needed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.HasPermission(source, permission)\n    local src = source\n    local license = QBCore.Functions.GetIdentifier(src, 'license')\n    local permission = tostring(permission:lower())\n    if permission == 'user' then\n        return true\n    else\n        if QBCore.Config.Server.PermissionList[license] then\n            if QBCore.Config.Server.PermissionList[license].license == license then\n                if QBCore.Config.Server.PermissionList[license].permission == permission or QBCore.Config.Server.PermissionList[license].permission == 'god' then\n                    return true\n                end\n            end\n        end\n    end\n    return false\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsgetpermission"},"QBCore.Functions.GetPermission"),(0,s.kt)("p",null,"Get a players permission level"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.GetPermission(source)\n    local src = source\n    local license = QBCore.Functions.GetIdentifier(src, 'license')\n    if license then\n        if QBCore.Config.Server.PermissionList[license] then\n            if QBCore.Config.Server.PermissionList[license].license == license then\n                return QBCore.Config.Server.PermissionList[license].permission\n            end\n        end\n    end\n    return 'user'\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsisplayerbanned"},"QBCore.Functions.IsPlayerBanned"),(0,s.kt)("p",null,"Check if a player is banned (used for connection)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.IsPlayerBanned(source)\n    local src = source\n    local retval = false\n    local message = ''\n    local plicense = QBCore.Functions.GetIdentifier(src, 'license')\n    local result = exports.oxmysql:fetchSync('SELECT * FROM bans WHERE license = ?', {plicense})\n    if result[1] then\n        if os.time() < result[1].expire then\n            retval = true\n            local timeTable = os.date('*t', tonumber(result.expire))\n            message = 'You have been banned from the server:\\n'..result[1].reason..'\\nYour ban expires '..timeTable.day.. '/' .. timeTable.month .. '/' .. timeTable.year .. ' ' .. timeTable.hour.. ':' .. timeTable.min .. '\\n'\n        else\n            exports.oxmysql:execute('DELETE FROM bans WHERE id = ?', {result[1].id})\n        end\n    end\n    return retval, message\nend\n")),(0,s.kt)("h3",{id:"qbcorefunctionsislicenseinuse"},"QBCore.Functions.IsLicenseInUse"),(0,s.kt)("p",null,"Prevent duplicate licenses on the server (used for connection)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.IsLicenseInUse(license)\n    local players = GetPlayers()\n    for _, player in pairs(players) do\n        local identifiers = GetPlayerIdentifiers(player)\n        for _, id in pairs(identifiers) do\n            if string.find(id, 'license') then\n                local playerLicense = id\n                if playerLicense == license then\n                    return true\n                end\n            end\n        end\n    end\n    return false\nend\n")))}p.isMDXComponent=!0}}]);