// Family Wealth AI Agent V2.3

// Asset Management Module

// 获取资产数据

function getAssets(){

    const data = localStorage.getItem("familyAssets");

    if(data){

        return JSON.parse(data);

    }

    return [];

}

// 保存资产数据

function saveAssets(assets){

    localStorage.setItem(

        "familyAssets",

        JSON.stringify(assets)

    );

}

// 添加资产

function addAsset(asset){

    let assets = getAssets();

    assets.push(asset);

    saveAssets(assets);

    updateAssetDisplay();

    if(typeof updateDashboard === "function"){

        updateDashboard();

    }

}

// 计算总资产

function calculateTotalAssets(){

    let assets = getAssets();

    let total = 0;

    assets.forEach(item=>{

        total += Number(item.amount || 0);

    });

    return total;

}

// 删除资产

function deleteAsset(index){

    let assets = getAssets();

    assets.splice(index,1);

    saveAssets(assets);

    updateAssetDisplay();

    if(typeof updateDashboard === "function"){

        updateDashboard();

    }

}

// 显示资产列表

function updateAssetDisplay(){

    const list =

    document.getElementById("assetList");

    if(!list){

        return;

    }

    let assets = getAssets();

    list.innerHTML = "";

    assets.forEach((item,index)=>{

        let div =

        document.createElement("div");

        div.className="asset-item";

        div.innerHTML = `

        <hr>

        <b>${item.name || ""}</b>

        <br>

        一级类别：

        ${item.category || "未分类"}

        <br>

        二级类别：

        ${item.type || "未分类"}

        <br>

        国家：

        ${item.country || "未填写"}

        <br>

        币种：

        ${item.currency || "未填写"}

        <br>

        机构：

        ${item.institution || "未填写"}

        <br>

        账户：

        ${item.account || "未填写"}

        <br>

        金额：

        ¥${Number(item.amount || 0).toLocaleString()}

        <br><br>

        <button onclick="deleteAsset(${index})">

        删除

        </button>

        `;

        list.appendChild(div);

    });

}

// 页面加载时显示已有资产

window.addEventListener(

"load",

function(){

    updateAssetDisplay();

}

);
