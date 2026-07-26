// Family Wealth AI Agent V2.3

// Multi Dimension Asset Data Model

// 获取资产

function getAssets(){

    const data = localStorage.getItem("familyAssets");

    return data ? JSON.parse(data) : [];

}

// 保存资产

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

    updateDashboard();

}

// 计算总资产

function calculateTotalAssets(){

    let assets = getAssets();

    return assets.reduce(

        (sum,item)=>sum + Number(item.amount),

        0

    );

}

// 删除资产

function deleteAsset(index){

    let assets = getAssets();

    assets.splice(index,1);

    saveAssets(assets);

    updateAssetDisplay();

    updateDashboard();

}

// 显示资产

function updateAssetDisplay(){

    const list =

    document.getElementById("assetList");

    if(!list){

        return;

    }

    let assets = getAssets();

    list.innerHTML="";

    assets.forEach((item,index)=>{

        let div=document.createElement("div");

        div.className="asset-item";

        div.innerHTML=

        `

        <p>

        <b>${item.name}</b><br>

        一级类别：

        ${item.category}<br>

        二级类别：

        ${item.type}<br>

        国家：

        ${item.country}<br>

        币种：

        ${item.currency}<br>

        机构：

        ${item.institution}<br>

        金额：

        ¥${Number(item.amount).toLocaleString()}

        </p>

        <button onclick="deleteAsset(${index})">

        删除

        </button>

        `;

        list.appendChild(div);

    });

}

window.addEventListener(

"load",

()=>{

    updateAssetDisplay();

}

);
