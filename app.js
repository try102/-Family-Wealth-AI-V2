// Family Wealth AI Agent V2.0

// Core Application

// 初始家庭财富数据

const wealthData = {

    assets: 0,

    liability: 0

};

// 更新财富数据显示

function updateDashboard(){

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

    const button =

    document.querySelector(".ai-btn");

    if(button){

        button.onclick =

        startAIAnalysis;

    }

};
