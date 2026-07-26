// Family Wealth AI Agent V2.1

// Asset Management Module

// 获取本地资产数据

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

function addAsset(name, type, amount){

    let assets = getAssets();

    assets.push({

        name:name,

        type:type,

        amount:Number(amount),

        date:new Date().toLocaleDateString()

    });

    saveAssets(assets);

    updateAssetDisplay();

    updateDashboard();

}

// 计算总资产

function calculateTotalAssets(){

    let assets = getAssets();

    return assets.reduce(

        (total,item)=>

        total + item.amount,

        0

    );

}

// 显示资产列表

function updateAssetDisplay(){

    const list =

    document.getElementById("assetList");

    if(!list){

        return;

    }

    let assets=getAssets();

    list.innerHTML="";

    assets.forEach((item,index)=>{

        let div=document.createElement("div");

        div.className="asset-item";

        div.innerHTML=

        `

        <strong>${item.name}</strong>

        <br>

        类型：${item.type}

        <br>

        金额：¥ ${item.amount.toLocaleString()}

        `;

        list.appendChild(div);

    });

}

// 初始化

window.addEventListener(

"load",

()=>{

    updateAssetDisplay();

}

);
