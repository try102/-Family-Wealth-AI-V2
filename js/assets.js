// Family Wealth AI Agent V3.0

// Asset Data Engine

let assets = JSON.parse(

    localStorage.getItem("wealthAssets")

) || [];

// 保存资产

function saveAssets(){

    localStorage.setItem(

        "wealthAssets",

        JSON.stringify(assets)

    );

}

// 添加资产

function addAsset(asset){

    assets.push(asset);

    saveAssets();

    updateAssetDisplay();

    updateDashboard();

}

// 删除资产

function deleteAsset(index){

    assets.splice(index,1);

    saveAssets();

    updateAssetDisplay();

    updateDashboard();

}

// 计算总资产

function calculateTotalAssets(){

    return assets.reduce(

        (sum,item)=>sum+Number(item.amount||0),

        0

    );

}

// 显示资产列表

function updateAssetDisplay(){

    let list=document.getElementById(

        "assetList"

    );

    if(!list) return;

    list.innerHTML="";

    assets.forEach(

        (item,index)=>{

        let div=document.createElement(

            "div"

        );

        div.className="asset-card";

        div.innerHTML=`

        <b>${item.name}</b>

        <br>

        分类：

        ${item.category}

        <br>

        类型：

        ${item.type}

        <br>

        国家：

        ${item.country}

        <br>

        币种：

        ${item.currency}

        <br>

        机构：

        ${item.institution}

        <br>

        金额：

        ¥${Number(item.amount).toLocaleString()}

        <br><br>

        <button onclick="

        deleteAsset(${index})

        ">

        删除

        </button>

        `;

        list.appendChild(div);

    });

}
