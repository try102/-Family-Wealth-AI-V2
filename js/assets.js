// Family Wealth AI Agent V2.1.1

// Asset Management

function getAssets(){

    const data = localStorage.getItem("familyAssets");

    return data ? JSON.parse(data) : [];

}

function saveAssets(assets){

    localStorage.setItem(

        "familyAssets",

        JSON.stringify(assets)

    );

}

function addAsset(name,type,amount){

    let assets=getAssets();

    assets.push({

        name:name,

        type:type || "其他资产",

        amount:Number(amount)

    });

    saveAssets(assets);

    updateAssetDisplay();

    updateDashboard();

}

function calculateTotalAssets(){

    let assets=getAssets();

    return assets.reduce(

        (sum,item)=>sum+item.amount,

        0

    );

}

function deleteAsset(index){

    let assets=getAssets();

    assets.splice(index,1);

    saveAssets(assets);

    updateAssetDisplay();

    updateDashboard();

}

function updateAssetDisplay(){

    const list=document.getElementById("assetList");

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

        <p>

        <b>${item.name}</b><br>

        类型：${item.type}<br>

        金额：¥ ${item.amount.toLocaleString()}

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
