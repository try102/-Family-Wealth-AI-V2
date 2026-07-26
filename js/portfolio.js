// Family Wealth AI Agent V2.2

// Portfolio Analysis Module

// 获取资产数据

function getPortfolioData(){

    const data =

    localStorage.getItem("familyAssets");

    if(data){

        return JSON.parse(data);

    }

    return [];

}

// 按类别统计资产

function calculatePortfolio(){

    const assets = getPortfolioData();

    let portfolio = {};

    assets.forEach(item => {

        if(!portfolio[item.type]){

            portfolio[item.type] = 0;

        }

        portfolio[item.type] += item.amount;

    });

    return portfolio;

}

// 计算资产比例

function calculateAllocation(){

    const portfolio =

    calculatePortfolio();

    let total = 0;

    Object.values(portfolio)

    .forEach(value=>{

        total += value;

    });

    let result = {};

    Object.keys(portfolio)

    .forEach(type=>{

        result[type] =

        Math.round(

            portfolio[type] / total * 100

        );

    });

    return result;

}

// 投资风险评分

function calculateRiskScore(){

    const allocation =

    calculateAllocation();

    let score = 100;

    if(allocation["股票"] > 60){

        score -= 15;

    }

    if(allocation["ETF"] > 70){

        score -= 10;

    }

    return score;

}
