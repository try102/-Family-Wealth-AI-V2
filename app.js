// Family Wealth AI Agent V2.0

// Core Application

// 初始家庭财富数据

const wealthData = {

    assets: 0,

    liability: 0

};

// 更新财富数据显示

function updateDashboard(){

    if(typeof calculateTotalAssets === "function"){

        wealthData.assets = calculateTotalAssets();

    }

    const networth =

    wealthData.assets - wealthData.liability;

    document.getElementById("assets")

    .innerHTML =

    "¥ " + wealthData.assets.toLocaleString();

    document.getElementById("liability")

    .innerHTML =

    "¥ " + wealthData.liability.toLocaleString();

    document.getElementById("networth")

    .innerHTML =

    "¥ " + networth.toLocaleString();

}

// AI分析按钮

function startAIAnalysis(){

    alert(

    "AI财富分析模块正在建设中。\n\n未来将支持：\n资产配置分析\n投资风险评估\n退休规划\n财富传承"

    );

}

// 页面启动

window.onload=function(){

    updateDashboard();

    updatePortfolioDisplay();

    const button =

    document.querySelector(".ai-btn");

    if(button){

        button.onclick =

        startAIAnalysis;

    }

};

// 显示投资组合分析

function updatePortfolioDisplay(){

    const result =

    document.getElementById("portfolioResult");

    const score =

    document.getElementById("riskScore");

    if(typeof calculateAllocation !== "function"){

        return;

    }

    const allocation =

    calculateAllocation();

    let html = "";

    Object.keys(allocation).forEach(type=>{

        html +=

        `

        <p>

        ${type}：

        ${allocation[type]}%

        </p>

        `;

    });

    if(result){

        result.innerHTML = html || "暂无投资数据";

    }

    if(score){

        score.innerHTML =

        calculateRiskScore()

        + " / 100";

    }

}
function addNewAsset(){

    const asset = {

        name:

        document.getElementById("assetName").value,

        category:

        document.getElementById("assetCategory").value,

        type:

        document.getElementById("assetType").value,

        country:

        document.getElementById("assetCountry").value,

        currency:

        document.getElementById("assetCurrency").value,

        institution:

        document.getElementById("assetInstitution").value,

        account:

        document.getElementById("assetAccount").value,

        amount:

        Number(

        document.getElementById("assetAmount").value

        )

    };

    if(!asset.name || !asset.amount){

        alert("请输入资产名称和金额");

        return;

    }

    addAsset(asset);

    document.getElementById("assetName").value="";

    document.getElementById("assetCategory").value="";

    document.getElementById("assetType").value="";

    document.getElementById("assetCountry").value="";

    document.getElementById("assetCurrency").value="";

    document.getElementById("assetInstitution").value="";

    document.getElementById("assetAccount").value="";

    document.getElementById("assetAmount").value="";

}
    addAsset(

        name,

        type,

        amount

    );

    document.getElementById("assetName").value="";

    document.getElementById("assetType").value="";

    document.getElementById("assetAmount").value="";

}
